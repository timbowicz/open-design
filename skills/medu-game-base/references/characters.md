# medu.game — character renders

The brand ships 44 3D character render PNGs across four roles, bundled in this skill at `assets/brand/characters/`. Use them as the primary imagery whenever the brief mentions humans, onboarding, scenarios, testimonials, or empty states. Always verify the file exists on disk with `Read` (or `ls assets/brand/characters/`) before referencing one in an artifact — filenames below are a guide, not a guarantee.

## Roles

| Role | Filename prefix | When to use | Shirt color | Typical pose set |
|---|---|---|---|---|
| **Guide — turtleneck (white)** | `expert-*-white.png` | Marketing pages, onboarding, neutral expert moments, hero with copy on the left. | white turtleneck | `point-left`, `standing`, `thinking`, `ipad` |
| **Guide — pink shirt** | `expert-*-pink.png` | Testimonials, community sections, B2B hero where you want a warmer touch. | medu pink | `standing`, `point-left`, `desk-work`, `thinking`, `holding-ipad`, `hunch` |
| **Arts — cardiologist (white coat)** | `cardiologist-*.png` | Clinical scenarios, ICU, cardiology, anything where the role must read as "specialist". | white coat over scrubs | `standing`, `point-left`, `thinking`, `hunch` |
| **Ambulance — acute zorg** | `ambulance-{female,male}-*.png` | Resuscitation, triage, BHV (workplace first aid), acute scenarios. | ambulance uniform | base + numbered variants |
| **Hero trio** | `hero-trio.png` | The only multi-character render. Use sparingly for top-of-page brand moments. | mixed | n/a |

## Pose vocabulary

| Pose | Use it for | Copy lives… |
|---|---|---|
| `point-left` | "welcome", "look at this" — the character points toward the headline. | …on the **right** of the character (or pose mirrored: `point-right`). |
| `standing` | Neutral filler, default hero pose. | …anywhere. |
| `thinking` | Reflection, post-scenario debrief, results screens. | …on the left (character on the right). |
| `hunch` | Empty states, soft errors, "not yet"-states. | …above the character, centered. |
| `holding-ipad` / `desk-work` | Studying, dashboards, learning hub, progress screens. | …on the left, with metric tiles on the right. |

## Placement rules (must follow)

1. **Always on a brand-color background** — `--medu-blue-dark`, `--medu-pink-light`, or `--medu-pink`. Never on a photo, gradient, or non-brand color.
2. **Right-aligned by default** — character lives in the right half so copy breathes on the left. Centered placement is allowed for solo hero moments.
3. **Feet on the bottom edge** of the colored area. Do not float the character.
4. **Match shirt color to background**:
   - white-shirt → on pink or off-white.
   - pink-shirt → on dark blue or off-white.
   - white coat / ambulance → on dark blue or pink.
   - ❌ Never silhouette-killing pink-on-pink.
5. **One character per panel.** The hero-trio render (if present in the source library) is the only multi-character composition allowed.
6. **No drop shadows on the character** itself — the PNG already includes its own contact shadow if any. Don't add CSS `filter: drop-shadow(...)`.

## Referencing a character in an artifact

Before you write `<img src="…">`, do this:

1. `ls assets/brand/characters/` (or `Read` a candidate filename) to confirm the file exists in this skill bundle.
2. Use the skill-relative path the loader injected for this skill, e.g. `assets/brand/characters/<filename>.png`. The exact preamble form (relative `.od-skills/...` vs absolute fallback) is shown in the skill-root preamble at the top of this skill — pick the relative form when running inside a project.
3. Example, using the skill-relative path:

```html
<img src=".od-skills/medu-game-base/assets/brand/characters/expert-point-left-white.png"
     alt="medu.game guide pointing toward the headline"
     style="height: 100%; width: auto; object-fit: contain; object-position: bottom right;" />
```

If the file is not present on disk, **stop and tell the user** rather than referencing a hallucinated filename. Fall back to either a pill-loop pattern (see `patterns.md`) or healthcare photography masked into an M-loop silhouette (see DESIGN.md §11).

## Fallback: photography

When characters don't fit the brief, use warm, daylit photography of healthcare professionals:

- Mask into M-loop silhouettes or large quarter-circle "scoops" — never square crops.
- Slightly desaturated, no heavy filter, no grain, no B&W.
- People > UI screenshots > objects.
