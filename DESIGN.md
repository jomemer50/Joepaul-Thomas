# DESIGN.md — Joepaul Thomas Portfolio
## Vision
Two sides of the same face. Sleek, minimalist, quiet confidence. One identity, two crafts.

## Tokens
- colorMode: LIGHT, customColor #111111, variant TONAL_SPOT
- bg #FAFAF9, surface #FFFFFF, ink #111111, muted #6B7280, line #E7E5E4
- engineer accent #4F46E5, photo accent #C2410C
- headlineFont SPACE_GROTESK, bodyFont INTER, label/mono ui-monospace
- roundness ROUND_FOUR (6px), max-width 1120px, generous whitespace, 1px borders, no shadows except lightbox

## Layout language
- Split landing: 50/50 viewport, left light with faint grid + mono labels, right full-bleed photo with warm overlay. Center circular badge "JT". Hover flex-grow 1.2x. Mobile stacks 50vh/50vh.
- Engineer: top nav `JT — Software`, 12px uppercase mono eyebrow, large headline, 2-col card grid, tags as pills, GitHub/live links.
- Project detail: back link, hero block, problem/solution 2-col, stack list, code block, prev/next.
- Frames: top nav `JT — Frames`, editorial large covers, 3 albums, location + count meta.
- Album: masonry (CSS columns), click → lightbox, EXIF line, minimal caption.
- About: one portrait placeholder, two short bios side-by-side, contact row.

## Stitch prompts (use verbatim for generation)
1. Landing: "Minimalist split-screen portfolio landing, left light panel for software engineer with subtle grid and mono text, right full-bleed moody photography panel, center circular JT badge with name Joepaul Thomas, sleek, generous whitespace, desktop"
2. Engineer: "Minimal software portfolio grid, 4 project cards, white cards 1px border 6px radius, mono tags, sleek light theme Space Grotesk + Inter"
3. Project: "Minimal case study page, hero, problem solution two-column, tech stack pills, dark code block, prev next footer"
4. Frames: "Minimal photography portfolio, 3 large album covers editorial spacing, location and photo count meta, warm accent"
5. Album: "Minimal masonry photo album with lightbox affordance, EXIF meta line, captions, light theme"
6. About: "Minimal about contact page, one face two bios engineer photographer side by side, email GitHub Instagram links"

## Voice
Quiet, precise. No gradients, no heavy shadows, no stock illustrations.
