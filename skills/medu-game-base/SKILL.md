---
name: medu-game-base
description: |
  Web prototypes, marketing modules, and in-product UI in the medu.game /
  medu.health brand system. Use when the active design system is `medu-game`
  and the user is asking for a web page, landing page, feature module,
  dashboard, or in-product screen. Produces a single-file HTML artifact with
  pill buttons, dual-pink + dark-blue palette, calm motion, lowercase product
  names, and Dutch "je"-form copy.
triggers:
  - "medu"
  - "medu.game"
  - "medu.health"
  - "zorg"
  - "scenario"
  - "leerplatform"
od:
  mode: prototype
  platform: desktop
  scenario: education
  preview:
    type: html
    entry: index.html
  design_system:
    requires: true
    sections: [color, typography, layout, components]
---

# medu.game — base prototype skill

This skill produces web artifacts in the medu.game / medu.health brand system. Run it whenever the user wants a web surface (landing, marketing, in-product UI, dashboard, scenario detail, learning hub) and the active design system is `medu-game`.

## Pre-flight (REQUIRED — read before writing any code)

Read these files in this order. Do not skip — these encode the brand's load-bearing decisions and are not in the prompt itself.

1. `assets/colors_and_type.css` — canonical CSS token file. Use these custom properties verbatim; never inline a hex that exists as a token.
2. `assets/seed.html` — live preview of the entire system. Use it as your component reference and as a copy-paste seed when starting a new layout.
3. `references/checklist.md` — P0/P1/P2 pre-emit checks. You MUST run the P0 checks before emitting `<artifact>`.
4. `references/patterns.md` — the pill-loop motif spec (the only allowed decorative system).
5. (If the brief mentions characters, humans, or onboarding) `references/characters.md` — pose vocabulary and placement rules.

If any of these files are missing or unreadable, stop and tell the user instead of improvising.

## Brand essence (bind verbatim, do not paraphrase)

- **Product names are lowercase**: `medu.game`, `medu.health`. The `.` is the brand mark — color it `--medu-pink` whenever the wordmark is set in HTML type. Never substitute another character.
- **Voice**: Dutch by default, second-person "je"/"jou". Friendly-professional, conversational. English on explicit request only. "u" only for sales/enterprise channels.
- **Tagline (NL)**: "Hét digitale leerplatform voor zorgprofessionals."
- **Tagline (EN)**: "The digital learning platform for healthcare professionals."
- **Calm by default**: no exclamation marks outside short CTA labels, no marketing buzzwords, no emoji.

## What this skill produces

- A single-file HTML artifact (inline `<style>`, optional inline `<script>`).
- Linked or inlined tokens from `assets/colors_and_type.css`.
- Default `lang="nl"` on `<html>` unless the brief explicitly asks for English.
- Optional fonts via `@font-face` from `assets/fonts/`. Fallback: MuseoModerno (display) + Outfit (body) from Google Fonts.

## Layout defaults

- Page max-width: 1400px. Content area: 1280px.
- Horizontal padding: 64px desktop, 24px mobile (≤ 960px).
- Vertical rhythm: minimum `--space-12` (48px) before any major section, `--space-20` (80px) for band transitions, `--space-30` (120px) for hero.
- Card grids: 12–24px gap, CSS Grid.

## Component defaults

Read `assets/seed.html` for the canonical implementations. Quick reference:

- **Buttons**: always `border-radius: var(--radius-pill)`. Primary = `--medu-blue-dark` fill, `--medu-pink-light` text. Secondary = `--medu-pink` fill, `--medu-blue-dark` text. Hover lifts `translateY(-1px)` over 140ms.
- **Cards**: white surface, `--radius-lg`, `--shadow-md`, no border. On dark-blue surfaces switch to `#000048` fill with a 1px `rgba(255,255,255,.08)` inset.
- **Inputs**: `--radius-md`, 1px ink-10 border, white fill. Focus ring: 4px `--medu-pink-light` (no shadow).
- **Icons**: Lucide via `https://unpkg.com/lucide-static@latest`. 1.75–2px stroke, `stroke-linecap: round`, `currentColor`. Never filled, never emoji.
- **Logo / patterns**: real-file fallbacks live in `assets/brand/logos/` (logomark SVG, full lockup, pink/blue patterns) and `assets/brand/patterns/` (additional motif SVGs). Default wordmark is HTML type — only reach for the PNG/SVG when you need a brand-pure splash moment.

## Decoration

The only allowed decorative motif is the **pill loop** — capsules echoing the logomark. Stroke ≈18–22% of loop height. Three modes:

1. Pink loops on dark-blue (primary).
2. Dark-blue loops on pink (inverted).
3. Pink-on-pink at 55% opacity (tonal).

**Do not invent new illustrative SVGs.** All decoration is the pill loop, recombined. See `references/patterns.md` for templates.

## Imagery

Prefer the 3D character renders bundled at `assets/brand/characters/` and catalogued in `references/characters.md` (44 PNGs across 4 roles: turtleneck guide, pink-shirt guide, white-coat cardiologist, ambulance acute zorg, plus a single hero-trio render). Rules:

- Always on a brand-color background. Never on a photo, gradient, or non-brand color.
- Right-aligned by default — copy on the left, character on the right. Centered placement is fine for solo hero moments.
- Feet on the bottom edge of the colored area.
- Match shirt color to background (white-shirt on pink, pink-shirt on dark blue or off-white). Never pink-on-pink.
- One character per panel. No drop shadows on the character itself.

When characters don't fit the brief, fall back to warm, daylit healthcare photography masked into M-loop silhouettes or quarter-circle scoops. Never square crops.

## Pre-emit gate (run before `<artifact>`)

1. Run the full P0 section of `references/checklist.md`. Fix any failure, then rerun. Do not emit until P0 is clean.
2. Run the silent 5-dimensional self-critique (philosophy / hierarchy / execution / specificity / restraint). Anything < 3/5 is a regression — fix and rescore. Two passes is normal.
3. Only then emit `<artifact>`.

## Output contract

- Wrap the final output in `<artifact>`.
- One self-contained HTML document.
- Comment the major sections in the HTML (`<!-- hero -->`, `<!-- features -->`, etc.) so the user can navigate.
- If the brief is ambiguous on copy, write honest placeholders (`—`, `[scenarionaam]`, `8,5 uur leertijd`) rather than fabricating numbers.
