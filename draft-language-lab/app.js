const ALL_YEARS_DATA_ROOT = "../all_years_numeric_trait_phrase_handoff_20260610_094136";
const ACTUAL_TO_DATE_XRAPM_ROOT = "../actual_to_date_xrapm_2023_2025_20260610_115118";
const LEGACY_DATA_ROOT = "../nba_draft_nlp_webapp_handoff_20260609_151346";
const STATS_ROOT = "../all_years_numeric_trait_phrase_handoff_20260610_084422/model_combo_stats_handoff";

const paths = {
  allTargetsFeed: `${ACTUAL_TO_DATE_XRAPM_ROOT}/draft_nlp_player_consensus_ui_with_phrase_tone_patch.csv`,
  modelCorrelationMetrics: `${STATS_ROOT}/model_correlation_metrics.csv`,
  topDamagingCombos: `${STATS_ROOT}/top_damaging_combos_and_trios.csv`,
  topBestCombos: `${STATS_ROOT}/top_best_combos_and_trios.csv`,
  pickEvCurve: `${STATS_ROOT}/draft_pick_expected_value_curve_for_visuals.csv`,
  nbaManifest: `${LEGACY_DATA_ROOT}/headshots/nba_cdn_latest_1040x760/nba_headshot_cache_manifest_20260609_142038.csv`,
  espnManifest: `${LEGACY_DATA_ROOT}/headshots/espn_fallback_350x254/espn_fallback_headshot_manifest_20260609_144107.csv`
};

const targetConfigs = {
  xrapm: {
    label: "First-5 xRAPM",
    shortLabel: "xRAPM",
    valueLabel: "xRAPM vs pick EV",
    metricLabel: "xRAPM",
    hasFuture: true
  }
};

const families = [
  "shooting",
  "defense",
  "feel_iq_passing",
  "creation_handle",
  "finishing_touch",
  "athleticism_tools",
  "upside_tools",
  "motor_competitiveness",
  "size_frame",
  "injury_medical"
];

const signalModes = [
  { key: "any", label: "Neutral", shortLabel: "Neutral", hint: "Neutral mention", group: "neutral" },
  { key: "positive_any", label: "Slightly Positive", shortLabel: "Slight", hint: "Some strength language", group: "positive" },
  { key: "positive_majority", label: "Mostly Positive", shortLabel: "Mostly", hint: "Mostly strength language", group: "positive" },
  { key: "positive_all", label: "All Positive", shortLabel: "All", hint: "Only strength language", group: "positive" },
  { key: "negative_any", label: "Slightly Negative", shortLabel: "Slight", hint: "Some weakness language", group: "negative" },
  { key: "negative_majority", label: "Mostly Negative", shortLabel: "Mostly", hint: "Mostly weakness language", group: "negative" },
  { key: "negative_all", label: "All Negative", shortLabel: "All", hint: "Only weakness language", group: "negative" },
  { key: "caveat_any", label: "Any Caveat", shortLabel: "Caveat", hint: "Any translation caveat", group: "caveat" }
];

const traitScaleSteps = [
  { value: -3, mode: "negative_all", label: "All Negative" },
  { value: -2, mode: "negative_majority", label: "Mostly Negative" },
  { value: -1, mode: "negative_any", label: "Slightly Negative" },
  { value: 0, mode: "any", label: "Neutral" },
  { value: 1, mode: "positive_any", label: "Slightly Positive" },
  { value: 2, mode: "positive_majority", label: "Mostly Positive" },
  { value: 3, mode: "positive_all", label: "All Positive" }
];

const signalModeByKey = new Map(signalModes.map((mode) => [mode.key, mode]));
const traitScaleByValue = new Map(traitScaleSteps.map((step) => [String(step.value), step]));
const traitScaleByMode = new Map(traitScaleSteps.map((step) => [step.mode, step]));

const familyLabels = {
  shooting: "Shooting",
  defense: "Defense",
  feel_iq_passing: "Feel and IQ",
  creation_handle: "Creation and Handle",
  athleticism_tools: "Athletic Tools",
  upside_tools: "Upside Tools",
  motor_competitiveness: "Motor and Competitiveness",
  size_frame: "Size and Frame",
  injury_medical: "Injury and Medical",
  finishing_touch: "Finishing Touch",
  risk_uncertainty: "Risk Uncertainty",
  production_stats: "Production Stats",
  intel_consensus: "Intel Consensus"
};

const signalLabels = {
  any_mention: "Any mention",
  positive_trait_language: "Positive trait language",
  mixed_trait_language: "Mixed trait language",
  negative_or_mixed_weakness_language: "Weakness language",
  negative_without_translation_caveat: "Negative without caveat",
  translation_caveat: "Translation caveat",
  positive_with_translation_caveat: "Positive language with caveat",
  true_negative_trait: "Strict weakness language"
};

const comboLabels = {
  shooting_neg_plus_upside_neg: "Shooting Negative + Upside Negative",
  defense_neg_plus_upside_neg: "Defense Negative + Upside Negative",
  finishing_neg_motor_caveat_shooting_neg: "Finishing Negative + Motor Caveat + Shooting Negative"
};

const bucketOrder = ["big_overperform", "slight_overperform", "average", "slight_underperform", "bust"];
const bucketLabels = {
  big_overperform: "Big overperform",
  slight_overperform: "Slight overperform",
  average: "Average",
  slight_underperform: "Slight underperform",
  bust: "Bust"
};

const datasetLabels = {
  all: "All",
  historical: "Historical",
  recent_projection: "2023-25 actual-to-date",
  prospective_2026: "2026 projections"
};

const datasetContextLabels = {
  all: "All years",
  historical: "Mature actuals",
  recent_projection: "Actuals where available",
  prospective_2026: "Future projections"
};

const modelLabels = {
  "hist old_plus_llm_full": "Historical first-5 LLM score",
  old_plus_llm_full: "First-5 LLM score",
  absolute_value_first_old_plus_llm_full: "Absolute value first-5 model",
  rank_first_old_plus_llm_full: "Ranked first-5 model",
  surplus_first_old_plus_llm_full: "First-5 value model"
};

const sourceLabels = {
  nbadraft_net: "NBADraft.net",
  NBADraft: "NBADraft.net",
  "NBADraft.net": "NBADraft.net",
  "NBADraft.net expanded": "NBADraft.net",
  "nbadraft.net": "NBADraft.net",
  "nbadraft.net expanded": "NBADraft.net",
  nbadraft_net_expanded: "NBADraft.net",
  nbadraft_net_extended: "NBADraft.net",
  "nbadraft net extended": "NBADraft.net",
  espn: "ESPN",
  sbnation: "SB Nation",
  the_athletic: "The Athletic",
  the_ringer: "The Ringer"
};

const sortHeaders = {
  name: { asc: "name_asc", desc: "name_desc", defaultDirection: "asc" },
  year: { asc: "year_asc", desc: "year_desc", defaultDirection: "desc" },
  pick: { asc: "pick_asc", desc: "pick_desc", defaultDirection: "asc" },
  tone: { asc: "tone_asc", desc: "tone_desc", defaultDirection: "desc" },
  surplus: { asc: "surplus_asc", desc: "surplus_desc", defaultDirection: "desc" }
};

const auditedSignalStats = {
  baselines: [
    { label: "Baseline above expected", value: 46.7 },
    { label: "Baseline below expected", value: 53.3 }
  ],
  groups: [
    {
      title: "Positive trait signals",
      note: "Positive traits move the needle slightly but rarely are the end-all-be-all.",
      rows: [
        { label: "Creation/Handle positive", rate: 49.5, lift: 6.0, outcome: "above expected", conditions: [{ family: "creation_handle", mode: "positive_any" }] },
        { label: "Defense positive", rate: 49.1, lift: 5.2, outcome: "above expected", conditions: [{ family: "defense", mode: "positive_any" }] },
        { label: "Feel/IQ positive", rate: 49.1, lift: 5.1, outcome: "above expected", conditions: [{ family: "feel_iq_passing", mode: "positive_any" }] },
        { label: "Motor/competitive positive", rate: 47.6, lift: 1.9, outcome: "above expected", conditions: [{ family: "motor_competitiveness", mode: "positive_any" }] },
        { label: "Size/frame positive", rate: 47.2, lift: 1.1, outcome: "above expected", conditions: [{ family: "size_frame", mode: "positive_any" }] }
      ]
    },
    {
      title: "Negative trait signals",
      note: "Negative language is generally more predictive than positive language.",
      rows: [
        { label: "Upside/tools negative", rate: 57.8, lift: 8.4, outcome: "below expected", conditions: [{ family: "upside_tools", mode: "negative_any" }] },
        { label: "Feel/IQ negative", rate: 57.1, lift: 7.2, outcome: "below expected", conditions: [{ family: "feel_iq_passing", mode: "negative_any" }] },
        { label: "Injury/medical negative", rate: 55.8, lift: 4.8, outcome: "below expected", conditions: [{ family: "injury_medical", mode: "negative_any" }] },
        { label: "Creation/Handle negative", rate: 55.6, lift: 4.2, outcome: "below expected", conditions: [{ family: "creation_handle", mode: "negative_any" }] },
        { label: "Shooting negative", rate: 54.7, lift: 2.7, outcome: "below expected", conditions: [{ family: "shooting", mode: "negative_any" }] }
      ]
    },
    {
      title: "Best positive combos",
      note: "Certain positive trait combos can significantly increase the chances of success for a player.",
      rows: [
        { label: "Defense + Creation/Handle", rate: 52.6, lift: 12.6, outcome: "above expected", conditions: [{ family: "defense", mode: "positive_any" }, { family: "creation_handle", mode: "positive_any" }] },
        { label: "Creation/Handle + Feel/IQ", rate: 51.7, lift: 10.7, outcome: "above expected", conditions: [{ family: "creation_handle", mode: "positive_any" }, { family: "feel_iq_passing", mode: "positive_any" }] },
        { label: "Creation/Handle + Motor", rate: 51.3, lift: 9.9, outcome: "above expected", conditions: [{ family: "creation_handle", mode: "positive_any" }, { family: "motor_competitiveness", mode: "positive_any" }] },
        { label: "Defense + Feel/IQ", rate: 50.5, lift: 8.2, outcome: "above expected", conditions: [{ family: "defense", mode: "positive_any" }, { family: "feel_iq_passing", mode: "positive_any" }] }
      ]
    },
    {
      title: "Most damaging negative combos",
      note: "Certain negative groups can decrease a player's chances of success by over 20%.",
      rows: [
        { label: "Upside/tools + Injury/medical", rate: 65.4, lift: 22.7, outcome: "below expected", conditions: [{ family: "upside_tools", mode: "negative_any" }, { family: "injury_medical", mode: "negative_any" }] },
        { label: "Size/frame + Injury/medical", rate: 61.8, lift: 15.9, outcome: "below expected", conditions: [{ family: "size_frame", mode: "negative_any" }, { family: "injury_medical", mode: "negative_any" }] },
        { label: "Finishing + Injury/medical", rate: 60.0, lift: 12.6, outcome: "below expected", conditions: [{ family: "finishing_touch", mode: "negative_any" }, { family: "injury_medical", mode: "negative_any" }] },
        { label: "Upside/tools + Size/frame", rate: 59.8, lift: 12.2, outcome: "below expected", conditions: [{ family: "upside_tools", mode: "negative_any" }, { family: "size_frame", mode: "negative_any" }] },
        { label: "Defense + Upside/tools", rate: 59.6, lift: 11.9, outcome: "below expected", conditions: [{ family: "defense", mode: "negative_any" }, { family: "upside_tools", mode: "negative_any" }] },
        { label: "Feel/IQ + Size/frame", rate: 58.8, lift: 10.3, outcome: "below expected", conditions: [{ family: "feel_iq_passing", mode: "negative_any" }, { family: "size_frame", mode: "negative_any" }] },
        { label: "Creation/Handle + Feel/IQ negative", rate: 58.6, lift: 9.9, outcome: "below expected", conditions: [{ family: "creation_handle", mode: "negative_any" }, { family: "feel_iq_passing", mode: "negative_any" }] }
      ]
    }
  ]
};

const phraseHints = {
  shooting: ["shoot", "shooter", "shooting", "perimeter", "three", "3pt", "range", "stroke", "pull-up", "touch"],
  defense: ["defense", "defensive", "defender", "guard", "steal", "block", "contest", "switch", "versatility"],
  feel_iq_passing: ["feel", "iq", "pass", "passing", "reads", "vision", "decision", "playmaking", "instincts"],
  creation_handle: ["handle", "creator", "creation", "dribble", "space", "separation", "pick and roll", "off the bounce"],
  athleticism_tools: ["athletic", "explosive", "burst", "length", "wingspan", "quick", "fluid", "vertical", "tools"],
  upside_tools: ["upside", "ceiling", "potential", "long-term", "room", "develop", "tools"],
  motor_competitiveness: ["motor", "competitive", "compete", "energy", "effort", "toughness", "intensity"],
  size_frame: ["size", "frame", "height", "weight", "wingspan", "length", "strong", "physical"],
  injury_medical: ["injury", "medical", "health", "durability", "knee", "foot", "ankle"]
};

const EV_PLOT_LEFT = 10;
const EV_PLOT_WIDTH = 80;
const HERO_MARKER_MIN_X_GAP = 36;

const state = {
  target: "xrapm",
  dataset: "all",
  traitModes: new Map(),
  search: "",
  sort: "surplus_desc",
  page: 1,
  pageSize: 10,
  scatterYear: "all",
  similarQuery: "",
  comboPresetId: null,
  comboSpotlightExpanded: false,
  heroPlayerId: null,
  heroMarkerCycle: 0,
  heroMarkersSeeded: false,
  heroMarkerTimer: null,
  gsapReady: false,
  selectedId: null,
  loaded: false
};

const store = {
  rows: [],
  players: [],
  rowsByTarget: {
    xrapm: []
  },
  playersByTarget: {
    xrapm: []
  },
  traitLifts: [],
  comboLifts: [],
  comboPresets: [],
  modelCorrelationMetrics: [],
  pickEvCurve: [],
  historicalSentencesByPlayer: new Map(),
  prospectiveSentencesByPlayer: new Map(),
  headshots: new Map()
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

document.addEventListener("DOMContentLoaded", () => {
  bindImageFallbacks();
  renderControls();
  bindStaticEvents();
  renderLoading();
  loadData();
});

function bindImageFallbacks() {
  document.addEventListener("error", (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.dataset.fallbackInitials) return;
    const fallback = document.createElement("span");
    fallback.className = `${image.className} avatar-fallback`;
    fallback.textContent = image.dataset.fallbackInitials;
    fallback.setAttribute("aria-label", `${image.alt.replace(/\s*headshot$/i, "")} initials`);
    image.replaceWith(fallback);
  }, true);
}

function bindStaticEvents() {
  const filterShell = $(".filter-shell");
  const filterToggle = $("#filter-toggle");
  if (filterShell && filterToggle) {
    filterToggle.addEventListener("click", () => {
      const isOpen = filterShell.classList.toggle("is-open");
      filterToggle.setAttribute("aria-expanded", String(isOpen));
    });
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      filterShell.classList.remove("is-open");
      filterToggle.setAttribute("aria-expanded", "false");
    });
    document.addEventListener("click", (event) => {
      if (!filterShell.classList.contains("is-open") || filterShell.contains(event.target)) return;
      filterShell.classList.remove("is-open");
      filterToggle.setAttribute("aria-expanded", "false");
    });
  }

  const searchInput = $("#search");
  let searchDebounceTimer = null;
  const applySearch = () => {
    window.clearTimeout(searchDebounceTimer);
    const nextSearch = searchInput.value.trim().toLowerCase();
    if (state.search === nextSearch) return;
    state.search = nextSearch;
    resetPagination();
    renderApp();
  };

  searchInput.addEventListener("input", () => {
    window.clearTimeout(searchDebounceTimer);
    searchDebounceTimer = window.setTimeout(applySearch, 500);
  });

  searchInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    applySearch();
  });

  searchInput.addEventListener("blur", () => {
    applySearch();
  });

  $("#sort").addEventListener("change", (event) => {
    setSortMode(event.target.value);
    resetPagination();
    renderApp();
  });

  $$("[data-sort-header]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleHeaderSort(button.dataset.sortHeader);
    });
  });

  $("#similar-search").addEventListener("input", (event) => {
    state.similarQuery = event.target.value.trim();
    renderSimilarTool();
  });

  $$("[data-dataset]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) return;
      state.dataset = button.dataset.dataset;
      state.selectedId = null;
      resetPagination();
      renderApp();
    });
  });

}

function clearTraitMode(family) {
  if (!state.traitModes.has(family)) return;
  state.traitModes.delete(family);
  state.selectedId = null;
  resetPagination();
  renderApp();
}

function resetPagination() {
  state.page = 1;
}

function setSortMode(value) {
  state.sort = value;
  const sortControl = $("#sort");
  if (sortControl && Array.from(sortControl.options).some((option) => option.value === value) && sortControl.value !== value) {
    sortControl.value = value;
  }
  updateHeaderSortState();
}

function toggleHeaderSort(field) {
  const config = sortHeaders[field];
  if (!config) return;
  const currentDirection = sortDirectionForField(field);
  const nextDirection = currentDirection
    ? (currentDirection === "asc" ? "desc" : "asc")
    : config.defaultDirection;
  setSortMode(config[nextDirection]);
  resetPagination();
  renderApp();
}

function sortDirectionForField(field) {
  const config = sortHeaders[field];
  if (!config) return "";
  if (state.sort === config.asc) return "asc";
  if (state.sort === config.desc) return "desc";
  return "";
}

function updateHeaderSortState() {
  $$("[data-sort-th]").forEach((th) => {
    const direction = sortDirectionForField(th.dataset.sortTh);
    th.setAttribute("aria-sort", direction ? (direction === "asc" ? "ascending" : "descending") : "none");
    const button = th.querySelector("[data-sort-header]");
    const icon = button?.querySelector("span[aria-hidden='true']");
    if (button) button.classList.toggle("is-active", Boolean(direction));
    if (icon) icon.textContent = direction === "asc" ? "↑" : direction === "desc" ? "↓" : "↕";
  });
}

function renderControls() {
  renderStaticToggles();
  $("#trait-builder").innerHTML = families.map(traitCardTemplate).join("");

  $$("[data-trait-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.detail > 1) return;
      const family = button.dataset.traitToggle;
      if (!state.traitModes.has(family)) {
        state.traitModes.set(family, "any");
        state.selectedId = null;
        resetPagination();
        renderApp();
      }
    });

    button.addEventListener("dblclick", (event) => {
      event.preventDefault();
      clearTraitMode(button.dataset.traitToggle);
    });
  });

  $$("[data-trait-slider]").forEach((slider) => {
    slider.addEventListener("change", () => {
      const step = traitScaleByValue.get(slider.value) || traitScaleByValue.get("0");
      state.traitModes.set(slider.dataset.traitSlider, step.mode);
      state.selectedId = null;
      resetPagination();
      renderApp();
    });
  });
}

function renderStaticToggles() {
  $$("[data-dataset]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.dataset === state.dataset);
  });
}

function traitCardTemplate(family) {
  const activeModeKey = state.traitModes.get(family);
  const isActive = Boolean(activeModeKey);
  const mode = signalModeByKey.get(activeModeKey) || signalModeByKey.get("any");
  const scaleStep = traitScaleByMode.get(mode.key) || traitScaleByValue.get("0");
  const count = state.loaded ? traitMatchCount(family, mode.key) : null;
  const anyCount = state.loaded ? traitMatchCount(family, "any") : null;
  const countLabel = state.loaded
    ? `${formatNumber(isActive ? count : anyCount)} players`
    : "loading";

  return `
    <article class="trait-card ${isActive ? "is-active" : ""}">
      <button type="button" class="trait-toggle" data-trait-toggle="${escapeAttr(family)}" aria-pressed="${isActive}">
        <span>
          <strong>${escapeHtml(familyLabel(family))}</strong>
          <small>${escapeHtml(isActive ? mode.hint : "Select trait")}</small>
        </span>
        <span class="trait-count">${escapeHtml(countLabel)}</span>
      </button>
      <div class="trait-scale">
        <div class="trait-scale-labels">
          <span>Negative</span>
          <strong>${escapeHtml(isActive ? scaleStep.label : "Neutral")}</strong>
          <span>Positive</span>
        </div>
        <input
          type="range"
          min="-3"
          max="3"
          step="1"
          value="${escapeAttr(scaleStep.value)}"
          data-trait-slider="${escapeAttr(family)}"
          aria-label="${escapeAttr(`${familyLabel(family)} polarity`)}"
        />
        <div class="trait-scale-ticks" aria-hidden="true">
          <span>All</span>
          <span>Mostly</span>
          <span>Slight</span>
          <span>Neutral</span>
          <span>Slight</span>
          <span>Mostly</span>
          <span>All</span>
        </div>
      </div>
    </article>
  `;
}

