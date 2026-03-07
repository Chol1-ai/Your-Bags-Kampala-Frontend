(function initApiConfig() {
  const host = window.location.hostname;
  const isLocal = host === "localhost" || host === "127.0.0.1";
  const fallbackBase = isLocal ? "http://localhost:3000" : "";
  window.__API_BASE__ = (window.__API_BASE__ || fallbackBase).replace(/\/$/, "");

  window.apiUrl = function apiUrl(path) {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${window.__API_BASE__}${normalized}`;
  };

  window.resolveApiImageUrl = function resolveApiImageUrl(imagePath) {
    if (typeof imagePath !== "string") return "images/bag-placeholder.svg";
    const raw = imagePath.trim();
    if (!raw) return "images/bag-placeholder.svg";
    if (/^(https?:)?\/\//i.test(raw) || raw.startsWith("data:")) return raw;
    if (raw.startsWith("/images/")) return `${window.__API_BASE__}${raw}`;
    if (raw.startsWith("images/") || raw.startsWith("./images/")) {
      const clean = raw.replace(/^\.\//, "").replace(/^images\//, "");
      return `${window.__API_BASE__}/images/${clean}`;
    }
    return `${window.__API_BASE__}/images/${raw}`;
  };
})();
