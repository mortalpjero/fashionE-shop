const productItems = document.querySelectorAll(".slider__item");
const slideRight = document.querySelector(".slider-btn--right");
const slideLeft = document.querySelector(".slider-btn--left");
const windowSize999 = window.matchMedia("(min-width: 999.2px)");

const max = productItems.length - 1;
let current = 0;

slideRight.addEventListener("click", function () {
  productItems[current].classList.add("hidden");

  current = current === max ? 0 : current + 1;

  productItems[current].classList.remove("hidden");
});

slideLeft.addEventListener("click", function () {
  productItems[current].classList.add("hidden");

  current = current === 0 ? max : current - 1;

  productItems[current].classList.remove("hidden");
});

const windowResize = () => {
  if (window.matchMedia("(min-width: 999.2px)").matches) {
    for (let i = 0; i < productItems.length; i += 1) {
      productItems[i].classList.remove("hidden");
    }
  } else {
    for (let i = 0; i < productItems.length; i += 1) {
      if (i === 0) {
        productItems[i].classList.remove("hidden");
        current = 0; // Update the value of `current` to the index of the first visible item
      } else {
        productItems[i].classList.add("hidden");
      }
    }
  }
};


window.addEventListener("resize", windowResize);
windowResize();

