# Draft Language Lab

A one-page local web app for exploring the NBA draft NLP/LLM handoff package.

## Run Locally

Start a static server from the workspace root:

```powershell
python -m http.server 8765
```

Then open:

```text
http://localhost:8765/draft-language-lab/
```

The app reads the bundled CSVs and headshots from:

```text
../nba_draft_nlp_webapp_handoff_20260609_151346
```

## Data Used

- Main model feed: `data/main_model_feed/llm_model_feed_export_20260609_091914.csv`
- Historical sentence evidence: `data/historical_llm_outputs/sentenceish_llm_enhanced_mistral_latest_canonicalized_20260608_230557.csv`
- 2026 sentence evidence: `data/2026_pipeline/2026_url_sentence_rows_llm_2026_urls_mistral_20260609_085033.csv`
- Trait lift chart data: `charts/llm_results_charts_20260609_092832/trait_bust_lifts_chart_data.csv`
- Combo lift chart data: `charts/llm_results_charts_20260609_092832/top15_combo_bust_lifts_chart_data.csv`
- Headshot manifests: NBA CDN first, ESPN fallback second
