self.addEventListener('install', function(event){
  console.log('[Service Worker] Installing Service Worker.....',event);
});

self.addEventListener('activate', function(event){
  console.log('[Service Worker] Activating Service Worker.....',event);
  return self.clients.claim();
});
/*
self.addEventListener('fetch', function(event){
  console.log('[Service Worker] Fetch initiated.....',event);
  event.respondWith(fetch(event.request));
}); */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;     // if valid response is found in cache return it
        } else {
          return fetch(event.request)     //fetch from internet
            .then(function(res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());    //save the response for future
                  return res;   // return the fetched data
                })
            })
            .catch(function(err) {       // fallback mechanism
              return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
                .then(function(cache) {
                  return cache.match('offline.html');
                });
            });
        }
      })
  );
});        

self.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
});

const button = document.getElementById('notifications');
button.addEventListener('click', () => {
  Notification.requestPermission().then((result) => {
    if (result === 'granted') {
      randomNotification();
    }
  });
})
