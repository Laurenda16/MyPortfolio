const entete = document.querySelector("header");

window.addEventListener("scroll", function () {
  entete.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};
