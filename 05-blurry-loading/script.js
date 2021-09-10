let count = 0;
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const countUp = setInterval(showCount, 30);
function showCount() {
  if (count > 99) clearInterval(countUp);
  document.querySelector(".count-up").innerHTML = `${count++} %`;
  document.querySelector(".count-up").style.opacity = scale(
    count,
    0,
    100,
    1,
    0
  );
}
