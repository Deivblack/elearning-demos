# LinkedIn demo — Prime Choice outbound onboarding

Vertical storytelling assets (1080×1920) for David’s gamified warehouse onboarding pilot.

**Script status:** APPROVED — render to `out/onboarding-demo.mp4`

## Contents

| Path | Purpose |
|------|---------|
| `SCRIPT.md` | Approved scene-by-scene script (~48s) |
| `post.md` | LinkedIn post EN + ES |
| `src/` | Remotion composition (`LinkedInStory`) |
| `public/*.webm` | Playwright phone clips (390×844) |
| `public/cover-laptop-warehouse-safe.png` | Hook cover (privacy-processed) |
| `public/piloto-pda-blur.png` | Floor photo (face blurred) |
| `scripts/record.mjs` | Re-record clips |
| `out/onboarding-demo.mp4` | Final H.264 render |

## Privacy toggles

Defaults:

```bash
BLUR_FACE=true          # blur faces in recordings + photo assets
GENERIC_NAMES=true      # learner "Alex Warehouse"; carrier brands → Carrier A–D
```

Override when re-recording:

```bash
BLUR_FACE=false GENERIC_NAMES=false npm run record
```

Mission 3 color quiz is **not** used in the video (privacy). Safety trivia only.

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

## Render

```bash
cd linkedin-demo
npm install
npm run render
# → out/onboarding-demo.mp4  (H.264, x264 veryfast)
```

Composition: **1080×1920**, **30 fps**, **~48s**, dark navy / teal / gold, Space Grotesk + Inter, bilingual captions (EN + ES), phone-frame for course clips. Audio track slot empty (no copyrighted music).

End card: **David Moreno Abril**.

## Style tokens

- Navy `#0D1F3C` / `#152D54`
- Teal `#0D9488` / `#14B8A6`
- Gold `#F59E0B`

## Facts discipline

Script and post use only the approved brief, `git log` for `demos/prime-choice/`, and what the pilot UI shows.
