(function (window) {
var bye = {};
var speakWord = "Good Bye";
bye.speak = function (name) {
  msg = speakWord + " " + name;
  document.getElementById("Divcontent").innerHTML = msg;
  console.log (msg);
}
window.bye = bye;
})(window);