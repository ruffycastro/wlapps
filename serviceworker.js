self.addEventListener('install', function(event){
  console.log('[Service Worker] Installing Service Worker.....',event);
});

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

const button = document.getElementById('notifications');
button.addEventListener('click', () => {
  Notification.requestPermission().then((result) => {
    if (result === 'granted') {
      randomNotification();
    }
  });
})
