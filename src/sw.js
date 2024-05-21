self.addEventListener("install", (event) => {
  // Immediately activate the new service worker
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Claim all clients immediately
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    // Try fetching the content from the network
    fetch(event.request)
      .then((response) => {
        // If successful, clone the response and store it in the cache
        const responseClone = response.clone();
        caches.open("dynamic-cache").then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // If fetching from the network fails, serve from cache
        return caches.match(event.request);
      })
  );
});
