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
    body.classList.toggle("relative");
    body.classList.toggle("fixed");
    navBlock.classList.toggle("inline-flex");
    navBlock.classList.toggle("hidden");
  });
}
// Horizontal slider -----------
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

// links accordion -----------
const footerLinks = document.querySelectorAll(
  "p.footerLinks , p.menuLink , h4.vidTitle"
);

function acrdFunc(titles) {
  let curr;
  titles.forEach((p, i) => {
    const minus = p.querySelector("svg > path:last-of-type");
    const LinkList = p.nextElementSibling;

    p.addEventListener("click", () => {
      if (curr === i) {
        minus.classList.toggle("hidden");
        LinkList.classList.toggle("hidden");
      } else {
        titles.forEach((p) => {
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
footerLinks && acrdFunc(footerLinks);
// Accordion with imgs -----------
const acoordionTitles = document.querySelectorAll(".accordion-titles");

if (acoordionTitles) {
  acoordionTitles.forEach((titlesBlock) => {
    const singleTitle = titlesBlock.querySelectorAll("p.prodAccordion");
    let curr;
    singleTitle.forEach((p, i) => {
      p.addEventListener("click", () => {
        const minus = p.querySelector("svg > path:last-of-type");
        const nextBlock = p.nextElementSibling;
        const nextBlockHeight = p.nextElementSibling.scrollHeight;
        console.log(nextBlock);
        if (curr === i) {
          minus.classList.toggle("hidden");
          if (minus.classList.contains("hidden")) {
            nextBlock.style.maxHeight = `${nextBlockHeight}px`;
          } else {
            nextBlock.style.maxHeight = "0px";
          }
          // nextBlock.classList.toggle("hidden");
        } else {
          singleTitle.forEach((p) => {
            p.querySelector("svg > path:last-of-type").classList.remove(
              "hidden"
            );
            p.nextElementSibling.style.maxHeight = "0px";
          });

          minus.classList.toggle("hidden");
          nextBlock.style.maxHeight = `${nextBlockHeight}px`;
        }
        curr = i;
      });
    });
    const acoordionImgs =
      titlesBlock.nextElementSibling.querySelectorAll("img");
    singleTitle.forEach((title) => {
      title.addEventListener("click", function () {
        const titleNo = this.dataset.title;
        acoordionImgs.forEach((img) => {
          const imgNo = img.dataset.img;
          img.classList.add("hidden");
          if (titleNo === imgNo) {
            img.classList.remove("hidden");
          }
        });
      });
    });
  });
}

// Roof accordion ------------
const accordionBtn = document.querySelectorAll(".acc-btn");
const expandBtn = document.querySelector(".exp-btn");
if (expandBtn) {
  expandBtn.addEventListener("click", () => {
    expandBtn.classList.toggle("open");
    const btnText = expandBtn.querySelector("span");
    const btnArw = expandBtn.querySelector("svg");
    if (expandBtn.classList.contains("open")) {
      btnText.innerHTML = btnText.dataset.closetxt;
      btnArw.style.transform = "rotate(180deg)";
      accordionBtn.forEach((blk) => {
        blk.nextElementSibling.style.maxHeight = `${blk.nextElementSibling.scrollHeight}px`;
        blk.querySelector(".btn-svg").style.transform = "rotate(135deg)";
      });
    } else {
      btnText.innerHTML = btnText.dataset.opentxt;

      btnArw.style.transform = "rotate(0deg)";
      accordionBtn.forEach((blk) => {
        blk.nextElementSibling.style.maxHeight = "0px";
        blk.querySelector(".btn-svg").style.transform = "rotate(0deg)";
      });
    }
  });
  accordionBtn.forEach((block, i) => {
    const accordionBlock = block.nextElementSibling;
    const blkHeight = block.nextElementSibling.scrollHeight;
    const accordionSVG = block.querySelector(".btn-svg");

    block.addEventListener("click", () => {
      accordionBlock.classList.toggle("active");
      if (accordionBlock.classList.contains("active")) {
        accordionBlock.style.maxHeight = `${blkHeight}px`;
        accordionSVG.style.transform = "rotate(135deg)";
      } else {
        accordionBlock.style.maxHeight = "0px";
        accordionSVG.style.transform = "rotate(0deg)";
      }
    });
  });
}

// sticky-nav ------------
const stickyNavLinks = document.querySelectorAll(".sticky-nav > a");

if (stickyNavLinks) {
  let alterColor;
  if (body.classList.contains("bg-cream")) {
    console.log(body.classList);
    alterColor = "bg-white";
  }
  const defColor = alterColor || "bg-cream";

  stickyNavLinks.forEach((a) => {
    a.addEventListener("click", () => {
      stickyNavLinks.forEach((a) => {
        a.firstElementChild.classList.remove("bg-red");
        a.firstElementChild.classList.add(defColor);
      });
      a.firstElementChild.classList.remove(defColor);
      a.firstElementChild.classList.add("bg-red");
    });
  });
}
// Tabs -----------
const tabBtns = document.querySelectorAll(".tab-btn");
const tabBlocks = document.querySelectorAll(".tab-block");
if (tabBtns) {
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      tabBtns.forEach((btn) => {
        btn.classList.remove("border-b-2");
        btn.classList.remove(`border-${btn.dataset.activecolor}`);
        btn.classList.remove(`text-${btn.dataset.activecolor}`);
        btn.classList.add(`text-${btn.dataset.textcolor}`);
      });
      btn.classList.add("border-b-2");
      btn.classList.add(`border-${btn.dataset.activecolor}`);
      btn.classList.remove(`text-${btn.dataset.textcolor}`);
      btn.classList.add(`text-${btn.dataset.activecolor}`);
      tabBlocks.forEach((block) => {
        block.classList.add("hidden");
        if (btn.dataset.tab === block.dataset.tab) {
          block.classList.remove("hidden");
        }
      });
    });
  });
}

// Embaded video ---------------
const eachItem = document.querySelectorAll(".vid-play, .list-popup");

const modalContainer = document.querySelector(".modal-container");
const modalPlayer = document.querySelector(".modal-wrapper");
const embededSrc = modalContainer.querySelector(".modal-embeded > iframe");
const modalClose = modalContainer.querySelector("button.close-btn");

function vidOpenFunc() {
  modalContainer.classList.toggle("opacity-0");
  modalContainer.classList.toggle("invisible");
  modalPlayer.classList.toggle("left-full");
  modalPlayer.classList.toggle("left-0");
  body.classList.toggle("overflow-hidden");
}
if (modalContainer) {
  eachItem.forEach((item) => {
    item.addEventListener("click", () => {
      vidOpenFunc();
      embededSrc && embededSrc.setAttribute("src", item.dataset.vid);
    });
  });

  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer || e.target === modalClose) {
      vidOpenFunc();
      embededSrc && embededSrc.setAttribute("src", "");
    }
  });

  // For post ID view
  const listItem = document.querySelectorAll(".list-popup");

  listItem.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(
        ".postid-no"
      ).innerHTML = `<h4>List ID no - ${item.dataset.postid}</h4>`;
    });
  });
}
// Banner slider ---------------
const carousel = document.querySelector(".carousel");
const slider = document.querySelector(".banner-slider");
const slides = document.querySelectorAll(".banner-slider > .slide");
const slideSingleCount = document.querySelector(
  ".slider-control > p > span:first-of-type"
);
const slideSumCount = document.querySelector(
  ".slider-control > p > span:last-of-type"
);
const next = document.querySelector(".b-slide-right");
const prev = document.querySelector(".b-slide-left");
let direction;

