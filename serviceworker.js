"use strict";

const notificationButton = document.getElementById("enableNotifications");

function initializeUi() {
  notificationButton.addEventListener("click", () => {
    displayNotification();
  });
}

function displayNotification() {
  if (window.Notification && Notification.permission === "granted") {
    notification();
  }
  // If the user hasn't told if he wants to be notified or not
  // Note: because of Chrome, we are not sure the permission property
  // is set, therefore it's unsafe to check for the "default" value.
  else if (window.Notification && Notification.permission !== "denied") {
    Notification.requestPermission(status => {
      if (status === "granted") {
        notification();
      } else {
        alert("You denied or dismissed permissions to notifications.");
      }
    });
  } else {
    // If the user refuses to get notified
    alert(
      "You denied permissions to notifications. Please go to your browser or phone setting to allow notifications."
    );
  }
}

function notification() {
  const options = {
    body: "Testing Our Notification",
    icon: "bell.png"
  };
  swRegistration.showNotification("PWA Notification!", options);
}

/* */

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
