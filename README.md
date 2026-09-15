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
- `DESIGN.md` — design system spec for future `stitch_upload_design_md`

## Design tokens (Stitch-ready)
- bg `#FAFAF9`, ink `#111111`, muted `#6B7280`, line `#E7E5E4`
- accent engineer `#4F46E5`, accent photo `#C2410C`
- Headline: Space Grotesk, Body: Inter, Mono: JetBrains Mono / ui-monospace
- Roundness: 6px, spacing airy, max-w 1120px

## Run
```bash
python3 -m http.server 8000
# open http://localhost:8000/
```
No build step. Replace placeholders in `app.js` (`PROJECTS`, `ALBUMS`) with real content later.

## Stitch handoff (when auth fixed)
1. `stitch_create_project` → "Joepaul-Thomas Portfolio"
2. `stitch_upload_design_md` with `DESIGN.md` → `stitch_create_design_system_from_design_md`
3. `stitch_generate_screen_from_text` x6 using prompts in `DESIGN.md`
