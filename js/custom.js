self.addEventListener("load", function(){
    if (localStorage.getItem("userid") == null) {
  window.location = 'login.html';
}
  });
$("#fullname").html(localStorage.getItem("fname") + ' ' + localStorage.getItem("lname"));
$("#fname").html("Hi, " + localStorage.getItem("fname"));
if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("./serviceworker.js");
}
