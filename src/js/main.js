import { initIcons } from "@47nordmedia/k2-systems-ui-library/dist/icons";

// Mobile menu button
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
// // Nav items hover
// const mainNavLiniks = document.querySelectorAll(".main-nav > li");
// mainNavLiniks.forEach((link) => {
//   const hoverBox = link.querySelector(".hover-box");
//   link.addEventListener("mouseover", (e) => {
//     link.classList.add("lg:hover:border-red");
//     link.classList.add("group");
//     if (e.target === hoverBox) {
//       link.classList.remove("group");
//       link.classList.remove("lg:hover:border-red");
//     }
//   });
// });

const sliders = document.querySelectorAll(".drag-scroll");

if (sliders) {
  sliders.forEach((div) => {
    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
      mouseDown = true;
      startX = e.pageX - div.offsetLeft;
      scrollLeft = div.scrollLeft;
      div.style.cursor = "grabbing";
    };
    let stopDragging = function (event) {
      mouseDown = false;
      div.style.cursor = "grab";
    };

    div.addEventListener("mousemove", (e) => {
      e.preventDefault();
      if (!mouseDown) {
        return;
      }
      const x = e.pageX - div.offsetLeft;
      const scroll = x - startX;
      div.scrollLeft = scrollLeft - scroll;
    });
    div.addEventListener("mousedown", startDragging, false);
    div.addEventListener("mouseup", stopDragging, false);
    div.addEventListener("mouseleave", stopDragging, false);
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

if (stickyNavLinks) {
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
}
// Tabs
const tabBtns = document.querySelectorAll(".tab-btn");
const tabBlock = document.querySelectorAll(".tab-block");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((btn) => {
      btn.classList.remove("border-b-2");
      btn.classList.remove("border-white");
      btn.classList.remove("text-white");
    });
    btn.classList.add("border-b-2");
    btn.classList.add("border-white");
    btn.classList.add("text-white");
  });
});
// Icons func
initIcons();

console.log("hellooo");
