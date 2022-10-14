self.addEventListener("load", function(){
    if (localStorage.getItem("userid") == null) {
  window.location = 'login.html';
}
  });
$("#footer_fullname").html("<p class=\"text-muted\" id=\"fullname\"></p><span class=\"text-right\">Signed in as</span>");
$("#fullname").html(localStorage.getItem("lsacode"));
//$("#fullname").html(localStorage.getItem("fname") + ' ' + localStorage.getItem("lname"));
$("#fname").html("Hi, " + localStorage.getItem("fname"));
if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("./serviceworker.js");
}
