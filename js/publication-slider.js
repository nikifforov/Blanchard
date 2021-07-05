new Swiper('.publication-slider',{
  slidesPerView: 3,
  spaceBetween: 50,
  breakpoints: {
    1366: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    321: {
      slidesPerView: 2,
      spaceBetween: 34,
    }
  },

  navigation: {
    nextEl: '.publication-slider__next',
    prevEl: '.publication-slider__prev'
  },
  pagination: {
    el: '.publication-slide-pagination',
    type: 'fraction',
  },
});