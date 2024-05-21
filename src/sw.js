self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("my-site-cache") // Replace with your desired cache name
      .then((cache) => {
        // Fetch resources to pre-cache for faster initial load
        return cache.addAll([
          "/", // Replace with your website's root path
          // Add other essential resources (JS, CSS, images)
        ]);
      })
  );
  self.skipWaiting(); // Force immediate activation
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim()); // Take control of all clients
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    // Try network request first
    fetch(event.request)
      .then((networkResponse) => {
        // Cache the successful response
        caches
          .open("my-site-cache") // Replace with your desired cache name
          .then((cache) => cache.put(event.request, networkResponse.clone()));
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cached response if network fails
        return caches.match(event.request);
      })
  );
});

// Background sync for fetching new content (optional)
self.addEventListener("sync", (event) => {
  if (event.tag === "content-sync") {
    event.waitUntil(
      fetch("/api/new-content") // Replace with your endpoint for new content
        .then((response) => response.json())
        .then((data) => {
          // Update your website content using the fetched data
          // This might involve DOM manipulation or data binding
        })
        .catch((error) => {
          console.error("Error fetching new content:", error);
        })
    );
  }
});
