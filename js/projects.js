new Swiper('.projects-slider',{
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      // slidesPerGroup: 1,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
    1025: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  navigation: {
    nextEl: '.projects-btn-next',
    prevEl: '.projects-btn-prev'
  },
});