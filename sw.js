// Service Worker khusus PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Biarkan request ke Google Apps Script (API) lewat langsung tanpa di-cache
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('script.google.com')) {
    return; // Bypass Service Worker untuk API
  }
  event.respondWith(fetch(event.request));
});