async function loadData() {
  try {
    const allTargetsFeed = await fetchCsv(paths.allTargetsFeed);
    const comboDamaging = await safeFetchCsv(paths.topDamagingCombos);
    const comboHelpful = await safeFetchCsv(paths.topBestCombos);
    const modelCorrelationMetrics = await safeFetchCsv(paths.modelCorrelationMetrics);
    const pickEvCurve = await safeFetchCsv(paths.pickEvCurve);
    const modelFeed = buildAllYearsTargetFeed(allTargetsFeed, "xrapm_first5_avg");
    store.headshots = buildPackageHeadshotIndex(allTargetsFeed);

    store.rowsByTarget = {
      xrapm: modelFeed
    };
    store.playersByTarget = {
      xrapm: buildPlayers(modelFeed)
    };
    applyCurrentTarget();
    store.traitLifts = [];
    store.comboLifts = [...comboDamaging, ...comboHelpful];
    store.comboPresets = buildComboPresets(comboDamaging, comboHelpful);
    store.modelCorrelationMetrics = modelCorrelationMetrics;
    store.pickEvCurve = normalizePickEvCurve(pickEvCurve);
    state.loaded = true;

    state.selectedId = null;
    renderApp();
    startHeroMarkerCycle();
    loadSupplementalData();
  } catch (error) {
    console.error(error);
    $("#players-body").innerHTML = `<tr class="empty-row"><td colspan="6">Could not load the draft profiles.</td></tr>`;
    $("#result-caption").textContent = "Could not load the draft profiles.";
  }
}

async function loadSupplementalData() {
  const nbaManifest = await safeFetchCsv(paths.nbaManifest);
  const espnManifest = await safeFetchCsv(paths.espnManifest);
  if (nbaManifest.length || espnManifest.length) {
    const fallbackHeadshots = buildHeadshotIndex(nbaManifest, espnManifest);
    fallbackHeadshots.forEach((src, key) => {
      if (!store.headshots.has(key)) store.headshots.set(key, src);
    });
    renderApp();
  }
}

async function safeFetchCsv(path) {
  try {
    return await fetchCsv(path);
  } catch (error) {
    return [];
  }
}

