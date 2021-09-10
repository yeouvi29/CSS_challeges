let textArrLength = 0;
const resultBox = document.querySelector(".result");
const textarea = document.querySelector(".text");

textarea.focus();
textarea.addEventListener("keyup", function (e) {
  const textArr = e.target.value
    .split(",")
    .filter((text) => text.trim() !== "");

  const curText = textArr.length;

  if (curText === textArrLength) {
    document.getElementById(`result-${curText}`).innerHTML =
      textArr[curText - 1];
    if (!textArr.length) resultBox.innerHTML = "";
  } else if (curText !== textArrLength) {
    resultBox.innerHTML = "";
    textArr.map((text, i) => {
      resultBox.insertAdjacentHTML(
        "beforeend",
        `<p class="result-text" id="result-${i}">${text}</p>`
      );
    });
  }

  if (e.key === "Enter") {
    document.querySelector("textarea").blur();
    let count = 0;
    const textResults = document.querySelectorAll(".result-text");
    const startInterval = setInterval(colorChange, 100);

    function colorChange() {
      textResults.forEach((text) => text.classList.remove("navy"));
      const randomNum = Math.floor(Math.random() * curText);
      document.getElementById(`result-${randomNum}`).classList.add("navy");
      count++;
      if (count === 30) clearInterval(startInterval);
    }
  }
});
