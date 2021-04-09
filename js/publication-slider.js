new Swiper('.publication-slider',{
  slidesPerView: 3,
  spaceBetween: 50,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.publication-slide-pagination',
    type: 'fraction',
  },
});