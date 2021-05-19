new Swiper('.publication-slider',{
  slidesPerView: 3,
  spaceBetween: 50,

  navigation: {
    nextEl: '.publication-slider__next',
    prevEl: '.publication-slider__prev'
  },
  pagination: {
    el: '.publication-slide-pagination',
    type: 'fraction',
  },
});