slides.forEach((slide) => {
  slide.style.flexBasis = `${100 / slides.length}%`;
});
slideSumCount.innerHTML = slides.length;

next.addEventListener("click", function () {
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = `translate(-${100 / slides.length}%)`;
});

prev.addEventListener("click", function () {
  direction = 1;
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = `translate(${100 / slides.length}%)`;
});

slider.addEventListener(
  "transitionend",
  function () {
    if (direction === 1) {
      slider.prepend(slider.lastElementChild);
      slideSingleCount.innerHTML = slider.lastElementChild.dataset.slide;
    } else {
      slider.appendChild(slider.firstElementChild);
      slideSingleCount.innerHTML = slider.firstElementChild.dataset.slide;
    }

    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setTimeout(() => {
      slider.style.transition = "all 0.5s";
    });
  },
  false
);
slider.addEventListener("touchstart", handleTouchStart, false);
slider.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;
let yDown = null;

const getTouches = (evt) => evt.touches;

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let yUp = evt.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      direction = -1;
      carousel.style.justifyContent = "flex-start";
      slider.style.transform = `translate(-${100 / slides.length}%)`;
    } else {
      direction = 1;
      if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
      }
      carousel.style.justifyContent = "flex-end";
      slider.style.transform = `translate(${100 / slides.length}%)`;
    }
  }
  xDown = null;
  yDown = null;
}
// Icons func -----------
initIcons();

console.log("hellooo");
