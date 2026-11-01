/* Prime Choice outbound learner app */
(function () {
  const LANG_KEY = 'pc_outbound_lang';
  const PROGRESS_KEY = 'pc_outbound_progress';
  const AVATAR_SRC = 'assets/avatar/guide.jpg';

  const STATE = {
    lang: localStorage.getItem(LANG_KEY) || 'es',
    firstName: '',
    lastName: '',
    xp: 0,
    completedMissions: [],
    moduleScores: {},
    correctAnswers: 0,
    totalQuestions: 0,
    startedAt: null,
    startedMs: null
  };

  let currentMission = null;
  let currentStep = 0;
  let stepAnswered = false;
  let pendingBadgeCallback = null;
  let currentModuleQuizXp = 0;
  let currentModuleCorrect = 0;
  let currentModuleQuestions = 0;
  let quizRuntime = null;
  let orderRuntime = null;

  function ui(key, vars) {
    return PCI18n.t(STATE.lang, key, vars);
  }

  function missions() {
    return PCI18n.missions(STATE.lang);
  }

  function levels() {
    return [
      { min: 0, label: ui('level0') },
      { min: 120, label: ui('level1') },
      { min: 280, label: ui('level2') },
      { min: 450, label: ui('level3') }
    ];
  }

  function fullName() {
    return (STATE.firstName + ' ' + STATE.lastName).trim();
  }

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  /** Single source of truth for displayed XP (HUD + badge popup). */
  function computeXp() {
    let xp = 0;
    const curId = currentMission != null ? missions()[currentMission].id : null;
    const mXp = curId != null ? Number(missions()[currentMission].xp) || 0 : 0;

    Object.keys(STATE.moduleScores).forEach((id) => {
      if (id === curId) return;
      xp += Number(STATE.moduleScores[id].total) || 0;
    });

    if (curId != null) {
      const prevTotal = Number(STATE.moduleScores[curId] && STATE.moduleScores[curId].total) || 0;
      if (prevTotal > 0) {
        // Retry: keep best until this attempt would beat it (mission XP + live quiz)
        xp += Math.max(prevTotal, mXp + currentModuleQuizXp);
      } else {
        // First play: show quiz XP so far; mission bonus lands on complete
        xp += currentModuleQuizXp;
      }
    }
    return xp;
  }

  function syncXp() {
    STATE.xp = computeXp();
    updateHUD();
  }

  function recalcXpFromBest() {
    // Settled total = sum of best module scores only (no live attempt overlay)
    let xp = 0;
    Object.keys(STATE.moduleScores).forEach((id) => {
      xp += Number(STATE.moduleScores[id].total) || 0;
    });
    STATE.xp = xp;
  }

  function saveProgress() {
    if (!STATE.firstName || !STATE.lastName) return;
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify({
        firstName: STATE.firstName,
        lastName: STATE.lastName,
        lang: STATE.lang,
        xp: STATE.xp,
        completedMissions: STATE.completedMissions.slice(),
        moduleScores: { ...STATE.moduleScores },
        correctAnswers: STATE.correctAnswers,
        totalQuestions: STATE.totalQuestions,
        startedAt: STATE.startedAt,
        startedMs: STATE.startedMs,
        updatedAt: new Date().toISOString()
      }));
    } catch (e) {
      console.warn('Could not save progress', e);
    }
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!data || !data.firstName || !data.lastName) return null;
      return data;
    } catch {
      return null;
    }
  }

  function applyProgress(data) {
    STATE.firstName = data.firstName;
    STATE.lastName = data.lastName;
    STATE.completedMissions = Array.isArray(data.completedMissions) ? data.completedMissions.slice() : [];
    STATE.moduleScores = data.moduleScores && typeof data.moduleScores === 'object' ? { ...data.moduleScores } : {};
    STATE.correctAnswers = Number(data.correctAnswers) || 0;
    STATE.totalQuestions = Number(data.totalQuestions) || 0;
    STATE.startedAt = data.startedAt || new Date().toISOString();
    STATE.startedMs = data.startedMs || Date.now();
    if (data.lang && PCI18n.UI[data.lang]) STATE.lang = data.lang;
    recalcXpFromBest();
  }

  function clearProgress() {
    try { localStorage.removeItem(PROGRESS_KEY); } catch (e) { /* ignore */ }
  }

  function showScreen(id) {
    document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showXpPopup(txt) {
    const el = document.createElement('div');
    el.className = 'xp-popup';
    el.textContent = txt;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 950);
  }

  function renderLangSwitcher() {
    document.querySelectorAll('[data-lang-switch]').forEach((wrap) => {
      wrap.innerHTML = '';
      const label = document.createElement('span');
      label.className = 'lang-label';
      label.textContent = ui('langLabel');
      wrap.appendChild(label);
      const group = document.createElement('div');
      group.className = 'lang-group';
      group.setAttribute('role', 'group');
      group.setAttribute('aria-label', ui('langLabel'));
      PCI18n.LANGS.forEach((L) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'lang-btn' + (STATE.lang === L.code ? ' active' : '');
        btn.textContent = L.label;
        btn.dataset.lang = L.code;
        btn.setAttribute('aria-pressed', STATE.lang === L.code ? 'true' : 'false');
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          setLang(L.code);
        });
        group.appendChild(btn);
      });
      wrap.appendChild(group);
    });
  }

  function setLang(code) {
    if (!PCI18n.UI[code]) return;
    const wasInLesson = document.getElementById('screen-lesson').classList.contains('active');
    const wasMissions = document.getElementById('screen-missions').classList.contains('active');
    const wasResults = document.getElementById('screen-results').classList.contains('active');
    const wasWelcome = document.getElementById('screen-welcome').classList.contains('active');
    STATE.lang = code;
    localStorage.setItem(LANG_KEY, code);
    document.documentElement.lang = code === 'zh' ? 'zh-CN' : code;
    applyStaticUI();
    if (wasMissions && STATE.firstName) {
      document.getElementById('hello-line').textContent = ui('hello', { name: fullName() });
      document.getElementById('guide-missions-text').textContent = ui('guideMissionsNamed', { name: STATE.firstName });
      renderMissions();
      updateHUD();
      showScreen('screen-missions');
    } else if (wasInLesson && currentMission != null) {
      renderStep();
      updateHUD();
      showScreen('screen-lesson');
    } else if (wasResults) {
      applyResultsLabels();
      showScreen('screen-results');
    } else if (wasWelcome) {
      showScreen('screen-welcome');
    }
  }

  function applyStaticUI() {
    document.title = ui('docTitle');
    document.getElementById('hud-brand').textContent = ui('hudBrand');
    document.getElementById('badge-demo').textContent = ui('badgeDemo');
    document.getElementById('welcome-hi').textContent = ui('welcomeHi');
    document.getElementById('welcome-brand').textContent = ui('welcomeBrand');
    document.getElementById('welcome-subbrand').textContent = ui('welcomeSubBrand');
    document.getElementById('welcome-sub').textContent = ui('welcomeSub');
    document.getElementById('first-name').placeholder = ui('firstNamePh');
    document.getElementById('last-name').placeholder = ui('lastNamePh');
    document.getElementById('btn-start').textContent = ui('startBtn');
    document.getElementById('chip-safety').textContent = ui('pathSafety');
    document.getElementById('chip-process').textContent = ui('pathProcess');
    document.getElementById('chip-belt').textContent = ui('pathBelt');
    document.getElementById('chip-container').textContent = ui('pathContainer');
    document.getElementById('chip-more').textContent = ui('pathMore');
    document.querySelectorAll('.ag-name').forEach((el) => { el.textContent = ui('guideDefault'); });
    document.getElementById('missions-title').textContent = ui('missionsTitle');
    document.getElementById('missions-sub').textContent = ui('missionsSub');
    document.getElementById('results-guide-text').textContent = ui('resultsGuide');
    document.getElementById('results-title').textContent = ui('resultsTitle');
    document.getElementById('label-xp-total').textContent = ui('xpTotal');
    document.getElementById('label-trivia').textContent = ui('triviaCorrect');
    document.getElementById('label-modules').textContent = ui('modulesLabel');
    document.getElementById('scoreboard-title').textContent = ui('scoreboardTitle');
    document.getElementById('cert-title').textContent = ui('certTitle');
    document.getElementById('btn-restart').textContent = ui('anotherTry');
    document.getElementById('bm-continue').textContent = ui('continueBtn');
    document.getElementById('bm-xp-label').textContent = ui('xpAccum');
    renderLangSwitcher();
  }

  function applyResultsLabels() {
    document.getElementById('label-xp-total').textContent = ui('xpTotal');
    document.getElementById('label-trivia').textContent = ui('triviaCorrect');
    document.getElementById('label-modules').textContent = ui('modulesLabel');
    document.getElementById('scoreboard-title').textContent = ui('scoreboardTitle');
    document.getElementById('cert-title').textContent = ui('certTitle');
    document.getElementById('btn-restart').textContent = ui('anotherTry');
    document.getElementById('results-guide-text').textContent = ui('resultsGuide');
    document.getElementById('results-title').textContent = ui('resultsTitle');
    renderLangSwitcher();
  }

  function enterMissionsScreen() {
    document.getElementById('hello-line').textContent = ui('hello', { name: fullName() });
    document.getElementById('guide-missions-text').textContent = ui('guideMissionsNamed', { name: STATE.firstName });
    document.getElementById('hud').classList.add('visible');
    showScreen('screen-missions');
    renderMissions();
    updateHUD();
    saveProgress();
  }

  function startGame() {
    const first = document.getElementById('first-name').value.trim();
    const last = document.getElementById('last-name').value.trim();
    if (!first || !last) {
      alert(ui('needName'));
      return;
    }
    const saved = loadProgress();
    const samePerson = saved &&
      saved.firstName.toLowerCase() === first.toLowerCase() &&
      saved.lastName.toLowerCase() === last.toLowerCase() &&
      Array.isArray(saved.completedMissions) &&
      saved.completedMissions.length > 0;

    if (samePerson) {
      const uiLang = STATE.lang;
      applyProgress(saved);
      STATE.firstName = first;
      STATE.lastName = last;
      STATE.lang = uiLang;
      localStorage.setItem(LANG_KEY, uiLang);
      document.documentElement.lang = uiLang === 'zh' ? 'zh-CN' : uiLang;
      applyStaticUI();
      enterMissionsScreen();
      return;
    }

    STATE.firstName = first;
    STATE.lastName = last;
    STATE.xp = 0;
    STATE.completedMissions = [];
    STATE.moduleScores = {};
    STATE.correctAnswers = 0;
    STATE.totalQuestions = 0;
    STATE.startedAt = new Date().toISOString();
    STATE.startedMs = Date.now();
    enterMissionsScreen();
  }

  function renderMissions() {
    const grid = document.getElementById('missions-grid');
    grid.innerHTML = '';
    const list = missions();
    list.forEach((m, idx) => {
      const isCompleted = STATE.completedMissions.includes(m.id);
      const isLocked = idx > 0 && !STATE.completedMissions.includes(list[idx - 1].id);
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'mission-card' + (isLocked ? ' locked' : '') + (isCompleted ? ' completed' : '');
      card.disabled = isLocked;
      const statusIcon = isCompleted ? ui('done') : (isLocked ? ui('locked') : ui('play'));
      const score = STATE.moduleScores[m.id];
      card.innerHTML =
        '<div class="mc-icon-wrap" style="background:' + m.color + '">' + m.icon + '</div>' +
        '<div class="mc-body">' +
          '<div class="mc-num">' + escapeHtml(m.num) + '</div>' +
          '<div class="mc-title">' + escapeHtml(m.title) + '</div>' +
          '<div class="mc-desc">' + escapeHtml(m.desc) + '</div>' +
          '<div class="mc-meta">' +
            '<span class="mc-tag mc-xp">⚡ +' + m.xp + ' XP</span>' +
            '<span class="mc-tag mc-time">⏱ ' + escapeHtml(m.time) + '</span>' +
            (isCompleted
              ? '<span class="mc-tag mc-done">' + ui('bestTag', { n: (score && score.total) || 0 }) + '</span>' +
                '<span class="mc-tag mc-retry">' + ui('retryTag') + '</span>'
              : '') +
          '</div>' +
        '</div>' +
        '<div class="mc-status" aria-hidden="true">' + statusIcon + '</div>';
      if (!isLocked) card.addEventListener('click', () => openMission(idx));
      grid.appendChild(card);
    });
  }

  function openMission(idx) {
    currentMission = idx;
    currentStep = 0;
    currentModuleQuizXp = 0;
    currentModuleCorrect = 0;
    currentModuleQuestions = 0;
    stepAnswered = false;
    syncXp();
    renderStep();
    showScreen('screen-lesson');
  }

  function renderInfoBlocks(blocks) {
    let html = '<div class="info-card">';
    (blocks || []).forEach((b) => {
      if (b.h) html += '<h3>' + escapeHtml(b.h) + '</h3>';
      if (b.p) html += '<p>' + escapeHtml(b.p) + '</p>';
      if (b.img) {
        html += '<figure class="lesson-figure"><img src="' + escapeHtml(b.img) + '" alt="' +
          escapeHtml(b.alt || '') + '" loading="lazy"/></figure>';
      }
      if (b.highlight) html += '<div class="info-highlight">' + escapeHtml(b.highlight) + '</div>';
      if (b.alert && b.alert.items) {
        html += '<div class="info-alert"><div class="info-alert-title">⚠️ ' +
          escapeHtml(b.alert.title || '') + '</div><ul>';
        b.alert.items.forEach((item) => {
          html += '<li>' + escapeHtml(item) + '</li>';
        });
        html += '</ul></div>';
      }
      if (b.grid) {
        html += '<div class="info-grid">';
        b.grid.forEach((g) => {
          html += '<div class="info-item"><div class="ii-icon">' + g.icon + '</div><div><strong>' +
            escapeHtml(g.t) + '</strong><span>' + escapeHtml(g.d) + '</span></div></div>';
        });
        html += '</div>';
      }
      if (b.flow) {
        html += '<div class="flow-steps">';
        b.flow.forEach((f, i) => {
          html += '<div class="flow-step"><div class="flow-num">' + (i + 1) + '</div><div>' + escapeHtml(f) + '</div></div>';
        });
        html += '</div>';
      }
      if (b.colors) {
        html += '<div class="color-row">';
        b.colors.forEach((c) => {
          html += '<div class="color-chip" style="background:' + c.bg + ';border-color:' + c.bd + '">' +
            escapeHtml(c.name) + '<small>' + escapeHtml(c.sub) + '</small></div>';
        });
        html += '</div>';
      }
    });
    html += '</div>';
    return html;
  }

  function renderStep() {
    const list = missions();
    const m = list[currentMission];
    const step = m.steps[currentStep];
    stepAnswered = false;
    quizRuntime = null;
    orderRuntime = null;

    document.getElementById('lesson-breadcrumb').textContent = ui('stepOf', {
      num: m.num, cur: currentStep + 1, total: m.steps.length
    });
    document.getElementById('lesson-title').textContent = step.title || m.title;
    document.getElementById('lesson-xp-badge').textContent = ui('xpCompleteMission', { xp: m.xp });
    document.getElementById('guide-lesson-text').textContent = step.guide || m.guide;

    const stepsEl = document.getElementById('lp-steps');
    stepsEl.innerHTML = '';
    m.steps.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'lp-step' + (i < currentStep ? ' done' : i === currentStep ? ' active' : '');
      stepsEl.appendChild(d);
    });

    const content = document.getElementById('lesson-content');
    if (step.type === 'info') {
      content.innerHTML = renderInfoBlocks(step.blocks);
      stepAnswered = true;
    } else if (step.type === 'quiz') {
      renderQuiz(step, content);
    } else if (step.type === 'color') {
      renderColor(step, content);
    } else if (step.type === 'order') {
      renderOrder(step, content);
    } else if (step.type === 'scene') {
      renderScene(step, content);
    }
    renderNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function awardActivity(step, isCorrect) {
    currentModuleQuestions++;
    STATE.totalQuestions++;
    if (isCorrect) {
      currentModuleQuizXp += step.xp;
      currentModuleCorrect++;
      STATE.correctAnswers++;
      syncXp();
      showXpPopup('+' + step.xp + ' · ' + STATE.xp + ' XP');
    }
  }

  function renderQuiz(step, container) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const indexed = step.options.map((text, i) => ({ text, i }));
    const shuffled = shuffle(indexed);
    const correctPos = shuffled.findIndex((o) => o.i === step.correct);
    quizRuntime = { shuffled, correctPos, step };

    container.innerHTML =
      '<div class="quiz-card">' +
        '<div class="quiz-label">' + escapeHtml(ui('trivia')) + '</div>' +
        '<div class="quiz-question">' + escapeHtml(step.question) + '</div>' +
        '<div class="quiz-options" id="quiz-options"></div>' +
        '<div class="quiz-feedback" id="quiz-fb"></div>' +
      '</div>';
    const opts = container.querySelector('#quiz-options');
    shuffled.forEach((o, displayIdx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option';
      btn.id = 'qopt-' + displayIdx;
      btn.innerHTML = '<span class="opt-letter">' + letters[displayIdx] + '</span><span class="opt-text">' +
        escapeHtml(o.text) + '</span>';
      btn.addEventListener('click', () => answerQuiz(displayIdx));
      opts.appendChild(btn);
    });
  }

  function answerQuiz(displayIdx) {
    if (stepAnswered || !quizRuntime) return;
    stepAnswered = true;
    const { shuffled, correctPos, step } = quizRuntime;
    const isCorrect = displayIdx === correctPos;
    shuffled.forEach((_, i) => {
      const el = document.getElementById('qopt-' + i);
      if (!el) return;
      el.disabled = true;
      el.classList.add('disabled');
      if (i === correctPos) el.classList.add('correct');
      else if (i === displayIdx) el.classList.add('wrong');
    });
    const fb = document.getElementById('quiz-fb');
    fb.textContent = isCorrect ? step.feedback.ok : step.feedback.fail;
    fb.className = 'quiz-feedback show ' + (isCorrect ? 'success' : 'error');
    awardActivity(step, isCorrect);
    renderNav();
  }

  function renderColor(step, container) {
    const indexed = step.options.map((o, i) => ({ o, i }));
    const shuffled = shuffle(indexed);
    const correctPos = shuffled.findIndex((x) => x.i === step.correct);
    quizRuntime = { shuffled, correctPos, step };

    container.innerHTML =
      '<div class="activity-card">' +
        '<div class="quiz-label">' + escapeHtml(ui('activity')) + '</div>' +
        '<div class="quiz-question">' + escapeHtml(step.prompt) + '</div>' +
        '<p class="activity-hint">' + escapeHtml(ui('tapColor')) + '</p>' +
        '<div class="color-tap-grid" id="color-tap-grid"></div>' +
        '<div class="quiz-feedback" id="quiz-fb"></div>' +
      '</div>';
    const grid = container.querySelector('#color-tap-grid');
    shuffled.forEach((x, displayIdx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'color-tap';
      btn.style.setProperty('--swatch', x.o.hex);
      btn.innerHTML = '<span class="swatch" style="background:' + x.o.hex + '"></span>' +
        '<span class="ct-label">' + escapeHtml(x.o.label) + '</span>' +
        '<small>' + escapeHtml(x.o.sub) + '</small>';
      btn.addEventListener('click', () => answerColor(displayIdx));
      grid.appendChild(btn);
    });
  }

  function answerColor(displayIdx) {
    if (stepAnswered || !quizRuntime) return;
    stepAnswered = true;
    const { shuffled, correctPos, step } = quizRuntime;
    const isCorrect = displayIdx === correctPos;
    const grid = document.getElementById('color-tap-grid');
    [...grid.children].forEach((btn, i) => {
      btn.disabled = true;
      if (i === correctPos) btn.classList.add('correct');
      else if (i === displayIdx) btn.classList.add('wrong');
    });
    const fb = document.getElementById('quiz-fb');
    fb.textContent = isCorrect ? step.feedback.ok : step.feedback.fail;
    fb.className = 'quiz-feedback show ' + (isCorrect ? 'success' : 'error');
    awardActivity(step, isCorrect);
    renderNav();
  }

  function renderOrder(step, container) {
    const correct = step.items.slice();
    const display = shuffle(correct.map((text, i) => ({ text, i })));
    orderRuntime = { correct, picked: [], display, step };

    container.innerHTML =
      '<div class="activity-card">' +
        '<div class="quiz-label">' + escapeHtml(ui('activity')) + '</div>' +
        '<div class="quiz-question">' + escapeHtml(step.prompt) + '</div>' +
        '<p class="activity-hint">' + escapeHtml(ui('orderHint')) + '</p>' +
        '<div class="order-picked" id="order-picked"></div>' +
        '<div class="order-pool" id="order-pool"></div>' +
        '<button type="button" class="btn-secondary order-reset" id="order-reset">' + escapeHtml(ui('orderReset')) + '</button>' +
        '<div class="quiz-feedback" id="quiz-fb"></div>' +
      '</div>';
    paintOrderPool();
    document.getElementById('order-reset').addEventListener('click', () => {
      if (stepAnswered) return;
      orderRuntime.picked = [];
      paintOrderPool();
      document.getElementById('quiz-fb').className = 'quiz-feedback';
    });
  }

  function paintOrderPool() {
    if (!orderRuntime) return;
    const pool = document.getElementById('order-pool');
    const pickedEl = document.getElementById('order-picked');
    pool.innerHTML = '';
    pickedEl.innerHTML = '';
    orderRuntime.picked.forEach((p, idx) => {
      const chip = document.createElement('div');
      chip.className = 'order-chip filled';
      chip.textContent = (idx + 1) + '. ' + p.text;
      pickedEl.appendChild(chip);
    });
    orderRuntime.display.forEach((item) => {
      if (orderRuntime.picked.some((p) => p.i === item.i)) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'order-chip';
      btn.textContent = item.text;
      btn.addEventListener('click', () => pickOrder(item));
      pool.appendChild(btn);
    });
  }

  function pickOrder(item) {
    if (stepAnswered || !orderRuntime) return;
    orderRuntime.picked.push(item);
    paintOrderPool();
    if (orderRuntime.picked.length < orderRuntime.correct.length) return;

    stepAnswered = true;
    const ok = orderRuntime.picked.every((p, idx) => p.text === orderRuntime.correct[idx]);
    const fb = document.getElementById('quiz-fb');
    fb.textContent = ok ? orderRuntime.step.feedback.ok : orderRuntime.step.feedback.fail;
    fb.className = 'quiz-feedback show ' + (ok ? 'success' : 'error');
    document.getElementById('order-picked').classList.add(ok ? 'ok' : 'bad');
    document.getElementById('order-reset').disabled = true;
    [...document.getElementById('order-pool').querySelectorAll('button')].forEach((b) => { b.disabled = true; });
    awardActivity(orderRuntime.step, ok);
    renderNav();
  }

  function renderScene(step, container) {
    const scenes = shuffle(step.scenes.map((s, i) => ({ s, i })));
    container.innerHTML =
      '<div class="activity-card">' +
        '<div class="quiz-label">' + escapeHtml(ui('activity')) + '</div>' +
        '<div class="quiz-question">' + escapeHtml(step.prompt || ui('scenePrompt')) + '</div>' +
        '<div class="scene-grid" id="scene-grid"></div>' +
        '<div class="quiz-feedback" id="quiz-fb"></div>' +
      '</div>';
    const grid = container.querySelector('#scene-grid');
    scenes.forEach((x) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'scene-card';
      btn.innerHTML = '<div class="scene-icon">' + x.s.icon + '</div><div class="scene-label">' +
        escapeHtml(x.s.label) + '</div>';
      btn.addEventListener('click', () => answerScene(btn, x.s, step, grid));
      grid.appendChild(btn);
    });
  }

  function answerScene(btn, scene, step, grid) {
    if (stepAnswered) return;
    stepAnswered = true;
    const isCorrect = !!scene.wrong;
    const wrongLabel = (step.scenes.find((s) => s.wrong) || {}).label;
    [...grid.children].forEach((el) => {
      el.disabled = true;
      const labelEl = el.querySelector('.scene-label');
      if (labelEl && wrongLabel && labelEl.textContent === wrongLabel) el.classList.add('correct');
    });
    if (!isCorrect) btn.classList.add('wrong');
    const fb = document.getElementById('quiz-fb');
    fb.textContent = isCorrect ? step.feedback.ok : step.feedback.fail;
    fb.className = 'quiz-feedback show ' + (isCorrect ? 'success' : 'error');
    awardActivity(step, isCorrect);
    renderNav();
  }

  function renderNav() {
    const nav = document.getElementById('lesson-nav');
    const m = missions()[currentMission];
    const isLast = currentStep === m.steps.length - 1;
    nav.innerHTML = '';

    const back = document.createElement('button');
    back.type = 'button';
    back.className = 'btn-secondary';
    back.textContent = ui('backMap');
    back.addEventListener('click', backToMissions);
    nav.appendChild(back);

    const primary = document.createElement('button');
    primary.type = 'button';
    primary.className = 'btn-primary';
    if (!stepAnswered) {
      primary.disabled = true;
      primary.textContent = ui('answerToContinue');
    } else if (isLast) {
      primary.textContent = ui('closeModule');
      primary.addEventListener('click', completeMission);
    } else {
      primary.textContent = ui('next');
      primary.addEventListener('click', nextStep);
    }
    nav.appendChild(primary);
    primary.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  function nextStep() {
    currentStep++;
    renderStep();
  }

  function completeMission() {
    const m = missions()[currentMission];
    const attempt = {
      title: m.title,
      missionXp: m.xp,
      quizXp: currentModuleQuizXp,
      total: m.xp + currentModuleQuizXp,
      correct: currentModuleCorrect,
      questions: currentModuleQuestions
    };
    const prev = STATE.moduleScores[m.id];
    const isBest = !prev || attempt.total > prev.total;
    if (isBest) {
      STATE.moduleScores[m.id] = attempt;
    }
    if (!STATE.completedMissions.includes(m.id)) {
      STATE.completedMissions.push(m.id);
    }
    // End live attempt so XP = sum of bests only (same number in HUD + badge)
    currentMission = null;
    currentModuleQuizXp = 0;
    currentModuleCorrect = 0;
    currentModuleQuestions = 0;
    recalcXpFromBest();
    updateHUD();

    const badge = Object.assign({}, m.badge);
    if (!isBest && prev) {
      badge.desc = (badge.desc || '') + ' · ' + ui('bestTag', { n: prev.total });
    }
    saveProgress();
    showBadge(badge, () => {
      if (STATE.completedMissions.length === missions().length) {
        finalizeAndShowResults();
      } else {
        showScreen('screen-missions');
        renderMissions();
        updateHUD();
        saveProgress();
      }
    });
  }

  function backToMissions() {
    // Keep completed missions/scores; drop only in-progress attempt overlay
    currentMission = null;
    currentModuleQuizXp = 0;
    currentModuleCorrect = 0;
    currentModuleQuestions = 0;
    recalcXpFromBest();
    updateHUD();
    saveProgress();
    showScreen('screen-missions');
    renderMissions();
  }

  function showBadge(badge, callback) {
    document.getElementById('bm-icon').textContent = badge.icon;
    document.getElementById('bm-title').textContent = badge.title;
    document.getElementById('bm-desc').textContent = badge.desc;
    document.getElementById('bm-xp').textContent = STATE.xp + ' XP';
    pendingBadgeCallback = callback;
    document.getElementById('badge-modal').classList.add('show');
  }

  function closeBadge() {
    document.getElementById('badge-modal').classList.remove('show');
    if (pendingBadgeCallback) {
      const cb = pendingBadgeCallback;
      pendingBadgeCallback = null;
      cb();
    }
  }

  function finalizeAndShowResults() {
    const completedAt = new Date().toISOString();
    const durationMs = STATE.startedMs != null ? Date.now() - STATE.startedMs : null;
    const list = missions();
    recalcXpFromBest();
    const record = {
      id: 'pc_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
      firstName: STATE.firstName,
      lastName: STATE.lastName,
      fullName: fullName(),
      lang: STATE.lang,
      completedAt,
      startedAt: STATE.startedAt,
      durationMs,
      xp: STATE.xp,
      correctAnswers: STATE.correctAnswers,
      totalQuestions: STATE.totalQuestions,
      modulesCompleted: STATE.completedMissions.slice(),
      moduleScores: { ...STATE.moduleScores },
      scoreboard: list.map((m) => ({
        id: m.id,
        title: m.title,
        ...(STATE.moduleScores[m.id] || {})
      })),
      program: 'Prime Choice Outbound Onboarding',
      version: '1.4-pilot'
    };
    try {
      PCStorage.saveCompletion(record);
    } catch (e) {
      console.warn('Could not save completion', e);
    }
    clearProgress();
    showResults(record);
  }

  function showResults(record) {
    showScreen('screen-results');
    applyResultsLabels();
    document.getElementById('r-xp').textContent = record.xp;
    document.getElementById('r-correct').textContent = record.correctAnswers + '/' + record.totalQuestions;
    document.getElementById('r-modules').textContent = record.modulesCompleted.length + '/' + missions().length;
    document.getElementById('results-sub').innerHTML = ui('resultsSub', {
      name: '<strong style="color:var(--teal2)">' + escapeHtml(record.fullName) + '</strong>'
    });
    const when = new Date(record.completedAt).toLocaleString(
      STATE.lang === 'zh' ? 'zh-CN' : STATE.lang === 'en' ? 'en-US' : 'es'
    );
    document.getElementById('cert-line').textContent = ui('certLine', {
      name: record.fullName,
      when,
      xp: record.xp,
      duration: PCStorage.formatDuration(record.durationMs)
    });
    document.getElementById('module-scoreboard').innerHTML = (record.scoreboard || []).map((s) =>
      '<div class="ms-row"><span>' + escapeHtml(s.title || s.id) + '</span><span>' +
      ui('pts', { n: s.total || 0 }) + '</span></div>'
    ).join('');
  }

  function restartGame() {
    document.getElementById('hud').classList.remove('visible');
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    currentMission = null;
    currentStep = 0;
    showScreen('screen-welcome');
  }

  function updateHUD() {
    const xpNow = STATE.xp;
    document.getElementById('hud-xp-txt').textContent = xpNow + ' XP';
    const lvl = levels().slice().reverse().find((l) => xpNow >= l.min);
    document.getElementById('hud-level-txt').textContent = lvl ? lvl.label : ui('level0');
    const done = STATE.completedMissions.length;
    const total = missions().length;
    const pct = total ? (done / total) * 100 : 0;
    document.getElementById('hud-bar').style.width = pct + '%';
    document.getElementById('hud-prog-txt').textContent = done + '/' + total;
    const pathFill = document.getElementById('path-progress-fill');
    const pathLabel = document.getElementById('path-progress-label');
    if (pathFill) pathFill.style.width = pct + '%';
    if (pathLabel) pathLabel.textContent = ui('progressLabel', { done: done, total: total });
    const resume = document.getElementById('resume-hint');
    if (resume) resume.textContent = ui('resumeHint');
  }

  function init() {
    document.querySelectorAll('img[data-avatar-src]').forEach((img) => {
      img.src = img.getAttribute('data-avatar-src') || AVATAR_SRC;
    });
    document.documentElement.lang = STATE.lang === 'zh' ? 'zh-CN' : STATE.lang;
    applyStaticUI();
    document.getElementById('btn-start').addEventListener('click', startGame);
    document.getElementById('bm-continue').addEventListener('click', closeBadge);
    document.getElementById('btn-restart').addEventListener('click', restartGame);
    ['first-name', 'last-name'].forEach((id) => {
      document.getElementById(id).addEventListener('keydown', (e) => {
        if (e.key === 'Enter') startGame();
      });
    });
  }

  window.PCApp = {
    init,
    setLang,
    closeBadge,
    startGame,
    getDebugState: () => ({
      lang: STATE.lang,
      currentMission,
      currentStep,
      stepAnswered,
      completedMissions: STATE.completedMissions.slice(),
      moduleScores: { ...STATE.moduleScores },
      xp: STATE.xp
    })
  };
  document.addEventListener('DOMContentLoaded', init);
})();