async function fetchCsv(path, retries = 2) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load ${path}`);
      }
      return parseCsv(await response.text());
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        await delay(250 * (attempt + 1));
      }
    }
  }
  throw lastError;
}

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function parseCsv(text) {
  const rows = [];
  let current = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      current.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        i += 1;
      }
      current.push(field);
      if (current.some((value) => value !== "")) {
        rows.push(current);
      }
      current = [];
      field = "";
    } else {
      field += char;
    }
  }

  if (field.length || current.length) {
    current.push(field);
    rows.push(current);
  }

  const headers = rows.shift() || [];
  return rows.map((row) => {
    const item = {};
    headers.forEach((header, index) => {
      item[header] = row[index] ?? "";
    });
    return item;
  });
}

function buildAllYearsTargetFeed(rows, targetLens) {
  const targetKey = "xrapm";
  const targetRows = rows.filter((row) => row.target_lens === targetLens);
  const futurePlayerKeys = new Set(
    targetRows
      .filter((row) => classifyDataset(row) === "prospective_2026")
      .map((row) => canonicalPlayerKey(row))
      .filter(Boolean)
  );

  return targetRows
    .map((row) => {
      const dataset = classifyDataset(row);
      const playerKey = canonicalPlayerKey(row);
      if (dataset === "recent_projection" && Number(row.draft_year) === 2025 && futurePlayerKeys.has(playerKey)) {
        return null;
      }

      const normalized = {
        ...row,
        model_feed_dataset: dataset,
        target_key: targetKey,
        target_value_label: targetConfigs[targetKey]?.label || targetConfigs.xrapm.label,
        target_unit: "xrapm",
        player_key: playerKey,
        display_player_name: canonicalPlayerName(row),
        recommended_model: row.feature_set || "old_plus_llm_full",
        update_package: "all_years_numeric_trait_phrase_handoff"
      };
      applyRecommendedUiFields(normalized);
      const numericBucket = normalizeBucket(normalized.display_surplus_tier_from_numeric);
      if (numericBucket) {
        if (dataset === "historical" || isActualToDateRow(normalized)) {
          normalized.graded_surplus_tier = normalized.graded_surplus_tier || numericBucket;
        } else {
          normalized.pred_graded_surplus_tier = normalized.pred_graded_surplus_tier || numericBucket;
        }
        normalized.outcome_tier = normalized.outcome_tier || numericBucket;
      }

      return normalized;
    })
    .filter(Boolean);
}

function canonicalPlayerName(row) {
  const candidates = [row.actual_player, row.mock_player, row.player_name, row.headshot_player_name, row.canonical_player, row.player_key]
    .map((value) => String(value || "").trim())
    .filter(Boolean);
  const cleanCandidate = candidates.find((name) => !hasReplacementMarker(name));
  return canonicalDisplayPlayerName(repairPlayerName(cleanCandidate || candidates[0] || ""));
}

function canonicalPlayerKey(row) {
  return canonicalNameKey(row.player_key || canonicalPlayerName(row));
}

function hasReplacementMarker(value) {
  return /[?�]/.test(String(value || ""));
}

function repairPlayerName(value) {
  const name = String(value || "").trim();
  if (!name) return "";
  const repairs = {
    "an?ejs pase??iks": "Anzejs Pasecniks",
    "bogdan bogdanovi?": "Bogdan Bogdanovic",
    "dennis schr?der": "Dennis Schroder",
    "egor d?min": "Egor Demin",
    "hugo gonz?lez": "Hugo Gonzalez",
    "jonas valan?i?nas": "Jonas Valanciunas",
    "jusuf nurki?": "Jusuf Nurkic",
    "karlo matkovi?": "Karlo Matkovic",
    "kasparas jaku?ionis": "Kasparas Jakucionis",
    "kristaps porzi??is": "Kristaps Porzingis",
    "luka don?i?": "Luka Doncic",
    "nikola joki?": "Nikola Jokic",
    "nikola jovi?": "Nikola Jovic",
    "nikola topi?": "Nikola Topic",
    "nikola vu?evi?": "Nikola Vucevic",
    "pac?me dadiet": "Pacome Dadiet",
    "tidjane sala?n": "Tidjane Salaun",
    "vlatko ?an?ar": "Vlatko Cancar"
  };
  return repairs[name.toLowerCase()] || name;
}

function canonicalDisplayPlayerName(value) {
  const name = String(value || "").trim();
  const displayAliases = {
    "cam carr": "Cameron Carr"
  };
  return displayAliases[normalizeName(name)] || name;
}

function canonicalNameKey(value) {
  const normalized = normalizeName(value);
  const aliases = {
    "cam carr": "cameron carr"
  };
  return aliases[normalized] || normalized;
}

function applyRecommendedUiFields(row) {
  const recommendedSurplus = toNumber(row.recommended_numeric_surplus_for_ui);
  if (Number.isFinite(recommendedSurplus)) {
    row.numeric_surplus_for_ui = recommendedSurplus;
  }
  const recommendedBucket = normalizeBucket(row.recommended_display_surplus_tier);
  if (recommendedBucket) {
    row.display_surplus_tier_from_numeric = recommendedBucket;
    row.outcome_tier = row.outcome_tier || recommendedBucket;
  }
  if (row.recommended_surplus_kind_for_ui) row.numeric_surplus_kind = row.recommended_surplus_kind_for_ui;
  if (row.recommended_status_for_ui) row.status_for_ui = row.recommended_status_for_ui;
}

function isActualToDateRow(row) {
  return String(row.numeric_surplus_kind || row.recommended_surplus_kind_for_ui || "").includes("actual_to_date")
    && toNumber(row.actual_xrapm_season_count) > 0;
}

function buildRecommendedModelFeed(rows, featureRows, futureComboFlags, targetKey) {
  const featureIndex = buildFeatureRowIndex(featureRows);
  const comboFlagIndex = buildFutureComboFlagIndex(futureComboFlags);
  const futurePlayerKeys = new Set(
    rows
      .filter((row) => classifyDataset(row) === "prospective_2026")
      .map((row) => normalizeName(row.actual_player || row.mock_player))
      .filter(Boolean)
  );

  return rows
    .map((row) => {
      const dataset = classifyDataset(row);
      const playerKey = canonicalNameKey(row.actual_player || row.mock_player);
      if (dataset === "recent_projection" && Number(row.draft_year) === 2025 && futurePlayerKeys.has(playerKey)) {
        return null;
      }

      const featureRow = findFeatureRow(featureIndex, row);
      const comboFlags = dataset === "prospective_2026"
        ? findFeatureRow(comboFlagIndex, row)
        : {};
      const normalized = {
        ...featureRow,
        ...comboFlags,
        ...row,
        model_feed_dataset: dataset,
        target_key: targetKey,
        target_value_label: targetConfigs[targetKey]?.label || targetConfigs.xrapm.label,
        target_unit: "xrapm",
        player_key: playerKey,
        recommended_model: row.feature_set || "old_plus_llm_full",
        update_package: "espn_2023_paste_projection_update"
      };

      return normalized;
    })
    .filter(Boolean);
}

function classifyDataset(row) {
  const year = Number(row.draft_year);
  const status = String(row.status_for_ui || row.prediction_status || row.target_status || "").toLowerCase();
  if (year >= 2026 || parseBool(row.is_future_prediction) === true || status.includes("future")) return "prospective_2026";
  if (status.includes("partial") || parseBool(row.is_partial_recent_projection) === true) return "recent_projection";
  if (status.includes("historical") || status.includes("available") || status.includes("zero_nba")) return "historical";
  if (year >= 2022 && year <= 2025) return "recent_projection";
  return "historical";
}

function findFeatureRow(index, row) {
  return (
    index.get(featureRowKey(row)) ||
    index.get(nameSourceKey(row)) ||
    index.get(playerNameKey(row)) ||
    index.get(rowIdOnlyKey(row)) ||
    {}
  );
}

function buildFirst5ModelFeed(historicalRows, futureRows, featureRows, futureComboFlags) {
  const featureIndex = buildFeatureRowIndex(featureRows);
  const comboFlagIndex = buildFutureComboFlagIndex(futureComboFlags);
  const enrich = (row, dataset) => {
    const featureRow = findFeatureRow(featureIndex, row);
    const comboFlags = dataset === "prospective_2026"
      ? findFeatureRow(comboFlagIndex, row)
      : {};
    return {
      ...featureRow,
      ...comboFlags,
      ...row,
      model_feed_dataset: dataset,
      player_key: canonicalNameKey(row.actual_player || row.mock_player),
      recommended_model: row.feature_set || "old_plus_llm_full"
    };
  };

  return [
    ...historicalRows.map((row) => enrich(row, "historical")),
    ...futureRows.map((row) => enrich(row, "prospective_2026"))
  ];
}

function applyCurrentTarget() {
  store.rows = store.rowsByTarget[state.target] || [];
  store.players = store.playersByTarget[state.target] || [];
}

function buildFeatureRowIndex(rows) {
  const index = new Map();
  const rowBuckets = new Map();
  const looseRows = [];

  rows.forEach((row) => {
    const rowId = rowIdOnlyKey(row);
    if (!rowId) {
      looseRows.push(row);
      return;
    }
    rowBuckets.set(rowId, { ...(rowBuckets.get(rowId) || {}), ...row });
  });

  [...rowBuckets.values(), ...looseRows].forEach((row) => {
    [featureRowKey(row), nameSourceKey(row), playerNameKey(row), rowIdOnlyKey(row)].forEach((key) => {
      if (!key) return;
      index.set(key, { ...(index.get(key) || {}), ...row });
    });
  });

  return index;
}

function buildFutureComboFlagIndex(rows) {
  const index = new Map();
  rows.forEach((row) => {
    const normalized = {};
    Object.entries(row).forEach(([key, value]) => {
      if (key.endsWith("_negative_mixed_plus_upside_negative_mixed")) {
        normalized[`combo_${key.replace(/_negative_mixed/g, "_neg")}`] = value;
      } else if (key.includes("finishing_negative_mixed_plus_motor_caveat_plus_shooting_negative_mixed")) {
        normalized.combo_finishing_neg_motor_caveat_shooting_neg = value;
      }
      normalized[key] = value;
    });
    [featureRowKey(row), nameSourceKey(row)].forEach((key) => {
      if (key && !index.has(key)) index.set(key, normalized);
    });
  });
  return index;
}

function featureRowKey(row) {
  const rowId = String(row.row_id || "").trim();
  if (!rowId) return "";
  return `${rowId}|${normalizeName(row.actual_player || row.mock_player)}|${String(row.source_site || "").toLowerCase()}`;
}

function nameSourceKey(row) {
  const name = normalizeName(row.actual_player || row.mock_player);
  if (!name) return "";
  return `${name}|${String(row.source_site || "").toLowerCase()}`;
}

function playerNameKey(row) {
  const name = normalizeName(row.actual_player || row.mock_player);
  return name ? `player:${name}` : "";
}

function rowIdOnlyKey(row) {
  const rowId = String(row.row_id || "").trim();
  return rowId ? `row:${rowId}` : "";
}

function buildPlayers(rows) {
  const groups = new Map();

  rows.forEach((row) => {
    const name = canonicalPlayerName(row);
    const key = canonicalNameKey(row.player_key || name);
    const id = `${row.model_feed_dataset}:${key}`;
    if (!groups.has(id)) {
      groups.set(id, {
        id,
        key,
        dataset: row.model_feed_dataset,
        name,
        draftYear: row.draft_year,
        rows: [],
        sources: new Set(),
        schools: new Set(),
        positions: new Set()
      });
    }
    const player = groups.get(id);
    player.rows.push(row);
    addIf(player.sources, row.source_site);
    addIf(player.schools, row.school);
    addIf(player.positions, row.position);
  });

  return Array.from(groups.values()).map((player) => summarizePlayer(player));
}

function summarizePlayer(player) {
  const rows = player.rows;
  const first = rows[0] || {};
  const historical = player.dataset === "historical";
  const targetKey = first.target_key || "xrapm";
  const values = (field) => rows.map((row) => toNumber(row[field])).filter((value) => Number.isFinite(value));
  const booleans = (field) => rows.map((row) => parseBool(row[field])).filter((value) => value !== null);
  const firstText = (...fields) => fields
    .flatMap((field) => rows.map((row) => String(row[field] || "").trim()))
    .find(Boolean) || "";
  const sourceRowCount = values("source_row_count")
    .filter((value) => value > 0)
    .reduce((total, value) => total + value, 0) || rows.length;
  const actualSeasonCounts = values("actual_xrapm_season_count").filter((value) => value > 0);
  const actualToDateSeasonCount = actualSeasonCounts.length ? Math.max(...actualSeasonCounts) : 0;
  const surplusKind = firstText("recommended_surplus_kind_for_ui", "numeric_surplus_kind");
  const statusForUi = firstText("recommended_status_for_ui", "status_for_ui");
  const hasActualToDate = targetKey === "xrapm"
    && player.dataset === "recent_projection"
    && actualToDateSeasonCount > 0
    && surplusKind.includes("actual_to_date");
  const hasActualFirst5 = surplusKind.includes("actual_first5")
    || values("actual_surplus_for_ui").length > 0;
  const hasActualResult = historical || hasActualToDate || hasActualFirst5;

  const pickFields = hasActualResult ? ["actual_pick"] : ["mock_pick"];
  const fallbackPick = values("mock_pick");
  const positiveProb = weightedRowAverage(rows, [
    "hist_pred_positive_surplus_prob__old_plus_llm_full",
    "prospective_2026_player_agg_recommended_positive_surplus_prob",
    "positive_bucket_probability"
  ]);
  const negativeProb = weightedRowAverage(rows, [
    "hist_pred_negative_surplus_prob__old_plus_llm_full",
    "prospective_2026_player_agg_recommended_negative_surplus_prob",
    "negative_bucket_probability"
  ]);
  const historicalSurplus = weightedRowAverage(rows, [
    "numeric_surplus_for_ui",
    "actual_surplus_for_ui",
    "surplus_xrapm_avg5_vs_pick_ev_recalc",
    "surplus_xrapm_peak_vs_pick_ev",
    "graded_surplus_value"
  ]);
  const projectedSurplus = weightedRowAverage(rows, [
    "numeric_surplus_for_ui",
    "projected_surplus_for_ui",
    "projected_surplus_xrapm_vs_pick_ev",
    "pred_surplus_xrapm_vs_pick_ev",
    "predicted_surplus_xrapm_vs_pick_ev"
  ]);
  const recommendedSurplus = weightedRowAverage(rows, ["recommended_numeric_surplus_for_ui"]);
  const actualToDateSurplus = weightedRowAverage(rows, ["actual_to_date_surplus_vs_pick_ev"]);
  const displaySurplus = hasActualToDate
    ? firstFinite([actualToDateSurplus, recommendedSurplus, projectedSurplus])
    : (hasActualResult ? historicalSurplus : projectedSurplus);
  const actualBucket = bucketFromRows(rows, "graded_surplus_tier");
  const predictedBucket = bucketFromRows(rows, "pred_graded_surplus_tier");
  const bucketProbs = summarizeBucketProbabilities(rows);

  const actualPositiveValues = booleans("positive_surplus");
  rows.forEach((row) => {
    const tier = String(row.graded_surplus_tier || "").toLowerCase();
    if (tier) actualPositiveValues.push(tier === "slight_overperform" || tier === "big_overperform");
  });
  const bustValues = booleans("bust_or_no_translation");
  rows.forEach((row) => {
    const tier = String(row.graded_surplus_tier || "").toLowerCase();
    if (tier) bustValues.push(tier === "bust" || tier === "slight_underperform");
  });
  const actualPositive = majority(actualPositiveValues);
  const bust = majority(bustValues);
  const starter = majority(booleans("starter_plus"));
  const star = majority(booleans("star"));

  return {
    ...player,
    name: player.name,
    reportCount: sourceRowCount,
    draftYear: first.draft_year || player.draftYear,
    pick: weightedRowAverage(rows, pickFields) ?? average(fallbackPick),
    source: Array.from(player.sources).filter(Boolean).join(" | ") || "Reports",
    aliases: uniqueList(rows.flatMap((row) => splitList(row.phrase_player_names || `${canonicalPlayerName(row)}|${row.actual_player || ""}|${row.mock_player || ""}|${row.player_name || ""}|${row.headshot_player_name || ""}`))),
    phraseSources: uniqueList(rows.flatMap((row) => splitList(row.phrase_source_sites || row.source_site))),
    school: Array.from(player.schools).filter(Boolean).join(" | "),
    position: Array.from(player.positions).filter(Boolean).join(" / "),
    positiveProb,
    negativeProb,
    actualPositive,
    bust,
    starter,
    star,
    actualBucket,
    predictedBucket,
    bucketProbs,
    outcomeTier: actualBucket || predictedBucket || first.outcome_tier || (historical ? "historical first-5 bucket" : "projected first-5 bucket"),
    surplus: displaySurplus,
    surplusType: hasActualFirst5 || historical ? "actual" : (hasActualToDate ? "actual_to_date" : "projected"),
    surplusKind,
    statusForUi,
    actualToDateSeasonCount,
    actualToDateStatus: statusForUi,
    actualToDateMissingReason: firstText("actual_to_date_missing_reason"),
    actualToDateXrapmAvg: weightedRowAverage(rows, ["actual_to_date_xrapm_avg"]),
    targetKey,
    targetLabel: first.target_value_label || targetConfigs.xrapm.label,
    targetUnit: first.target_unit || "xrapm",
    recommendedModel: first.recommended_model || first.feature_set || (historical ? "hist old_plus_llm_full" : first.prospective_2026_player_agg_recommended_model),
    featureSummary: summarizeFeatures(rows),
    comboFlags: summarizeCombos(rows),
    similarityVector: null,
    evidenceFields: {
      strengths: joinUniqueProse(rows.map((row) => row.scouting_strengths).filter(Boolean)),
      weaknesses: joinUniqueProse(rows.map((row) => row.scouting_weaknesses).filter(Boolean)),
      notes: joinUniqueProse(rows.map((row) => row.scouting_notes).filter(Boolean)),
      overall: joinUniqueProse(rows.map((row) => row.scouting_overall || row.trait_phrases_any).filter(Boolean))
    },
    whySummary: joinUniqueProse(rows.map((row) => row.llm_why_summary).filter(Boolean)),
    positiveDrivers: joinUnique(rows.map((row) => row.llm_positive_driver_traits).filter(Boolean)),
    riskDrivers: joinUnique(rows.map((row) => row.llm_risk_driver_traits).filter(Boolean)),
    positiveEvidence: joinUniqueProse(rows.map((row) => row.llm_positive_evidence).filter(Boolean)),
    riskEvidence: joinUniqueProse(rows.map((row) => row.llm_risk_evidence).filter(Boolean))
  };
}

function expectedFirst5SurplusFromBuckets(row) {
  const bust = toNumber(row.prob_bust);
  const slightUnder = toNumber(row.prob_slight_underperform);
  const slightOver = toNumber(row.prob_slight_overperform);
  const bigOver = toNumber(row.prob_big_overperform);
  if (![bust, slightUnder, slightOver, bigOver].some(Number.isFinite)) return NaN;
  return safeNumber(bigOver) * 2 + safeNumber(slightOver) * 0.75 - safeNumber(slightUnder) * 0.75 - safeNumber(bust) * 2;
}

function bucketFromRows(rows, field) {
  const counts = new Map();
  rows.forEach((row) => {
    const bucket = normalizeBucket(row[field]);
    if (!bucket) return;
    counts.set(bucket, (counts.get(bucket) || 0) + 1);
  });
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || bucketOrder.indexOf(a[0]) - bucketOrder.indexOf(b[0]))
    .map(([bucket]) => bucket)[0] || "";
}

function summarizeBucketProbabilities(rows) {
  return {
    bust: average(rows.map((row) => toNumber(row.prob_bust)).filter(Number.isFinite)),
    slight_underperform: average(rows.map((row) => toNumber(row.prob_slight_underperform)).filter(Number.isFinite)),
    average: average(rows.map((row) => toNumber(row.prob_average)).filter(Number.isFinite)),
    slight_overperform: average(rows.map((row) => toNumber(row.prob_slight_overperform)).filter(Number.isFinite)),
    big_overperform: average(rows.map((row) => toNumber(row.prob_big_overperform)).filter(Number.isFinite))
  };
}

function summarizeFeatures(rows) {
  return families.map((family) => {
    const phraseCounts = phraseCountsForRows(rows, family);
    const mentionRows = average([
      ...rows.map((row) => toNumber(row[`llm_${family}_llm_family_sentence_rows`])).filter(Number.isFinite),
      ...phraseCounts.all
    ]);
    const positiveRows = average([
      ...rows.map((row) => toNumber(row[`llm_${family}_positive_sentence_rows`])).filter(Number.isFinite),
      ...phraseCounts.positive
    ]);
    const negativeRows = average([
      ...rows.map((row) => toNumber(row[`llm_${family}_negative_sentence_rows`])).filter(Number.isFinite),
      ...phraseCounts.negative
    ]);
    const mixedRows = average([
      ...rows.map((row) => toNumber(row[`llm_${family}_mixed_sentence_rows`])).filter(Number.isFinite),
      ...phraseCounts.mixed
    ]);
    const caveatRows = average([
      ...rows.map((row) => toNumber(row[`llm_${family}_translation_caveat_rows`])).filter(Number.isFinite),
      ...phraseCounts.translation_caveat
    ]);
    const trueNegativeRows = average([
      ...rows.map((row) => toNumber(row[`llm_${family}_true_negative_rows`])).filter(Number.isFinite),
      ...phraseCounts.true_negative
    ]);
    const confidence = average(rows.map((row) => toNumber(row[`llm_${family}_avg_confidence`])).filter(Number.isFinite));
    return { family, mentionRows, positiveRows, negativeRows, mixedRows, caveatRows, trueNegativeRows, confidence };
  }).filter((item) => totalEvidenceRows(item) || item.confidence);
}

function phraseCountsForRows(rows, family) {
  const qualities = ["all", "positive", "negative", "mixed", "translation_caveat", "true_negative"];
  return Object.fromEntries(qualities.map((quality) => [
    quality,
    rows.map((row) => splitPhraseEvidence(row[`phrase_${family}_${quality}`]).length).filter((count) => count > 0)
  ]));
}

function summarizeCombos(rows) {
  const comboFields = [
    "combo_shooting_neg_plus_upside_neg",
    "combo_defense_neg_plus_upside_neg",
    "combo_finishing_neg_motor_caveat_shooting_neg",
    "shooting_negative_mixed_plus_upside_negative_mixed",
    "defense_negative_mixed_plus_upside_negative_mixed",
    "finishing_negative_mixed_plus_motor_caveat_plus_shooting_negative_mixed",
    "prospective_2026_player_agg_shooting_neg_plus_upside_neg",
    "prospective_2026_player_agg_defense_neg_plus_upside_neg",
    "prospective_2026_player_agg_finishing_neg_motor_caveat_shooting_neg"
  ];
  return comboFields
    .filter((field) => rows.some((row) => parseBool(row[field]) === true || row[field] === "1"))
    .map(normalizeComboFlagName);
}

function buildComboPresets(pairRows, tripleRows) {
  const rows = [
    ...pairRows.map((row) => ({ ...row, kind: row.combo_type || row.combo_kind || "risk" })),
    ...tripleRows.map((row) => ({ ...row, kind: row.combo_type || row.combo_kind || "positive" }))
  ];

  const basePresets = rows
    .map((row) => {
      const hitBustRate = firstFinite([
        toNumber(row.hit_bust_rate),
        toNumber(row.bad_rate),
        toNumber(row.bust_or_major_underperform_rate)
      ]);
      const baselineBustRate = Number.isFinite(toNumber(row.no_hit_bust_rate))
        ? toNumber(row.no_hit_bust_rate)
        : hitBustRate - firstFinite([toNumber(row.bad_rate_lift_vs_sample), toNumber(row.bust_rate_delta_vs_baseline)], 0);
      const hitPositiveRate = firstFinite([
        toNumber(row.hit_positive_surplus_rate),
        toNumber(row.good_rate),
        toNumber(row.big_overperform_rate),
        toNumber(row.positive_surplus_rate)
      ]);
      const baselinePositiveRate = Number.isFinite(toNumber(row.no_hit_positive_surplus_rate))
        ? toNumber(row.no_hit_positive_surplus_rate)
        : hitPositiveRate - firstFinite([toNumber(row.good_rate_lift_vs_sample), toNumber(row.big_overperform_rate_delta_vs_baseline)], 0);
      const conditions = parseComboConditions(row.combo, row.kind);
      const key = conditions.map((condition) => `${condition.family}:${condition.signal}`).join("|");
      return {
        key,
        kind: row.kind,
        combo: row.combo,
        label: comboPresetLabel(conditions),
        conditions,
        hitN: Number.isFinite(toNumber(row.hit_n)) ? toNumber(row.hit_n) : toNumber(row.n),
        hitBustRate,
        baselineBustRate,
        bustRelativeLift: baselineBustRate > 0 ? (hitBustRate - baselineBustRate) / baselineBustRate : 0,
        hitPositiveRate,
        baselinePositiveRate,
        positiveRelativeLift: baselinePositiveRate > 0 ? (hitPositiveRate - baselinePositiveRate) / baselinePositiveRate : 0,
        meanSurplusDiff: firstFinite([toNumber(row.mean_surplus_diff), toNumber(row.mean_first5_surplus), toNumber(row.mean_surplus)])
      };
    })
    .filter((preset) => preset.conditions.length >= 2);

  const modeledPresets = [
    ...selectComboPresets(basePresets, "dangerous"),
    ...selectComboPresets(basePresets, "positive")
  ];
  return mergeComboPresets([...manualTwoTraitComboPresets(), ...modeledPresets]);
}

function manualTwoTraitComboPresets() {
  return auditedSignalStats.groups
    .flatMap((group) => group.rows.map((row) => ({ ...row, groupTitle: group.title })))
    .filter((row) => row.conditions?.length === 2 && /combo/i.test(row.groupTitle || ""))
    .map((row) => {
      const tone = row.outcome === "above expected" ? "positive" : "dangerous";
      const conditions = row.conditions.map((condition) => ({
        family: condition.family,
        signal: modeToComboSignal(condition.mode)
      }));
      const key = conditions.map((condition) => `${condition.family}:${condition.signal}`).join("|");
      const relativeLift = Number(row.lift) / 100;
      const hitRate = Number(row.rate) / 100;
      return {
        id: `${tone}:two_trait:${key}`,
        key,
        kind: tone === "positive" ? "two_trait_positive" : "two_trait_risk",
        source: "two_trait",
        tone,
        combo: row.label,
        label: comboPresetLabel(conditions),
        conditions,
        hitN: NaN,
        hitRate,
        baselineRate: Number.isFinite(hitRate) && Number.isFinite(relativeLift)
          ? hitRate / (1 + relativeLift)
          : NaN,
        relativeLift,
        meanSurplusDiff: NaN
      };
    });
}

function mergeComboPresets(presets) {
  const seen = new Set();
  return presets.filter((preset) => {
    if (!preset?.key || seen.has(preset.key)) return false;
    seen.add(preset.key);
    return true;
  });
}

function modeToComboSignal(mode) {
  if (String(mode || "").startsWith("positive")) return "positive_trait_language";
  if (String(mode || "").startsWith("negative")) return "negative_or_mixed_weakness_language";
  if (String(mode || "").startsWith("caveat")) return "translation_caveat";
  return "any_mention";
}

function selectComboPresets(presets, tone) {
  const seen = new Set();
  const isPositive = tone === "positive";
  return presets
    .filter((preset) => presetKindMatchesTone(preset.kind, tone))
    .map((preset) => ({
      ...preset,
      id: `${tone}:${preset.kind}:${preset.key}`,
      tone,
      relativeLift: isPositive ? preset.positiveRelativeLift : preset.bustRelativeLift,
      hitRate: isPositive ? preset.hitPositiveRate : preset.hitBustRate,
      baselineRate: isPositive ? preset.baselinePositiveRate : preset.baselineBustRate
    }))
    .filter((preset) => Number.isFinite(preset.relativeLift) && preset.relativeLift > 0 && !seen.has(preset.key) && seen.add(preset.key))
    .sort((a, b) => b.relativeLift - a.relativeLift || b.hitRate - a.hitRate)
    .slice(0, 4);
}

function presetKindMatchesTone(kind, tone) {
  const value = String(kind || "").toLowerCase();
  if (tone === "positive") return value.includes("positive") || value.includes("helpful") || value.includes("best");
  return value.includes("risk") || value.includes("damaging") || value.includes("danger");
}

function parseComboConditions(combo, kind = "") {
  const defaultSignal = String(kind || "").toLowerCase().includes("positive")
    ? "positive_trait_language"
    : "negative_or_mixed_weakness_language";
  return String(combo || "")
    .split("+")
    .map((part) => {
      const delimiter = part.includes("|") ? "|" : ":";
      const pieces = part.split(delimiter).map((piece) => piece.trim()).filter(Boolean);
      if (!pieces.length) return null;
      return {
        family: normalizeComboFamily(pieces[0]),
        signal: normalizeComboSignal(pieces[1] || defaultSignal)
      };
    })
    .filter((condition) => condition && condition.family && condition.signal);
}

function comboPresetLabel(conditions) {
  return conditions
    .map((condition) => `${familyLabel(condition.family)} ${comboSignalShortLabel(condition.signal)}`)
    .join(" + ");
}

function comboSignalShortLabel(signal) {
  if (signal === "negative_or_mixed_weakness_language") return "Negative";
  if (signal === "positive_with_translation_caveat") return "Positive Caveat";
  if (signal === "translation_caveat") return "Caveat";
  if (signal === "positive_trait_language") return "Positive";
  if (signal === "mixed_trait_language") return "Mixed";
  if (signal === "true_negative_trait") return "Strict Negative";
  return labelize(signal);
}

function normalizeComboFlagName(field) {
  return String(field || "")
    .replace("prospective_2026_player_agg_", "")
    .replace("combo_", "")
    .replace("shooting_negative_mixed_plus_upside_negative_mixed", "shooting_neg_plus_upside_neg")
    .replace("defense_negative_mixed_plus_upside_negative_mixed", "defense_neg_plus_upside_neg")
    .replace("finishing_negative_mixed_plus_motor_caveat_plus_shooting_negative_mixed", "finishing_neg_motor_caveat_shooting_neg");
}

function normalizeComboFamily(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function normalizeComboSignal(value) {
  const normalized = normalizeComboFamily(value);
  const aliases = {
    positive: "positive_trait_language",
    negative_or_mixed: "negative_or_mixed_weakness_language",
    negative_mixed: "negative_or_mixed_weakness_language",
    caveat: "translation_caveat",
    negative_or_mixed_weakness_language: "negative_or_mixed_weakness_language",
    positive_with_translation_caveat: "positive_with_translation_caveat",
    translation_caveat: "translation_caveat",
    positive_trait_language: "positive_trait_language",
    mixed_trait_language: "mixed_trait_language",
    true_negative_trait: "true_negative_trait",
    negative_without_translation_caveat: "negative_without_translation_caveat",
    any_mention: "any_mention"
  };
  return aliases[normalized] || normalized;
}

function buildSentenceIndex(rows) {
  const index = new Map();
  rows.forEach((row) => {
    const name = row.actual_player || row.mock_player;
    const key = canonicalNameKey(name);
    if (!key || !row.sentence) return;
    if (!index.has(key)) index.set(key, []);
    index.get(key).push(row);
  });
  return index;
}

function buildHeadshotIndex(nbaRows, espnRows) {
  const index = new Map();

  const cached = new Set(["downloaded", "already_cached"]);

  nbaRows.forEach((row) => {
    if (!cached.has(row.download_status) || !row.local_file) return;
    const key = canonicalNameKey(row.player_key || row.player_name);
    index.set(key, `${LEGACY_DATA_ROOT}/headshots/nba_cdn_latest_1040x760/${basename(row.local_file)}`);
  });

  espnRows.forEach((row) => {
    const key = canonicalNameKey(row.player_key || row.player_name);
    if (index.has(key) || !cached.has(row.espn_download_status) || !row.espn_local_file) return;
    index.set(key, `${LEGACY_DATA_ROOT}/headshots/espn_fallback_350x254/${basename(row.espn_local_file)}`);
  });

  return index;
}

function buildPackageHeadshotIndex(rows) {
  const index = new Map();
  rows.forEach((row) => {
    const key = canonicalNameKey(row.player_key || row.actual_player || row.mock_player || row.headshot_player_name);
    const relative = String(row.headshot_package_relative_file || "").trim();
    if (!key || !relative || index.has(key)) return;
    index.set(key, `${ALL_YEARS_DATA_ROOT}/${relative.replace(/\\/g, "/")}`);
  });
  return index;
}

function normalizePickEvCurve(rows) {
  return rows
    .map((row) => ({
      ...row,
      pick: toNumber(row.pick),
      expected_xrapm_first5_avg_pick_ev: toNumber(row.expected_xrapm_first5_avg_pick_ev),
      expected_xrapm_peak_pick_ev: toNumber(row.expected_xrapm_peak_pick_ev),
      expected_prob_bust_or_no_translation: toNumber(row.expected_prob_bust_or_no_translation),
      expected_prob_rotation_plus: toNumber(row.expected_prob_rotation_plus),
      expected_prob_starter_plus: toNumber(row.expected_prob_starter_plus),
      expected_prob_star: toNumber(row.expected_prob_star)
    }))
    .filter((row) => Number.isFinite(row.pick))
    .sort((a, b) => a.pick - b.pick);
}

function renderLoading() {
  $("#hero-preview-count").textContent = "Loading curve";
  $("#hero-ev-preview").innerHTML = heroEvSkeletonTemplate();
  $("#players-body").innerHTML = playerTableSkeletonRows(6);
  $("#result-caption").textContent = "Loading players.";
  $("#sentiment-scatter").innerHTML = scatterSkeletonTemplate();
  $("#similar-results").innerHTML = panelSkeletonTemplate(3);
  $("#trait-insights").innerHTML = traitInsightSkeletonTemplate();
  $("#combo-spotlight-content").innerHTML = comboSpotlightSkeletonTemplate();
}

function heroEvSkeletonTemplate() {
  return `
    <div class="hero-ev-chart skeleton-chart" aria-label="Loading expected value curve">
      <span class="skeleton-line skeleton-line-lg"></span>
      <span class="skeleton-line skeleton-line-md"></span>
      <span class="skeleton-line skeleton-line-sm"></span>
      <span class="skeleton-marker" style="left:18%; top:32%;"></span>
      <span class="skeleton-marker" style="left:48%; top:52%;"></span>
      <span class="skeleton-marker" style="left:78%; top:68%;"></span>
      <span class="skeleton-axis"></span>
    </div>
  `;
}

function playerTableSkeletonRows(count = 6) {
  return Array.from({ length: count }, () => `
    <tr class="loading-row is-skeleton">
      <td><span class="skeleton-cell avatar"></span><span class="skeleton-cell name"></span></td>
      <td><span class="skeleton-cell short"></span></td>
      <td><span class="skeleton-cell short"></span></td>
      <td><span class="skeleton-cell tone"></span></td>
      <td><span class="skeleton-cell why"></span><span class="skeleton-cell why small"></span></td>
      <td><span class="skeleton-cell badge"></span><span class="skeleton-cell result"></span></td>
    </tr>
  `).join("");
}

function scatterSkeletonTemplate() {
  return `
    <div class="scatter-skeleton" aria-label="Loading scouting tone scatterplot">
      <span class="skeleton-axis horizontal"></span>
      <span class="skeleton-axis vertical"></span>
      ${Array.from({ length: 24 }, (_, index) => `
        <span class="skeleton-dot" style="left:${8 + ((index * 37) % 86)}%; top:${12 + ((index * 23) % 74)}%;"></span>
      `).join("")}
    </div>
  `;
}

function panelSkeletonTemplate(rows = 3) {
  return `
    <div class="panel-skeleton" aria-label="Loading section">
      ${Array.from({ length: rows }, (_, index) => `
        <span class="skeleton-bar ${index === 0 ? "wide" : index === rows - 1 ? "short" : ""}"></span>
      `).join("")}
    </div>
  `;
}

function traitInsightSkeletonTemplate() {
  return `
    <div class="signal-skeleton" aria-label="Loading trait and combo signals">
      ${panelSkeletonTemplate(4)}
      <div class="signal-skeleton-list">
        ${Array.from({ length: 5 }, () => `<span class="skeleton-bar"></span>`).join("")}
      </div>
    </div>
  `;
}

function comboSpotlightSkeletonTemplate() {
  return `
    <div class="combo-spotlight-grid is-loading" aria-label="Loading combo signal cards">
      ${Array.from({ length: 2 }, () => `
        <article class="combo-spotlight-card skeleton-card">
          <span class="skeleton-bar wide"></span>
          <span class="skeleton-bar short"></span>
          <div class="skeleton-mini-list">
            <span class="skeleton-cell avatar"></span>
            <span class="skeleton-bar"></span>
            <span class="skeleton-cell avatar"></span>
            <span class="skeleton-bar short"></span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderApp() {
  if (!state.loaded) return;
  applyCurrentTarget();
  const players = getFilteredPlayers();
  if (state.selectedId && !players.some((player) => player.id === state.selectedId)) state.selectedId = null;
  renderControls();
  renderHero();
  renderSimilarTool();
  renderActiveStack();
  renderPlayers(players);
  renderSentimentScatter(players);
  renderTraitInsights();
  renderComboSpotlight();
  updateHeaderSortState();
}

function renderHero() {
  const heroPlayers = store.playersByTarget.xrapm.length ? store.playersByTarget.xrapm : store.players;
  const heroPool = heroEvCandidatePlayers(heroPlayers);
  if (!state.heroMarkersSeeded) {
    state.heroMarkerCycle = Math.floor(Math.random() * Math.max(1, heroPool.length));
    state.heroMarkersSeeded = true;
  }
  const markers = heroEvPlayers(heroPool);
  const range = heroEvStableRange(heroPool);
  $("#hero-preview-count").textContent = store.pickEvCurve.length
    ? "First-5 xRAPM by pick slot"
    : "Expected value curve";
  const preview = $("#hero-ev-preview");
  const markerLayer = preview.querySelector(".hero-ev-markers");
  if (markerLayer) {
    markerLayer.innerHTML = markers.map((player) => heroEvMarkerTemplate(player, range)).join("");
  } else {
    preview.innerHTML = heroEvCurveTemplate(markers, range);
  }
  removeHeroMarkerCollisions();
  animateHeroEv();
}

function heroEvCandidatePlayers(players) {
  const desiredNames = [
    "Nikola Jokic",
    "Giannis Antetokounmpo",
    "Kawhi Leonard",
    "Anthony Bennett",
    "Marvin Bagley",
    "AJ Dybantsa",
    "Darryn Peterson"
  ];
  const pool = desiredNames
    .map((name) => findPlayerByNameInList(players, name))
    .filter(Boolean);
  const seen = new Set(pool.map((player) => player.id));
  const fillers = [
    ...players.filter((player) => player.dataset === "historical" && Number.isFinite(player.surplus)).sort((a, b) => b.surplus - a.surplus).slice(0, 4),
    ...players.filter((player) => player.dataset === "historical" && Number.isFinite(player.surplus)).sort((a, b) => a.surplus - b.surplus).slice(0, 4),
    ...players.filter((player) => player.dataset === "prospective_2026").sort((a, b) => (a.pick || 99) - (b.pick || 99)).slice(0, 4)
  ];
  fillers.forEach((player) => {
    if (pool.length >= 12 || seen.has(player.id)) return;
    seen.add(player.id);
    pool.push(player);
  });
  const eligible = pool
    .filter((player) => Number.isFinite(player.pick) && Number.isFinite(player.surplus))
    .slice(0, 12);
  return eligible;
}

function heroEvPlayers(eligible) {
  if (!eligible.length) return [];
  const firstIndex = state.heroMarkerCycle % eligible.length;
  const first = eligible[firstIndex];
  const firstX = pickToPlotX(first.pick);
  for (let offset = 1; offset < eligible.length; offset += 1) {
    const candidate = eligible[(firstIndex + offset) % eligible.length];
    if (Math.abs(pickToPlotX(candidate.pick) - firstX) >= HERO_MARKER_MIN_X_GAP) {
      return [first, candidate];
    }
  }
  return [first];
}

function startHeroMarkerCycle() {
  if (state.heroMarkerTimer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  state.heroMarkerTimer = window.setInterval(() => {
    if (!state.loaded) return;
    state.heroMarkerCycle = (state.heroMarkerCycle + 1 + Math.floor(Math.random() * 3)) % 12;
    renderHero();
  }, 2000);
}

function findPlayerByNameInList(players, name) {
  const normalized = normalizeName(name);
  return players.find((player) => normalizeName(player.name) === normalized)
    || players.find((player) => normalizeName(player.name).includes(normalized) || normalized.includes(normalizeName(player.name)));
}

function heroEvCurveTemplate(markers, range) {
  if (!store.pickEvCurve.length) {
    return `<p class="similar-empty">Expected value curve data is loading.</p>`;
  }
  const points = evCurvePolylineForRange(store.pickEvCurve, range);
  return `
    <div class="hero-ev-chart">
      <svg class="hero-ev-svg" viewBox="0 0 100 112" preserveAspectRatio="none" role="img" aria-label="Draft pick expected value curve with example players">
        <g class="ev-grid" aria-hidden="true">
          ${evPickTicks().map((pick) => {
            const x = pickToPlotX(pick);
            return `<line x1="${x.toFixed(2)}" x2="${x.toFixed(2)}" y1="5" y2="96"></line>`;
          }).join("")}
        </g>
        <polyline points="${escapeAttr(points)}"></polyline>
      </svg>
      <div class="hero-ev-markers">
        ${markers.map((player) => heroEvMarkerTemplate(player, range)).join("")}
      </div>
      <div class="hero-ev-axis" aria-hidden="true">
        ${evPickTicks().map((pick) => `<span style="left:${pickToPlotX(pick).toFixed(2)}%">${pick}</span>`).join("")}
      </div>
    </div>
    <div class="hero-ev-note">
      <span>Curve = expected first-5 xRAPM at each pick</span>
      <span>Markers above the line beat pick expectation; markers below it underperformed.</span>
    </div>
  `;
}

function heroEvMarkerTemplate(player, range) {
  const value = heroPlayerCurveValue(player);
  if (!Number.isFinite(value)) return "";
  const left = pickToPlotX(player.pick);
  const y = 100 - ((value - range.min) / (range.max - range.min || 1)) * 100;
  const tone = surplusTone(player.surplus);
  return `
    <div class="hero-ev-marker ${tone}" style="left:${left.toFixed(2)}%; top:${clamp(y, 7, 88).toFixed(2)}%;">
      ${avatarHtml(player, "hero-marker-avatar").replace('loading="lazy"', 'loading="eager"')}
      <span>
        <strong>${escapeHtml(player.name)}</strong>
        <small>Pick ${formatPick(player.pick)} / ${escapeHtml(formatSurplus(player.surplus, player))}</small>
      </span>
    </div>
  `;
}

function removeHeroMarkerCollisions() {
  const markers = $$(".hero-ev-marker");
  if (markers.length < 2) return;
  const [first, second] = markers;
  const a = first.getBoundingClientRect();
  const b = second.getBoundingClientRect();
  const buffer = 10;
  const overlaps = !(
    a.right + buffer < b.left
    || b.right + buffer < a.left
    || a.bottom + buffer < b.top
    || b.bottom + buffer < a.top
  );
  if (overlaps) second.remove();
}

function animateHeroEv() {
  const markers = $$(".hero-ev-marker");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  markers.forEach((marker) => {
    marker.style.transition = "none";
    marker.style.visibility = "visible";
    if (reduceMotion) {
      marker.style.opacity = "1";
      marker.style.transform = "translate(-50%, -50%)";
      return;
    }
    marker.style.opacity = "0";
    marker.style.transform = "translate(-50%, -44%) scale(0.985)";
    [
      [40, 0.28, -47, 0.99],
      [95, 0.58, -48.6, 0.995],
      [165, 0.84, -49.4, 0.998],
      [240, 1, -50, 1]
    ].forEach(([delay, opacity, y, scale]) => {
      window.setTimeout(() => {
        marker.style.opacity = String(opacity);
        marker.style.transform = `translate(-50%, ${y}%) scale(${scale})`;
      }, delay);
    });
  });
  window.setTimeout(() => {
    markers.forEach((marker) => {
      marker.style.opacity = "1";
      marker.style.visibility = "visible";
      marker.style.transform = "translate(-50%, -50%)";
    });
  }, 280);
}

function heroPlayerCurveValue(player) {
  const expected = expectedAtPick(player.pick, "expected_xrapm_first5_avg_pick_ev");
  return Number.isFinite(expected) && Number.isFinite(player.surplus) ? expected + player.surplus : NaN;
}

function evCurveRangeForValues(extraValues = []) {
  const values = store.pickEvCurve
    .map((row) => row.expected_xrapm_first5_avg_pick_ev)
    .filter(Number.isFinite)
    .concat(extraValues.filter(Number.isFinite));
  const min = Math.min(...values);
  const max = Math.max(...values);
  const pad = Math.max(0.35, (max - min) * 0.16);
  return { min: min - pad, max: max + pad };
}

function heroEvStableRange(heroPool) {
  return evCurveRangeForValues(heroPool.map((player) => heroPlayerCurveValue(player)).filter(Number.isFinite));
}

function evCurvePolylineForRange(curve, range) {
  const denom = range.max - range.min || 1;
  return curve
    .filter((row) => Number.isFinite(row.pick) && Number.isFinite(row.expected_xrapm_first5_avg_pick_ev))
    .map((row) => {
      const x = pickToPlotX(row.pick);
      const y = 100 - ((row.expected_xrapm_first5_avg_pick_ev - range.min) / denom) * 100;
      return `${x.toFixed(2)},${clamp(y, 4, 96).toFixed(2)}`;
    })
    .join(" ");
}

function pickToPlotX(pick) {
  return EV_PLOT_LEFT + clamp((pick - 1) / 59, 0, 1) * EV_PLOT_WIDTH;
}

function canUseGsap() {
  return Boolean(window.gsap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
}

function setupGsap() {
  if (state.gsapReady || !window.gsap) return;
  if (window.Flip) window.gsap.registerPlugin(window.Flip);
  window.gsap.defaults({ overwrite: "auto" });
  state.gsapReady = true;
  document.documentElement.dataset.motion = "gsap";
}

function renderActiveStack() {
  const stack = activeTraitPairs();
  const preset = activeComboPreset();
  const hasFilters = stack.length || preset;
  const content = hasFilters
    ? `
      <span>Matching</span>
      ${stack.map(({ family, mode }) => `
        <button type="button" class="active-stack-chip" data-active-stack-item="${escapeAttr(family)}" title="Remove ${escapeAttr(familyLabel(family))}">
          <strong>${escapeHtml(familyLabel(family))}</strong>
          <span>${escapeHtml(mode.label)}</span>
          <i aria-hidden="true">x</i>
        </button>
      `).join("")}
      ${preset ? `
        <button type="button" class="active-stack-chip is-combo" data-active-combo-preset="${escapeAttr(preset.id)}" title="Remove combo filter">
          <strong>Combo</strong>
          <span>${escapeHtml(preset.label)}</span>
          <i aria-hidden="true">x</i>
        </button>
      ` : ""}
    `
    : `<span>Showing <strong>all trait language</strong></span>`;
  $("#active-stack").innerHTML = `
    ${content}
    ${hasFilters ? `<button type="button" class="stack-reset">Clear all</button>` : ""}
  `;
  $$("[data-active-stack-item]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      clearTraitMode(button.dataset.activeStackItem);
    });
  });
  $$("[data-active-combo-preset]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      state.comboPresetId = null;
      state.selectedId = null;
      resetPagination();
      renderApp();
    });
  });
  $(".stack-reset")?.addEventListener("click", () => {
    state.traitModes.clear();
    state.comboPresetId = null;
    state.selectedId = null;
    resetPagination();
    renderApp();
  });
}

function renderSimilarTool() {
  if (!state.loaded) return;
  const input = $("#similar-search");
  if (document.activeElement !== input) input.value = state.similarQuery;
  $("#player-options").innerHTML = store.players
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((player) => `<option value="${escapeAttr(player.name)}">${escapeHtml(player.dataset === "historical" ? `${player.draftYear || "Historical"} / Pick ${formatPick(player.pick)}` : `${datasetLabel(player.dataset)} / Pick ${formatPick(player.pick)}`)}</option>`)
    .join("");

  const query = state.similarQuery.trim();
  const source = findPlayerByQuery(query);
  if (!query) {
    $("#similar-results").innerHTML = `<p class="similar-empty">Search any player to see five historical first-5 comps.</p>`;
    return;
  }
  if (!source) {
    $("#similar-results").innerHTML = `<p class="similar-empty">No player matched that name.</p>`;
    return;
  }

  const comps = similarPlayersFor(source, 5);
  $("#similar-results").innerHTML = `
    <div class="similar-source">
      ${avatarHtml(source, "avatar")}
      <div>
        <span>Closest historical comps for</span>
        <strong>${escapeHtml(source.name)}</strong>
        <small>${escapeHtml(source.dataset === "historical" ? `${source.draftYear || "Historical"} / Pick ${formatPick(source.pick)}` : `${datasetLabel(source.dataset)} / Pick ${formatPick(source.pick)}`)}</small>
      </div>
    </div>
    <div class="similar-list">
      ${comparisonExplainer(source, comps)}
      ${comps.map((match) => similarCardTemplate(match.player, match.score, match.sharedTraits)).join("")}
    </div>
  `;

  $$("[data-similar-player-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const player = store.players.find((item) => item.id === button.dataset.similarPlayerId);
      if (!player) return;
      state.dataset = player.dataset;
      state.selectedId = player.id;
      resetPagination();
      renderApp();
      document.querySelector(`[data-player-id="${CSS.escape(player.id)}"]`)?.scrollIntoView({ block: "nearest" });
    });
  });
}

function similarCardTemplate(player, score, sharedTraits) {
  const traits = sharedTraits.slice(0, 3);
  return `
    <button type="button" class="similar-card" data-similar-player-id="${escapeAttr(player.id)}">
      ${avatarHtml(player, "avatar")}
      <span class="similar-main">
        <strong>${escapeHtml(player.name)}</strong>
        <span>${escapeHtml(`${player.draftYear || "Historical"} / Pick ${formatPick(player.pick)} / ${shortSource(player.source)}`)}</span>
        <span class="similar-traits">${traits.length ? traits.map((trait) => escapeHtml(familyLabel(trait))).join(", ") : "Similar overall profile"}</span>
      </span>
      <span class="similar-outcome">
        <strong>${Math.round(score * 100)}%</strong>
        <small>${escapeHtml(bucketLabel(displayBucket(player)))}</small>
        ${bucketBadge(player)}
      </span>
    </button>
  `;
}

function renderComboSpotlight() {
  const container = $("#combo-spotlight-content");
  if (!container || !state.loaded) return;
  const presets = store.comboPresets;
  if (!presets.length) {
    container.innerHTML = `<p class="similar-empty">No combo examples available.</p>`;
    return;
  }
  const riskyTwoTrait = comboSpotlightEligiblePresets(presets.filter((preset) => preset.tone === "dangerous" && preset.source === "two_trait"));
  const positiveTwoTrait = comboSpotlightEligiblePresets(presets.filter((preset) => preset.tone === "positive" && preset.source === "two_trait"));
  const riskyMultiTrait = comboSpotlightEligiblePresets(presets.filter((preset) => preset.tone === "dangerous" && preset.source !== "two_trait"));
  const positiveMultiTrait = comboSpotlightEligiblePresets(presets.filter((preset) => preset.tone === "positive" && preset.source !== "two_trait"));
  const groups = [
    { title: "Most Damaging Two-Trait Combos", presets: riskyTwoTrait },
    { title: "Most Positive Two-Trait Combos", presets: positiveTwoTrait },
    { title: "Multi-Trait Risk Patterns", presets: riskyMultiTrait },
    { title: "Multi-Trait Positive Patterns", presets: positiveMultiTrait }
  ];
  const totalCards = groups.reduce((sum, group) => sum + group.presets.length, 0);
  const previewCards = 2;
  const hiddenCards = Math.max(0, totalCards - previewCards);
  const visibleGroups = state.comboSpotlightExpanded ? groups : comboSpotlightPreviewGroups(groups, previewCards);
  const hasContent = totalCards > 0;
  const groupsHtml = hasContent ? visibleGroups.map((group) => comboSpotlightGroup(group.title, group.presets)).join("") : "";
  container.innerHTML = hasContent
    ? `
      <div class="combo-spotlight-reveal ${state.comboSpotlightExpanded ? "is-expanded" : "is-collapsed"}">
        <div class="combo-spotlight-stack">
          ${groupsHtml}
          ${!state.comboSpotlightExpanded && hiddenCards > 0 ? comboSpotlightMorePanel(hiddenCards) : ""}
        </div>
      </div>
      ${state.comboSpotlightExpanded ? `
        <button type="button" class="combo-spotlight-toggle is-secondary" data-combo-spotlight-toggle aria-expanded="true">Show less</button>
      ` : ""}
    `
    : `<p class="similar-empty">No 2025-26 players currently match the saved combo presets.</p>`;

  $$("[data-spotlight-combo]").forEach((button) => {
    button.addEventListener("click", () => {
      state.dataset = "prospective_2026";
      applyComboPresetSelection(button.dataset.spotlightCombo, { scrollToTable: true });
    });
  });
  $("[data-combo-spotlight-toggle]")?.addEventListener("click", () => {
    state.comboSpotlightExpanded = !state.comboSpotlightExpanded;
    renderComboSpotlight();
    if (!state.comboSpotlightExpanded) {
      requestAnimationFrame(() => {
        $("#combo-spotlight")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });
}

function comboSpotlightPreviewGroups(groups, limit) {
  let remaining = limit;
  return groups.map((group) => {
    if (remaining <= 0) return { ...group, presets: [] };
    const presets = group.presets.slice(0, remaining);
    remaining -= presets.length;
    return { ...group, presets };
  }).filter((group) => group.presets.length);
}

function comboSpotlightMorePanel(hiddenCards) {
  return `
    <div class="combo-spotlight-more-panel">
      <div>
        <strong>${formatNumber(hiddenCards)} more combo signals</strong>
        <span>Open the full board for the rest of the 2025-26 prospect matches, including positive two-trait and multi-trait patterns.</span>
      </div>
      <button type="button" class="combo-spotlight-toggle" data-combo-spotlight-toggle aria-expanded="false">View all combo signals</button>
    </div>
  `;
}

function comboSpotlightEligiblePresets(presets) {
  return presets
    .map((preset) => ({
      preset,
      prospectCount: comboSpotlightRecentMatches(preset, 20).length
    }))
    .filter((item) => item.prospectCount > 0)
    .sort((a, b) => b.preset.relativeLift - a.preset.relativeLift || b.prospectCount - a.prospectCount)
    .map((item) => item.preset);
}

function comboSpotlightGroup(title, presets) {
  if (!presets.length) return "";
  return `
    <div class="combo-spotlight-group">
      <h3>${escapeHtml(title)}</h3>
      <div class="combo-spotlight-grid">
        ${presets.map(comboSpotlightCard).join("")}
      </div>
    </div>
  `;
}

function comboSpotlightCard(preset) {
  const prospects = comboSpotlightRecentMatches(preset, 5);
  const historical = comboSpotlightPlayers(preset, "historical", 4);
  const outcomeLabel = preset.tone === "positive" ? "above expected" : "below expected";
  const active = state.comboPresetId === preset.id;
  return `
    <article class="combo-spotlight-card ${preset.tone} ${active ? "is-active" : ""}">
      <div class="combo-spotlight-card-head">
        <span>${escapeHtml(comboPresetCompactLabel(preset))}</span>
        <strong>${escapeHtml(comboPresetLiftLabel(preset))}</strong>
      </div>
      <p>${escapeHtml(comboOutcomeRateLabel(preset, outcomeLabel))} in the historical sample.</p>
      <div class="combo-player-pair">
        ${comboPlayerList("2025-26 profiles", prospects, "No 2025-26 profiles")}
        ${comboPlayerList("Historical examples", historical, "No historical examples")}
      </div>
      <button type="button" class="combo-spotlight-action" data-spotlight-combo="${escapeAttr(preset.id)}">
        ${active ? "Showing exact combo" : "Show exact combo"}
      </button>
    </article>
  `;
}

function comboOutcomeRateLabel(preset, outcomeLabel) {
  if (!Number.isFinite(preset.hitRate)) return `${capitalizeFirst(outcomeLabel)} rate unavailable`;
  return `${statPercent(preset.hitRate * 100)} ${outcomeLabel}`;
}

function comboSpotlightRecentMatches(preset, limit) {
  const scored = store.players
    .filter((player) => player.dataset === "prospective_2026" || (player.dataset === "recent_projection" && Number(player.draftYear) === 2025))
    .map((player) => {
      const score = preset.conditions.filter((condition) => hasTraitFlag(player, condition.family, condition.signal)).length;
      return { player, score, exact: score === preset.conditions.length };
    })
    .filter((item) => item.exact || (Number(item.player.draftYear) === 2025 && item.score >= Math.max(1, preset.conditions.length - 1)));
  const exact2026 = scored
    .filter((item) => item.exact && item.player.dataset === "prospective_2026")
    .sort((a, b) => (a.player.pick || 999) - (b.player.pick || 999));
  const exact2025 = scored
    .filter((item) => item.exact && Number(item.player.draftYear) === 2025)
    .sort((a, b) => (a.player.pick || 999) - (b.player.pick || 999));
  const near2025 = scored
    .filter((item) => !item.exact && Number(item.player.draftYear) === 2025)
    .sort((a, b) => b.score - a.score || (a.player.pick || 999) - (b.player.pick || 999));
  const seen = new Set();
  return [...exact2026.slice(0, 2), ...exact2025, ...near2025, ...exact2026.slice(2)]
    .filter((item) => {
      if (seen.has(item.player.id)) return false;
      seen.add(item.player.id);
      return true;
    })
    .slice(0, limit);
}

function comboSpotlightPlayers(preset, dataset, limit) {
  return store.players
    .filter((player) => player.dataset === dataset)
    .filter((player) => playerMatchesComboPreset(player, preset))
    .sort((a, b) => {
      if (dataset === "prospective_2026") return (a.pick || 999) - (b.pick || 999);
      return preset.tone === "positive"
        ? (b.surplus || -999) - (a.surplus || -999)
        : (a.surplus || 999) - (b.surplus || 999);
    })
    .slice(0, limit);
}

function comboPlayerList(title, players, emptyLabel) {
  return `
    <div class="combo-player-list">
      <b>${escapeHtml(title)}</b>
      ${players.length ? players.map(comboMiniPlayer).join("") : `<span class="combo-empty">${escapeHtml(emptyLabel)}</span>`}
    </div>
  `;
}

function comboMiniPlayer(player) {
  const item = player.player ? player : { player, exact: true };
  const matchLabel = item.exact ? "match" : "near match";
  return `
    <div class="combo-mini-player">
      ${avatarHtml(item.player, "combo-mini-avatar")}
      <span>
        <strong>${escapeHtml(item.player.name)}</strong>
        <small>${escapeHtml(item.player.draftYear || "2026")} / Pick ${formatPick(item.player.pick)} / ${escapeHtml(bucketLabel(displayBucket(item.player)))} / ${escapeHtml(matchLabel)}</small>
      </span>
    </div>
  `;
}

function comboPresetCompactLabel(preset) {
  return preset.conditions
    .map((condition) => `${compactFamilyLabel(condition.family)} ${comboSignalBadgeLabel(condition.signal)}`)
    .join(" + ");
}

function comboSignalBadgeLabel(signal) {
  if (signal === "positive_trait_language") return "positive";
  if (signal === "positive_with_translation_caveat") return "positive/caveat";
  if (signal === "translation_caveat") return "caveat";
  if (signal === "mixed_trait_language") return "mixed";
  if (signal === "true_negative_trait") return "strict negative";
  if (signal === "negative_without_translation_caveat") return "negative";
  if (signal === "negative_or_mixed_weakness_language") return "negative";
  return labelize(signal).toLowerCase();
}

function compactFamilyLabel(family) {
  const labels = {
    shooting: "Shooting",
    defense: "Defense",
    feel_iq_passing: "Feel/IQ",
    creation_handle: "Handle",
    finishing_touch: "Finishing",
    athleticism_tools: "Athletic tools",
    upside_tools: "Upside",
    motor_competitiveness: "Motor",
    size_frame: "Frame",
    injury_medical: "Injury",
    risk_uncertainty: "Risk",
    production_stats: "Production",
    intel_consensus: "Intel"
  };
  return labels[family] || familyLabel(family);
}

function comboPresetLiftLabel(preset) {
  if (!Number.isFinite(preset.relativeLift)) return preset.tone === "positive" ? "Upside signal" : "Risk signal";
  const amount = statPercent(preset.relativeLift * 100);
  return preset.tone === "positive"
    ? `${amount} more likely to be above expected`
    : `${amount} more likely to be below expected`;
}

function renderPlayers(players) {
  const pageSize = state.pageSize === "all" ? players.length || 1 : state.pageSize;
  const totalPages = Math.max(1, Math.ceil(players.length / pageSize));
  state.page = clamp(Math.round(state.page || 1), 1, totalPages);
  const start = (state.page - 1) * pageSize;
  const visible = players.slice(start, start + pageSize);
  const rangeStart = players.length ? start + 1 : 0;
  const rangeEnd = Math.min(players.length, start + visible.length);
  $("#result-caption").textContent = players.length
    ? `${rangeStart}-${rangeEnd} of ${players.length} players match the active filters.`
    : "No players match the active filters.";
  const resultHeading = $("#result-column-heading");
  if (resultHeading) resultHeading.textContent = resultColumnLabel();
  if (!visible.length) {
    $("#players-body").innerHTML = `<tr class="empty-row"><td colspan="6">No players match this combination. Clear a trait or mode.</td></tr>`;
    renderPagination(players.length, totalPages);
    return;
  }

  $("#players-body").innerHTML = visible.map((player) => `
    <tr class="${player.id === state.selectedId ? "is-selected" : ""}">
      <td data-label="Player">
        <button type="button" class="player-button" data-player-id="${escapeAttr(player.id)}" aria-expanded="${player.id === state.selectedId}">
          ${avatarHtml(player, "avatar")}
          <span class="player-meta">
            <strong>${escapeHtml(player.name)}</strong>
          </span>
        </button>
      </td>
      <td data-label="Year">${escapeHtml(player.draftYear || "2026")}</td>
      <td data-label="Pick">${formatPick(player.pick)}</td>
      <td data-label="Scouting tone">${modelReadCell(player)}</td>
      <td data-label="Why">${rowWhyCell(player)}</td>
      <td data-label="${escapeAttr(resultColumnLabel())}">${outcomeSurplusCell(player)}</td>
    </tr>
    ${player.id === state.selectedId ? playerAccordionRow(player) : ""}
  `).join("");

  $$("[data-player-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = state.selectedId === button.dataset.playerId ? null : button.dataset.playerId;
      renderApp();
      if (state.selectedId) document.querySelector(`[data-player-id="${CSS.escape(state.selectedId)}"]`)?.scrollIntoView({ block: "nearest" });
    });
  });
  $$("[data-profile-similar-player-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const player = store.players.find((item) => item.id === button.dataset.profileSimilarPlayerId);
      if (!player) return;
      state.dataset = player.dataset;
      state.selectedId = player.id;
      renderApp();
      document.querySelector(`[data-player-id="${CSS.escape(player.id)}"]`)?.scrollIntoView({ block: "nearest" });
    });
  });

  renderPagination(players.length, totalPages);
}

function renderPagination(totalPlayers, totalPages) {
  const container = $("#pagination-controls");
  if (!container) return;
  const showingAll = state.pageSize === "all";
  container.innerHTML = `
    <div class="pagination-status">
      <strong>${escapeHtml(showingAll ? "Showing all" : `Page ${state.page} of ${totalPages}`)}</strong>
      <span>${formatNumber(totalPlayers)} matched players</span>
    </div>
    <div class="pagination-actions">
      <button type="button" data-page-action="prev" ${state.page <= 1 || showingAll ? "disabled" : ""}>Previous</button>
      <button type="button" data-page-action="next" ${state.page >= totalPages || showingAll ? "disabled" : ""}>Next</button>
      <label>
        Show
        <select data-page-size aria-label="Players per page">
          ${[10, 25, 50].map((size) => `<option value="${size}" ${state.pageSize === size ? "selected" : ""}>${size}</option>`).join("")}
          <option value="all" ${showingAll ? "selected" : ""}>All</option>
        </select>
      </label>
    </div>
  `;

  $$("[data-page-action]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.pageAction === "prev") state.page -= 1;
      if (button.dataset.pageAction === "next") state.page += 1;
      state.selectedId = null;
      renderApp();
      document.querySelector(".player-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  $$("[data-page-size]").forEach((select) => {
    select.addEventListener("change", () => {
      state.pageSize = select.value === "all" ? "all" : Number(select.value);
      state.selectedId = null;
      resetPagination();
      renderApp();
      document.querySelector(".player-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderSentimentScatter(players) {
  const container = $("#sentiment-scatter");
  const yearSelect = $("#scatter-year-filter");
  const comboSelect = $("#scatter-combo-filter");
  const comboLift = $("#scatter-combo-lift");
  if (!container || !yearSelect) return;

  const eligible = players
    .filter((player) => Number.isFinite(scatterSentimentValue(player)) && Number.isFinite(player.surplus))
    .filter((player) => state.scatterYear === "all" || String(player.draftYear || "2026") === state.scatterYear);
  renderScatterYearOptions(players, yearSelect);
  renderScatterComboOptions(comboSelect, comboLift);

  if (!eligible.length) {
    container.innerHTML = `<p class="similar-empty">No chartable players match these filters.</p>`;
    return;
  }

  const yRange = scatterYRange(eligible);
  const points = eligible.map((player) => scatterPointTemplate(player, yRange)).join("");
  const aboveCount = eligible.filter((player) => player.surplus >= 0).length;
  const positiveToneCount = eligible.filter((player) => scatterSentimentValue(player) >= 0).length;
  container.innerHTML = `
    <div class="scatter-summary">
      <span><b>${formatNumber(eligible.length)}</b> plotted players</span>
      <span><b>${formatNumber(aboveCount)}</b> above pick EV</span>
      <span><b>${formatNumber(positiveToneCount)}</b> positive-tone reads</span>
    </div>
    <div class="scatter-frame">
      <svg class="scatter-svg" viewBox="0 0 1000 520" role="img" aria-labelledby="sentiment-scatter-title">
        <g class="scatter-grid" aria-hidden="true">
          ${[-1, -0.5, 0, 0.5, 1].map((value) => `<line x1="${scatterX(value)}" x2="${scatterX(value)}" y1="44" y2="430"></line>`).join("")}
          ${scatterYTicks(yRange).map((value) => `<line x1="72" x2="940" y1="${scatterY(value, yRange)}" y2="${scatterY(value, yRange)}"></line>`).join("")}
        </g>
        <g class="scatter-zero" aria-hidden="true">
          <line x1="${scatterX(0)}" x2="${scatterX(0)}" y1="44" y2="430"></line>
          <line x1="72" x2="940" y1="${scatterY(0, yRange)}" y2="${scatterY(0, yRange)}"></line>
        </g>
        <g class="scatter-axis" aria-hidden="true">
          <text x="72" y="470">Negative scouting tone</text>
          <text x="500" y="470" text-anchor="middle">Neutral</text>
          <text x="940" y="470" text-anchor="end">Positive scouting tone</text>
          <text x="70" y="34">Above pick EV</text>
          <text x="70" y="448">Below pick EV</text>
        </g>
        <g class="scatter-points">
          ${points}
        </g>
      </svg>
      <div class="scatter-tooltip" hidden></div>
    </div>
  `;
  bindSentimentScatterEvents();
}

function renderScatterComboOptions(comboSelect, comboLift) {
  if (!comboSelect) return;
  const damaging = scatterComboPresetGroup("dangerous");
  const beneficial = scatterComboPresetGroup("positive");
  const activePreset = activeComboPreset();
  const includePreset = (preset, presets) => preset && !presets.some((item) => item.id === preset.id);
  if (includePreset(activePreset, damaging) && activePreset.tone === "dangerous") damaging.unshift(activePreset);
  if (includePreset(activePreset, beneficial) && activePreset.tone === "positive") beneficial.unshift(activePreset);

  const options = [
    `<option value="" ${state.comboPresetId ? "" : "selected"}>All active filters</option>`,
    scatterComboOptgroup("Most damaging combos", damaging),
    scatterComboOptgroup("Most beneficial combos", beneficial)
  ].join("");
  if (comboSelect.innerHTML !== options) comboSelect.innerHTML = options;
  comboSelect.value = state.comboPresetId || "";

  if (!comboSelect.dataset.bound) {
    comboSelect.dataset.bound = "true";
    comboSelect.addEventListener("change", () => {
      applyComboPresetSelection(comboSelect.value, { scrollToTable: false });
    });
  }

  if (comboLift) {
    comboLift.textContent = activePreset ? comboPresetLiftLabel(activePreset) : "Choose a combo to see historical lift.";
    comboLift.classList.toggle("positive", activePreset?.tone === "positive");
    comboLift.classList.toggle("dangerous", activePreset?.tone === "dangerous");
  }
}

function scatterComboPresetGroup(tone) {
  return store.comboPresets
    .filter((preset) => preset.tone === tone && scatterComboHasMatches(preset))
    .sort((a, b) => b.relativeLift - a.relativeLift || b.conditions.length - a.conditions.length)
    .slice(0, 10);
}

function scatterComboHasMatches(preset) {
  return store.players.some((player) => Number.isFinite(scatterSentimentValue(player)) && Number.isFinite(player.surplus) && playerMatchesComboPreset(player, preset));
}

function scatterComboOptgroup(label, presets) {
  if (!presets.length) return "";
  return `
    <optgroup label="${escapeAttr(label)}">
      ${presets.map((preset) => `
        <option value="${escapeAttr(preset.id)}" ${state.comboPresetId === preset.id ? "selected" : ""}>
          ${escapeHtml(comboPresetCompactLabel(preset))}
        </option>
      `).join("")}
    </optgroup>
  `;
}

function renderScatterYearOptions(players, yearSelect) {
  const years = uniqueList(players.map((player) => String(player.draftYear || "2026")).filter(Boolean))
    .sort((a, b) => Number(b) - Number(a));
  if (state.scatterYear !== "all" && !years.includes(state.scatterYear)) state.scatterYear = "all";
  const options = [
    `<option value="all" ${state.scatterYear === "all" ? "selected" : ""}>All matching years</option>`,
    ...years.map((year) => `<option value="${escapeAttr(year)}" ${state.scatterYear === year ? "selected" : ""}>${escapeHtml(year)}</option>`)
  ].join("");
  if (yearSelect.innerHTML !== options) yearSelect.innerHTML = options;
  yearSelect.value = state.scatterYear;
  if (!yearSelect.dataset.bound) {
    yearSelect.dataset.bound = "true";
    yearSelect.addEventListener("change", () => {
      state.scatterYear = yearSelect.value;
      renderApp();
    });
  }
}

function applyComboPresetSelection(presetId, options = {}) {
  const isActivatingPreset = Boolean(presetId);
  state.comboPresetId = presetId;
  if (isActivatingPreset) {
    state.traitModes.clear();
    state.search = "";
    setSortMode("pick_asc");
    const search = $("#search");
    if (search) search.value = "";
  }
  state.selectedId = null;
  resetPagination();
  renderApp();
  if (options.scrollToTable) {
    requestAnimationFrame(() => {
      document.querySelector(".player-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function scatterPointTemplate(player, yRange) {
  const xValue = scatterSentimentValue(player);
  const yValue = player.surplus;
  const x = scatterX(xValue);
  const y = scatterY(yValue, yRange);
  const tone = surplusTone(player.surplus);
  const radius = player.dataset === "prospective_2026" ? 6.3 : player.dataset === "recent_projection" ? 5.6 : 4.8;
  const label = `${player.name}, ${player.draftYear || "2026"}, pick ${formatPick(player.pick)}, ${modelReadLabel(xValue)}, ${formatSurplus(player.surplus, player)} vs pick EV`;
  return `
    <circle
      class="scatter-dot ${tone} dataset-${escapeAttr(player.dataset)}"
      cx="${x.toFixed(2)}"
      cy="${y.toFixed(2)}"
      r="${radius}"
      tabindex="0"
      role="button"
      aria-label="${escapeAttr(label)}"
      data-scatter-player-id="${escapeAttr(player.id)}"
      data-x="${((x / 1000) * 100).toFixed(2)}"
      data-y="${((y / 520) * 100).toFixed(2)}"
    ></circle>
  `;
}

function bindSentimentScatterEvents() {
  const frame = $(".scatter-frame");
  const tooltip = $(".scatter-tooltip");
  if (!frame || !tooltip) return;

  const show = (dot) => {
    const player = store.players.find((item) => item.id === dot.dataset.scatterPlayerId);
    if (!player) return;
    const x = clamp(Number(dot.dataset.x), 12, 84);
    const y = clamp(Number(dot.dataset.y), 8, 80);
    tooltip.hidden = false;
    tooltip.style.left = `${x}%`;
    tooltip.style.top = `${y}%`;
    tooltip.innerHTML = scatterTooltipTemplate(player);
  };
  const hide = () => {
    tooltip.hidden = true;
  };

  $$(".scatter-dot").forEach((dot) => {
    dot.addEventListener("mouseenter", () => show(dot));
    dot.addEventListener("focus", () => show(dot));
    dot.addEventListener("mouseleave", hide);
    dot.addEventListener("blur", hide);
    dot.addEventListener("click", () => {
      show(dot);
      const player = store.players.find((item) => item.id === dot.dataset.scatterPlayerId);
      if (!player) return;
      selectPlayerInResults(player.id);
      document.querySelector(`[data-player-id="${CSS.escape(player.id)}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}

function selectPlayerInResults(playerId) {
  const players = getFilteredPlayers();
  const index = players.findIndex((player) => player.id === playerId);
  if (index >= 0 && state.pageSize !== "all") {
    state.page = Math.floor(index / state.pageSize) + 1;
  }
  state.selectedId = playerId;
  renderApp();
}

function scatterTooltipTemplate(player) {
  return `
    <div class="scatter-tip-card">
      ${avatarHtml(player, "scatter-tip-avatar").replace('loading="lazy"', 'loading="eager"')}
      <div>
        <strong>${escapeHtml(player.name)}</strong>
        <span>${escapeHtml(player.draftYear || "2026")} / Pick ${formatPick(player.pick)} / ${escapeHtml(datasetLabel(player.dataset))}</span>
        <b>${escapeHtml(modelReadLabel(scatterSentimentValue(player)))} scouting tone</b>
        <small>${escapeHtml(first5ValueContext(player, { includePrefix: true }))}</small>
        ${scatterTraitChips(player)}
      </div>
    </div>
  `;
}

function scatterTraitChips(player) {
  const chipRows = player.featureSummary
    .filter((feature) => totalEvidenceRows(feature) > 0)
    .sort((a, b) => totalEvidenceRows(b) - totalEvidenceRows(a))
    .slice(0, 7);
  if (!chipRows.length) return "";
  return `
    <div class="scatter-tip-chips" aria-label="Scouting trait tone chips">
      ${chipRows.map((feature) => `
        <span class="scatter-tip-chip ${traitEvidenceTone(feature)}" title="${escapeAttr(traitEvidenceTitle(feature))}">
          ${escapeHtml(compactFamilyLabel(feature.family))}
        </span>
      `).join("")}
    </div>
  `;
}

function scatterSentimentValue(player) {
  const scores = scoutingLanguageScores(player);
  if (!scores.total) return NaN;
  return scores.net;
}

function scoutingLanguageScores(player) {
  const positive = player.featureSummary.reduce((total, feature) => total + safeNumber(feature.positiveRows), 0);
  const negative = player.featureSummary.reduce((total, feature) => total + traitConcernRows(feature), 0);
  const total = positive + negative;
  if (!total) {
    return {
      positive: 0,
      negative: 0,
      total: 0,
      positiveScore: NaN,
      negativeScore: NaN,
      net: NaN
    };
  }
  return {
    positive,
    negative,
    total,
    positiveScore: (positive / total) * 100,
    negativeScore: (negative / total) * 100,
    net: clamp((positive - negative) / total, -1, 1)
  };
}

function scatterX(value) {
  return 72 + ((clamp(value, -1, 1) + 1) / 2) * 868;
}

function scatterY(value, range) {
  return 430 - ((value - range.min) / (range.max - range.min || 1)) * 386;
}

function scatterYRange(players) {
  const values = players.map((player) => player.surplus).filter(Number.isFinite);
  const maxAbs = Math.max(1, ...values.map((value) => Math.abs(value)));
  const padded = Math.ceil(maxAbs + 0.5);
  return { min: -padded, max: padded };
}

function scatterYTicks(range) {
  const ticks = [range.min, range.min / 2, 0, range.max / 2, range.max]
    .map((value) => Math.round(value * 10) / 10);
  return Array.from(new Set(ticks));
}

function playerAccordionRow(player) {
  return `
    <tr class="detail-row">
      <td colspan="6">
        <div class="accordion-panel">
          ${playerDetailTemplate(player)}
        </div>
      </td>
    </tr>
  `;
}

function playerDetailTemplate(player) {
  if (!player) {
    return `<div class="empty-evidence"><h3>Phrase evidence</h3><p>No player is selected.</p></div>`;
  }

  const phraseRows = phraseEvidenceFor(player);
  const sentences = phraseRows.length ? phraseRows : isolateSentenceRows(evidenceFor(player));
  const activeTraits = topFeatureFamilies(player);
  const strengths = sentences.filter((row) => sentenceRole(row) === "strength").slice(0, 4);
  const strictWeaknesses = sentences.filter((row) => concernTier(row) === "strict");
  const mixedConcerns = sentences.filter((row) => concernTier(row) === "concern");
  const fallbackStrengths = player.evidenceFields.strengths
    ? isolateSentenceRows([{ sentence: player.evidenceFields.strengths, llm_trait_quality: "positive", llm_trait_families: activeTraits.join("|"), llm_confidence: "" }])
    : [];
  const fallbackWeaknesses = player.evidenceFields.weaknesses
    ? isolateSentenceRows([{ sentence: player.evidenceFields.weaknesses, llm_trait_quality: "negative", llm_trait_families: activeTraits.join("|"), llm_confidence: "" }])
    : [];
  const strengthRows = strengths.length ? strengths : fallbackStrengths;
  const weaknessRows = combinedConcernRows(strictWeaknesses, mixedConcerns, fallbackWeaknesses, 7);

  return `
    <div class="evidence-head">
      ${avatarHtml(player, "avatar")}
      <div>
        <h3>Phrase evidence</h3>
        <div class="player-meta">
          <strong id="evidence-name">${escapeHtml(player.name)}</strong>
          <span>${escapeHtml(player.draftYear || "2026")} / Pick ${formatPick(player.pick)} / ${escapeHtml(shortSource(player.source))}</span>
        </div>
      </div>
    </div>

    <div class="evidence-kicker">
      <span>${escapeHtml(modelLabel(player.recommendedModel))}</span>
      <span>${formatNumber(player.reportCount || player.rows.length)} reports</span>
      <span>${sentences.length} sentences</span>
    </div>

    <div class="prob-pair">
      ${languageMeterCard("positive", "Positive language", scoutingLanguageScores(player).positiveScore)}
      ${languageMeterCard("negative", "Negative language", scoutingLanguageScores(player).negativeScore)}
      <div class="prob-card">
        <span>Result</span>
        <div class="prob-bucket-line">
          ${bucketBadge(player)}
        </div>
        <small>${escapeHtml(first5ValueContext(player, { includePrefix: false }))}</small>
      </div>
    </div>

    ${pickEvBlock(player)}

    <div class="trait-list">
      ${activeTraits.map((trait) => traitPill(player, trait)).join(" ")}
      ${player.comboFlags.map((flag) => `<span class="trait-pill is-active">${escapeHtml(comboLabel(flag))}</span>`).join(" ")}
    </div>
    ${mixedTraitNote(player, activeTraits)}

    ${whySummaryBlock(player)}
    ${profileSimilarBlock(player)}
    ${evidenceBlock("Weakness and caveat evidence", weaknessRows, "weak", "No weakness or caveat phrases found.")}
    ${evidenceBlock("Scouting strengths", strengthRows, "strong")}
    ${featureBars(player)}
  `;
}

function languageMeterCard(kind, label, value) {
  const score = normalizeScore(value);
  const safeScore = Number.isFinite(score) ? clamp(score, 0, 100) : 0;
  const toneLabel = kind === "positive" ? positiveLanguageLabel(value) : concernLanguageLabel(value);
  return `
    <div class="prob-card language-card ${kind}">
      <div class="language-meter-head">
        <span>${escapeHtml(label)}</span>
        <strong>${Number.isFinite(score) ? Math.round(safeScore) : "n/a"}</strong>
      </div>
      <div class="language-meter-track" aria-label="${escapeAttr(`${label}: ${toneLabel}`)}" title="${escapeAttr(toneLabel)}">
        <span style="width:${safeScore}%"></span>
      </div>
    </div>
  `;
}

function traitPill(player, trait) {
  const feature = player.featureSummary.find((item) => item.family === trait);
  const tone = traitEvidenceTone(feature);
  const active = state.traitModes.has(trait) ? " is-active" : "";
  return `<span class="trait-pill ${tone}${active}" title="${escapeAttr(traitEvidenceTitle(feature))}">${escapeHtml(familyLabel(trait))}</span>`;
}

function traitEvidenceTone(feature) {
  if (!feature) return "is-balanced";
  const positive = safeNumber(feature.positiveRows);
  const negative = traitConcernRows(feature);
  if (!positive && !negative) return "is-balanced";
  const diff = positive - negative;
  const tolerance = Math.max(0.25, (positive + negative) * 0.12);
  if (diff > tolerance) return "is-positive";
  if (diff < -tolerance) return "is-negative";
  return "is-balanced";
}

function traitEvidenceTitle(feature) {
  if (!feature) return "Balanced or limited evidence";
  const positive = safeNumber(feature.positiveRows);
  const negative = traitConcernRows(feature);
  if (positive > negative) return "Mostly positive language";
  if (negative > positive) return "Mostly negative or caveat language";
  return "Balanced positive and concern language";
}

function traitConcernRows(feature) {
  return safeNumber(feature.negativeRows) + safeNumber(feature.mixedRows) + safeNumber(feature.caveatRows) + safeNumber(feature.trueNegativeRows);
}

function mixedTraitNote(player, activeTraits) {
  const overlaps = activeTraits
    .map((trait) => player.featureSummary.find((item) => item.family === trait))
    .filter((feature) => feature && safeNumber(feature.positiveRows) > 0 && traitConcernRows(feature) > 0)
    .map((feature) => familyLabel(feature.family))
    .slice(0, 3);
  if (!overlaps.length) return "";
  return `
    <p class="mixed-trait-note">
      Mixed read: ${escapeHtml(overlaps.join(", "))} appears in both strengths and concerns because different sentences describe different parts of the same broad trait.
    </p>
  `;
}

function whySummaryBlock(player) {
  if (!player.whySummary && !player.positiveDrivers && !player.riskDrivers) return "";
  return `
    <div class="evidence-block why-block">
      <h4>Model read</h4>
      ${player.whySummary ? `<p class="evidence-sentence">${escapeHtml(player.whySummary)}</p>` : ""}
      <div class="driver-grid">
        ${driverCell("Strengths", player.positiveDrivers || player.positiveEvidence)}
        ${driverCell("Weaknesses/concerns", player.riskDrivers || player.riskEvidence)}
      </div>
    </div>
  `;
}

function driverCell(label, value) {
  if (!value) return "";
  return `
    <div class="driver-cell">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(plainDriverList(value))}</strong>
    </div>
  `;
}

function plainDriverList(value) {
  return String(value || "")
    .split(/\s*[|,;]\s*/g)
    .map((item) => familyLabel(normalizeComboFamily(item)) || labelize(item))
    .filter(Boolean)
    .slice(0, 5)
    .join(", ");
}

function meaningfulDriverList(value) {
  const label = plainDriverList(value);
  const normalized = label.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const emptyLabels = new Set(["", "n a", "na", "none", "not available", "no major risk driver listed"]);
  return emptyLabels.has(normalized) ? "" : label;
}

function profileSimilarBlock(player) {
  const comps = similarPlayersFor(player, 5);
  if (!comps.length) return "";
  return `
    <div class="evidence-block profile-similar">
      <h4>Closest scouting comps</h4>
      ${comparisonExplainer(player, comps)}
      <div class="profile-similar-list">
        ${comps.map((match) => profileSimilarCard(match.player, match.score, match.sharedTraits)).join("")}
      </div>
    </div>
  `;
}

function comparisonExplainer(source, comps) {
  const compSurplus = average(comps.map((match) => match.player.surplus).filter(Number.isFinite));
  return `
    <div class="comp-explainer">
      <p>Closest comps are scouting-language neighbors, not the projection. The model also calibrates against pick expected value, so a top-pick prospect can resemble successful players and still land near neutral versus that pick baseline.</p>
      <div class="comp-summary">
        <span>
          <b>Comp avg surplus</b>
          <strong>${Number.isFinite(compSurplus) ? `${formatSurplus(compSurplus, source)} vs pick EV` : "n/a"}</strong>
        </span>
        <span>
          <b>${resultStatusLabel(source)} surplus</b>
          <strong>${Number.isFinite(source.surplus) ? `${formatSurplus(source.surplus, source)} vs pick EV` : "n/a"}</strong>
        </span>
      </div>
    </div>
  `;
}

function profileSimilarCard(player, score, sharedTraits) {
  const traits = sharedTraits.slice(0, 3);
  return `
    <button type="button" class="similar-card profile-similar-card" data-profile-similar-player-id="${escapeAttr(player.id)}">
      ${avatarHtml(player, "avatar")}
      <span class="similar-main">
        <strong>${escapeHtml(player.name)}</strong>
        <span>${escapeHtml(`${player.draftYear || "Historical"} / Pick ${formatPick(player.pick)} / ${shortSource(player.source)}`)}</span>
        <span class="similar-traits">${traits.length ? traits.map((trait) => escapeHtml(familyLabel(trait))).join(", ") : "Similar report shape"}</span>
      </span>
      <span class="similar-outcome">
        <strong>${Math.round(score * 100)}%</strong>
        <small>${escapeHtml(first5ValueContext(player, { includePrefix: false }))}</small>
        ${bucketBadge(player)}
      </span>
    </button>
  `;
}

function pickEvBlock(player) {
  if (player.targetKey !== "xrapm" || !store.pickEvCurve.length || !Number.isFinite(player.pick) || !Number.isFinite(player.surplus)) return "";
  const expected = expectedAtPick(player.pick, "expected_xrapm_first5_avg_pick_ev");
  if (!Number.isFinite(expected)) return "";
  const playerValue = expected + player.surplus;
  const yRange = evCurveRange();
  const points = evCurvePolyline(store.pickEvCurve);
  const playerX = pickToPlotX(player.pick);
  const playerY = 100 - ((playerValue - yRange.min) / (yRange.max - yRange.min)) * 100;
  const equivalentPick = equivalentPickForValue(playerValue);
  return `
    <div class="pick-ev-card">
      <div>
        <h4>Pick expected value curve</h4>
        <p>Baseline at pick ${formatPick(player.pick)} is ${formatSurplus(expected, player)}. Add the player surplus to place him on the curve.</p>
      </div>
      <div class="ev-chart-frame">
        <svg class="ev-sparkline" viewBox="0 0 100 112" preserveAspectRatio="none" role="img" aria-label="Draft pick expected xRAPM curve">
          <polyline points="${escapeAttr(points)}"></polyline>
          <line x1="${playerX.toFixed(2)}" x2="${playerX.toFixed(2)}" y1="8" y2="94"></line>
          ${evTickSvg()}
        </svg>
        <div class="ev-html-ticks" aria-hidden="true">
          ${evPickTicks().map((pick) => `<span style="left:${pickToPlotX(pick).toFixed(2)}%">${pick}</span>`).join("")}
        </div>
        <span class="ev-player-marker" style="left:${playerX.toFixed(2)}%; top:${clamp(playerY, 4, 96).toFixed(2)}%;" aria-hidden="true"></span>
      </div>
      <div class="ev-values">
        <span><b>Pick EV</b><strong>${escapeHtml(formatSurplus(expected, player))}</strong></span>
        <span><b>${escapeHtml(resultStatusLabel(player))}</b><strong>${escapeHtml(formatSurplus(playerValue, player))}</strong></span>
        <span><b>Surplus</b><strong>${escapeHtml(formatSurplus(player.surplus, player))}</strong></span>
        <span><b>EV-equivalent slot</b><strong>${Number.isFinite(equivalentPick) ? `Pick ${formatPick(equivalentPick)}` : "n/a"}</strong></span>
      </div>
    </div>
  `;
}

function evidenceBlock(title, rows, tone, emptyText = "No phrase evidence is available for this section.") {
  if (!rows.length) {
    return `
      <div class="evidence-block">
        <h4 class="${evidenceToneClass(tone)}">${title}</h4>
        <p class="evidence-sentence">${escapeHtml(emptyText)}</p>
      </div>
    `;
  }

  return `
    <div class="evidence-block">
      <h4 class="${evidenceToneClass(tone)}">${title}</h4>
      ${rows.map((row) => `
        <div class="evidence-item">
          <div class="evidence-meta">
            <span>${escapeHtml(metaListLabel(row.llm_trait_families || row.sentence_lexicon_families || "source text"))}</span>
            ${evidenceQualityBadges(row)}
            ${row.llm_confidence ? `<span>Confidence ${Number(toNumber(row.llm_confidence)).toFixed(2)}</span>` : ""}
          </div>
          <p class="evidence-sentence">${highlightSentence(row.sentence, row, tone)}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function combinedConcernRows(strictRows, mixedRows, fallbackRows = [], limit = 7) {
  const rows = strictRows.length || mixedRows.length ? [...strictRows, ...mixedRows] : fallbackRows;
  const merged = new Map();

  rows.forEach((row) => {
    const sentenceKey = concernEvidenceFingerprint(normalizeEvidenceSentence(row.sentence));
    if (!sentenceKey) return;
    if (!merged.has(sentenceKey)) {
      merged.set(sentenceKey, {
        ...row,
        families: new Set(),
        qualityLabels: new Set(),
        inferredLabels: new Set()
      });
    }
    const target = merged.get(sentenceKey);
    if (String(row.sentence || "").length > String(target.sentence || "").length) {
      target.sentence = row.sentence;
    }
    splitPipeValues(row.llm_trait_families || row.sentence_lexicon_families).forEach((family) => addIf(target.families, family));
    splitPipeValues(row.llm_trait_quality || row.label).forEach((quality) => addIf(target.qualityLabels, quality));
    splitPipeValues(row.inferred_label).forEach((label) => addIf(target.inferredLabels, label));
  });

  return Array.from(merged.values()).map((row) => ({
    ...row,
    llm_trait_families: Array.from(row.families).join("|") || row.llm_trait_families || row.sentence_lexicon_families || "",
    llm_trait_quality: Array.from(row.qualityLabels).join("|") || row.llm_trait_quality || row.label || "",
    inferred_label: Array.from(row.inferredLabels).join("|") || row.inferred_label || "",
    evidence_labels: Array.from(row.qualityLabels)
  })).slice(0, limit);
}

function concernEvidenceFingerprint(normalizedSentence) {
  const words = String(normalizedSentence || "").split(/\s+/).filter(Boolean);
  if (words.length <= 24) return words.join(" ");
  return words.slice(0, 24).join(" ");
}

function splitPipeValues(value) {
  if (Array.isArray(value)) {
    return value.flatMap(splitPipeValues);
  }
  return String(value || "")
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);
}

function evidenceQualityBadges(row) {
  const values = splitPipeValues(row.evidence_labels || row.llm_trait_quality || row.inferred_label || "");
  const labels = Array.from(new Set(values.map(traitQualityLabel).filter(Boolean)));
  if (!labels.length) return "";
  return `<span class="evidence-badges">${labels.map((label) => `<span class="evidence-badge ${evidenceBadgeTone(label)}">${escapeHtml(label)}</span>`).join("")}</span>`;
}

function evidenceBadgeTone(label) {
  const quality = String(label || "").toLowerCase();
  if (quality.includes("positive")) return "positive";
  if (quality.includes("caveat") || quality.includes("mixed")) return "caveat";
  if (quality.includes("negative")) return "negative";
  return "";
}

function evidenceToneClass(tone) {
  if (tone === "weak") return "weak";
  if (tone === "caveat") return "caveat";
  return "";
}

function phraseEvidenceFor(player) {
  const familyPool = profileEvidenceFamilies(player);
  const merged = new Map();
  const qualities = [
    { key: "positive", label: "positive" },
    { key: "negative", label: "negative" },
    { key: "mixed", label: "mixed" },
    { key: "translation_caveat", label: "translation_caveat" },
    { key: "true_negative", label: "true_negative_trait" }
  ];

  player.rows.forEach((row) => {
    familyPool.forEach((family) => {
      qualities.forEach(({ key, label }) => {
        splitPhraseEvidence(row[`phrase_${family}_${key}`]).forEach((phrase) => {
          addMergedEvidenceRow(merged, {
            sentence: phrase,
            family,
            label,
            inferred_label: label === "positive" ? "inferred_strength" : "inferred_weakness",
            llm_confidence: ""
          });
        });
      });
    });
  });

  return Array.from(merged.values()).map(finalizeMergedEvidenceRow).slice(0, 18);
}

function profileEvidenceFamilies(player) {
  return uniqueList([
    ...topFeatureFamilies(player),
    ...splitList(player.positiveDrivers).map(normalizeComboFamily),
    ...splitList(player.riskDrivers).map(normalizeComboFamily),
    ...player.featureSummary
      .filter((feature) => totalEvidenceRows(feature) > 0)
      .map((feature) => feature.family)
  ]);
}

function addMergedEvidenceRow(merged, row) {
  const sentence = repairScoutingPunctuation(row.sentence);
  const sentenceKey = normalizeEvidenceSentence(sentence);
  if (!sentenceKey) return;
  const key = `${evidenceMergeGroup(row.label)}|${evidenceDisplayFingerprint(sentenceKey)}`;
  if (!merged.has(key)) {
    merged.set(key, {
      sentence,
      families: new Set(),
      qualities: new Set(),
      inferredLabels: new Set(),
      confidenceValues: []
    });
  }
  const target = merged.get(key);
  if (String(sentence || "").length > String(target.sentence || "").length) {
    target.sentence = sentence;
  }
  addIf(target.families, row.family);
  addIf(target.qualities, row.label);
  addIf(target.inferredLabels, row.inferred_label);
  const confidence = toNumber(row.llm_confidence);
  if (Number.isFinite(confidence)) target.confidenceValues.push(confidence);
}

function evidenceMergeGroup(label) {
  const quality = String(label || "").toLowerCase();
  if (quality.includes("positive")) return "positive";
  if (quality.includes("mixed") || quality.includes("caveat") || quality.includes("translation_caveat")) return "concern";
  return "strict";
}

function evidenceDisplayFingerprint(normalizedSentence) {
  const words = String(normalizedSentence || "").split(/\s+/).filter(Boolean);
  if (words.length <= 34) return words.join(" ");
  return words.slice(0, 34).join(" ");
}

function finalizeMergedEvidenceRow(row) {
  return {
    sentence: row.sentence,
    llm_trait_families: Array.from(row.families).join("|"),
    llm_trait_quality: Array.from(row.qualities).join("|"),
    inferred_label: Array.from(row.inferredLabels).join("|"),
    llm_confidence: row.confidenceValues.length ? average(row.confidenceValues) : ""
  };
}

function splitPhraseEvidence(value) {
  return String(value || "")
    .split(/\s*\|\|\s*/g)
    .map((phrase) => cleanEvidenceText(phrase))
    .filter(Boolean);
}

function cleanEvidenceText(value) {
  return String(value || "")
    .replace(/â€¦/g, "...")
    .replace(/\s+/g, " ")
    .replace(/(\d)\?(\d)/g, "$1'$2")
    .replace(/\bPronounced\s+\?([^?]+)\?\s+\?/gi, 'Pronounced "$1" ... ')
    .replace(/\s+\?\s+/g, " ... ")
    .replace(/\s+\?$/g, ".")
    .replace(/([a-z0-9])\?(\s|$)/gi, "$1.$2")
    .replace(/\s+([.,;:])/g, "$1")
    .replace(/\.{4,}/g, "...")
    .trim();
}

function featureBars(player) {
  const rows = player.featureSummary.slice(0, 6);
  if (!rows.length) return "";
  const max = Math.max(1, ...rows.map(totalEvidenceRows));
  return `
    <div class="evidence-block">
      <h4>Trait sentence sentiment</h4>
      ${rows.map((row) => {
        const pos = (safeNumber(row.positiveRows) / max) * 100;
        const neg = ((safeNumber(row.negativeRows) + safeNumber(row.mixedRows)) / max) * 100;
        const cav = (safeNumber(row.caveatRows) / max) * 100;
        return `
          <div class="sentiment-row">
            <div class="distribution-labels">
              <span>${escapeHtml(familyLabel(row.family))}</span>
              <span>${row.confidence ? `Avg. confidence ${row.confidence.toFixed(2)}` : ""}</span>
            </div>
            <div class="distribution-track" aria-hidden="true">
              <span class="dist-positive" style="width:${pos}%"></span>
              <span class="dist-neutral" style="width:${cav}%"></span>
              <span class="dist-negative" style="width:${neg}%"></span>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderTraitInsights() {
  const [aboveBaseline, belowBaseline] = auditedSignalStats.baselines;
  $("#trait-insights").innerHTML = `
    <article class="signal-summary">
      <div class="signal-summary-head">
        <div>
          <h3>Combined odds</h3>
          <p>Above or below expected means the player beat or missed his pick-slot expected value.</p>
        </div>
        <div class="signal-baseline">
          <span>${escapeHtml(aboveBaseline.label)} <b>${statPercent(aboveBaseline.value)}</b></span>
          <span>${escapeHtml(belowBaseline.label)} <b>${statPercent(belowBaseline.value)}</b></span>
        </div>
      </div>
      <div class="signal-table signal-accordion-list" aria-label="Trait and combo signal odds">
        ${combinedSignalGroups()}
      </div>
    </article>
  `;
  bindSignalAccordions();
  bindSignalFilterActions();
}

function combinedSignalGroups() {
  const maxLift = combinedMaxLift();
  return auditedSignalStats.groups.map((group, index) => `
    <details class="signal-accordion ${signalTone(group.rows[0])}" ${index === 0 ? "open" : ""}>
      <summary>
        <span>
          <b>${escapeHtml(group.title)}</b>
          <small>${escapeHtml(group.note)}</small>
        </span>
        <i>${group.rows.length} signals · click to ${index === 0 ? "collapse" : "expand"}</i>
      </summary>
      <div class="signal-bar-list">
        ${group.rows.map((row) => combinedSignalRow(row, maxLift)).join("")}
      </div>
    </details>
  `).join("");
}

function bindSignalAccordions() {
  if (!canUseGsap()) return;
  setupGsap();
  $$(".signal-accordion").forEach((accordion) => {
    const summary = accordion.querySelector("summary");
    const content = accordion.querySelector(".signal-bar-list");
    if (!summary || !content) return;
    if (!accordion.open) content.style.display = "none";
    summary.addEventListener("click", (event) => {
      event.preventDefault();
      const opening = !accordion.open;
      if (opening) {
        accordion.open = true;
        content.style.display = "grid";
        window.gsap.fromTo(content, { height: 0, autoAlpha: 0, y: -6 }, {
          height: "auto",
          autoAlpha: 1,
          y: 0,
          duration: 0.24,
          ease: "power2.out",
          onComplete: () => {
            content.style.height = "";
          }
        });
      } else {
        window.gsap.to(content, {
          height: 0,
          autoAlpha: 0,
          y: -6,
          duration: 0.18,
          ease: "power2.in",
          onComplete: () => {
            accordion.open = false;
            content.style.display = "none";
            content.style.height = "";
            content.style.opacity = "";
            content.style.transform = "";
          }
        });
      }
    });
  });
}

function combinedSignalRow(row, maxLift) {
  const tone = signalTone(row);
  const lift = Math.abs(Number(row.lift));
  const width = clamp((lift / Math.max(maxLift, 1)) * 100, 7, 100);
  const liftPhrase = signalLiftPhrase(row);
  const actionLabel = row.conditions?.length > 1 ? "Find players with this combo" : "Find players with this trait";
  const preset = row.conditions?.length > 1 ? comboPresetForSignalRow(row) : null;
  return `
    <div class="signal-bar-row ${tone}" aria-label="${escapeAttr(`${row.label}: ${liftPhrase}. ${statPercent(row.rate)} ${row.outcome}.`)}">
      <strong>${escapeHtml(row.label)}</strong>
      <span class="signal-bar-track" aria-hidden="true"><i style="width:${width}%"></i></span>
      <span class="signal-row-result">
        <b>${escapeHtml(liftPhrase)}</b>
        <button
          type="button"
          class="signal-filter-action"
          data-signal-conditions="${escapeAttr(encodeURIComponent(JSON.stringify(row.conditions || [])))}"
          ${preset ? `data-signal-preset-id="${escapeAttr(preset.id)}"` : ""}
        >
          ${escapeHtml(actionLabel)}
        </button>
      </span>
    </div>
  `;
}

function comboPresetForSignalRow(row) {
  const conditions = (row.conditions || []).map((condition) => ({
    family: condition.family,
    signal: modeToComboSignal(condition.mode)
  }));
  const key = conditions.map((condition) => `${condition.family}:${condition.signal}`).join("|");
  return store.comboPresets.find((preset) => preset.key === key) || null;
}

function bindSignalFilterActions() {
  $$("[data-signal-conditions]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (button.dataset.signalPresetId) {
        applyComboPresetSelection(button.dataset.signalPresetId, { scrollToTable: true });
        return;
      }
      const conditions = parseSignalActionConditions(button.dataset.signalConditions);
      if (!conditions.length) return;
      applySignalFilters(conditions);
    });
  });
}

