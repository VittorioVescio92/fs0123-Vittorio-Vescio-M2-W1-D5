const nav = document.querySelector("nav");
const header = document.querySelector("header");


function Backgroundcolor() {
  if (window.scrollY > header.offsetHeight) {
    nav.classList.add("nav");
  } else {
    nav.classList.remove("nav");
  }
}

window.addEventListener("scroll", Backgroundcolor);
