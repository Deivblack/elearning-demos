# LinkedIn storytelling script — Prime Choice outbound onboarding

**Status:** APPROVED by David (2026-11-01) — render authorized  
**Format:** Vertical 1080×1920 · target **~48s** (45–54s band) · 30 fps  
**Privacy:** `BLUR_FACE=true` · `GENERIC_NAMES=true` (Warehouse / Carrier A–D)  
**Audio:** Music/SFX slot left empty (no copyrighted music)  
**Captions:** EN primary + ES secondary (burned in)  
**Output:** `out/onboarding-demo.mp4` (H.264 veryfast)

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
- Features: XP, badges, retry keeps best score, path progress, device-local progress, admin.html records  

### From Project brief + David approval

- Warehouse outbound after packing (belt → carts → containerize → load)  
- Hook line (David): **Our onboarding was: "Go figure it out."**  
- TL may be mentioned  
- Mission 3 color quiz **skipped** in video for privacy — Safety trivia only  
- End card: **David Moreno Abril**  

### Media (approved)

| File | Use | Privacy |
|------|-----|---------|
| `cover-laptop-warehouse-safe.png` | Hook / first cover | Avatar + URL chrome + background people + carrier packaging blurred |
| `piloto-pda-blur.png` | Floor beat | Face (+ ID pocket) blurred |
| `welcome.webm` … `final.webm` | Phone clips | `BLUR_FACE` / `GENERIC_NAMES` at record time |

---

## Scene-by-scene beats (~48s)

| Time | Beat | On-screen EN (+ ES) | Visuals |
|------|------|---------------------|---------|
| 0:00–0:05 | Hook | EN: Our onboarding was: "Go figure it out." · ES: Nuestro onboarding era: "Arréglatelas." | Full-bleed `cover-laptop-warehouse-safe.png` + caption bar |
| 0:05–0:08 | Context | EN: Three languages. One first week. · ES: Tres idiomas. Una primera semana. | Cover continues / navy wash; path chips Belt → carts → container |
| 0:08–0:12 | Solution | EN: I built a 10-minute pilot. · ES: Armé un piloto de 10 minutos. | Brand: **Prime Choice** · Outbound onboarding |
| 0:12–0:14 | Promise | EN: Missions. XP. Badges. Retry. · ES: Misiones. XP. Badges. Reintento. | Title plate |
| 0:14–0:16 | Build 1 | EN: Published the pilot. · ES: Publiqué el piloto. | Timeline 2026-10-31 |
| 0:16–0:18 | Build 2 | EN: Phone-ready. Three languages. · ES: Listo en celular. Tres idiomas. | Timeline 2026-10-31 |
| 0:18–0:20 | Build 3 | EN: Activities. Retry. Best score. · ES: Actividades. Reintento. Mejor puntaje. | Timeline 2026-11-01 |
| 0:20–0:22 | Build 4 | EN: Graphics. Path progress. Saved. · ES: Gráficos. Progreso. Guardado. | Timeline 2026-11-01 |
| 0:22–0:24 | Build 5 | EN: One XP truth. Mission five. · ES: Un solo XP. Misión cinco. | Timeline 2026-11-01 |
| 0:24–0:27 | Clip · Welcome | EN: Welcome to Prime Choice. · ES: Bienvenido a Prime Choice. | Phone: `welcome.webm` |
| 0:27–0:30 | Clip · Map | EN: Five missions. Belt first. · ES: Cinco misiones. Cinta primero. | Phone: `mission-map.webm` (Alex Warehouse) |
| 0:30–0:33 | Clip · Lesson | EN: Safety. Look. Don’t climb. Tell. · ES: Seguridad. Mira. No trepes. Avisa. | Phone: `lesson-safety.webm` |
| 0:33–0:36 | Clip · Quiz | EN: Wrong once. Then right. · ES: Fallar una. Luego bien. | `quiz-wrong.webm` → `quiz-right.webm` (Safety trivia) |
| 0:36–0:39 | Clip · Badge | EN: Badge unlocked. Keep going. · ES: Badge desbloqueado. Sigue. | Phone: `badge.webm` |
| 0:39–0:42 | Clip · Finish | EN: Path complete. Pilot record. · ES: Ruta completa. Registro piloto. | Phone: `final.webm` |
| 0:42–0:45 | Floor | EN: Real floor. Same path. · ES: Piso real. Misma ruta. | `piloto-pda-blur.png` |
| 0:45–0:48 | End card | EN: Built for the floor. · ES: Hecho para el piso. | **David Moreno Abril** · L&D · Prime Choice · Outbound pilot |

---

## Privacy checklist (final)

- [x] Hook uses David’s approved line  
- [x] No USPS / Swift / Speedex / Uni Uni / Gofo on captions or VO  
- [x] Mission 3 color quiz not shown  
- [x] Guide / coworker faces blurred (`BLUR_FACE`)  
- [x] Learner name generic (`Alex Warehouse`)  
- [x] End card: David Moreno Abril  
- [x] Audio slot empty  

## Open (non-blocking)

None for render. Optional later: VO track if David records one.
