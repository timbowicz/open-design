# Medu.game

> Category: Healthcare & Education
> Surface: web
> Dutch-first brand system for `medu.game` and its sister product `medu.health` — virtual simulation, game-based learning for healthcare professionals. Dual-pink + dark-blue palette, pill-shaped buttons, MuseoModerno display + Fieldwork Geo body, calm motion, lowercase wordmarks, `je`-form copy.

> **Portable design specification.** This file is the open-standard brand reference for `medu.game` (and its sister product `medu.health`). It can be dropped into any codebase, design tool, or AI agent context as a single source of truth. Pair with `colors_and_type.css` for ready-to-use tokens.

**Tagline (NL):** "Hét digitale leerplatform voor zorgprofessionals."
**Tagline (EN):** "The digital learning platform for healthcare professionals."

---

## 1 · Identity

- **Product:** medu.game — virtual simulation, game-based learning for healthcare professionals.
- **Sister product:** medu.health — the broader digital learning platform, shares the same visual system.
- **Source-of-truth:** Huisstijlhandboek Medu.Health (NL brand book) + the medu.game logomark.
- **Brand voice:** friendly-professional, conversational, second-person Dutch ("je"). English on request.

### Naming & casing
- Product names are **always lowercase**: `medu.game`, `medu.health`.
- The `.` is a brand mark — color it `--medu-pink` when typeset, never substitute with another character.
- Headings and most UI labels: lowercase. Body copy: sentence case.
- No ALL-CAPS headings. No emoji.

---

## 2 · Color

Four-color core palette, taken verbatim from the brand book.

| Token | Hex | Role |
|---|---|---|
| `--medu-pink-light` | `#FFE0E0` | softest fills, page backgrounds, app-icon background |
| `--medu-pink` | `#FFC8C7` | primary accent, logo shadow, decorative shapes |
| `--medu-blue` | `#141484` | bright primary blue, links, secondary CTAs |
| `--medu-blue-dark` | `#000048` | default body text, deep surfaces, primary CTA fill |

### Neutrals (extension, not in printed guide)

| Token | Value | Role |
|---|---|---|
| `--medu-white` | `#FFFFFF` | pure white surfaces |
| `--medu-pink-50` | `#FFF4F4` | near-white pink, subtle panels |
| off-white | `#FBF9F7` | warm page background |
| `--medu-blue-700` | `#0A0A66` | hover for primary blue |
| `--medu-ink-60` | `rgba(0,0,72,0.6)` | secondary text |
| `--medu-ink-40` | `rgba(0,0,72,0.4)` | tertiary text, placeholders |
| `--medu-ink-20` | `rgba(0,0,72,0.2)` | mid borders |
| `--medu-ink-10` | `rgba(0,0,72,0.1)` | hairline borders |
| `--medu-ink-05` | `rgba(0,0,72,0.05)` | subtle fills |

### Color rules
- **No black.** Borders use ink-tints (`rgba(0,0,72,*)`) — never `#000`.
- **No mid-blues** between `#141484` and `#000048` — the system lives at the extremes.
- **No gradients.** The palette is flat. Layered pinks (`pink-light` over `pink`) are the only acceptable two-tone effect.
- Pair pink-light (fills) with pink (marks/strokes); they're close in value, so don't compete.

---

## 3 · Typography

Two families. Display is for moments; body carries the work.

| Family | Weights | Use |
|---|---|---|
| **MuseoModerno** (variable) | 500 (Medium) | display only — hero titles, big numbers, the wordmark when set in type |
| **Fieldwork Geo** | 300 / 400 / 600 | body copy (300), sub-headings & UI labels (400), buttons & H1–H3 & emphasis (600) |
| **System monospace** fallback | — | code, hex codes, tokens |

### Web fallback stack
- Display: `"MuseoModerno", "Quicksand", system-ui, sans-serif`
- Body: `"Fieldwork Geo", "Nunito", system-ui, sans-serif`
- If Fieldwork Geo cannot be licensed, **Outfit** is the approved Google Fonts substitute.

### Type scale

| Role | Family | Weight | Size (clamp) |
|---|---|---|---|
| display | MuseoModerno | 500 | `clamp(48px, 6vw, 84px)` / lh 1.05 / -0.01em |
| h1 | Fieldwork Geo | 600 | `clamp(36px, 4.4vw, 56px)` / lh 1.15 |
| h2 | Fieldwork Geo | 600 | `clamp(28px, 3vw, 40px)` / lh 1.15 |
| h3 | Fieldwork Geo | 600 | 22px / lh 1.25 |
| h4 | Fieldwork Geo | 600 | 18px |
| body | Fieldwork Geo | 300 | 16px / lh 1.55 |
| small | Fieldwork Geo | 400 | 14px |
| eyebrow / caption | Fieldwork Geo | 600 | 12px / tracking 0.06em (UI) or 0.14em (uppercase) |

