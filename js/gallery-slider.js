new Swiper('.image-slider',{
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 50,
  slidesPerGroup: 3,

  navigation: {
    nextEl: '.image-btn-next',
    prevEl: '.image-btn-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});