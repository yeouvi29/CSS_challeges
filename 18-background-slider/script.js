const buttons = document.querySelectorAll(".buttons");
const sliderContainer = document.querySelector(".slider--container");
const container = document.querySelector(".container");

let imgs = "";
let active = 0;

new Array(7).fill("").forEach((img, i) => {
  imgs += `<img src="./assets/img-${i}.jpg" id="img-${i}" class="slide ${
    i === 0 ? "active" : ""
  }" alt="img"/>`;
});
sliderContainer.insertAdjacentHTML("afterbegin", `${imgs}`);
container.style.backgroundImage = `url('./assets/img-${active}.jpg')`;

const imgNodes = document.querySelectorAll("img");

console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const pastActive = imgNodes[active];
    if (e.target.closest(".fa-chevron-left")) {
      if (active === 0) {
        active = imgNodes.length - 1;
      } else {
        active--;
      }
    } else if (e.target.closest(".fa-chevron-right")) {
      if (active === imgNodes.length - 1) {
        active = 0;
      } else {
        active++;
      }
    }
    pastActive.classList.remove("active");
    imgNodes[active].classList.add("active");
    container.style.backgroundImage = `url('./assets/img-${active}.jpg')`;
  });
});
