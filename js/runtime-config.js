// Set your Render backend URL here before Vercel deploy.
// Example: https://your-bags-backend.onrender.com
(function setRuntimeApiBase() {
  const host = window.location.hostname;
  const isLocal = host === "localhost" || host === "127.0.0.1";

  if (isLocal) {
    window.__API_BASE__ = window.__API_BASE__ || "http://localhost:3000";
    return;
  }

  window.__API_BASE__ =
    window.__API_BASE__ || "https://your-bags-kampala.onrender.com";
})();
