(function (window) {
var hello = {};
var speakWord = "Hello";
hello.speak = function (name) {
  msg = speakWord + " " + name;
  document.getElementById("Divcontent").innerHTML = msg;
  console.log (msg);
}
window.hello = hello;
})(window);