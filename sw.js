// Retire the service worker installed by the former Gatsby site.
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter((key) => key.startsWith('gatsby-plugin-offline-'))
      .map((key) => caches.delete(key)));
    await self.clients.claim();
    await self.registration.unregister();
  })());
});
