const { allCatalogItems, categories, featured, ytSeries } = window.FreeTVData;
const { createWatchlistStore } = window.FreeTVStorage;
const {
  renderCategorySections,
  renderDiscover,
  renderGenreChips,
  renderHero,
  renderWatchlistSummary,
  renderYtSection
} = window.FreeTVRender;

const elements = {
  heroTitle: document.querySelector("[data-hero-title]"),
  heroMeta: document.querySelector("[data-hero-meta]"),
  heroDescription: document.querySelector("[data-hero-description]"),
  heroImage: document.querySelector("[data-hero-image]"),
  heroWatchLink: document.querySelector("[data-hero-watch-link]"),
  heroWatchlistButton: document.querySelector("[data-hero-watchlist]"),
  heroDots: document.querySelector("[data-hero-dots]"),
  searchInput: document.querySelector("[data-search-input]"),
  discoverGrid: document.querySelector("[data-discover-grid]"),
  genreChips: document.querySelector("[data-genre-chips]"),
  categorySections: document.querySelector("[data-category-sections]"),
  ytGrid: document.querySelector("[data-yt-grid]"),
  watchlistCount: document.querySelector("[data-watchlist-count]"),
  watchlistDrawer: document.querySelector("[data-watchlist-drawer]"),
  watchlistItems: document.querySelector("[data-watchlist-items]"),
  openWatchlistButton: document.querySelector("[data-open-watchlist]"),
  closeWatchlistButton: document.querySelector("[data-close-watchlist]"),
  menuToggleButton: document.querySelector("[data-menu-toggle]"),
  scrollTopButton: document.querySelector("[data-scroll-top]"),
  siteNav: document.getElementById("site-nav")
};

const watchlistStore = createWatchlistStore("free-tv-watchlist");
const state = {
  activeGenre: "All",
  searchTerm: "",
  heroIndex: 0
};

const requiredElementKeys = [
  "heroTitle",
  "heroMeta",
  "heroDescription",
  "heroImage",
  "heroWatchLink",
  "heroWatchlistButton",
  "heroDots",
  "searchInput",
  "discoverGrid",
  "genreChips",
  "categorySections",
  "ytGrid",
  "watchlistCount",
  "watchlistDrawer",
  "watchlistItems",
  "openWatchlistButton",
  "closeWatchlistButton",
  "menuToggleButton",
  "scrollTopButton",
  "siteNav"
];

function getGenres() {
  const genres = new Set(["All"]);
  allCatalogItems.forEach((item) => genres.add(item.genre));
  return Array.from(genres);
}

function getFilteredItems() {
  return allCatalogItems.filter((item) => {
    const genreMatch = state.activeGenre === "All" || item.genre === state.activeGenre;
    const combined = `${item.title} ${item.genre} ${item.language} ${item.category}`.toLowerCase();
    const textMatch = combined.includes(state.searchTerm.toLowerCase().trim());
    return genreMatch && textMatch;
  });
}

function lookupById(id) {
  return allCatalogItems.find((item) => item.id === id) || featured.find((item) => item.id === id);
}

function setDrawerOpen(isOpen) {
  elements.watchlistDrawer.dataset.open = String(isOpen);
}

function hasRequiredElements() {
  const missingKeys = requiredElementKeys.filter((key) => !elements[key]);

  if (missingKeys.length > 0) {
    console.error("Missing required UI elements:", missingKeys.join(", "));
    return false;
  }

  return true;
}

function handleGenreSelect(genre) {
  state.activeGenre = genre;
  rerenderDiscover();
  rerenderGenreChips();
}

function rerenderAll() {
  renderHero(featured[state.heroIndex % featured.length], elements, watchlistStore.isSaved, toggleSaved);
  renderHeroDots();
  renderGenreChips(getGenres(), state.activeGenre, elements.genreChips, handleGenreSelect);

  rerenderDiscover();
  renderCategorySections(categories, elements.categorySections, watchlistStore.isSaved, toggleSaved);
  renderYtSection(ytSeries, elements.ytGrid, watchlistStore.isSaved, toggleSaved);
  renderWatchlistSummary(watchlistStore.get(), elements, lookupById);
}

function rerenderDiscover() {
  renderDiscover(getFilteredItems().slice(0, 12), elements.discoverGrid, watchlistStore.isSaved, toggleSaved);
}

function rerenderGenreChips() {
  renderGenreChips(getGenres(), state.activeGenre, elements.genreChips, handleGenreSelect);
}

function toggleSaved(id) {
  watchlistStore.toggle(id);
  renderWatchlistSummary(watchlistStore.get(), elements, lookupById);
  rerenderDiscover();
  renderCategorySections(categories, elements.categorySections, watchlistStore.isSaved, toggleSaved);
  renderHero(featured[state.heroIndex % featured.length], elements, watchlistStore.isSaved, toggleSaved);
}

function renderHeroDots() {
  elements.heroDots.innerHTML = "";

  featured.forEach((item, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `hero-dot${index === state.heroIndex % featured.length ? " is-active" : ""}`;
    dot.setAttribute("aria-label", `Go to featured title ${index + 1}: ${item.title}`);
    dot.addEventListener("click", () => {
      state.heroIndex = index;
      renderHero(featured[state.heroIndex], elements, watchlistStore.isSaved, toggleSaved);
      renderHeroDots();
    });
    elements.heroDots.append(dot);
  });
}

function initSearch() {
  elements.searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    rerenderDiscover();
  });
}

function initMobileMenu() {
  elements.menuToggleButton.addEventListener("click", () => {
    const open = elements.siteNav.dataset.open === "true";
    elements.siteNav.dataset.open = String(!open);
    elements.menuToggleButton.setAttribute("aria-expanded", String(!open));
  });

  elements.siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      elements.siteNav.dataset.open = "false";
      elements.menuToggleButton.setAttribute("aria-expanded", "false");
    });
  });
}

function initWatchlistDrawer() {
  elements.openWatchlistButton.addEventListener("click", () => setDrawerOpen(true));
  elements.closeWatchlistButton.addEventListener("click", () => setDrawerOpen(false));
}

function initScrollTopButton() {
  const visibilityThreshold = 420;

  const updateScrollButtonState = () => {
    const shouldShow = window.scrollY > visibilityThreshold;
    elements.scrollTopButton.classList.toggle("is-visible", shouldShow);
  };

  elements.scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateScrollButtonState, { passive: true });
  updateScrollButtonState();
}

function startHeroRotation() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  setInterval(() => {
    state.heroIndex += 1;
    renderHero(featured[state.heroIndex % featured.length], elements, watchlistStore.isSaved, toggleSaved);
    renderHeroDots();
  }, 8000);
}

function init() {
  if (!hasRequiredElements()) {
    return;
  }

  rerenderAll();
  initSearch();
  initMobileMenu();
  initWatchlistDrawer();
  initScrollTopButton();
  startHeroRotation();
}

init();
