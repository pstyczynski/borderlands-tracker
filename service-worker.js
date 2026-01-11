const CACHE_NAME = "borderlands-farm-tracker-v2";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./service-worker.js",

  // Icons
  "./icons/icon-64.png",
  "./icons/icon-180-ios.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",

  // CSS
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response =>
            response || fetch(event.request)
        )
    );
});
