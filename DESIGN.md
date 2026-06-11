# Design

## Summary

Draft Language Lab uses a light, airy, one-page product surface: a landing-style hero followed immediately by a working explorer. The body background is the user-specified warm neutral `#EEE7DA`, translated in CSS as both a literal fallback and OKLCH design tokens. The interface should feel quiet and credible, with restrained teal actions, rose selected states, and data-state greens, reds, and ambers.

## Color

```css
:root {
  --bg: #EEE7DA;
  --bg-oklch: oklch(0.925 0.019 82);
  --surface: oklch(0.985 0.006 82);
  --surface-2: oklch(0.955 0.012 82);
  --ink: oklch(0.185 0.025 210);
  --muted: oklch(0.405 0.026 214);
  --line: oklch(0.805 0.018 82);
  --primary: oklch(0.365 0.087 195);
  --primary-strong: oklch(0.285 0.095 195);
  --rose: oklch(0.650 0.135 335);
  --rose-soft: oklch(0.895 0.045 335);
  --green: oklch(0.540 0.135 150);
  --green-soft: oklch(0.920 0.045 150);
  --red: oklch(0.575 0.145 25);
  --red-soft: oklch(0.915 0.050 25);
  --amber: oklch(0.690 0.120 78);
  --amber-soft: oklch(0.930 0.052 78);
}
```

## Typography

Use a system serif for the hero and major section headings to create a refined landing-page moment, paired with a system sans for controls, tables, metrics, and evidence. Keep UI text compact and consistent. Do not use fluid typography for product controls.

## Layout

One page with anchored navigation:

- Hero: brand/nav, headline, short specific copy, primary `Explore the data` button, and a product preview using real player data.
- Explorer: filters, metrics, matched players table, and sticky evidence panel.
- Supporting rows: trait insights, combo warnings, 2026 board, model notes.

Cards should be minimal panels with modest radius. Avoid nested cards. Data-dense areas should use tables, rows, rails, and evidence blocks.

## Components

- Buttons: filled primary, quiet secondary, text-link variant.
- Chips: selectable trait family and signal type; selected state uses rose or teal, with clear text labels.
- Dataset toggle: historical and prospective 2026.
- Player rows: headshot, name, year, Pick, source, positive/negative probabilities, outcome or prospect status.
- Evidence panel: highlighted scouting strengths and weaknesses with green, red, and amber spans.
- Mini charts: simple bars and distributions, no decorative chart noise.

## Motion

Use short state transitions only: selected chips, evidence panel updates, row hover, and anchor scroll. Respect reduced motion.
