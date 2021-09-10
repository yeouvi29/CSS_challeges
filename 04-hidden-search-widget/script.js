const button = document.querySelector(".search-button");
const input = document.querySelector(".search-input");

button.addEventListener("click", function () {
  if (!input.value) {
    input.classList.toggle("expand");
    input.focus();
  }
});
