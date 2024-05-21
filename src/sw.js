self.addEventListener("install", (event) => {
  self.skipWaiting(); // Force the waiting service worker to become the active service worker
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim()); // Ensure the new service worker takes control immediately
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        return networkResponse;
      })
      .catch(() => {
        // Optionally, fall back to cache if the network request fails
        return caches.match(event.request);
      })
  );
});
