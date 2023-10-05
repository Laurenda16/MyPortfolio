const entete = document.querySelector("header");

window.addEventListener("scroll", function   () {
  entete.classList.toggle("sticky", window.scrollY > 100);
});
   