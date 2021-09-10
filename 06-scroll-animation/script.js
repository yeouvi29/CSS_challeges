const container = document.querySelector(".container");

for (let i = 1; i < 11; i++) {
  const addContent = document.createElement("div");
  addContent.innerHTML = "Content";
  i % 2 === 0
    ? addContent.setAttribute("data-content", "left")
    : addContent.setAttribute("data-content", "right");
  addContent.classList.add("content");
  container.appendChild(addContent);
  if (addContent.getBoundingClientRect().bottom > screen.height) {
    i % 2 === 0
      ? addContent.classList.add("content-left")
      : addContent.classList.add("content-right");
  }
}
const allContents = document.querySelectorAll(".content");

const revealContent = function (entries, observer) {
  const [entry] = entries;
  const dataSet = entry.target.dataset.content;
  console.log(dataSet);
  if (entry.boundingClientRect.bottom > entry.rootBounds.bottom) {
    if (entry.isIntersecting) entry.target.classList.add(`content-${dataSet}`);
    else entry.target.classList.remove(`content-${dataSet}`);

    console.log(
      entry.boundingClientRect.bottom > entry.rootBounds.bottom,
      entry.isIntersecting
    );
    toggleClass(entry.target);
  }
};

const contentObserver = new IntersectionObserver(revealContent, {
  root: null,
  threshold: [0.8],
});

// contentObserver.root.style.border = "2px solid #44aa44";
allContents.forEach((content) => {
  contentObserver.observe(content);
});
