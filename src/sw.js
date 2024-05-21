self.addEventListener("install", (event) => {
  console.log("[Service Worker] Install event");
  self.skipWaiting(); // Force the waiting service worker to become the active service worker
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activate event");
  event.waitUntil(
    (async () => {
      await self.clients.claim(); // Ensure the new service worker takes control immediately
      console.log("[Service Worker] Clients claimed");
    })()
  );
});

self.addEventListener("fetch", (event) => {
  console.log(`[Service Worker] Fetch event for ${event.request.url}`);
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        console.log("[Service Worker] Network response received");
        return networkResponse;
      })
      .catch((error) => {
        console.log(
          "[Service Worker] Fetch failed; returning cached resource if available",
          error
        );
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            console.log("[Service Worker] Returning cached response");
            return cachedResponse;
          } else {
            console.log("[Service Worker] No cached response found");
            throw error;
          }
        });
      })
  );
});
