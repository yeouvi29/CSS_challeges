const nums = document.querySelectorAll(".number");
const num = document.querySelector(".number");
const progress = document.querySelector(".progress");
const bar = document.querySelector(".progress-bar");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

let counter = 1;
let barWidth = 0;

btnNext.addEventListener("click", function () {
  if (counter < 4 && counter >= 1) {
    barWidth =
      (progress.clientWidth - num.clientWidth) * (counter / (nums.length - 1));
    counter++;
    btnPrev.style.backgroundColor = "#4b8bd3";
    btnNext.style.backgroundColor = "#4b8bd3";

    bar.style.width = `${barWidth}px`;
    setTimeout(
      () =>
        document
          .querySelector(`[data-num='${counter}']`)
          .classList.add("active"),
      300
    );
  }
  if (counter === 4) {
    btnNext.style.backgroundColor = "#d3d3df";
  }
});

btnPrev.addEventListener("click", function () {
  if (counter <= 4 && counter > 1) {
    btnNext.style.backgroundColor = "#4b8bd3";
    document
      .querySelector(`[data-num='${counter}']`)
      .classList.remove("active");
    counter--;
    if (counter === 1) btnPrev.style.backgroundColor = "#d3d3df";
    setTimeout(() => {
      barWidth =
        (progress.clientWidth - num.clientWidth) *
        ((counter - 1) / (nums.length - 1));
      bar.style.width = `${barWidth}px`;
    }, 300);
  }
});
