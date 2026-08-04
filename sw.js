self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Paksa request API Apps Script untuk tidak pernah di-cache oleh APK
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('script.google.com')) {
    event.respondWith(
      fetch(event.request, { cache: "no-store" }).catch(() => {
        return new Response(JSON.stringify({ status: "error", message: "Offline" }));
      })
    );
  }
});
