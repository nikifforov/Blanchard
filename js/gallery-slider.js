new Swiper('.image-slider',{
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 50,
  slidesPerGroup: 6,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});