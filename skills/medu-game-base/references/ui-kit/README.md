# Medu.game UI Kit

A high-fidelity, **interactive** recreation of what the Medu.game product looks like, built directly from the Medu.health brand book. No production codebase or Figma was supplied — these screens **interpret** the brand DNA into a plausible product surface for a virtual-simulation learning platform for healthcare professionals.

> ⚠ **Reconstruction, not extraction.** All UI here is reasoned from the brand book + logo only. If a real product spec exists, please attach it via the Import menu so the kit can be aligned to truth.

## What's inside `index.html`

A click-thru of the **medu.game** web product:

1. **Login / sign-in** — start screen with brand hero pattern.
2. **Dashboard** — your scenario library + progress.
3. **Scenario detail** — a triage simulation pre-brief.
4. **Simulation runner** — choice-driven sim ("ABCDE assessment") with branching feedback.
5. **Result screen** — score, feedback, retry.

Use the top-right **profile menu** to log out and return to start.

## Components

| File | Purpose |
|---|---|
| `Logo.jsx` | Inline SVG of the medu.game lockup |
| `Pattern.jsx` | Background pill-pattern wrappers |
| `Button.jsx` | `Primary`, `Secondary`, `Outline`, `Ghost` |
| `Field.jsx` | Text inputs, password, with label |
| `Badge.jsx` | Pill-shaped tags |
| `Card.jsx` | Generic white-on-pink card with shadow |
| `ScenarioCard.jsx` | The hero card for a learning scenario |
| `Sidebar.jsx` | App-level vertical nav |
| `TopBar.jsx` | Header with avatar + search |
| `ProgressBar.jsx` | Pill-shaped progress |
| `Avatar.jsx` | Initials avatar in pink |
| `Choice.jsx` | Sim runner choice button (correct/incorrect feedback) |
| `Screens.jsx` | The five screens, composed from the above |
| `App.jsx` | Top-level state + screen routing |

All components are small (each well under 200 lines) and focus on visual fidelity, not real logic.
