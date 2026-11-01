# LinkedIn storytelling script — Prime Choice outbound onboarding

**Status:** DRAFT — waiting for David approval before Remotion render  
**Format:** Vertical 1080×1920 · target **54s** (45–60s band) · 30 fps  
**Privacy:** `BLUR_FACE=true` · `GENERIC_NAMES=true` (Warehouse / Carrier A–D)  
**Audio:** Music/SFX slot left empty (no copyrighted music)  
**Language on screen:** English (≤8 words per text beat)

---

## Source facts (do not invent beyond these)

### From repo `git log` — `demos/prime-choice/` only

| Date (commit author date) | Commit | Message |
|---------------------------|--------|---------|
| 2026-10-31 | `bf18fc4` | Publish Prime Choice pilot on GitHub Pages branch |
| 2026-10-31 | `9724d91` | Make Prime Choice pilot responsive, i18n, and admin-only records |
| 2026-11-01 | `23b7d37` | Improve Prime Choice activities, shuffle, retry, and copy |
| 2026-11-01 | `70ddeb9` | Clarify outbound missions 2–4 with graphics and progress persistence |
| 2026-11-01 | `b4f08cc` | Unify Prime Choice XP display and rewrite Mission 5 |

### From the pilot product in-repo

- Title: **Prime Choice — Outbound** onboarding pilot  
- Badge copy: **Pilot · ~10 min**  
- 5 missions: Safety → Process → Belt & colors → Containerization → More responsibility  
- Languages in app: Español / English / 简体中文  
- Features visible in commits/UI: XP, badges, retry keeps best score, path progress, device-local progress, admin.html records  

### From Project brief (outbound plan)

- Role context: warehouse outbound after packing (belt → carts → containerize → load)  
- Constraints: high turnover, fast pace, three languages on the floor  
- Training order: belt/colors first (no scanning on belt) → containerization → more responsibility  

### Media TODO

- **`piloto.mov`:** file not found in this checkout or Project store.  
  Marked **`[TODO: piloto.mov or photo]`** — use dark navy placeholder plate with caption “Floor pilot · photo TBD” until David drops a blur-safe clip/photo into `linkedin-demo/public/piloto.mov` (or `.jpg`/`.webp`).

---

## Scene-by-scene beats

| Time | Beat | On-screen text (≤8 words) | Visuals |
|------|------|---------------------------|---------|
| 0:00–0:04 | Hook | High turnover. Fast floor. | Dark navy gradient + subtle teal particles; gold underline under first line |
| 0:04–0:08 | Problem | Three languages. One first week. | Same plate; second line fades in; tiny path chips “Belt → Carts → Container” (generic, no carrier names) |
| 0:08–0:13 | Solution name | I built a 10-minute pilot. | Brand plate: **Prime Choice** (Space Grotesk) + “Outbound onboarding” |
| 0:13–0:18 | Product promise | Missions. XP. Badges. Retry. | Icon row (mission / XP / badge) — no fake stats |
| 0:18–0:24 | Build stage 1 | Published the pilot. Oct 31. | Timeline tick from git: `bf18fc4` / “Publish… GitHub Pages” (message shortened on screen to fit 8 words: **Published the pilot.**) |
| 0:24–0:28 | Build stage 2 | Phone-ready. Three languages. | Timeline: responsive + i18n (`9724d91`) |
| 0:28–0:32 | Build stage 3 | Activities. Retry. Best score. | Timeline: activities/shuffle/retry (`23b7d37`) |
| 0:32–0:36 | Build stage 4 | Graphics. Path progress. Saved. | Timeline: missions 2–4 + progress (`70ddeb9`) |
| 0:36–0:40 | Build stage 5 | One XP truth. Mission five. | Timeline: XP unify + Mission 5 (`b4f08cc`, Nov 1) |
| 0:40–0:44 | Clip · Welcome | Welcome to Prime Choice. | Phone frame 390×844: `welcome.webm` (EN UI; guide face blurred) |
| 0:44–0:48 | Clip · Map | Five missions. Belt first. | Phone frame: `mission-map.webm` (generic name “Alex Warehouse”) |
| 0:48–0:52 | Clip · Lesson | Safety. Look. Don’t climb. Tell. | Phone frame: `lesson-safety.webm` |
| 0:52–0:56 | Clip · Quiz | Wrong once. Then right. | Phone frame split/cut: `quiz-wrong.webm` → `quiz-right.webm` |
| 0:56–1:00 | Clip · Badge | Badge unlocked. Keep going. | Phone frame: `badge.webm` |
| 1:00–1:04 | Clip · Finish | Path complete. Pilot record. | Phone frame: `final.webm` |
| 1:04–1:08 | Floor note | Real floor. Same path. | **`[TODO: piloto.mov or photo]`** placeholder plate |
| 1:08–1:12 | Soft CTA | Built for the floor. | End card: name **David Moreno** · L&D · Houston; “Prime Choice · Outbound pilot”; audio slot silent |
| 1:12–1:14 | Hold | — | Fade to navy; leave 0.5–1s for LinkedIn autoplay loop comfort |

> Timing note: table spans ~1:14 for edit room. **Cut to 54s (±6s)** by shortening timeline ticks (0:18–0:40) and/or holding clips shorter. Do **not** add metrics that aren’t in sources.

---

## Voiceover / caption notes (optional; not recorded yet)

If David adds VO later, keep it factual:

1. Warehouse onboarding is high turnover and multilingual.  
2. I shipped a ~10-minute gamified outbound pilot: five missions, XP, badges.  
3. Built in public commits Oct 31–Nov 1: publish → i18n/responsive → activities → graphics/progress → XP/Mission 5.  
4. Training order matches the floor: belt colors first, then containers, then more.  
5. Soft close — no company or carrier names.

---

## Privacy checklist for final edit

- [ ] No USPS / Swift / Speedex / Uni Uni / Gofo on screen or VO  
- [ ] Use Carrier A–D or color-only labels in any re-shot color mission  
- [ ] Guide avatar blurred when `BLUR_FACE=true`  
- [ ] Learner name generic (`Alex Warehouse` / `Sam Carrier`) when `GENERIC_NAMES=true`  
- [ ] No warehouse employer brand, no customer logos  

---

## Open questions for David (`[TODO]`)

1. **`[TODO: piloto.mov or photo]`** — provide blur-safe floor still or clip, or keep placeholder?  
2. Confirm **English-only** on-screen text (vs brief bilingual captions)?  
3. Confirm end-card name line: **David Moreno** / **David Moreno Abril** / other?  
4. Any quote from TL/manager that is cleared to use? (none in sources → leave out)  
5. Target length preference inside 45–60s (default cut **54s**)?  
6. Approve cutting Mission 3 color quiz from the video (carrier names) and using Mission 1 safety trivia instead? **Recommended: yes** for privacy.  

---

## Approval gate

**Do not run `npx remotion render` until David approves this SCRIPT.md.**  
Scaffold + Playwright clips may exist under `linkedin-demo/`; final MP4 awaits explicit approval.
