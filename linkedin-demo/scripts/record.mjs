#!/usr/bin/env node
/**
 * Playwright recorder → linkedin-demo/public/*.webm
 * Defaults: BLUR_FACE=true, GENERIC_NAMES=true, viewport 390×844
 *
 *   BASE_URL=http://127.0.0.1:8765/demos/prime-choice/ npm run record
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '../public');
const BASE =
  process.env.BASE_URL ||
  'http://127.0.0.1:8765/demos/prime-choice/index.html';
const BLUR_FACE = process.env.BLUR_FACE !== 'false';
const GENERIC_NAMES = process.env.GENERIC_NAMES !== 'false';
const FIRST = GENERIC_NAMES ? 'Alex' : process.env.LEARNER_FIRST || 'Alex';
const LAST = GENERIC_NAMES ? 'Warehouse' : process.env.LEARNER_LAST || 'Warehouse';

fs.mkdirSync(OUT, { recursive: true });

const PRIVACY_INIT = `
(() => {
  const BLUR = ${BLUR_FACE ? 'true' : 'false'};
  const GENERIC = ${GENERIC_NAMES ? 'true' : 'false'};
  const map = [
    [/Uni Uni/gi, 'Carrier D'],
    [/USPS/gi, 'Carrier A'],
    [/Swift/gi, 'Carrier B'],
    [/Speedex/gi, 'Carrier C'],
    [/Gofo/gi, 'Carrier E'],
  ];
  let applying = false;
  function rewrite(node) {
    if (!GENERIC) return;
    if (node.nodeType === Node.TEXT_NODE) {
      const prev = node.nodeValue;
      if (!prev) return;
      let t = prev;
      for (const [re, to] of map) t = t.replace(re, to);
      if (t !== prev) node.nodeValue = t;
      return;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (['SCRIPT', 'STYLE'].includes(node.tagName)) return;
      for (const child of [...node.childNodes]) rewrite(child);
    }
  }
  function blurFaces() {
    if (!BLUR) return;
    if (document.getElementById('pc-privacy-blur')) return;
    const style = document.createElement('style');
    style.id = 'pc-privacy-blur';
    style.textContent = \`
      .ag-avatar img, .avatar-guide img, img[src*="guide"], img[src*="avatar"] {
        filter: blur(14px) !important;
      }
    \`;
    document.documentElement.appendChild(style);
  }
  function apply() {
    if (applying) return;
    applying = true;
    try {
      blurFaces();
      if (document.body) rewrite(document.body);
    } finally {
      applying = false;
    }
  }
  const obs = new MutationObserver(() => {
    if (applying) return;
    apply();
  });
  const start = () => {
    apply();
    obs.observe(document.body, { childList: true, subtree: true, characterData: true });
  };
  if (document.body) start();
  else document.addEventListener('DOMContentLoaded', start);
})();
`;

async function withVideoPage(browser, name, fn, holdMs = 2800) {
  const videoDir = path.join(OUT, '_tmp', name);
  fs.rmSync(videoDir, { recursive: true, force: true });
  fs.mkdirSync(videoDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    recordVideo: { dir: videoDir, size: { width: 390, height: 844 } },
    locale: 'en-US',
  });
  await context.addInitScript(PRIVACY_INIT);
  await context.addInitScript(() => {
    try {
      localStorage.setItem('pc_outbound_lang', 'en');
    } catch (e) {
      /* ignore */
    }
  });
  await context.route('**/*', async (route) => {
    const url = route.request().url();
    if (/fonts\.googleapis\.com|fonts\.gstatic\.com/i.test(url)) {
      return route.abort();
    }
    return route.continue();
  });
  const page = await context.newPage();
  try {
    await fn(page);
    await page.waitForTimeout(holdMs);
  } finally {
    await page.close();
    await context.close();
  }

  const files = fs.readdirSync(videoDir).filter((f) => f.endsWith('.webm'));
  if (!files.length) throw new Error(`No video for ${name}`);
  const dest = path.join(OUT, `${name}.webm`);
  fs.renameSync(path.join(videoDir, files[0]), dest);
  fs.rmSync(path.join(OUT, '_tmp', name), { recursive: true, force: true });
  const st = fs.statSync(dest);
  console.log(`✓ ${name}.webm (${Math.round(st.size / 1024)} KB)`);
}

