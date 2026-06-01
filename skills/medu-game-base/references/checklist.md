# medu.game — pre-emit checklist

Run this checklist before emitting `<artifact>`. **P0 items are blocking** — fix and rerun. P1 items are strongly recommended; only skip with a written reason in your reasoning. P2 is polish.

The full design rationale lives in the active `DESIGN.md`. This file is the enforceable subset.

---

## P0 — blocking (the artifact does not ship until these pass)

### Color

- [ ] Zero occurrences of `#000`, `#000000`, or the `black` keyword. Body text is `var(--medu-blue-dark)` (#000048).
- [ ] No grey neutrals. All neutrals are ink-tints: `rgba(0,0,72,*)`. Hairlines use `--medu-ink-10`, body subtleties use `--medu-ink-60`.
- [ ] No mid-blues between `#141484` and `#000048`. The system lives at the extremes; nothing in between.
- [ ] No CSS gradients. Layered pinks (`pink-light` over `pink`) is the only acceptable two-tone effect.
- [ ] CSS custom properties used over raw hex — `var(--medu-blue-dark)`, not `#000048`, anywhere a token exists.

### Naming & casing

- [ ] Product names are always lowercase: `medu.game`, `medu.health`. Never "MEDU.GAME", never "Medu.Game".
- [ ] When the wordmark is set in HTML type, the `.` is wrapped in a span colored `var(--medu-pink)`. Example: `medu<span class="dot">.</span>game`.
- [ ] No ALL-CAPS headings anywhere. Eyebrows or short captions may be uppercase only if `letter-spacing: 0.06em` or higher.

### Typography & icons

- [ ] No emoji. No unicode glyphs used as icons (✓, ★, →, etc.).
- [ ] All icons come from Lucide (`https://unpkg.com/lucide-static@latest`). Stroke 1.75–2px, `stroke-linecap: round`, `stroke-linejoin: round`. Never filled.
- [ ] Display type = MuseoModerno 500. Body type = Fieldwork Geo 300. UI/buttons/H1–H3 = Fieldwork Geo 600.

### Components

- [ ] Every `<button>` and badge has `border-radius: var(--radius-pill)` (999px). Pill is non-negotiable.
- [ ] Cards: no border. Shadow is `var(--shadow-md)`. White fill on light pages, `#000048` fill with `inset 0 0 0 1px rgba(255,255,255,.08)` on dark pages.
- [ ] Inputs: `var(--radius-md)` (12px), 1px `--medu-ink-10` border, white fill. Focus ring is 4px `--medu-pink-light` (no box-shadow).
- [ ] Borders: `--border-thin`, `--border-mid`, or `--border-strong`. Never raw black or grey.

### Decoration

- [ ] No invented illustrative SVGs. Decoration is the pill loop only, in one of the three approved modes (pink-on-dark / dark-on-pink / pink-on-pink at 55%).
- [ ] No hand-drawn humans. Characters come from the renders library or are absent.
- [ ] **No VR imagery, no headsets, no VR copy.** medu.game does not currently ship a VR product, so VR visuals are misleading. If a brief explicitly asks for VR, stop and confirm with the user before introducing it.

### Voice

- [ ] Body copy uses "je" / "jou" (Dutch second person), unless the brief specifies "u" (sales/enterprise) or English.
- [ ] CTAs are short, lowercase, action-first, under 24 characters. Examples: `start je proefperiode`, `bekijk scenario`, `plan een demo`.
- [ ] No marketing buzzwords. Forbidden list: "revolutionary", "AI-driven", "unleash", "next-gen", "cutting-edge", "supercharge", "game-changing".
- [ ] Numerals in European format. Comma decimals (`8,5`), `€` before the number with no space (`€19,95`).
- [ ] No exclamation marks outside short CTA labels.
- [ ] No fabricated metrics. If the brief lacks a real number, write `—` or a labelled placeholder, never "10× faster" or "85% improvement".

---

## P1 — strongly recommended

### Layout & spacing

- [ ] Page horizontal padding is 64px on desktop, 24px on mobile (≤ 960px).
- [ ] At least `var(--space-12)` (48px) of vertical breathing room before each major section.
- [ ] Logo clear-space ≥ one logomark loop on every side.
- [ ] Min logo width: 110px. Below that, use the solitaire logomark.
- [ ] Card grids use 12–24px gaps via CSS Grid.
- [ ] Page max-width 1400px, content area 1280px.

### Motion

- [ ] Hover lifts use `translateY(-1px)` on buttons, `translateY(-2px)` on cards. Press dims and removes the lift.
- [ ] Transitions use `var(--ease-out)` and `var(--dur-fast)` (140ms) for hover, `var(--dur-mid)` (240ms) for panel transitions.
- [ ] No spring physics, no bounces, no parallax. Hover states fade.

### Imagery

- [ ] Characters (when used) sit on a brand-color background, right-aligned, feet on the bottom edge.
- [ ] Shirt color contrasts the background (white-shirt on pink, pink-shirt on dark blue or off-white). Never pink-on-pink silhouette.
- [ ] One character per panel. No drop shadows on the character itself.
- [ ] Photography (when used) is masked into M-loop silhouettes or quarter-circle scoops. Never square crops.

### Iconography

- [ ] All icons in a given artifact share the same stroke weight (pick one of 1.75 or 2px) and use `stroke-linecap: round`.
- [ ] Icons inherit `currentColor`, no hard-coded color values.

### Accessibility

- [ ] Body text contrast against background passes WCAG AA (4.5:1). Dark-blue on pink-light passes. Pink on white does not — never use pink as body text on white.
- [ ] All interactive elements have visible focus states. Use the pink-light focus ring.
- [ ] `lang="nl"` on `<html>` for Dutch content.

---

## P2 — polish

- [ ] Heading line-heights: 1.05 for display, 1.15 for h1/h2, 1.25 for h3.
- [ ] Body line-height: 1.55.
- [ ] Letter-spacing: -0.01em on display only; default elsewhere.
- [ ] Quote slabs use Fieldwork Geo 600, indented `var(--space-6)`, with a left rule of `--medu-pink` 4px.
- [ ] Edge ribbon (vertical pill marks at right page-edge) used on hero pages only.
- [ ] Phone numbers formatted `06 123 456 78`. URLs lowercase: `www.medu.health`.
- [ ] Tabular numbers (`font-variant-numeric: tabular-nums`) on any column of figures (pricing, scoreboards).

---

## Self-critique scoring (run silently before emit)

After P0 passes, score the artifact 1–5 across these five dimensions. Anything below 3/5 is a regression — fix and rescore. Stop only when all five are ≥ 4/5.

1. **Philosophy** — does it feel like medu.game (calm, professional, healthcare-Dutch) or generic AI-design output?
2. **Hierarchy** — is the eye-path obvious within 3 seconds? One clear primary CTA per view?
3. **Execution** — are spacings, radii, and weights consistent across every component? No off-by-one paddings?
4. **Specificity** — concrete copy, real scenarios, honest placeholders? Nothing vague?
5. **Restraint** — anything decorative that doesn't earn its space? Cut it.

Two passes is normal. Three is acceptable. If you can't get above 3/5 on a dimension after three passes, surface it to the user instead of shipping.
