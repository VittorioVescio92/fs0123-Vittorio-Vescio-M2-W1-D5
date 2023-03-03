const nav = document.querySelector("nav");
const header = document.querySelector("header");


function Backgroundcolor() {
  if (window.scrollY > header.offsetHeight) {
    nav.classList.add("nav");
  } else {
    nav.classList.remove("nav");
  }
  FadeIn();
}

window.addEventListener("scroll", Backgroundcolor);

function FadeIn(){
if (window.scrollY > header.offsetHeight) {
    nav.style.transition = `background-color ${500}ms`;
    nav.style.backgroundColor = "white";
  } else {
    nav.style.transition = `background-color ${500}ms`;
    nav.style.backgroundColor = "#ffc017";
  }
}