async function setEnglish(page) {
  await page.evaluate(() => {
    localStorage.setItem('pc_outbound_lang', 'en');
    if (window.PCApp && typeof window.PCApp.setLang === 'function') {
      window.PCApp.setLang('en');
    }
  });
  const en = page.locator('#screen-welcome.active button.lang-btn[data-lang="en"]');
  if (await en.count()) {
    await en.click({ force: true }).catch(() => {});
    await page.waitForTimeout(250);
  }
}

async function gotoApp(page) {
  await page.addInitScript(() => {
    localStorage.setItem('pc_outbound_lang', 'en');
  });
  await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('#screen-welcome', { timeout: 30000 });
  await setEnglish(page);
}

async function startAsLearner(page) {
  await gotoApp(page);
  await page.fill('#first-name', FIRST);
  await page.fill('#last-name', LAST);
  await page.click('#btn-start');
  await page.waitForSelector('#screen-missions.active', { timeout: 15000 });
}

async function openMission(page, index = 0) {
  // Prefer next incomplete unlocked mission (skip completed retries)
  const next = page.locator('.mission-card:not(.locked):not(.completed)');
  const cards = (await next.count())
    ? next
    : page.locator('.mission-card:not(.locked)');
  await cards.nth(index).click();
  await page.waitForSelector('#screen-lesson.active', { timeout: 15000 });
}

async function clickPrimaryNav(page) {
  const primary = page.locator('#lesson-nav .btn-primary');
  await primary.waitFor({ state: 'visible', timeout: 10000 });
  if (await primary.isDisabled()) return false;
  await primary.click();
  await page.waitForTimeout(450);
  return true;
}

/** Complete scene: tap the WRONG scene card (correct answer = the bad scene). */
async function solveScene(page) {
  await page.waitForSelector('.scene-card', { timeout: 10000 });
  const bad = page.locator('.scene-card', {
    hasText: /Climb|Toss|FRAGILE|FRÁGIL|trep|sube|Tirar|扔|爬/i,
  });
  if (await bad.count()) {
    await bad.first().click();
    await page.waitForTimeout(400);
    return;
  }
  // Fallback: second card is often the bad scene in source data
  const cards = page.locator('.scene-card');
  const n = await cards.count();
  await cards.nth(Math.max(0, n - 1)).click();
  await page.waitForTimeout(400);
  const cls = (await page.locator('#quiz-fb').getAttribute('class')) || '';
  if (cls.includes('error')) {
    throw new Error('Scene answered incorrectly');
  }
}

async function answerTriviaByText(page, pattern) {
  await page.waitForSelector('.quiz-option', { timeout: 10000 });
  const opt = page.locator('.quiz-option', { hasText: pattern });
  if (await opt.count()) {
    await opt.first().click();
  } else {
    // Fallback: try until matching feedback
    const all = page.locator('.quiz-option');
    const n = await all.count();
    for (let i = 0; i < n; i++) {
      await all.nth(i).click();
      await page.waitForTimeout(500);
      break; // only one attempt allowed
    }
  }
  await page.waitForTimeout(600);
}