function parseSignalActionConditions(value) {
  try {
    const parsed = JSON.parse(decodeURIComponent(value || ""));
    return Array.isArray(parsed)
      ? parsed.filter((condition) => condition?.family && condition?.mode)
      : [];
  } catch {
    return [];
  }
}

function applySignalFilters(conditions) {
  state.comboPresetId = null;
  state.traitModes.clear();
  conditions.forEach((condition) => {
    if (families.includes(condition.family) && signalModeByKey.has(condition.mode)) {
      state.traitModes.set(condition.family, condition.mode);
    }
  });
  state.search = "";
  const searchInput = $("#search");
  if (searchInput) searchInput.value = "";
  setSortMode("pick_asc");
  state.selectedId = null;
  resetPagination();
  renderApp();
  requestAnimationFrame(() => {
    document.querySelector(".player-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function combinedMaxLift() {
  return Math.max(...auditedSignalStats.groups.flatMap((group) => group.rows.map((row) => Math.abs(Number(row.lift) || 0))));
}

function statPercent(value) {
  return `${Number(value).toFixed(1)}%`;
}

function signalTone(row) {
  return row?.outcome === "above expected" ? "good" : "bad";
}

function signalLiftPhrase(row) {
  const number = Math.abs(Number(row.lift) || 0);
  const outcome = row.outcome === "above expected" ? "above expected" : "below expected";
  return `${number.toFixed(1)}% more likely to be ${outcome}`;
}

function getFilteredPlayers() {
  const players = store.players.filter((player) => datasetMatches(player.dataset, state.dataset));
  const stack = activeTraitPairs();
  const preset = activeComboPreset();

  return players
    .filter((player) => {
      if (!stack.length) return true;
      return stack.every(({ family, mode }) => playerMatchesTraitMode(player, family, mode.key));
    })
    .filter((player) => {
      if (!preset) return true;
      return playerMatchesComboPreset(player, preset);
    })
    .filter((player) => {
      if (!state.search) return true;
      const haystack = [
        player.name,
        player.key,
        ...(player.aliases || []),
        player.source,
        player.school,
        player.position,
        player.draftYear,
        player.outcomeTier,
        player.recommendedModel
      ].join(" ").toLowerCase();
      return haystack.includes(state.search);
    })
    .sort(sortPlayers);
}

function sortPlayers(a, b) {
  const byName = a.name.localeCompare(b.name);
  const byYear = compareNumbers(Number(a.draftYear), Number(b.draftYear));
  const byPick = compareNumbers(a.pick, b.pick);
  const byTone = compareNumbers(scoutingToneValue(a), scoutingToneValue(b));
  const bySurplus = compareNumbers(a.surplus, b.surplus);
  if (state.sort === "name_asc") return byName || byYear || byPick;
  if (state.sort === "name_desc") return -byName || -byYear || byPick;
  if (state.sort === "year_asc") return byYear || byPick || byName;
  if (state.sort === "year_desc") return -byYear || byPick || byName;
  if (state.sort === "pick_asc") return byPick || -byYear || byName;
  if (state.sort === "pick_desc") return -byPick || -byYear || byName;
  if (state.sort === "tone_asc" || state.sort === "negative_desc") return byTone || byPick || byName;
  if (state.sort === "tone_desc" || state.sort === "positive_desc") return -byTone || byPick || byName;
  if (state.sort === "surplus_asc") return bySurplus || byPick || byName;
  return -bySurplus || byPick || byName;
}

function compareNumbers(a, b) {
  const aFinite = Number.isFinite(a);
  const bFinite = Number.isFinite(b);
  if (!aFinite && !bFinite) return 0;
  if (!aFinite) return 1;
  if (!bFinite) return -1;
  return a - b;
}

function scoutingToneValue(player) {
  return scatterSentimentValue(player);
}

function evidenceFor(player) {
  const index = player.dataset === "historical" ? store.historicalSentencesByPlayer : store.prospectiveSentencesByPlayer;
  const rows = index.get(player.key) || [];
  const selectedFamilies = activeTraitFamilies();
  if (!selectedFamilies.length) return rows.slice(0, 18);

  const filtered = rows.filter((row) => {
    const fams = `${row.llm_trait_families || ""}|${row.sentence_lexicon_families || ""}`;
    return selectedFamilies.some((family) => fams.includes(family));
  });
  return (filtered.length ? filtered : rows).slice(0, 18);
}

function isolateSentenceRows(rows) {
  const seen = new Set();
  const isolated = [];
  rows.forEach((row) => {
    splitSentenceText(cleanEvidenceText(row.sentence)).forEach((sentence) => {
      const key = normalizeEvidenceSentence(sentence);
      if (!key || seen.has(key)) return;
      seen.add(key);
      isolated.push({ ...row, sentence });
    });
  });
  return isolated;
}

function splitSentenceText(text) {
  const cleaned = repairScoutingPunctuation(text).replace(/\s+/g, " ").trim();
  if (!cleaned) return [];
  const chunks = cleaned
    .split(/\s*(?:…|\.{3})\s*/g)
    .flatMap((chunk) => chunk.split(/(?<=[.!?])\s+(?=[A-Z])/g))
    .map((chunk) => chunk.replace(/^[\s,;:.-]+|[\s,;:-]+$/g, "").trim())
    .filter((chunk) => chunk.length >= 24);

  return (chunks.length ? chunks : [cleaned]).map((chunk) => chunk.length > 260 ? `${chunk.slice(0, 257).trim()}...` : chunk);
}

function normalizeEvidenceSentence(sentence) {
  return String(sentence || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function sentenceRole(row) {
  const role = `${row.llm_sentence_role || row.inferred_label || row.commentary_section || row.training_label || ""}`.toLowerCase();
  const quality = String(row.llm_trait_quality || "").toLowerCase();
  return role.includes("weak")
    || role.includes("risk")
    || quality.includes("negative")
    || quality.includes("mixed")
    || quality.includes("translation_caveat")
    ? "weakness"
    : "strength";
}

function concernTier(row) {
  const quality = String(row.llm_trait_quality || row.inferred_label || "").toLowerCase();
  if (quality.includes("negative")) return "strict";
  if (quality.includes("mixed") || quality.includes("translation_caveat") || quality.includes("caveat")) return "concern";
  return sentenceRole(row) === "weakness" ? "strict" : "positive";
}

function traitQualityLabel(value) {
  const quality = String(value || "").toLowerCase();
  if (quality.includes("mixed") && (quality.includes("caveat") || quality.includes("translation_caveat"))) return "Mixed/caveat negative";
  if (quality === "positive" || quality.includes("strength")) return "Positive";
  if (quality === "negative") return "Strict negative";
  if (quality === "true_negative_trait" || quality === "true_negative") return "True negative";
  if (quality === "mixed") return "Mixed negative";
  if (quality === "translation_caveat" || quality.includes("caveat")) return "Caveat negative";
  return labelize(value);
}

function highlightSentence(sentence, row, tone) {
  const activeFamilies = activeTraitFamilies();
  const rowFamilies = `${row.llm_trait_families || ""}|${row.sentence_lexicon_families || ""}`.split("|").filter(Boolean);
  const familySet = activeFamilies.length ? activeFamilies : rowFamilies;
  const terms = new Set();
  familySet.forEach((family) => (phraseHints[family] || []).forEach((term) => terms.add(term)));
  const quality = String(row.llm_trait_quality || "").toLowerCase();
  const className = row.llm_translation_caveat === "True" || tone === "caveat"
    ? "caveat"
    : tone === "weak" || quality.includes("negative")
      ? "negative"
      : "positive";
  return applyHighlights(repairScoutingPunctuation(sentence), Array.from(terms).slice(0, 18), className);
}

function applyHighlights(text, terms, className) {
  let escaped = escapeHtml(text);
  const sorted = terms.filter(Boolean).sort((a, b) => b.length - a.length);
  sorted.forEach((term) => {
    const safe = escapeRegExp(escapeHtml(term));
    escaped = escaped.replace(new RegExp(`\\b(${safe})\\b`, "gi"), `<mark class="${className}">$1</mark>`);
  });
  return escaped;
}

function topFeatureFamilies(player) {
  return player.featureSummary
    .slice()
    .sort((a, b) => totalEvidenceRows(b) - totalEvidenceRows(a))
    .map((item) => item.family)
    .slice(0, 6);
}

function outcomeBadge(player) {
  return bucketBadge(player);
}

function bucketBadge(player) {
  const bucket = displayBucket(player);
  const label = resultBucketLabel(player, bucket);
  return `<span class="badge bucket-badge ${bucketTone(bucket)}">${escapeHtml(label)}</span>`;
}

function resultBucketLabel(player, bucket) {
  const label = bucketLabel(bucket);
  if (player.dataset === "recent_projection") {
    if (hasActualToDatePlayer(player)) return label;
    if (hasActualResultPlayer(player)) return label;
    return `${label} (Projected)`;
  }
  if (player.dataset === "prospective_2026") return `${label} (Projected)`;
  return label;
}

function modelReadCell(player) {
  const net = scatterSentimentValue(player);
  if (!Number.isFinite(net)) {
    return `<span class="muted-cell">No phrase tone</span>`;
  }
  const marker = ((net + 1) / 2) * 100;
  const label = modelReadLabel(net);
  return `
    <div class="axis-cell is-compact" aria-label="Negative to positive scouting tone: ${escapeAttr(label)}" title="Scouting tone: ${escapeAttr(label)}">
      <div class="model-axis" aria-hidden="true">
        <span class="axis-zero"></span>
        <span class="axis-marker" style="left:${marker}%"></span>
      </div>
      <div class="axis-range" aria-hidden="true">
        <span>Negative</span>
        <span>Positive</span>
      </div>
    </div>
  `;
}

function sourceConsensusCell(player) {
  const reportCount = player.reportCount || player.rows.length;
  const aliasLine = aliasSummary(player);
  return `
    <div class="source-cell">
      <strong>${escapeHtml(shortSource(player.source))}</strong>
      <span>Consensus from ${formatNumber(reportCount)} ${reportCount === 1 ? "report" : "reports"}</span>
      ${aliasLine ? `<span>${escapeHtml(aliasLine)}</span>` : ""}
    </div>
  `;
}

function aliasSummary(player) {
  const aliases = uniqueList(player.aliases || [])
    .map(repairPlayerName)
    .filter((name) => normalizeName(name) && normalizeName(name) !== normalizeName(player.name))
    .slice(0, 3);
  if (!aliases.length) return "";
  return `Merged aliases: ${aliases.join(" / ")}`;
}

function rowWhyCell(player) {
  const drivers = meaningfulDriverList(player.positiveDrivers || player.positiveEvidence);
  const risks = meaningfulDriverList(player.riskDrivers || player.riskEvidence);
  if (!drivers && !risks) return "";
  return `
    <div class="why-cell">
      ${drivers ? `<span><b>Strengths:</b> ${escapeHtml(drivers)}</span>` : ""}
      ${risks ? `<span><b>Weaknesses/concerns:</b> ${escapeHtml(risks)}</span>` : ""}
    </div>
  `;
}

function outcomeSurplusCell(player) {
  return `
    <div class="bucket-cell">
      <div class="bucket-line">
        ${bucketBadge(player)}
      </div>
      ${resultStatusNote(player)}
      <span>${escapeHtml(first5ValueContext(player, { includePrefix: false }))}</span>
      ${rowEvSlotLine(player)}
    </div>
  `;
}

function resultStatusNote(player) {
  if (!hasActualToDatePlayer(player)) return "";
  return `<span class="result-status-note">${escapeHtml(partialResultLabel(player))}</span>`;
}

function rowEvSlotLine(player) {
  const value = evEquivalentValue(player);
  const equivalentPick = equivalentPickForValue(value);
  if (!Number.isFinite(equivalentPick)) return "";
  return `<span class="ev-slot-line">EV slot equivalent: pick ${escapeHtml(formatPick(equivalentPick))}</span>`;
}

function evEquivalentValue(player) {
  if (player.targetKey !== "xrapm" || !Number.isFinite(player.pick) || !Number.isFinite(player.surplus)) return NaN;
  const expected = expectedAtPick(player.pick);
  return Number.isFinite(expected) ? expected + player.surplus : NaN;
}

function modelReadLabel(net) {
  if (net >= 0.8) return "Strong positive";
  if (net >= 0.5) return "Positive";
  if (net >= 0.15) return "Lean positive";
  if (net > -0.15) return "Neutral";
  if (net > -0.5) return "Lean negative";
  if (net > -0.8) return "Negative";
  return "Strong negative";
}

function languageStrengthLabel(value, kind = "positive") {
  const score = normalizeScore(value);
  if (!Number.isFinite(score)) return "n/a";
  if (score >= 75) return "Strong";
  if (score >= 55) return kind === "concern" ? "Moderate" : "Moderate";
  if (score >= 45) return "Balanced";
  if (score >= 25) return "Light";
  return "Very light";
}

function formatSurplus(value, player) {
  if (!Number.isFinite(value)) return "n/a";
  return `${signed(value, 2)} xRAPM`;
}

function first5ValueContext(player, options = {}) {
  const includePrefix = options.includePrefix !== false;
  const prefix = resultStatusLabel(player);
  const leading = includePrefix ? `${prefix} ` : "";
  if (!Number.isFinite(player.surplus)) return `${leading}model result`.trim();
  return `${leading}${formatSurplus(player.surplus, player)} vs pick EV`;
}

function resultStatusLabel(player) {
  if (player.dataset === "historical") return "Actual";
  if (player.dataset === "recent_projection") {
    if (hasActualToDatePlayer(player)) return partialResultLabel(player);
    if (hasActualResultPlayer(player)) return "Actual";
    return "Projected";
  }
  return "Projected";
}

function resultColumnLabel() {
  if (state.dataset === "all") return "Result / Projection";
  return state.dataset === "prospective_2026" ? "Projection" : "Result";
}

function partialYearsLabel(player) {
  const actualCount = Number(player?.actualToDateSeasonCount);
  if (Number.isFinite(actualCount) && actualCount > 0) {
    const rounded = Math.round(actualCount);
    return `${rounded} ${rounded === 1 ? "season" : "seasons"}`;
  }
  const draftYear = Number(player?.draftYear);
  const years = Number.isFinite(draftYear) ? clamp(2026 - draftYear, 1, 5) : 1;
  return `${years} ${years === 1 ? "year" : "years"}`;
}

function partialResultLabel(player) {
  const actualCount = Number(player?.actualToDateSeasonCount);
  if (Number.isFinite(actualCount) && Math.round(actualCount) === 1) {
    return "Through First Season";
  }
  return `Through First ${partialYearsLabel(player)}`;
}

function hasActualToDatePlayer(player) {
  return player?.surplusType === "actual_to_date" && Number(player.actualToDateSeasonCount) > 0;
}

function hasActualResultPlayer(player) {
  return player?.surplusType === "actual";
}

function targetConfig() {
  return targetConfigs[state.target] || targetConfigs.xrapm;
}

function datasetLabel(dataset) {
  return datasetLabels[dataset] || labelize(dataset);
}

function datasetContextLabel(dataset) {
  return datasetContextLabels[dataset] || datasetLabel(dataset);
}

function datasetMatches(playerDataset, selectedDataset = state.dataset) {
  return selectedDataset === "all" || playerDataset === selectedDataset;
}

function surplusTone(value) {
  if (!Number.isFinite(value)) return "neutral";
  if (value > 0.05) return "positive";
  if (value < -0.05) return "negative";
  return "neutral";
}

function displayBucket(player) {
  const numericBucket = normalizeBucket(player.rows[0]?.display_surplus_tier_from_numeric);
  if (numericBucket) return numericBucket;
  return player.dataset === "historical"
    ? normalizeBucket(player.actualBucket || player.predictedBucket || player.outcomeTier)
    : normalizeBucket(player.predictedBucket || topProbabilityBucket(player) || player.outcomeTier);
}

function expectedAtPick(pick, yField = "expected_xrapm_first5_avg_pick_ev") {
  const x = Number(pick);
  const curve = store.pickEvCurve;
  if (!Number.isFinite(x) || !curve.length) return NaN;
  if (x <= curve[0].pick) return curve[0][yField];
  if (x >= curve[curve.length - 1].pick) return curve[curve.length - 1][yField];
  const hi = curve.find((row) => row.pick >= x);
  const lo = curve.slice().reverse().find((row) => row.pick <= x);
  if (!lo || !hi) return NaN;
  if (lo.pick === hi.pick) return lo[yField];
  const t = (x - lo.pick) / (hi.pick - lo.pick);
  return lo[yField] + t * (hi[yField] - lo[yField]);
}

function evCurveRange(extraValue) {
  const values = store.pickEvCurve
    .map((row) => row.expected_xrapm_first5_avg_pick_ev)
    .filter(Number.isFinite);
  if (Number.isFinite(extraValue)) values.push(extraValue);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const pad = Math.max(0.2, (max - min) * 0.12);
  return { min: min - pad, max: max + pad };
}

function evCurvePolyline(curve, extraValue) {
  const range = evCurveRange(extraValue);
  const denom = range.max - range.min || 1;
  return curve
    .filter((row) => Number.isFinite(row.pick) && Number.isFinite(row.expected_xrapm_first5_avg_pick_ev))
    .map((row) => {
      const x = pickToPlotX(row.pick);
      const y = 100 - ((row.expected_xrapm_first5_avg_pick_ev - range.min) / denom) * 100;
      return `${x.toFixed(2)},${clamp(y, 2, 98).toFixed(2)}`;
    })
    .join(" ");
}

function evTickSvg() {
  return evPickTicks().map((pick) => {
    const x = pickToPlotX(pick);
    return `
      <g class="ev-tick">
        <line x1="${x.toFixed(2)}" x2="${x.toFixed(2)}" y1="98" y2="102"></line>
      </g>
    `;
  }).join("");
}

function evPickTicks() {
  return [1, 10, 20, 30, 40, 50, 60];
}

function equivalentPickForValue(value) {
  if (!Number.isFinite(value) || !store.pickEvCurve.length) return NaN;
  return store.pickEvCurve
    .filter((row) => Number.isFinite(row.expected_xrapm_first5_avg_pick_ev))
    .map((row) => ({
      pick: row.pick,
      diff: Math.abs(row.expected_xrapm_first5_avg_pick_ev - value)
    }))
    .sort((a, b) => a.diff - b.diff || a.pick - b.pick)[0]?.pick ?? NaN;
}

function topProbabilityBucket(player) {
  const probs = player.bucketProbs || {};
  return bucketOrder
    .map((bucket) => ({ bucket, value: probs[bucket] }))
    .filter((item) => Number.isFinite(item.value))
    .sort((a, b) => b.value - a.value || bucketOrder.indexOf(a.bucket) - bucketOrder.indexOf(b.bucket))[0]?.bucket || "";
}

function bucketCountsForPlayers(players, mode = "actual") {
  const counts = Object.fromEntries(bucketOrder.map((bucket) => [bucket, 0]));
  players.forEach((player) => {
    const bucket = mode === "predicted"
      ? normalizeBucket(player.predictedBucket || topProbabilityBucket(player))
      : displayBucket(player);
    if (bucket && Object.prototype.hasOwnProperty.call(counts, bucket)) counts[bucket] += 1;
  });
  return counts;
}

function mostCommonBucket(counts) {
  const ranked = bucketOrder
    .map((bucket) => ({ bucket, value: safeNumber(counts[bucket]) }))
    .sort((a, b) => b.value - a.value || bucketOrder.indexOf(a.bucket) - bucketOrder.indexOf(b.bucket));
  return ranked[0]?.value > 0 ? ranked[0].bucket : "";
}

function bucketLabel(value) {
  const bucket = normalizeBucket(value);
  return bucketLabels[bucket] || labelize(value || "Unknown");
}

function bucketTone(value) {
  const bucket = normalizeBucket(value);
  if (bucket === "big_overperform" || bucket === "slight_overperform") return "positive";
  if (bucket === "bust" || bucket === "slight_underperform") return "negative";
  return "neutral";
}

function normalizeBucket(value) {
  const raw = String(value || "").trim().toLowerCase().replace(/[\s-]+/g, "_");
  if (!raw) return "";
  if (bucketLabels[raw]) return raw;
  if (raw.includes("big") && raw.includes("over")) return "big_overperform";
  if (raw.includes("slight") && raw.includes("over")) return "slight_overperform";
  if (raw.includes("average") || raw.includes("neutral")) return "average";
  if (raw.includes("slight") && raw.includes("under")) return "slight_underperform";
  if (raw.includes("bust")) return "bust";
  return raw;
}

function avatarHtml(player, className) {
  const src = store.headshots.get(player.key);
  if (src) {
    return `<img class="${className}" src="${escapeAttr(src)}" alt="${escapeAttr(player.name)} headshot" loading="lazy" data-fallback-initials="${escapeAttr(initials(player.name))}" />`;
  }
  return `<span class="avatar-fallback" aria-label="${escapeAttr(player.name)} initials">${escapeHtml(initials(player.name))}</span>`;
}

function activeTraitPairs() {
  return Array.from(state.traitModes.entries()).map(([family, modeKey]) => ({
    family,
    mode: signalModeByKey.get(modeKey) || signalModeByKey.get("any")
  }));
}

function activeTraitFamilies() {
  return activeTraitPairs().map(({ family }) => family);
}

function activeComboPreset() {
  if (!state.comboPresetId) return null;
  return store.comboPresets.find((preset) => preset.id === state.comboPresetId) || null;
}

function traitMatchCount(family, modeKey) {
  return store.players
    .filter((player) => datasetMatches(player.dataset))
    .filter((player) => playerMatchesTraitMode(player, family, modeKey))
    .length;
}

function comboPresetMatchCount(preset) {
  return store.players
    .filter((player) => datasetMatches(player.dataset))
    .filter((player) => playerMatchesComboPreset(player, preset))
    .length;
}

function playerMatchesTraitMode(player, family, modeKey) {
  const evidence = traitEvidence(player, family);
  const positive = evidence.positiveRows;
  const negative = evidence.negativeRows + evidence.mixedRows + evidence.trueNegativeRows;
  const caveat = evidence.caveatRows;
  const total = positive + negative + caveat;

  if (modeKey === "any") return total > 0 || hasTraitFlag(player, family, "any_mention");
  if (modeKey === "positive_any") return positive > 0 || hasTraitFlag(player, family, "positive_trait_language");
  if (modeKey === "positive_majority") return positive > 0 && positive > negative + caveat;
  if (modeKey === "positive_all") return positive > 0 && negative === 0 && caveat === 0;
  if (modeKey === "negative_any") return negative > 0 || hasTraitFlag(player, family, "negative_or_mixed_weakness_language");
  if (modeKey === "negative_majority") return negative > 0 && negative > positive + caveat;
  if (modeKey === "negative_all") return negative > 0 && positive === 0 && caveat === 0;
  if (modeKey === "caveat_any") {
    return caveat > 0 || hasTraitFlag(player, family, "translation_caveat") || hasTraitFlag(player, family, "positive_with_translation_caveat");
  }
  return total > 0;
}

function playerMatchesComboPreset(player, preset) {
  return preset.conditions.every((condition) => hasTraitFlag(player, condition.family, condition.signal));
}

function traitEvidence(player, family) {
  const feature = player.featureSummary.find((item) => item.family === family) || {};
  return {
    mentionRows: safeNumber(feature.mentionRows),
    positiveRows: safeNumber(feature.positiveRows),
    negativeRows: safeNumber(feature.negativeRows),
    mixedRows: safeNumber(feature.mixedRows),
    caveatRows: safeNumber(feature.caveatRows),
    trueNegativeRows: safeNumber(feature.trueNegativeRows),
    confidence: safeNumber(feature.confidence)
  };
}

function hasTraitFlag(player, family, signal) {
  return player.rows.some((row) => {
    const phrasePositive = hasPhraseEvidence(row, family, "positive");
    const phraseNegative = hasPhraseEvidence(row, family, "negative");
    const phraseMixed = hasPhraseEvidence(row, family, "mixed");
    const phraseCaveat = hasPhraseEvidence(row, family, "translation_caveat");
    const phraseTrueNegative = hasPhraseEvidence(row, family, "true_negative");
    const phraseAny = hasPhraseEvidence(row, family, "all") || phrasePositive || phraseNegative || phraseMixed || phraseCaveat || phraseTrueNegative;
    if (parseBool(row[`llm_flag_${family}__${signal}`]) === true) return true;
    if (signal === "any_mention" && (phraseAny || parseBool(row[`llm_${family}_has_mention`]) === true || parseBool(row[`${family}_any`]) === true)) return true;
    if (signal === "positive_trait_language" && (phrasePositive || parseBool(row[`llm_${family}_has_positive`]) === true)) return true;
    if (signal === "negative_or_mixed_weakness_language") {
      return phraseNegative || phraseMixed || parseBool(row[`llm_${family}_has_negative`]) === true || parseBool(row[`llm_${family}_has_mixed`]) === true;
    }
    if (signal === "translation_caveat" && (phraseCaveat || parseBool(row[`llm_${family}_has_translation_caveat`]) === true)) return true;
    if (signal === "true_negative_trait" && (phraseTrueNegative || parseBool(row[`llm_${family}_has_true_negative`]) === true)) return true;
    return false;
  });
}

function hasPhraseEvidence(row, family, quality) {
  return splitPhraseEvidence(row[`phrase_${family}_${quality}`]).length > 0;
}

function totalEvidenceRows(feature) {
  return safeNumber(feature.positiveRows) + safeNumber(feature.negativeRows) + safeNumber(feature.mixedRows) + safeNumber(feature.caveatRows);
}

function findPlayerByQuery(query) {
  const normalized = normalizeName(query);
  if (!normalized) return null;
  const players = store.players.slice();
  const exact = players.find((player) => player.key === normalized || normalizeName(player.name) === normalized);
  if (exact) return exact;
  const starts = players.find((player) => player.key.startsWith(normalized) || normalizeName(player.name).startsWith(normalized));
  if (starts) return starts;
  return players.find((player) => player.key.includes(normalized) || normalizeName(player.name).includes(normalized)) || null;
}

function similarPlayersFor(source, limit = 5) {
  const sourceVector = similarityVector(source);
  return store.players
    .filter((player) => player.dataset === "historical" && player.id !== source.id)
    .map((player) => ({
      player,
      score: cosineSimilarity(sourceVector, similarityVector(player)),
      sharedTraits: sharedTraitFamilies(source, player)
    }))
    .filter((item) => Number.isFinite(item.score))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function similarityVector(player) {
  if (player.similarityVector) return player.similarityVector;
  const vector = [];
  families.forEach((family) => {
    const evidence = traitEvidence(player, family);
    const negative = evidence.negativeRows + evidence.mixedRows + evidence.trueNegativeRows;
    const total = Math.max(1, evidence.positiveRows + negative + evidence.caveatRows);
    vector.push(evidence.positiveRows / total);
    vector.push(negative / total);
    vector.push(evidence.caveatRows / total);
    vector.push(Math.min(1, total / 10));
    vector.push(evidence.confidence || 0);
  });
  vector.push(normalizeScore(player.positiveProb) / 100 || 0);
  vector.push(normalizeScore(player.negativeProb) / 100 || 0);
  vector.push(Number.isFinite(player.pick) ? clamp(1 - player.pick / 60, 0, 1) : 0);
  vector.push(...comboVector(player));
  player.similarityVector = vector;
  return vector;
}

function comboVector(player) {
  const comboKeys = Object.keys(comboLabels);
  const flags = new Set(player.comboFlags);
  return comboKeys.map((key) => flags.has(key) ? 1 : 0);
}

function sharedTraitFamilies(a, b) {
  return families
    .map((family) => {
      const av = traitEvidence(a, family);
      const bv = traitEvidence(b, family);
      const aNegative = av.negativeRows + av.mixedRows + av.trueNegativeRows;
      const bNegative = bv.negativeRows + bv.mixedRows + bv.trueNegativeRows;
      const overlap =
        Math.min(av.positiveRows, bv.positiveRows) +
        Math.min(aNegative, bNegative) +
        Math.min(av.caveatRows, bv.caveatRows);
      return { family, overlap };
    })
    .filter((item) => item.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .map((item) => item.family);
}

function cosineSimilarity(a, b) {
  const length = Math.max(a.length, b.length);
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let index = 0; index < length; index += 1) {
    const av = a[index] || 0;
    const bv = b[index] || 0;
    dot += av * bv;
    normA += av * av;
    normB += bv * bv;
  }
  if (!normA || !normB) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

function addIf(set, value) {
  if (value) set.add(value);
}

function average(values) {
  const nums = values.filter((value) => Number.isFinite(value));
  if (!nums.length) return null;
  return nums.reduce((sum, value) => sum + value, 0) / nums.length;
}

function weightedRowAverage(rows, fields, weightField = "source_row_count") {
  let weightedTotal = 0;
  let weightTotal = 0;
  rows.forEach((row) => {
    const value = firstFinite(fields.map((field) => toNumber(row[field])));
    if (!Number.isFinite(value)) return;
    const rowWeight = toNumber(row[weightField]);
    const weight = Number.isFinite(rowWeight) && rowWeight > 0 ? rowWeight : 1;
    weightedTotal += value * weight;
    weightTotal += weight;
  });
  return weightTotal ? weightedTotal / weightTotal : null;
}

function firstFinite(values, fallback = NaN) {
  return values.find((value) => Number.isFinite(value)) ?? fallback;
}

function majority(values) {
  if (!values.length) return null;
  return values.filter(Boolean).length >= values.length / 2;
}

function parseBool(value) {
  if (value === true || value === "True" || value === "true" || value === "1" || value === 1) return true;
  if (value === false || value === "False" || value === "false" || value === "0" || value === 0) return false;
  return null;
}

function toNumber(value) {
  if (value === null || value === undefined || value === "") return NaN;
  const number = Number(String(value).replace("%", ""));
  return Number.isFinite(number) ? number : NaN;
}

function safeNumber(value) {
  return Number.isFinite(value) ? value : 0;
}

function formatDecimal(value, digits = 2) {
  return Number.isFinite(value) ? value.toFixed(digits) : "n/a";
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function scoreTierLabel(value) {
  const score = normalizeScore(value);
  if (!Number.isFinite(score)) return "n/a";
  if (score >= 90) return "Very high";
  if (score >= 75) return "High";
  if (score >= 55) return "Lean positive";
  if (score >= 45) return "Neutral";
  if (score >= 25) return "Lean risk";
  if (score >= 10) return "High risk";
  return "Severe risk";
}

function positiveLanguageLabel(value) {
  const score = normalizeScore(value);
  if (!Number.isFinite(score)) return "n/a";
  if (score >= 90) return "Very strong positive";
  if (score >= 75) return "Strong positive";
  if (score >= 55) return "Lean positive";
  if (score >= 45) return "Balanced";
  if (score >= 25) return "Limited positive";
  if (score >= 10) return "Low positive";
  return "Very low positive";
}

function concernLanguageLabel(value) {
  const score = normalizeScore(value);
  if (!Number.isFinite(score)) return "n/a";
  if (score >= 90) return "Very heavy negative";
  if (score >= 75) return "Heavy negative";
  if (score >= 55) return "Moderate negative";
  if (score >= 45) return "Balanced";
  if (score >= 25) return "Some negative";
  if (score >= 10) return "Light negative";
  return "Very low negative";
}

function riskTierLabel(value) {
  const score = normalizeScore(value);
  if (!Number.isFinite(score)) return "n/a";
  return scoreTierLabel(100 - score);
}

function normalizeScore(value) {
  if (!Number.isFinite(value)) return NaN;
  return value <= 1 ? value * 100 : value;
}

function pct(value) {
  if (!Number.isFinite(value)) return "n/a";
  return `${Math.round(value * 100)}%`;
}

function relativeLiftLabel(value) {
  if (!Number.isFinite(value)) return "n/a";
  return `${Math.round(value * 100)}%`;
}

function plainRateLabel(rate, outcomeLabel) {
  if (!Number.isFinite(rate)) return `${capitalizeFirst(outcomeLabel)} rate unavailable`;
  return `${pct(rate)} ${outcomeLabel}`;
}

function relativeChanceLabel(rate, baselineRate, outcomeLabel) {
  if (!Number.isFinite(rate) || !Number.isFinite(baselineRate) || baselineRate <= 0) {
    return `${capitalizeFirst(outcomeLabel)} signal`;
  }
  const relativeChange = (rate - baselineRate) / baselineRate;
  if (Math.abs(relativeChange) >= 0.05) {
    const rounded = Math.round(Math.abs(relativeChange) * 100);
    const direction = relativeChange > 0 ? "more" : "less";
    return `About ${rounded}% ${direction} likely to ${outcomeLabel}`;
  }
  return `Near baseline ${outcomeLabel} chance`;
}

function traitLiftPlainLabel(row, tone) {
  const isGood = tone === "good";
  const rate = isGood ? row.overRate : row.underRate;
  const lift = isGood ? row.overLift : row.underLift;
  const outcomeLabel = isGood ? "overperform" : "underperform";
  if (!Number.isFinite(rate) || !Number.isFinite(lift)) return `${capitalizeFirst(outcomeLabel)} signal`;
  return relativeChanceLabel(rate, rate - lift, outcomeLabel);
}

function capitalizeFirst(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

function signed(value, digits = 2) {
  if (!Number.isFinite(value)) return "n/a";
  const fixed = value.toFixed(digits);
  return value > 0 ? `+${fixed}` : fixed;
}

function formatNumber(value) {
  if (!Number.isFinite(Number(value))) return "0";
  return new Intl.NumberFormat("en-US").format(Number(value));
}

function formatPick(value) {
  if (!Number.isFinite(value)) return "n/a";
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function familyLabel(value) {
  return familyLabels[value] || labelize(value);
}

function comboLabel(value) {
  const raw = String(value || "").replace(/^combo_/, "").replace(/^prospective_2026_player_agg_/, "");
  return comboLabels[raw] || labelize(raw);
}

function metaListLabel(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (raw.toLowerCase() === "source text") return "Source text";
  return raw
    .split(/[|,;]/)
    .map((item) => labelize(item.trim()))
    .filter(Boolean)
    .join(", ");
}

function modelLabel(value) {
  const raw = String(value || "").trim();
  if (!raw) return "Model score";
  return modelLabels[raw] || labelize(raw);
}

function labelize(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (familyLabels[raw]) return familyLabels[raw];
  if (signalLabels[raw]) return signalLabels[raw];
  if (comboLabels[raw]) return comboLabels[raw];
  if (modelLabels[raw]) return modelLabels[raw];

  const cleaned = raw
    .replace(/^prospective_2026_player_agg_/, "")
    .replace(/^combo_/, "")
    .replace(/\bhist\b/g, "historical")
    .replace(/old_plus_llm_full/g, "LLM score")
    .replace(/llm/g, "LLM")
    .replace(/xrapm/g, "xRAPM")
    .replace(/_plus_/g, " + ")
    .replace(/_neg\b/g, " negative")
    .replace(/_pos\b/g, " strength")
    .replace(/_caveat\b/g, " caveat")
    .replace(/[|_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const smallWords = new Set(["and", "or", "with", "the", "of", "to", "in", "for"]);
  const acronyms = new Map([
    ["iq", "IQ"],
    ["llm", "LLM"],
    ["nba", "NBA"],
    ["ev", "EV"],
    ["espn", "ESPN"],
    ["xrapm", "xRAPM"]
  ]);

  return cleaned
    .split(" ")
    .map((word, index) => {
      const lower = word.toLowerCase();
      if (word === "+") return word;
      if (acronyms.has(lower)) return acronyms.get(lower);
      if (index > 0 && smallWords.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

function shortSource(source) {
  if (!source) return "Source rows";
  return uniqueList(String(source)
    .split("|")
    .map((item) => {
      const key = item.trim();
      return sourceLabels[key] || sourceLabels[key.toLowerCase()] || labelize(key);
    })
    .filter(Boolean))
    .join(" | ");
}

function compactSource(source) {
  if (!source) return "Source rows";
  return uniqueList(String(source)
    .split("|")
    .map((item) => {
      const key = item.trim();
      return sourceLabels[key] || sourceLabels[key.toLowerCase()] || labelize(key);
    })
    .filter(Boolean))
    .slice(0, 2)
    .join(" | ");
}

function normalizeName(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv)\b/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function basename(path) {
  return String(path || "").split(/[\\/]/).pop();
}

function initials(name) {
  return String(name || "?")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function joinUnique(values) {
  return Array.from(new Set(values.map((value) => String(value).trim()).filter(Boolean))).join(" ");
}

function joinUniqueProse(values) {
  return repairScoutingPunctuation(joinUnique(values));
}

function repairScoutingPunctuation(value) {
  return String(value || "")
    .replace(/\b([A-Za-z]+)\?([stm]|re|ve|ll|d)\b/g, "$1'$2")
    .replace(/\b(can|don|doesn|didn|isn|aren|wasn|weren|won|wouldn|couldn|shouldn|hasn|haven|hadn|ain)\?t\b/gi, "$1't")
    .replace(/\s\?\s/g, " - ");
}

function splitList(value) {
  return String(value || "")
    .split(/\s*[|,;]\s*/g)
    .map((item) => item.trim())
    .filter(Boolean);
}

function uniqueList(values) {
  const seen = new Set();
  return values
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .filter((value) => {
      const key = normalizeName(value) || value.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
