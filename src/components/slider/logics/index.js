const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {
  const productItems = slider.querySelectorAll(".slider__item");
  const slideRight = slider.querySelector(".slider-btn--right");
  const slideLeft = slider.querySelector(".slider-btn--left");
  const sliderIndicatorContainer = slider.querySelector(".slider__indicator-container");
  const sliderIndicator = slider.querySelectorAll(".slider__indicator");

  const max = productItems.length - 1;
  let current = 0;

  slideRight.addEventListener("click", function () {
    if (sliderIndicatorContainer) {
      sliderIndicator[current].classList.remove("slider__indicator--active");
    }
    productItems[current].classList.add("hidden");

    current = current === max ? 0 : current + 1;

    if (sliderIndicatorContainer) {
      sliderIndicator[current].classList.add("slider__indicator--active");
    }
    productItems[current].classList.remove("hidden");
  });

  slideLeft.addEventListener("click", function () {
    if (sliderIndicatorContainer) {
      sliderIndicator[current].classList.remove("slider__indicator--active");
    }
    productItems[current].classList.add("hidden");

    current = current === 0 ? max : current - 1;

    if (sliderIndicatorContainer) {
      sliderIndicator[current].classList.add("slider__indicator--active");
    }
    productItems[current].classList.remove("hidden");
  });

  const windowResize = () => {
    if (window.matchMedia("(min-width: 999.2px)").matches) {
      if (sliderIndicatorContainer) {
        sliderIndicatorContainer.classList.add("hidden");
      }
      for (let i = 0; i < productItems.length; i += 1) {
        productItems[i].classList.remove("hidden");
      }
    } else {
      if (sliderIndicatorContainer) {
        sliderIndicatorContainer.classList.remove("hidden");
      }
      for (let i = 0; i < productItems.length; i += 1) {
        if (i === 0) {
          productItems[i].classList.remove("hidden");
          current = 0;
        } else {
          productItems[i].classList.add("hidden");
        }
      }
    }
  };

  window.addEventListener("resize", windowResize);
  windowResize();
});