Default body: Fieldwork Geo Light at 16px / 1.55 line-height in `--medu-blue-dark`.

---

## 4 · Spacing

4-point base scale. **Token name = pixel value** — no mental conversion.

| Token | Value | Use |
|---|---|---|
| `--space-1` | 4px | hair |
| `--space-2` | 8px | tight |
| `--space-3` | 12px | — |
| `--space-4` | 16px | base |
| `--space-6` | 24px | comfy / card internal |
| `--space-8` | 32px | section internal |
| `--space-12` | 48px | block lead / desktop page margin |
| `--space-14` | 56px | block |
| `--space-20` | 80px | band |
| `--space-30` | 120px | hero |

Default desktop page margin: `--space-12` (48px). Card internal padding: `--space-6` to `--space-8`.

---

## 5 · Radii

The pill (stadium) shape is the brand's signature — it echoes the loops of the logomark.

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 6px | input · chip |
| `--radius-md` | 12px | field · tag · small card |
| `--radius-lg` | 20px | card · section · panel |
| `--radius-pill` | 999px | **buttons & badges — non-negotiable** |

Avoid square corners outside full-bleed sections.

---

## 6 · Shadows

Tinted dark-blue ink, never neutral black.

| Token | Use |
|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,72,.06), 0 2px 6px rgba(0,0,72,.04)` — subtle lift, chip / toast |
| `--shadow-md` | `0 2px 8px rgba(0,0,72,.08), 0 12px 32px rgba(0,0,72,.06)` — card, hovered tile |
| `--shadow-lg` | `0 12px 40px rgba(0,0,72,.12), 0 2px 6px rgba(0,0,72,.06)` — modal, focused visual |
| `--shadow-inset` | `inset 0 0 0 1px rgba(0,0,72,.08)` — define edges on dark surfaces |

---

## 7 · Borders

| Token | Value | Use |
|---|---|---|
| `--border-thin` | `1px solid rgba(0,0,72,.10)` | hairlines |
| `--border-mid` | `1.5px solid rgba(0,0,72,.20)` | stronger separation |
| `--border-strong` | `2px solid #000048` | loud separators |

**Never** use black or gray borders.

---

## 8 · Motion

The brand is calm. No spring physics, no bounces, no parallax.

| Token | Value |
|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` |
| `--dur-fast` | 140ms (hover state changes) |
| `--dur-mid` | 240ms (panel transitions, card hovers) |
| `--dur-slow` | 420ms (page transitions, content reveals) |

Hover states **fade**, they don't bounce. Pill loops on hero patterns may travel slowly (`30s+`) for ambient motion.

---

## 9 · Components

### Buttons
- Always `--radius-pill`. Padding `13–14px / 22–24px`. Family Fieldwork Geo Demibold.
- **Primary:** `--medu-blue-dark` fill, `--medu-pink-light` text. Hover → `--medu-blue`.
- **Secondary:** `--medu-pink` fill, `--medu-blue-dark` text. Hover → `--medu-pink-light`.
- **Ghost:** transparent, dark-blue border + text. Hover inverts to dark-blue fill.
- **Pink-on-dark:** for use on dark-blue surfaces. `--medu-pink` fill, dark-blue text.
- Hover lifts `translateY(-1px)`, 140ms ease-out. Press dims and removes the lift.
- Disabled = `0.4` opacity, no other change.

### Badges
- Always `--radius-pill`. 6/12 padding. 12px Fieldwork Geo Demibold.
- Variants: `pink` (light-pink fill), `blue` (dark-blue fill, pink-light text), `outline` (ink-15 hairline), `live` (pink fill + dark-blue dot).

### Inputs
- `--radius-md`, `1px` ink-10 border, white fill.
- Focus: dark-blue border + 4px `--medu-pink-light` ring (no shadow).
- Placeholder color: `--medu-ink-40`.
- Field labels: 13px Fieldwork Geo Demibold.

### Cards
- White background, `--radius-lg`, `--shadow-md`. **No border** (the shadow does the work).
- Internal padding `24–32px`.
- On pink page backgrounds: white cards lift beautifully.
- On dark blue: cards switch to `#000048` fill with a 1px `rgba(255,255,255,.08)` inset.
- Hover: `translateY(-2px)` + `--shadow-lg`.

