import { initIcons } from "@47nordmedia/k2-systems-ui-library/dist/icons";
// lang bar ---------
window.addEventListener("load", () => {
  console.log("loadeded");
  // Set overflow-hidden to body to prevent the scroll
  const langSwitcher = document.querySelector(".lang-switcher");
  if (langSwitcher) {
    document.body.classList.add("overflow-hidden");
    const langSwitcherBox = document.querySelector(".lang-switcher-box");
    const langSelectList = document.querySelectorAll(".lang-select-list > li");
    const langBtnStay = document.querySelector(".lang-btn-stay");
    const langBtnContinue = document.querySelector(".lang-btn-continue");
    langSelectList.forEach((list) => {
      list.addEventListener("click", () => {
        const tick = list.querySelector("img");
        langSelectList.forEach((list) =>
          list.querySelector("img").classList.add("invisible")
        );
        tick.classList.remove("invisible");
        // Selected lang ---------
        console.log(list.dataset.lang);
      });
    });
    langBtnStay.addEventListener("click", (e) => {
      console.log("user choosed to stay at the default");
      document.body.classList.remove("overflow-hidden");
      langSwitcher.classList.add("hidden");
    });
    langBtnContinue.addEventListener("click", (e) => {
      console.log("user clicked the continue button");
      document.body.classList.remove("overflow-hidden");
      langSwitcher.classList.add("hidden");
    });
    window.addEventListener("click", (e) => {
      if (e.target === langSwitcher) {
        langSwitcher.classList.add("hidden");
        // Remove overflow-hidden to body to enable the scroll
        document.body.classList.remove("overflow-hidden");
        console.log("user clicked outside of the box");
      }
    });
  }
});

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

