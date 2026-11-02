# LinkedIn storytelling script — Prime Choice outbound onboarding

**Status:** APPROVED + **re-cut** (David feedback 2026-11-02)  
**Format:** Vertical 1080×1920 · **~52s** (45–54s) · 30 fps  
**Privacy:** `BLUR_FACE=true` · `GENERIC_NAMES=true`  
**Captions:** EN primary + ES secondary  
**Output:** `out/onboarding-demo.mp4` (H.264 veryfast)

---

## Re-cut notes (this version)

1. **No login regressions** — phone clips use in-points (`src/clipInPoints.ts`) so after welcome we only show map → lesson → Safety quiz → badge → final.  
2. **Longer pauses** between beats (~3.5–4.5s).  
3. **First ~20s** pair big captions with **live course UI** in a phone frame (not text-only cards).  
4. **Piloto photo** near end with: **“The result: teammates hooked on onboarding”** / ES: “Resultado: el equipo enganchado al onboarding”.

Kept: hook “Go figure it out.”, cover laptop open, end card **David Moreno Abril**, Safety trivia only, no carriers.

---

## Scene beats (~52s)

| Time | Beat | EN (+ ES) | Visual |
|------|------|-----------|--------|
| 0:00–0:05 | Hook | Our onboarding was: "Go figure it out." · Arréglatelas. | Cover laptop (warehouse) |
| 0:05–0:09.5 | Context + UI | Three languages. One first week. | Caption + phone `welcome` |
| 0:09.5–0:14 | Pilot + UI | I built a 10-minute pilot. | Caption + phone `map` @1.2s |
| 0:14–0:18 | Features + UI | Missions. XP. Badges. Retry. | Caption + phone `map` |
| 0:18–0:21.5 | Build + UI | Shipped Oct 31 – Nov 1. | Caption + phone `lesson` @1.5s |
| 0:21.5–0:25.5 | Map | Five missions. Belt first. | Phone map |
| 0:25.5–0:29.5 | Lesson | Safety. Look. Don’t climb. Tell. | Phone lesson |
| 0:29.5–0:36 | Quiz | Wrong once. / Then right. | Safety trivia (in-points) |
| 0:36–0:40 | Badge | Badge unlocked. Keep going. | Badge modal @5s |
| 0:40–0:44 | Final | Path complete. Pilot record. | Results @25s |
| 0:44–0:48.5 | Floor result | The result: teammates hooked on onboarding | `piloto-pda-blur.png` |
| 0:48.5–0:52 | End | Built for the floor. | David Moreno Abril · L&D |

### Clip in-points (no welcome mid-story)

| Clip | startFrom |
|------|-----------|
| welcome | 0.4s |
| mission-map | 1.2s |
| lesson-safety | 1.5s |
| quiz-wrong | 3.5s |
| quiz-right | 4.0s |
| badge | 5.0s |
| final | 25.0s |

---

## Source facts

Unchanged: `git log` for `demos/prime-choice/` (2026-10-31 → 2026-11-01), pilot ~10 min / 5 missions / ES·EN·简体, privacy defaults.
