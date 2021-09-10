const cardContainers = document.querySelectorAll(".card-container");
console.log(cardContainers);
document.querySelector(".card").addEventListener("click", function (e) {
  cardContainers.forEach((card) => card.classList.remove("active"));

  e.target.classList.add("active");
});
