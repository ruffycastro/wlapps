const CACHE_NAME = 'wl-apps-v1';

const INITIAL_CACHED_RESOURCES = [
    '/',
    '/offline.html',
    '/all/',
    '/browser/edge/',
    '/browser/safari/',
    '/browser/firefox/',
    '/browser/chrome/',
    '/css/custome.css',
    '/images/icons/',
    '/js/'
];

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(INITIAL_CACHED_RESOURCES);
    })());
});
/*
self.addEventListener('install', function(event){
  console.log('[Service Worker] Installing Service Worker.....',event);
});
*/

self.addEventListener('activate', function(event){
  console.log('[Service Worker] Activating Service Worker.....',event);
  return self.clients.claim();
});
self.addEventListener('fetch', function(event){
  console.log('[Service Worker] Fetch initiated.....',event);
  event.respondWith(fetch(event.request));
});       

self.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
});