// Search & language selection modal ----------
const eachBtn = document.querySelectorAll(".search-btn, .lang-btn");
const navModalContainer = document.querySelector(".navmodal-container");
const navModalWrapper = document.querySelector(".navmodal-wrapper");
const navSearchWrapper = document.querySelector(".navsearch-wrapper");
if (navModalContainer) {
  const navmodalClose = navModalContainer.querySelector("button.navclose-btn");
  const navSearchClose = navModalContainer.querySelector(
    "button.searchclose-btn"
  );
  function modalOpenFunc() {
    navModalContainer.classList.toggle("opacity-0");
    navModalContainer.classList.toggle("invisible");
    body.classList.toggle("overflow-hidden");
  }
  let searchClicked = 0;
  eachBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      if (item.classList.contains("search-btn")) {
        navModalContainer.classList.add("justify-center");
        navModalContainer.classList.add("items-center");
        navModalWrapper.classList.add("hidden");
        navSearchWrapper.classList.remove("hidden");
        window.innerWidth < 1024 && navSearchWrapper.classList.add("!top-0");
        modalOpenFunc();
        setTimeout(() => {
          navSearchWrapper.querySelector("input").focus();
        }, 500);
      } else if (item.classList.contains("lang-btn")) {
        navModalContainer.classList.remove("justify-center");
        navModalContainer.classList.remove("items-center");
        navSearchWrapper.classList.add("hidden");
        window.innerWidth < 1024 && navSearchWrapper.classList.remove("!top-0");
        modalOpenFunc();
        navModalWrapper.classList.toggle("left-full");
        navModalWrapper.classList.toggle("left-0");
        searchClicked = 1;
      }
    });
  });
  navModalContainer.addEventListener("click", (e) => {
    if (
      e.target === navModalContainer ||
      e.target === navmodalClose ||
      e.target.closest("button.searchclose-btn") === navSearchClose
    ) {
      modalOpenFunc();

      setTimeout(() => {
        navModalWrapper.classList.remove("hidden");
      }, 500);
      if (searchClicked === 1) {
        navModalWrapper.classList.toggle("left-full");
        navModalWrapper.classList.toggle("left-0");
        searchClicked = 0;
      } else if (searchClicked === 0 && window.innerWidth < 1024) {
        window.innerWidth < 1024 && navSearchWrapper.classList.remove("!top-0");
      }
    }
  });

  // Lang select ------
  const langList = navModalWrapper.querySelectorAll("ul.lang-list > li");
  langList.forEach((li) => {
    li.addEventListener("click", () => {
      langList.forEach((li) => {
        li.classList.remove("lang-selected");
        li.querySelector(".lang-tick").classList.add("invisible");
      });
      const langTick = li.querySelector(".lang-tick");
      li.classList.add("lang-selected");
      if (langTick.closest(".lang-selected")) {
        langTick.classList.remove("invisible");
      }
    });
  });
}
// Horizontal scroller -----------

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
if (expandBtn || accordionBtn) {
  expandBtn &&
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
        accordionSVG.classList.remove("text-red");
      } else {
        accordionBlock.style.maxHeight = "0px";
        accordionSVG.style.transform = "rotate(0deg)";
        accordionSVG.classList.add("text-red");
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
const eachItem = document.querySelectorAll(
  ".vid-play, .list-popup, .testi-popup"
);

const modalContainer = document.querySelector(".modal-container");
const modalPlayer = document.querySelector(".modal-wrapper");
if (modalContainer) {
  const embeded = modalContainer.querySelector(".modal-embeded");
  const embededSrc = modalContainer.querySelector(".modal-embeded > iframe");
  const testiContent = modalContainer.querySelector(".testi-content");
  const contentBoxs = modalContainer.querySelectorAll(".content-box");
  const modalClose = modalContainer.querySelector("button.close-btn");

  function vidOpenFunc() {
    modalContainer.classList.toggle("opacity-0");
    modalContainer.classList.toggle("invisible");
    modalPlayer.classList.toggle("left-full");
    modalPlayer.classList.toggle("left-0");
    body.classList.toggle("overflow-hidden");
  }
  eachItem.forEach((item) => {
    item.addEventListener("click", () => {
      if (testiContent && item.classList.contains("testi-popup")) {
        modalPlayer.classList.remove("xl:w-10/12");
        modalPlayer.classList.add("lg:w-4/12");
        embeded.classList.add("hidden");
        testiContent.classList.remove("hidden");
      } else if (testiContent && item.classList.contains("vid-play")) {
        modalPlayer.classList.remove("lg:w-4/12");
        modalPlayer.classList.add("xl:w-10/12");
        embeded.classList.remove("hidden");
        testiContent.classList.add("hidden");
      }
      embededSrc && embededSrc.setAttribute("src", item.dataset.vid);
      vidOpenFunc();

      if (contentBoxs) {
        const itemId = item.dataset.postid;
        contentBoxs.forEach((box) => {
          box.classList.add("hidden");
          if (box.dataset.cobid === itemId) {
            box.classList.remove("hidden");
          }
        });
      }
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

if (carousel) {
  let direction = 1;

  slides.forEach((slide) => {
    slide.style.flexBasis = `${100}%`;
  });
  if (slideSumCount) slideSumCount.innerHTML = slides.length;

  next.addEventListener("click", function () {
    direction = -1;
    slider.style.justifyContent = "flex-start";
    slider.style.transform = `translate(-${100}%)`;
  });

  prev.addEventListener("click", function () {
    // direction = 1;
    if (direction === -1) {
      direction = 1;
      slider.appendChild(slider.firstElementChild);
    }
    slider.style.justifyContent = "flex-end";
    slider.style.transform = `translate(${100}%)`;
  });

  slider.addEventListener(
    "transitionend",
    function () {
      if (direction === 1) {
        slider.prepend(slider.lastElementChild);
        if (slideSingleCount)
          slideSingleCount.innerHTML = slider.lastElementChild.dataset.slide;
      } else {
        slider.appendChild(slider.firstElementChild);
        if (slideSingleCount)
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
        slider.style.justifyContent = "flex-start";
        slider.style.transform = `translate(-${100}%)`;
      } else {
        direction = 1;
        if (direction === -1) {
          direction = 1;
          slider.appendChild(slider.firstElementChild);
        }
        slider.style.justifyContent = "flex-end";
        slider.style.transform = `translate(${100}%)`;
      }
    }
    xDown = null;
    yDown = null;
  }
}
// webniar Tab -------------
const wbTabBtns = document.querySelectorAll(".wb-tab-btn");
const wbTabBlocks = document.querySelectorAll(".wb-tab-block");

if (wbTabBtns) {
  wbTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      wbTabBtns.forEach((btn) => {
        btn.classList.remove("text-red");
        btn.classList.remove("border-red");
      });
      btn.classList.add("text-red");
      btn.classList.add("border-red");
      if (btn.dataset.tabname === "all") {
        wbTabBlocks.forEach((block) => block.classList.remove("hidden"));
      } else {
        wbTabBlocks.forEach((block) => {
          block.classList.add("hidden");
          if (block.dataset.tabfor === btn.dataset.tabname) {
            block.classList.remove("hidden");
          }
        });
      }
    });
  });
}
// Topic button ------------
const Topicard = document.querySelectorAll(".topic-card");

Topicard.forEach((card) => {
  const topicListCard = card.querySelector(".topic-list-card");
  const topicList = card.querySelector(".topic-list");
  const topicSeeMore = card.querySelector(".topic-link");
  const topicClose = card.querySelector(".topic-btn-close");

  topicSeeMore.addEventListener("click", (e) => {
    if (!topicListCard.classList.contains("show")) {
      e.preventDefault();
      const btnBgColor = topicSeeMore.dataset.bgcolor;
      topicList.classList.toggle("top-0");
      topicList.classList.toggle("top-40");
      topicListCard.classList.toggle("opacity-0");
      topicListCard.classList.toggle("opacity-100");
      topicSeeMore.classList.toggle(`bg-${btnBgColor}`);
      topicSeeMore.classList.toggle("bg-red");
      topicSeeMore.innerHTML = `<span class="text-white">See more</span><img src="./img/arrow__rightWhite.svg" alt="see more" class="ml-2">`;
      topicClose.classList.toggle("opacity-0");
      topicClose.classList.toggle("invisible");
      topicListCard.classList.add("show");
    }
  });
  topicClose.addEventListener("click", () => {
    const btnBgColor = topicSeeMore.dataset.bgcolor;
    topicList.classList.toggle("top-0");
    topicList.classList.toggle("top-40");
    topicListCard.classList.toggle("opacity-0");
    topicListCard.classList.toggle("opacity-100");
    topicSeeMore.classList.toggle(`bg-${btnBgColor}`);
    topicSeeMore.classList.toggle("bg-red");
    topicSeeMore.innerHTML = `<span>Topic</span><span class="font-medium -mt-2">...</span>`;
    topicClose.classList.toggle("opacity-0");
    topicClose.classList.toggle("invisible");
    topicListCard.classList.remove("show");
  });
});
// Full screen banner issue ---------
const siteHeader = document.querySelector("header");
const siteNavs = document.querySelectorAll("nav > ul > li");
const fullBanner = document.querySelector(".full-banner");
if (fullBanner && window.innerWidth > 1024) {
  siteNavs.forEach((link) => {
    link.addEventListener("mouseover", (e) => {
      console.log("enter");
      setTimeout(() => {
        fullBanner.classList.remove("-mx-4");
        fullBanner.classList.remove("lg:-mx-8");
      }, 150);
    });
    document.querySelector("nav").addEventListener("mouseout", (e) => {
      setTimeout(() => {
        fullBanner.classList.add("-mx-4");
        fullBanner.classList.add("lg:-mx-8");
      }, 150);
    });
  });
}
// Custom checkbox & radios ------
const roundCheckboxs = document.querySelectorAll(".round-checkbox");
const roundRadioboxs = document.querySelectorAll(".round-radiobox");

roundCheckboxs.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    const svgTickPath = checkbox.querySelector("svg > path");
    svgTickPath.classList.toggle("fill-lightGrey");
    svgTickPath.classList.toggle("fill-black");
    checkbox.classList.toggle("border");
    checkbox.classList.toggle("border-2");
    checkbox.classList.toggle("border-medGrey");
    checkbox.classList.toggle("border-black");
  });
});
roundRadioboxs.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    roundRadioboxs.forEach((checkbox) => {
      const svgTickPath = checkbox.querySelector("svg > path");
      svgTickPath.classList.add("fill-lightGrey");
      svgTickPath.classList.remove("fill-black");
      checkbox.classList.add("border");
      checkbox.classList.remove("border-2");
      checkbox.classList.add("border-medGrey");
      checkbox.classList.remove("border-black");
    });
    const svgTickPath = checkbox.querySelector("svg > path");
    svgTickPath.classList.remove("fill-lightGrey");
    svgTickPath.classList.add("fill-black");
    checkbox.classList.remove("border");
    checkbox.classList.add("border-2");
    checkbox.classList.remove("border-medGrey");
    checkbox.classList.add("border-black");
  });
});

