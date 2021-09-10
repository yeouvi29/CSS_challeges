document
  .querySelectorAll(".answer")
  .forEach((answer) => answer.classList.add("hidden"));

document
  .querySelectorAll(".fa-times")
  .forEach((icon) => icon.classList.add("hidden"));

let prevAnswer, prevArrow, prevClose, preBox;
const toggleClasses = (...elements) => {
  elements.forEach((element) => element.classList.toggle("hidden"));
};

document.querySelector(".box").addEventListener("click", function (e) {
  const targetedIcon = e.target.closest(".icon");
  const targetedIcons = targetedIcon.children;
  const targetedArrow = targetedIcons[0];
  const targetedClose = targetedIcons[1];
  const textBox = e.target.closest(".text-box");
  const targetedAnswer = textBox.lastElementChild;
  if (!targetedIcon) return;
  console.log(targetedIcon, targetedArrow, targetedClose);
  if (prevAnswer && prevAnswer !== targetedAnswer) {
    prevBox.classList.remove("active");
    // toggleClasses(prevAnswer, prevArrow, prevClose);
    prevAnswer.classList.add("hidden");
    prevArrow.classList.remove("hidden");
    prevClose.classList.add("hidden");
  }

  textBox.classList.toggle("active");
  // toggleClasses(targetedAnswer, targetedArrow, targetedClose);
  targetedAnswer.classList.toggle("hidden");
  targetedArrow.classList.toggle("hidden");
  targetedClose.classList.toggle("hidden");
  prevAnswer = targetedAnswer;
  prevArrow = targetedArrow;
  prevClose = targetedClose;
  prevBox = textBox;
});
