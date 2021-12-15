$("#fullname").html(localStorage.getItem("fname") + ' ' + localStorage.getItem("lname"));
if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}