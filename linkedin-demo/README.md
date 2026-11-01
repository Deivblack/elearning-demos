# LinkedIn demo — Prime Choice outbound onboarding

Vertical storytelling assets (1080×1920) for David’s gamified warehouse onboarding pilot.

**Gate:** Do **not** render the final MP4 until David approves [`SCRIPT.md`](./SCRIPT.md).

## Contents

| Path | Purpose |
|------|---------|
| `SCRIPT.md` | Scene-by-scene script (approve before render) |
| `post.md` | LinkedIn post EN + optional ES |
| `src/` | Remotion composition (`LinkedInStory`) |
| `public/*.webm` | Playwright phone clips (390×844) |
| `scripts/record.mjs` | Re-record clips |
| `public/piloto.mov` | **Missing** — `[TODO: piloto.mov or photo]` |

## Privacy toggles

Defaults match the brief:

```bash
BLUR_FACE=true          # blur guide avatar in recordings
GENERIC_NAMES=true      # learner "Alex Warehouse"; rewrite carrier brand strings → Carrier A–D
```

Override when re-recording:

```bash
BLUR_FACE=false GENERIC_NAMES=false npm run record
```

Remotion reads the same env vars via `src/config.ts` (names + blur policy for any future overlays).

## Serve the course + re-record

From the **repo root** (`elearning-demos`):

```bash
python3 -m http.server 8765
```

In another shell, from `linkedin-demo/`:

```bash
npm install
BASE_URL=http://127.0.0.1:8765/demos/prime-choice/index.html npm run record
```

Clips written to `public/`:

- `welcome.webm`
- `mission-map.webm`
- `lesson-safety.webm`
- `quiz-wrong.webm`
- `quiz-right.webm`
- `badge.webm`
- `final.webm`

## Remotion (scaffold only)

```bash
cd linkedin-demo
npm install
npm run studio          # preview — OK anytime
npm run render          # intentionally blocked until SCRIPT approval
```

After David approves `SCRIPT.md`:

```bash
npm run render:approved
# → out/prime-choice-linkedin.mp4
```

Composition: **1080×1920**, **30 fps**, ~**54s**, dark navy / teal / gold, Space Grotesk + Inter, phone-frame for course clips. Audio track slot left empty (no copyrighted music).

## Style tokens

- Navy `#0D1F3C` / `#152D54`
- Teal `#0D9488` / `#14B8A6`
- Gold `#F59E0B`

## Facts discipline

Script and post use only:

1. User / Project brief (outbound plan constraints)
2. `git log` for `demos/prime-choice/`
3. What the pilot UI actually shows

Missing media or uncleared quotes stay as `[TODO: …]`.
