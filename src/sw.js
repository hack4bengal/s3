// sw.js
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    clients.claim().then(async () => {
      const allClients = await clients.matchAll({ includeUncontrolled: true });
      allClients.forEach((client) =>
        client.postMessage({ type: "SW_UPDATED" })
      );
    })
  );
});

// Add other event listeners as needed
self.addEventListener("fetch", (event) => {
  // Handle fetch events if needed
});
