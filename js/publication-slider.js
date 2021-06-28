new Swiper('.publication-slider',{
  slidesPerView: 3,
  spaceBetween: 50,
  breakpoints: {
    1367: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1025: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 50,
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