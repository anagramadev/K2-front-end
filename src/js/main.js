import { initIcons } from "@47nordmedia/k2-systems-ui-library/dist/icons";

const menuButton = document.querySelector(".menu-toggle");
const navBlock = document.querySelector("nav");
const body = document.querySelector("body");

menuButton.addEventListener("click", function () {
  this.classList.toggle("show");
  if (this.classList.contains("show")) {
    this.innerHTML = "Close";
  } else {
    this.innerHTML = "Menü";
  }
  body.classList.toggle("overflow-hidden");
  navBlock.classList.toggle("inline-flex");
  navBlock.classList.toggle("hidden");
});

// links accordion

const footerLinks = document.querySelectorAll("p.footerLinks , p.menuLink");

footerLinks.forEach((p) => {
  const minus = p.querySelector("svg > path:last-of-type");
  const LinkList = p.nextElementSibling;
  p.addEventListener("click", () => {
    minus.classList.toggle("hidden");
    LinkList.classList.toggle("hidden");
  });
});

initIcons();

console.log("hello world");