// Roofchart ----------------
const roofChartList = document.querySelector(".roofchart-list");
const roofChartShadow = document.querySelector(".roofchart-shadow");
if (roofChartList && window.innerWidth < 800) {
  roofChartShadow.style.height = `${roofChartList.offsetHeight}px`;
  roofChartShadow.style.background =
    "linear-gradient(270deg, #B8BFC8 0%, rgba(194, 201, 210, 0) 100%)";
  roofChartShadow.style.transform = "matrix(-1, 0, 0, 1, 0, 0)";
  roofChartList.addEventListener("scroll", (e) => {
    roofChartList.scrollLeft
      ? (roofChartShadow.style.opacity = "1")
      : (roofChartShadow.style.opacity = "0");
  });
}
// Search result tab ---------
// Search filter radio inputs ---------
const searchRadios = document.querySelectorAll(".filter-radiobox");
searchRadios.forEach((checkbox) => {
  const radioInput = checkbox.querySelector("input[type=radio]");
  const searchCount = checkbox.querySelector(".search-count");
  checkbox.addEventListener("click", () => {
    searchRadios.forEach((checkbox) => {
      const searchCount = checkbox.querySelector(".search-count");
      const svgTickPath = checkbox.querySelector("svg > path");
      svgTickPath.classList.add("fill-lightGrey");
      svgTickPath.classList.remove("fill-red");
      checkbox.classList.add("border-medGrey");
      checkbox.classList.remove("border-red");
      searchCount.classList.remove("text-red");
    });
    const svgTickPath = checkbox.querySelector("svg > path");
    svgTickPath.classList.remove("fill-lightGrey");
    svgTickPath.classList.add("fill-red");
    checkbox.classList.remove("border-medGrey");
    checkbox.classList.add("border-red");
    if (radioInput.checked) searchCount.classList.add("text-red");
  });
  if (radioInput.checked) searchCount.classList.add("text-red");
  if (checkbox.classList.contains("disabled")) {
    checkbox.classList.add("pointer-events-none");
    checkbox.classList.add("!border-lightGrey");
    checkbox.querySelector("span").classList.add("!text-lightGrey");
    checkbox.querySelector(".search-count").classList.add("!text-lightGrey");
    checkbox.querySelector("svg").classList.add("hidden");
  }
});
// Calculate red line height ----------
if (window.innerWidth > 1024) {
  const redLineHeight = (element1, element2) => {
    const rect1Bottom = element1.getBoundingClientRect().bottom;
    const rect2Top = element2.getBoundingClientRect().top;
    return (rect2Top - rect1Bottom).toFixed(0);
  };
  const drawRedLine = (elm1, elm2, line) => {
    const pointA = document.getElementById(elm1);
    const pointB = document.getElementById(elm2);
    const lineY = +redLineHeight(pointA, pointB);
    document.querySelector(line).style.height = `${lineY}px`;
  };
  // Example usage

  window.addEventListener("DOMContentLoaded", () => {
    drawRedLine("rec1", "rec2", ".long-red-line-one");
    drawRedLine("rec3", "rec4", ".long-red-line-two");
    drawRedLine("rec5", "rec6", ".long-red-line-three");
  });
}

// Icons func -----------
initIcons();

console.log("hellooo");