async function solveColor(page) {
  await page.waitForSelector('.color-tap', { timeout: 10000 });
  const prompt = ((await page.locator('.quiz-question').textContent()) || '').toLowerCase();
  // Map prompt hints → color label text (EN + generic Carrier labels after privacy rewrite)
  let prefer = /swift|carrier b|rojo|red|红/.test(prompt)
    ? /Red|rojo|红|Carrier B/i
    : /usps|carrier a|verde|green|绿/.test(prompt)
      ? /Green|verde|绿|Carrier A/i
      : null;
  if (prefer) {
    const match = page.locator('.color-tap', { hasText: prefer });
    if (await match.count()) {
      await match.first().click();
      await page.waitForTimeout(400);
      return;
    }
  }
  const taps = page.locator('.color-tap');
  const n = await taps.count();
  for (let i = 0; i < n; i++) {
    await taps.nth(i).click();
    await page.waitForTimeout(400);
    const cls = (await page.locator('#quiz-fb').getAttribute('class')) || '';
    if (cls.includes('success') || cls.includes('error')) break;
    // wrong locks — reopen handled by caller if needed
    if (cls.includes('error')) break;
  }
}

async function solveOrder(page) {
  await page.waitForSelector('#order-pool button', { timeout: 10000 });
  // Read correct order from fail/ok is unknown — try permutations is heavy.
  // Use data from EN missions: click in known order texts when present.
  const pool = page.locator('#order-pool button');
  const texts = await pool.allTextContents();
  // Prefer known training order sequences
  const preferred = [
    ['Belt / colors', 'Containerization', 'More responsibility'],
    ['Identify the label', 'Scan', 'Put in'],
    ['Cinta', 'Contenedor', 'Más'],
  ];
  let order = null;
  for (const p of preferred) {
    if (p.every((t) => texts.some((x) => x.includes(t)))) {
      order = p;
      break;
    }
  }
  if (order) {
    for (const t of order) {
      await page.locator('#order-pool button', { hasText: t }).first().click();
      await page.waitForTimeout(250);
    }
  } else {
    // Click in current DOM order (may fail — then reset)
    const n = await pool.count();
    for (let i = 0; i < n; i++) {
      await page.locator('#order-pool button').nth(0).click();
      await page.waitForTimeout(250);
    }
  }
  await page.waitForTimeout(400);
  const cls = (await page.locator('#quiz-fb').getAttribute('class')) || '';
  if (cls.includes('error')) {
    const reset = page.locator('#order-reset');
    if (await reset.count() && !(await reset.isDisabled())) {
      await reset.click();
    }
  }
}

async function solveCurrentStep(page) {
  if (await page.locator('.scene-card').count()) {
    await solveScene(page);
    return;
  }
  if (await page.locator('.quiz-option').count()) {
    // Prefer known correct EN answers across missions
    const correctPatterns = [
      /Eye contact and wait/i,
      /Belt → containerization → more/i,
      /Sort by color into carts/i,
      /Put in without scanning/i,
      /Helping others change full carts/i,
      /contacto visual/i,
      /Cinta → contenerización/i,
    ];
    let clicked = false;
    for (const re of correctPatterns) {
      const opt = page.locator('.quiz-option', { hasText: re });
      if (await opt.count()) {
        await opt.first().click();
        clicked = true;
        break;
      }
    }
    if (!clicked) {
      // Try each option across restarts is hard; click middle option often correct index 1 pre-shuffle
      await page.locator('.quiz-option').nth(1).click();
    }
    await page.waitForTimeout(500);
    return;
  }
  if (await page.locator('#order-pool').count()) {
    await solveOrder(page);
    return;
  }
  if (await page.locator('.color-tap').count()) {
    await solveColor(page);
  }
}

async function completeOpenMission(page) {
  for (let guard = 0; guard < 16; guard++) {
    if (await page.locator('#badge-modal.show').count()) return;
    if (!(await page.locator('#screen-lesson.active').count())) return;

    await solveCurrentStep(page);
    await page.waitForTimeout(300);

    const primary = page.locator('#lesson-nav .btn-primary');
    if (!(await primary.count())) {
      await page.waitForTimeout(400);
      continue;
    }
    if (await primary.isDisabled()) {
      // Need to answer — already tried
      await page.waitForTimeout(300);
      continue;
    }
    const text = (await primary.textContent()) || '';
    await primary.click();
    await page.waitForTimeout(500);
    if (/close|cerrar|完成本关/i.test(text) || (await page.locator('#badge-modal.show').count())) {
      await page.waitForSelector('#badge-modal.show', { timeout: 8000 }).catch(() => {});
      return;
    }
  }
}

