# No-Phrase-Tone Update Packet

Created: `20260610_184420`

This is the corrected non-destructive update packet for the 43 xRAPM rows/players that were reported as missing phrase tone. It includes the newer 2026 LLM run (`llm_2026_urls_mistral_20260609_085033`) so recoverable 2026 phrase evidence is prefilled.

## Files

- `no_phrase_tone_players_phrase_tone_patch.csv`: main row-level patch, one row per original no-phrase-tone entry.
- `no_phrase_tone_prefilled_from_existing_llm.csv`: rows where usable phrase tone was recovered from existing LLM outputs.
- `no_phrase_tone_manual_fill_template.csv`: rows that still need scouting text/tone from you.
- `no_phrase_tone_sentence_rows_found.csv`: sentence-level audit rows.

## Counts

- Original rows: `43`
- Unique player keys: `39`
- Prefilled rows with usable phrase tone: `5`
- Rows still needing manual text: `38`
- Sentence rows found: `76`

## Merge Guidance

Join by `player_key` plus `input_group`/draft-year context. Only fill missing `trait_phrases_any`, `phrase_source_sites`, `phrase_source_groups`, and `phrase_<trait>_<quality>` fields; do not overwrite existing non-empty phrase evidence in the main package.
