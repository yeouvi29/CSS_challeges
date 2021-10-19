const mode = document.querySelector(".mode");
const pin = document.querySelector(".pin");
const hour = document.querySelector(".hour-hand");
const min = document.querySelector(".minute-hand");
const sec = document.querySelector(".second-hand");
const analog = document.querySelector(".analog-clock");
const digital = document.querySelector(".digital-clock");
const date = document.querySelector(".date");
const timeObj = { sec: 0, min: 0, hr: 0 };
let newDate = new Date();
let hourStr, minStr, secStr;

const options = {
  weekday: "long",
  month: "short",
  date: "numeric",
};

const getTime = () => {
  newDate = new Date();
  hourStr = newDate.getHours();
  minStr = newDate.getMinutes();
  secStr = newDate.getSeconds();
  timeObj.sec = (secStr / 60) * 360;
  timeObj.min = (minStr / 60) * 360;
  timeObj.hr = ((hourStr % 12) / 12) * 360;
};

date.innerHTML = `${newDate
  .toLocaleDateString("en-US", options)
  .toUpperCase()} <span class="day">${newDate.getDate()}</span>`;

const setTime = () => {
  getTime();
  digital.innerHTML = `${
    hourStr.toString().length === 1
      ? hourStr.toString().padStart(2, "0")
      : hourStr
  }:${
    minStr.toString().length === 1 ? minStr.toString().padStart(2, "0") : minStr
  }`;
  hour.style.transform = `translateX(-50%) rotate(${timeObj.hr}deg)`;
  min.style.transform = `translateX(-50%) rotate(${timeObj.min}deg)`;
  sec.style.transform = `translateX(-50%) rotate(${timeObj.sec}deg)`;
};

const timeInt = setInterval(setTime, 1000);

const timeGo = () => timeInt;

timeGo();

mode.addEventListener("click", (e) => {
  if (e.target.innerHTML.startsWith("Dark")) {
    e.target.innerHTML = "Light mode";
  } else {
    e.target.innerHTML = "Dark mode";
  }
  document.querySelector("html").classList.toggle("dark");
});