### Links
- Inherit color from context, no underline by default.
- Hover: 1px `currentColor` underline at 4px offset. No color change.

---

## 10 · Patterns & motifs

The brand DNA is **geometric loops** — pill capsules echoing the logomark, repeated as a signature pattern.

- **Stroke width:** ≈18–22% of loop height. Always `stroke-linecap: round`. Min 14px stroke on screen.
- **Three modes:**
  1. Pink loops on dark-blue (primary, the most "Medu" surface).
  2. Dark-blue loops on pink (inverted, for marketing moments).
  3. Pink-on-pink at 55% opacity (tonal, for subtle texture).
- **Scale:** loops can run oversized — let them break out of the frame. One full zigzag per card is enough.
- **Edge ribbon:** the brand book uses a vertical strip of pink pill marks at the right page-edge. Mirror this on hero pages as a fixed page-edge ornament.

**Don't** hand-draw new illustrative SVGs. All decoration is the loop, recombined.

---

## 11 · Imagery

Two parallel tracks, in order of preference:

### A. 3D character renders (preferred)

A cast of ~75 pose variants across four roles, all PNG with transparent background, feet aligned to canvas bottom.

| Role | When to use | Shirt color |
|---|---|---|
| **Guide — turtleneck** (white) | marketing, onboarding, neutral expert moments | white |
| **Guide — pink shirt** | testimonials, community, B2B hero — warmer touch | pink |
| **Arts — cardiologist** (white coat) | clinical scenarios, ICU, cardiology | white coat |
| **Ambulance — acute zorg** | resuscitation, triage, BHV, acute scenarios | uniform |

#### Pose vocabulary
- `point-left` — "welcome" / "look at this" — copy on the right.
- `standing` — neutral filler.
- `thinking` — reflection, debrief, results.
- `hunch` — empty states, soft errors.
- `holding-ipad / desk-work` — studying, dashboards, learning hub.

#### Usage rules
1. **Always on a brand-color background** — dark blue, darker pink, light pink. Never on a photo, gradient, or non-brand color.
2. **Right-aligned by default** — character lives in the right half so copy breathes on the left. Centered placement is fine for solo hero moments.
3. **Feet on the bottom edge** of the colored area.
4. **Match shirt color to background** — white-shirt on pink, pink-shirt on dark blue or off-white. Avoid silhouette-killing pink-on-pink.
5. **One character per panel.** The hero-trio render is the only multi-character composition.
6. **No drop shadows on the character** itself.

### B. Photography

When characters don't fit, use warm, daylit photography of healthcare professionals.

- Mask into M-loop silhouettes or large quarter-circle "scoops" — never square crops.
- Slightly desaturated, no heavy filter, no grain, no B&W.
- People > UI screenshots > objects.

---

## 12 · Iconography

