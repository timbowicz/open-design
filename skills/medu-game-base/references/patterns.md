# medu.game — pill-loop pattern

The brand DNA is **geometric loops** — pill capsules echoing the logomark, repeated as a signature ornament. This is the **only** decorative system in the brand. Do not invent new illustrative SVGs, do not use generic background gradients, do not reach for icon-as-decoration.

## Anatomy

A pill loop is a stroked rounded-rectangle (a capsule). Always:

- `stroke-linecap: round` — the cap is the loop's signature.
- `stroke-linejoin: round` (when paths join, e.g. zigzags).
- **Stroke width** = ~18–22% of the loop's short side. Minimum 14px on screen for hero scale; 8–10px for compact card-scale ornaments.
- **No fill.** The loop is a stroke shape. Stack two strokes for the layered-pink effect, never `fill`.

## Three approved modes

| # | Mode | When to use | Stroke color | Background |
|---|---|---|---|---|
| 1 | **Pink-on-dark** | Default. Hero, dark-blue surfaces, the most "Medu" surface. | `var(--medu-pink)` | `var(--medu-blue-dark)` |
| 2 | **Dark-on-pink** | Marketing moments, inverted hero, light pages with weight. | `var(--medu-blue-dark)` | `var(--medu-pink-light)` |
| 3 | **Pink-on-pink (tonal)** | Subtle texture, secondary panels, behind text. Stroke at 55% opacity. | `var(--medu-pink)` at `opacity: 0.55` | `var(--medu-pink-light)` |

Pick exactly one mode per surface. Never combine two modes on the same panel — the pattern stops reading as a pattern and starts reading as noise.

## Scale

- **Card-scale (≈120–240px square):** one or two loops, used as a corner ornament or as a "wax seal" tag.
- **Section-scale (≈480–720px):** a row of 3–5 capsules, often forming a soft zigzag or wave. One zigzag per card is enough.
- **Hero-scale (full width):** an oversized loop is allowed to break out of the frame — let one capsule run off the right edge of the page. Restraint: no more than two oversized loops per viewport.

## Edge ribbon (hero pages only)

The brand book uses a vertical strip of pink pill marks pinned to the right page-edge. Mirror this on hero pages as a fixed page-edge ornament, then stop — do not add another decorative element on the same screen.

## SVG templates

### Mode 1 — pink-on-dark (single loop)

```html
<svg viewBox="0 0 240 120" width="240" height="120" aria-hidden="true">
  <rect x="20" y="20" width="200" height="80" rx="40" ry="40"
        fill="none" stroke="#FFC8C7" stroke-width="20"
        stroke-linecap="round" stroke-linejoin="round" />
</svg>
```

### Mode 2 — dark-on-pink (zigzag of three)

```html
<svg viewBox="0 0 720 240" width="720" height="240" aria-hidden="true">
  <g fill="none" stroke="#000048" stroke-width="22"
     stroke-linecap="round" stroke-linejoin="round">
    <rect x="20"  y="40"  width="220" height="120" rx="60" ry="60" />
    <rect x="250" y="80"  width="220" height="120" rx="60" ry="60" />
    <rect x="480" y="40"  width="220" height="120" rx="60" ry="60" />
  </g>
</svg>
```

### Mode 3 — pink-on-pink tonal (subtle background)

```html
<svg viewBox="0 0 480 480" width="480" height="480" aria-hidden="true"
     style="opacity: 0.55;">
  <g fill="none" stroke="#FFC8C7" stroke-width="18"
     stroke-linecap="round" stroke-linejoin="round">
    <rect x="40"  y="80"  width="180" height="100" rx="50" ry="50" />
    <rect x="260" y="80"  width="180" height="100" rx="50" ry="50" />
    <rect x="40"  y="260" width="180" height="100" rx="50" ry="50" />
    <rect x="260" y="260" width="180" height="100" rx="50" ry="50" />
  </g>
</svg>
```

## Don'ts

- ❌ Don't fill a loop with color — strokes only.
- ❌ Don't mix modes on one panel.
- ❌ Don't drop pill loops on photo backgrounds — only on `--medu-blue-dark`, `--medu-pink-light`, or `--medu-pink`.
- ❌ Don't combine pill loops with a CSS gradient — the brand has no gradients.
- ❌ Don't use the loop as a button or a clickable element. It is decorative ornament.
- ❌ Don't add drop shadows or filters to the loops. Flat strokes, full stop.
