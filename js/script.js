const header = document.querySelector("header");
window.addEventListener("scrool", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});
