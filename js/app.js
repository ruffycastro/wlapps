if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.register('./serviceworker.js');
    console.log('Service Worker is registered');
}