- **Stack:** [Lucide](https://lucide.dev) icons (CDN: `https://unpkg.com/lucide-static@latest`).
- **Style:** 1.75–2px stroke, `stroke-linecap: round`, `stroke-linejoin: round`. Never filled.
- **Color:** `currentColor` (inherits the dark-blue body).
- **No emoji.** No unicode glyphs as icons.
- If a product-specific icon is required and isn't in Lucide, draw it in the same style: round caps, ≈1.75px stroke, geometric.

⚠ Substitution flag: no proprietary Medu icon set is supplied. Confirm with brand owner before publishing if a real one exists.

---

## 13 · Voice & tone

| Attribute | Do | Don't |
|---|---|---|
| Aanspreekvorm | "je krijgt na elke beslissing directe feedback." | "De gebruiker ontvangt na elke beslissing feedback." |
| Casing | "start je proefperiode" | "START JE PROEFPERIODE" |
| Claim | "hét digitale leerplatform voor zorgprofessionals." | "De #1 ultieme zorgleer-app van 2026!!" |
| CTA | "plan een demo" | "Klik HIER om nu direct te starten →" |
| Numerals | "€19,95 per maand · 8,5 uur leertijd" | "$19.95/mo · 8.5 hours of content" |

### Conventions
- **Pronouns:** "je" / "jou" by default. "u" only for sales/enterprise channels.
- **Numerals:** European — comma decimals (`8,5`), `€` before number (`€19,95`).
- **Phone format:** `06 123 456 78`.
- **URLs:** lowercase (`www.medu.health`).
- **CTAs:** short, lowercase, action-first, under 24 chars. Examples: `start je proefperiode`, `bekijk scenario`, `plan een demo`.
- **Emphatic Dutch:** lean on "Hét" for hero claims (`Hét digitale leerplatform…`).

### Don'ts
- No ALL-CAPS headings.
- No exclamation-heavy marketing tone outside CTAs.
- No emoji.
- No marketing buzzwords ("revolutionary", "AI-driven", "unleash").

---

## 14 · Layout

- **Logo clear-space:** ≥ height of one logomark loop on every side.
- **Min logo width:** 110px on screen. Below that, use the solitaire logomark.
- **Page max-width:** 1400px (`--space-30 + 1280` content area).
- **Page horizontal padding:** 64px desktop, 24px mobile (≤960px).
- **Card grids:** 12px–24px gap. Use CSS Grid.
- **Layouts breathe** — generous whitespace around logo, color cards, and quote slabs.

---

## 15 · Token reference (CSS custom properties)

For drop-in use, the canonical token file is `colors_and_type.css`. Below is a condensed reference.

```css
:root {
  /* Brand colors */
  --medu-pink-light: #FFE0E0;
  --medu-pink:       #FFC8C7;
  --medu-blue:       #141484;
  --medu-blue-dark:  #000048;
  --medu-white:      #FFFFFF;

  /* Neutrals */
  --medu-pink-50:    #FFF4F4;
  --medu-blue-700:   #0A0A66;
  --medu-ink-60:     rgba(0,0,72,0.60);
  --medu-ink-40:     rgba(0,0,72,0.40);
  --medu-ink-20:     rgba(0,0,72,0.20);
  --medu-ink-10:     rgba(0,0,72,0.10);
  --medu-ink-05:     rgba(0,0,72,0.05);

  /* Type families */
  --font-display: "MuseoModerno", "Quicksand", system-ui, sans-serif;
  --font-body:    "Fieldwork Geo", "Nunito", system-ui, sans-serif;
  --font-mono:    ui-monospace, "SF Mono", Menlo, monospace;

  /* Type scale */
  --fs-display: clamp(48px, 6vw, 84px);
  --fs-h1:      clamp(36px, 4.4vw, 56px);
  --fs-h2:      clamp(28px, 3vw, 40px);
  --fs-h3:      22px;
  --fs-body:    16px;
  --fs-small:   14px;
  --fs-tiny:    12px;

  /* Spacing (name == px) */
  --space-1: 4px;   --space-2: 8px;   --space-4: 16px;
  --space-6: 24px;  --space-8: 32px;  --space-12: 48px;
  --space-14: 56px; --space-20: 80px; --space-30: 120px;

  /* Radii */
  --radius-sm: 6px;  --radius-md: 12px;
  --radius-lg: 20px; --radius-pill: 999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,72,.06), 0 2px 6px rgba(0,0,72,.04);
  --shadow-md: 0 2px 8px rgba(0,0,72,.08), 0 12px 32px rgba(0,0,72,.06);
  --shadow-lg: 0 12px 40px rgba(0,0,72,.12), 0 2px 6px rgba(0,0,72,.06);

  /* Motion */
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-fast: 140ms;
  --dur-mid:  240ms;
  --dur-slow: 420ms;
}
```

---

## 16 · Quick start

```html
<link rel="stylesheet" href="colors_and_type.css">
<style>
  body {
    font-family: var(--font-body);
    color: var(--medu-blue-dark);
    background: var(--medu-white);
    margin: 0;
  }
</style>

<h1 class="medu-display">medu<span style="color:var(--medu-pink)">.</span>game</h1>
<p class="medu-body">Hét digitale leerplatform voor zorgprofessionals.</p>
<button class="medu-btn-primary">start je proefperiode</button>
```

---

## 17 · Files in this design system

| Path | Purpose |
|---|---|
| `design.md` | this file — portable spec |
| `README.md` | extended brand handbook, prose form |
| `SKILL.md` | agent skill manifest |
| `colors_and_type.css` | drop-in CSS variables + utility classes |
| `Design System.html` | live, browseable preview of the entire system |
| `fonts/` | MuseoModerno (variable) + Fieldwork Geo Light/Regular/Demibold |
| `assets/` | logos, app icon, brand book PDF, pill patterns |
| `assets/characters/` | 3D character render library (~75 PNGs) |
| `ui_kits/medu-game/` | clickable React UI kit reference |
| `preview/` | per-token specimen cards |
| `reference/legacy/` | older versions kept for reference |

---

*Last updated: 2026-05-07 · Source: Huisstijlhandboek Medu.Health + medu.game logomark.*
