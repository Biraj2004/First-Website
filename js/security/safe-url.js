(function attachSafeUrl(global) {
  const SAFE_PROTOCOLS = new Set(["http:", "https:"]);

  function toSafeHttpUrl(rawUrl, fallback = "#") {
    if (typeof rawUrl !== "string" || rawUrl.trim().length === 0) {
      return fallback;
    }

    try {
      const parsed = new URL(rawUrl, window.location.origin);
      return SAFE_PROTOCOLS.has(parsed.protocol) ? parsed.href : fallback;
    } catch {
      return fallback;
    }
  }

  global.FreeTVSecurity = {
    toSafeHttpUrl
  };
})(window);
