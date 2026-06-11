# Draft Language Lab

Static GitHub Pages site for the NBA draft scouting-language analysis project.

## Local Preview

Run the server from the repository root so the app can load its sibling data folders:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8765/draft-language-lab/index.html
```

## Included Runtime Files

- `draft-language-lab/`: the static site.
- `actual_to_date_xrapm_2023_2025_20260610_115118/draft_nlp_player_consensus_ui_with_phrase_tone_patch.csv`: app-ready consensus/player data.
- `all_years_numeric_trait_phrase_handoff_20260610_084422/model_combo_stats_handoff/`: combo stats and draft pick EV curve.
- `all_years_numeric_trait_phrase_handoff_20260610_094136/headshot_cache/`: packaged player headshots referenced by the consensus feed.
- `nba_draft_nlp_webapp_handoff_20260609_151346/headshots/`: fallback headshot manifests/cache.

Generated model-building folders, backups, and old archive data are intentionally excluded.
