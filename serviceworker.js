var cacheName = 'hello-pwa'; 
var filesToCache = [
'/',    
'/index.html', 
'/welcome.html',    
'/css/custom.css',  
'/js/main.js'  ];  
self.addEventListener('install', function(e) { 
e.waitUntil(
caches.open(cacheName).then(function(cache) { 
return cache.addAll(filesToCache);   
})    
);  
}); 
/* Serve cached content when offline */ 

/*self.addEventListener('install', function(event){
  console.log('[Service Worker] Installing Service Worker.....',event);
});*/

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