async function dismissBadge(page) {
  if (await page.locator('#badge-modal.show').count()) {
    await page.click('#bm-continue');
    await page.waitForTimeout(500);
  }
}

async function completeAllMissions(page) {
  for (let m = 0; m < 5; m++) {
    await page.waitForSelector('#screen-missions.active', { timeout: 15000 });
    await openMission(page, 0); // next unlocked is always first unlocked card
    await completeOpenMission(page);
    await dismissBadge(page);
  }
}

async function main() {
  console.log({ BASE, BLUR_FACE, GENERIC_NAMES, FIRST, LAST, OUT });
  const browser = await chromium.launch({ headless: true });

  await withVideoPage(browser, 'welcome', async (page) => {
    await gotoApp(page);
    await page.waitForTimeout(600);
    await page.fill('#first-name', FIRST);
    await page.waitForTimeout(350);
    await page.fill('#last-name', LAST);
    await page.waitForTimeout(500);
  }, 3000);

  await withVideoPage(browser, 'mission-map', async (page) => {
    await startAsLearner(page);
    await page.waitForTimeout(1000);
  }, 3000);

  await withVideoPage(browser, 'lesson-safety', async (page) => {
    await startAsLearner(page);
    await openMission(page, 0);
    await page.waitForTimeout(1200);
  }, 3200);

  await withVideoPage(browser, 'quiz-wrong', async (page) => {
    await startAsLearner(page);
    await openMission(page, 0);
    await clickPrimaryNav(page); // info → scene
    await solveScene(page);
    await clickPrimaryNav(page); // scene → quiz
    await page.waitForSelector('.quiz-option', { timeout: 10000 });
    // Deliberately wrong EN options for Mission 1 trivia
    const wrong = page.locator('.quiz-option', {
      hasText: /Run without looking|Walk under the load|looks clear/i,
    });
    if (await wrong.count()) await wrong.first().click();
    else await page.locator('.quiz-option').first().click();
    await page.waitForTimeout(900);
  }, 3500);

  await withVideoPage(browser, 'quiz-right', async (page) => {
    await startAsLearner(page);
    await openMission(page, 0);
    await clickPrimaryNav(page);
    await solveScene(page);
    await clickPrimaryNav(page);
    await page.waitForSelector('.quiz-option', { timeout: 10000 });
    const right = page.locator('.quiz-option', { hasText: /Eye contact and wait/i });
    if (await right.count()) await right.first().click();
    else await page.locator('.quiz-option').nth(1).click();
    await page.waitForTimeout(900);
  }, 3500);

  await withVideoPage(browser, 'badge', async (page) => {
    await startAsLearner(page);
    await openMission(page, 0);
    await completeOpenMission(page);
    await page.waitForSelector('#badge-modal.show', { timeout: 15000 });
    await page.waitForTimeout(1000);
  }, 3200);

  await withVideoPage(browser, 'final', async (page) => {
    await startAsLearner(page);
    await completeAllMissions(page);
    await page.waitForSelector('#screen-results.active', { timeout: 30000 });
    await page.waitForTimeout(1200);
  }, 4000);

  await browser.close();

  fs.writeFileSync(
    path.join(OUT, 'recording-meta.json'),
    JSON.stringify(
      {
        recordedAt: new Date().toISOString(),
        BASE,
        BLUR_FACE,
        GENERIC_NAMES,
        learner: { FIRST, LAST },
        clips: [
          'welcome.webm',
          'mission-map.webm',
          'lesson-safety.webm',
          'quiz-wrong.webm',
          'quiz-right.webm',
          'badge.webm',
          'final.webm',
        ],
        piloto: '[TODO: piloto.mov or photo]',
      },
      null,
      2
    )
  );
  console.log('Done →', OUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
