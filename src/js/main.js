import { initIcons } from "@47nordmedia/k2-systems-ui-library/dist/icons";

const menuButton = document.querySelector(".menu-toggle");
const navBlock = document.querySelector("nav");
const body = document.querySelector("body");

if (menuButton) {
  menuButton.addEventListener("click", function () {
    this.classList.toggle("show");
    if (this.classList.contains("show")) {
      this.innerHTML = "Close";
    } else {
      this.innerHTML = "Menü";
    }
    body.classList.toggle("w-screen");
    body.classList.toggle("fixed");
    navBlock.classList.toggle("inline-flex");
    navBlock.classList.toggle("hidden");
  });
}

// links accordion
const footerLinks = document.querySelectorAll("p.footerLinks , p.menuLink");

if (footerLinks) {
  let curr;
  footerLinks.forEach((p, i) => {
    const minus = p.querySelector("svg > path:last-of-type");
    const LinkList = p.nextElementSibling;

    p.addEventListener("click", () => {
      if (curr === i) {
        minus.classList.toggle("hidden");
        LinkList.classList.toggle("hidden");
      } else {
        footerLinks.forEach((p) => {
          p.querySelector("svg > path:last-of-type").classList.remove("hidden");
          p.nextElementSibling.classList.add("hidden");
        });

        minus.classList.toggle("hidden");
        LinkList.classList.toggle("hidden");
      }

      curr = i;
    });
  });
}
// sticky-nav
const stickyNavLinks = document.querySelectorAll(".sticky-nav > a");

stickyNavLinks.forEach((a) => {
  a.addEventListener("click", () => {
    stickyNavLinks.forEach((a) => {
      a.firstElementChild.classList.remove("bg-red");
      a.firstElementChild.classList.add("bg-cream");
    });
    a.firstElementChild.classList.remove("bg-cream");
    a.firstElementChild.classList.add("bg-red");
  });
});
// Icons func
initIcons();

console.log("hello");
