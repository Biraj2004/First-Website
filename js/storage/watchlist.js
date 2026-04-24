(function attachWatchlistStore(global) {
  function createWatchlistStore(storageKey = "free-tv-watchlist") {
    function get() {
      try {
        const parsed = JSON.parse(localStorage.getItem(storageKey) || "[]");
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }

    function set(nextList) {
      localStorage.setItem(storageKey, JSON.stringify(nextList));
    }

    function isSaved(id) {
      return get().includes(id);
    }

    function toggle(id) {
      const current = get();
      if (current.includes(id)) {
        const next = current.filter((itemId) => itemId !== id);
        set(next);
        return next;
      }

      const next = [...current, id];
      set(next);
      return next;
    }

    return {
      get,
      set,
      isSaved,
      toggle
    };
  }

  global.FreeTVStorage = {
    createWatchlistStore
  };
})(window);
