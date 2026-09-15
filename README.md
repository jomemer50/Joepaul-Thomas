# Joepaul Thomas — Two Sides, Same Face

Sleek minimalist dual portfolio: **Engineer / Photographer**.

## Structure
- `index.html` — split-screen entry (50/50, hover expands, stacks on mobile)
- `engineer.html` — software projects grid
- `project.html?slug=` — project case-study template
- `frames.html` — photo albums grid
- `album.html?album=` — album masonry + lightbox template
- `about.html` — shared face / bio / contact
- `styles.css` — design tokens (mirrors planned Stitch system)
- `app.js` — placeholder data + rendering + lightbox + split interaction
- `DESIGN.md` — design system spec (uploaded to Stitch, see below)
- `stitched/` — Stitch-generated screens (on branch `Stitched` only):
  `index.html` landing, `engineer.html` grid, `project.html` case study,
  `frames.html` albums, `album.html` masonry + lightbox, `about.html` bio + contact
- `stitched/variants/` — extra Stitch takes (album x4, about x2, landing v1, generic)

## Design tokens (Stitch-ready)
- bg `#FAFAF9`, ink `#111111`, muted `#6B7280`, line `#E7E5E4`
- accent engineer `#4F46E5`, accent photo `#C2410C`
- Headline: Space Grotesk, Body: Inter, Mono: JetBrains Mono / ui-monospace
- Roundness: 6px, spacing airy, max-w 1120px

## Run
```bash
python3 -m http.server 8000            # hand-written skeleton at root
python3 -m http.server 8001 --directory stitched   # Stitch screens (branch Stitched)
# open http://localhost:8000/ or http://localhost:8001/
```
No build step. Replace placeholders in `app.js` (`PROJECTS`, `ALBUMS`) with real content later.

## Stitch (connected ✓)
- MCP: local proxy `npx @_davideast/stitch-mcp proxy` with `STITCH_API_KEY` (direct remote OAuth unsupported — Google has no DCR)
- Project: `Joepaul-Thomas Portfolio` (`projects/901884075989783817`)
- Design system: `assets/d91bc6b9c2864ce88c23012425c1b2f0` (built from `DESIGN.md`)
- Screens (`stitched/`): landing `5990eb17`, engineer `a1021dec`, project `553bf2e7`,
  frames `10364e8f`, album `f8b5ba24` (slim: 6 photos), about `575e9f57` (slim: tokens pinned)
- Verbatim Album/About prompts timed out; slimmed variants succeeded. Timeout retries
  still landed server-side — their output lives in `stitched/variants/`.
