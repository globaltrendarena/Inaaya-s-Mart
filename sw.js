// Inaaya's Mart Service Worker
// Placeholder - implement caching strategy in Phase 13 (PWA)
const CACHE_NAME = "inaayas-mart-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Basic pass-through for now; expand with cache-first / network-first
  // strategies per asset type in Phase 13.
});
