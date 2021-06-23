new Swiper('.image-slider',{
  // slidesPerView: 3,
  // slidesPerColumn: 2,
  // spaceBetween: 50,
  // slidesPerGroup: 3,
  slidesPerView: 1,
  spaceBetween: 15,
  slidesPerGroup: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 0,
      spaceBetween: 0,
      slidesPerGroup: 1
    },
    577: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    769: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 35,
      slidesPerGroup: 2,
    },
    1025: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 35,
      slidesPerGroup: 2,
    },
    1367: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },

  navigation: {
    nextEl: '.image-btn-next',
    prevEl: '.image-btn-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});