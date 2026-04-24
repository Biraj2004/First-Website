(function attachRender(global) {
  const { toSafeHttpUrl } = global.FreeTVSecurity;

  function createExternalLink(url, label) {
    const link = document.createElement("a");
    link.href = toSafeHttpUrl(url);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = label;
    return link;
  }

  function createCard(item, isSaved, onToggleSaved) {
    const article = document.createElement("article");
    article.className = "card";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = `${item.title} poster`;
    image.loading = "lazy";

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h4");
    title.textContent = item.title;

    const meta = document.createElement("p");
    meta.className = "card-meta";
    meta.textContent = `${item.genre} | ${item.language} | ${item.year}`;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const watchLink = createExternalLink(item.link, "Watch");

    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.dataset.saved = String(isSaved(item.id));
    saveButton.textContent = isSaved(item.id) ? "Saved" : "Watchlist";
    saveButton.addEventListener("click", () => onToggleSaved(item.id));

    actions.append(watchLink, saveButton);
    body.append(title, meta, actions);
    article.append(image, body);

    return article;
  }

  function renderHero(hero, elements, isSaved, onToggleSaved) {
    elements.heroTitle.textContent = hero.title;
    elements.heroMeta.textContent = hero.meta;
    elements.heroDescription.textContent = hero.description;
    elements.heroImage.src = hero.image;
    elements.heroImage.alt = `${hero.title} poster`;
    elements.heroWatchLink.href = toSafeHttpUrl(hero.link, "#discover");

    const saved = isSaved(hero.id);
    elements.heroWatchlistButton.dataset.saved = String(saved);
    elements.heroWatchlistButton.textContent = saved ? "Saved" : "Add to Watchlist";
    elements.heroWatchlistButton.onclick = () => onToggleSaved(hero.id);
  }

  function renderGenreChips(genres, activeGenre, chipMount, onSelectGenre) {
    chipMount.innerHTML = "";

    genres.forEach((genre) => {
      const chip = document.createElement("button");
      chip.className = "chip";
      chip.type = "button";
      chip.textContent = genre;
      chip.setAttribute("aria-pressed", String(activeGenre === genre));
      chip.addEventListener("click", () => onSelectGenre(genre));
      chipMount.append(chip);
    });
  }

  function renderDiscover(items, discoverMount, isSaved, onToggleSaved) {
    discoverMount.innerHTML = "";

    if (items.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "No matching titles. Try another genre or keyword.";
      discoverMount.append(empty);
      return;
    }

    items.forEach((item) => discoverMount.append(createCard(item, isSaved, onToggleSaved)));
  }

  function renderCategorySections(categories, mount, isSaved, onToggleSaved) {
    mount.innerHTML = "";

    categories.forEach((category) => {
      const section = document.createElement("section");
      section.className = "category-block";

      const head = document.createElement("div");
      head.className = "category-head";

      const titleWrap = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = category.name;
      const description = document.createElement("p");
      description.textContent = category.description;
      titleWrap.append(title, description);

      const viewMore = createExternalLink("https://mdblist.com/", "View more");

      head.append(titleWrap, viewMore);

      const grid = document.createElement("div");
      grid.className = "cards-grid";
      category.items.forEach((item) => grid.append(createCard(item, isSaved, onToggleSaved)));

      section.append(head, grid);
      mount.append(section);
    });
  }

  function renderYtSection(items, mount, isSaved, onToggleSaved) {
    mount.innerHTML = "";
    items.forEach((item) => mount.append(createCard(item, isSaved, onToggleSaved)));
  }

  function renderWatchlistSummary(watchlistIds, elements, lookupById) {
    elements.watchlistCount.textContent = String(watchlistIds.length);
    elements.watchlistItems.innerHTML = "";

    if (watchlistIds.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "No titles saved yet.";
      elements.watchlistItems.append(empty);
      return;
    }

    watchlistIds
      .map((id) => lookupById(id))
      .filter(Boolean)
      .forEach((item) => {
        const row = document.createElement("article");
        row.className = "watchlist-item";

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = `${item.title} poster`;

        const text = document.createElement("div");
        const title = document.createElement("h3");
        title.className = "watchlist-item-title";
        title.textContent = item.title;

        const meta = document.createElement("p");
        meta.textContent = item.genre || item.meta || "Featured";
        meta.className = "card-meta";

        text.append(title, meta);
        row.append(image, text);
        elements.watchlistItems.append(row);
      });
  }

  global.FreeTVRender = {
    renderHero,
    renderGenreChips,
    renderDiscover,
    renderCategorySections,
    renderYtSection,
    renderWatchlistSummary
  };
})(window);
