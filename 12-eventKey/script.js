window.addEventListener("keydown", function (e) {
  document
    .querySelectorAll(".box")
    .forEach((el) => (el.style.display = "block"));
  document.getElementById("key").innerHTML = e.key;
  document.getElementById("key-code").innerHTML = e.keyCode;
  document.getElementById("code").innerHTML = e.code;
});
