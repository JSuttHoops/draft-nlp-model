# Model Correlation And Combo Handoff

Source file:

`C:\Users\jksut\Downloads\Fun Data Testing\rsci_nlp_package_staging\nlp_draft_bias_research\outputs_llm_enhanced\all_years_numeric_trait_phrase_handoff_20260610_084422\draft_nlp_all_years_player_consensus_ui.csv`

Primary evaluated target:

- `target_lens == xrapm_first5_avg`
- `status_for_ui == historical_mature`
- outcome = `actual_surplus_for_ui` / xRAPM first-5 surplus versus pick expected value

Important: projected/future rows are excluded from correlation and combo hit-rate stats.

## Core Model Stats

- N: 621
- Mean actual surplus: 0.088
- Bust/major-underperform rate (`<= -0.75`): 34.1%
- Big-overperform rate (`>= +0.75`): 32.4%
- Pearson correlation, net LLM probability vs actual surplus: 0.073
- Spearman correlation, net LLM probability vs actual surplus: 0.076
- Pearson positive probability vs actual surplus: 0.064
- Pearson negative probability vs actual surplus: -0.073
- AUC, negative probability predicting bust/major-underperform: 0.552
- AUC, positive probability predicting big-overperform: 0.520

## How To Read Combos

- `risk` means the trait has any negative, mixed, translation-caveat, or true-negative phrase evidence.
- `positive` means the trait has positive phrase evidence.
- Combos/trios are co-occurrence rules. They are not causal claims.
- Sort damaging combos by low mean surplus and high bust-rate delta.
- Sort best combos by high mean surplus and high big-overperform delta.

## Most Damaging Risk Combos / Trios

- creation_handle + finishing_touch + upside_tools (xRAPM historical top15): n=14, mean=-1.13, bust=50.0%, delta bust=+20.3%
- upside_tools + motor_competitiveness + intel_consensus (xRAPM historical mature): n=10, mean=-1.04, bust=60.0%, delta bust=+25.9%
- creation_handle + upside_tools + production_stats (xRAPM historical top15): n=15, mean=-1.02, bust=40.0%, delta bust=+10.3%
- finishing_touch + upside_tools + production_stats (xRAPM historical top15): n=18, mean=-1.01, bust=44.4%, delta bust=+14.7%
- creation_handle + finishing_touch + production_stats (xRAPM historical top15): n=16, mean=-0.86, bust=50.0%, delta bust=+20.3%
- upside_tools + motor_competitiveness + production_stats (xRAPM historical top15): n=20, mean=-0.84, bust=45.0%, delta bust=+15.3%
- creation_handle + finishing_touch + upside_tools (xRAPM historical top30): n=25, mean=-0.83, bust=48.0%, delta bust=+15.9%
- upside_tools + production_stats (xRAPM historical top15): n=30, mean=-0.81, bust=40.0%, delta bust=+10.3%

## Best Positive Combos / Trios

- feel_iq_passing + upside_tools + risk_uncertainty (xRAPM historical mature): n=14, mean=0.75, big over=42.9%, delta big over=+10.5%
- upside_tools + defense + risk_uncertainty (xRAPM historical mature): n=14, mean=0.75, big over=42.9%, delta big over=+10.5%
- feel_iq_passing + size_frame + risk_uncertainty (xRAPM historical mature): n=15, mean=0.68, big over=46.7%, delta big over=+14.3%
- feel_iq_passing + motor_competitiveness + risk_uncertainty (xRAPM historical mature): n=15, mean=0.68, big over=40.0%, delta big over=+7.6%
- feel_iq_passing + defense + risk_uncertainty (xRAPM historical mature): n=16, mean=0.64, big over=43.8%, delta big over=+11.4%
- feel_iq_passing + motor_competitiveness + risk_uncertainty (xRAPM historical top30): n=13, mean=0.63, big over=38.5%, delta big over=+5.4%
- upside_tools + production_stats + risk_uncertainty (xRAPM historical mature): n=15, mean=0.62, big over=40.0%, delta big over=+7.6%
- upside_tools + size_frame + risk_uncertainty (xRAPM historical mature): n=15, mean=0.58, big over=40.0%, delta big over=+7.6%

## Files In This Folder

- `model_correlation_metrics.csv`
- `risk_combo_pair_stats.csv`
- `risk_combo_trio_stats.csv`
- `positive_combo_pair_stats.csv`
- `positive_combo_trio_stats.csv`
- `top_damaging_combos_and_trios.csv`
- `top_best_combos_and_trios.csv`