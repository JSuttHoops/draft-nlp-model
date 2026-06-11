# Draft Pick Expected Value Curve Visualization Handoff

## Files

- `draft_pick_expected_value_curve_for_visuals.csv`
  - One row per pick, picks `1-60`.
  - This is the easiest file for a charting library.
- `draft_pick_expected_value_curve_points.json`
  - Same coordinates arranged as frontend-friendly `{ pick, y }` series.

## Main Chart Coordinates

For the xRAPM first-5 target used in the current UI:

- x-axis: `pick`
- y-axis: `expected_xrapm_first5_avg_pick_ev`

Optional alternate impact curve:

- x-axis: `pick`
- y-axis: `expected_xrapm_peak_pick_ev`

Optional probability curves:

- `expected_prob_bust_or_no_translation`
- `expected_prob_rotation_plus`
- `expected_prob_starter_plus`
- `expected_prob_star`
- `no_xrapm_signal_rate`

## How To Overlay A Player

From `draft_nlp_all_years_player_consensus_ui.csv`:

- Use `mock_pick` for projected/future rows.
- Use `actual_pick` for historical draft-slot outcome charts.
- Use `numeric_surplus_for_ui` as surplus versus the pick EV curve.

To convert a surplus value back into a projected/actual xRAPM value:

```text
player_xrapm_value = expected_xrapm_first5_avg_pick_ev_at_pick + numeric_surplus_for_ui
```

Example:

```text
Pick 4 expected first-5 xRAPM EV = -0.1026
Player surplus vs pick EV = -0.0200
Player plotted y-value = -0.1226
```

## Frontend Join Pattern

If `mock_pick` is fractional because it is an average across sources, either:

1. round to nearest integer pick for a simple UI, or
2. linearly interpolate between the two nearest `pick` rows.

Simple JavaScript interpolation:

```js
function expectedAtPick(curve, pick, yField = "expected_xrapm_first5_avg_pick_ev") {
  const x = Number(pick);
  if (!Number.isFinite(x)) return null;
  const sorted = [...curve].sort((a, b) => a.pick - b.pick);
  if (x <= sorted[0].pick) return sorted[0][yField];
  if (x >= sorted[sorted.length - 1].pick) return sorted[sorted.length - 1][yField];

  const hi = sorted.find((row) => row.pick >= x);
  const lo = [...sorted].reverse().find((row) => row.pick <= x);
  if (!lo || !hi) return null;
  if (lo.pick === hi.pick) return lo[yField];

  const t = (x - lo.pick) / (hi.pick - lo.pick);
  return lo[yField] + t * (hi[yField] - lo[yField]);
}

function playerXrapmY(player, curve) {
  const pick = player.mock_pick ?? player.actual_pick;
  const ev = expectedAtPick(curve, pick);
  const surplus = Number(player.numeric_surplus_for_ui);
  return Number.isFinite(ev) && Number.isFinite(surplus) ? ev + surplus : null;
}
```

## Source

The xRAPM EV coordinates come from:

`rsci_nlp_package_staging\nlp_draft_bias_research\outputs\draft_pick_ev_curve.csv`

The probability coordinates come from:

`rsci_nlp_package_staging\nlp_draft_bias_research\outputs\expected_pick_probability_curve_*.csv`

The curve was fit by actual draft pick with a monotonic expected-value model in the original pipeline.
