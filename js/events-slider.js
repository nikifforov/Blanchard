const slider = document.querySelector('.events-cards');

let eventsSlider;

function mobileEventsSlider() {
  if (window.innerWidth <= 576 && slider.dataset.mobile == 'false') {
    eventsSlider = new Swiper (slider, {
      slidesPerView: 1,
      spaceBetween: 15,
      slideClass: 'events-item',
      wrapperClass: 'events-items',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 576) {
    slider.dataset.mobile = 'false';
     
    if (slider.classList.contains('swiper-container-initialized')) {
      eventsSlider.destroy()
    }
  }
}

mobileEventsSlider();

window.addEventListener('resize', () => {
  mobileEventsSlider();
});