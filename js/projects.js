new Swiper('.projects-slider',{
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      // slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
    1367: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  navigation: {
    nextEl: '.projects-btn-next',
    prevEl: '.projects-btn-prev'
  },
});