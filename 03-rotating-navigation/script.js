const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const menuAbout = document.querySelector(".menu-about");
const menuContact = document.querySelector(".menu-contact");

btnOpen.addEventListener("click", function () {
  container.classList.toggle("rotate");
  nav.classList.toggle("nav-rotate");
  menu.classList.toggle("show-menu");
  menuAbout.classList.toggle("show-about");
  menuContact.classList.toggle("show-contact");
});

btnClose.addEventListener("click", function () {
  container.classList.toggle("rotate");
  nav.classList.toggle("nav-rotate");
  menu.classList.toggle("show-menu");
  menuAbout.classList.toggle("show-about");
  menuContact.classList.toggle("show-contact");
});
