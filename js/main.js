document.addEventListener('DOMContentLoaded', function() {

  //hero слайдер
  new Swiper('.hero-slider',{
    effect: "fade",
    autoplay: {
      delay: 2000,
    },
    loop: true,
  });

  // gallary слайдер
  new Swiper('.image-slider',{
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      576: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 35,
        slidesPerGroup: 2,
      },
      1368: {
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

  //events слайдер
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

  //publication слайдер
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

  // project слайдер
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

  // Открытие dropdown и закрытие других
  document.querySelector('#second-nav__btn1').addEventListener('click', function(){
    document.querySelector('#dropdown-first').classList.toggle('is-active')
    document.querySelector('#dropdown-second').classList.remove('is-active')
    document.querySelector('#dropdown-third').classList.remove('is-active')
    document.querySelector('#dropdown-fourth').classList.remove('is-active')
    document.querySelector('#dropdown-fifth').classList.remove('is-active')
  })
  
  document.querySelector('#second-nav__btn2').addEventListener('click', function(){
    document.querySelector('#dropdown-second').classList.toggle('is-active')
    document.querySelector('#dropdown-first').classList.remove('is-active')
    document.querySelector('#dropdown-third').classList.remove('is-active')
    document.querySelector('#dropdown-fourth').classList.remove('is-active')
    document.querySelector('#dropdown-fifth').classList.remove('is-active')
  })
    document.querySelector('#second-nav__btn3').addEventListener('click', function(){
      document.querySelector('#dropdown-third').classList.toggle('is-active')
      document.querySelector('#dropdown-first').classList.remove('is-active')
      document.querySelector('#dropdown-second').classList.remove('is-active')
      document.querySelector('#dropdown-fourth').classList.remove('is-active')
      document.querySelector('#dropdown-fifth').classList.remove('is-active')
    })
      document.querySelector('#second-nav__btn4').addEventListener('click', function(){
        document.querySelector('#dropdown-fourth').classList.toggle('is-active')
        document.querySelector('#dropdown-first').classList.remove('is-active')
        document.querySelector('#dropdown-second').classList.remove('is-active')
        document.querySelector('#dropdown-third').classList.remove('is-active')
        document.querySelector('#dropdown-fifth').classList.remove('is-active')
      })
        document.querySelector('#second-nav__btn5').addEventListener('click', function(){
          document.querySelector('#dropdown-fifth').classList.toggle('is-active')
          document.querySelector('#dropdown-first').classList.remove('is-active')
          document.querySelector('#dropdown-second').classList.remove('is-active')
          document.querySelector('#dropdown-third').classList.remove('is-active')
          document.querySelector('#dropdown-fourth').classList.remove('is-active')
  })
  
  // Закрытие dropdown по клику на любую область
  document.addEventListener('mouseup', (e) => {
    if ( !document.querySelector('#second-nav__btn1').contains(e.target)) 
    document.querySelector('.dropdown-first').classList.remove('is-active')
  })
  
  document.addEventListener('mouseup', (e) => {
    if ( !document.querySelector('#second-nav__btn2').contains(e.target)) 
    document.querySelector('.dropdown-second').classList.remove('is-active')
  })
  
  document.addEventListener('mouseup', (e) => {
    if ( !document.querySelector('#second-nav__btn3').contains(e.target)) 
    document.querySelector('.dropdown-third').classList.remove('is-active')
  })
  
  document.addEventListener('mouseup', (e) => {
    if ( !document.querySelector('#second-nav__btn4').contains(e.target)) 
    document.querySelector('.dropdown-fourth').classList.remove('is-active')
  })
  
  document.addEventListener('mouseup', (e) => {
    if ( !document.querySelector('#second-nav__btn5').contains(e.target)) 
    document.querySelector('.dropdown-fifth').classList.remove('is-active')
  })
  
  // Открытие карточек в событиях
  if(document.querySelector(".events-container")){
    let t=4;const e=document.querySelector(".events-btn"),
    o=document.querySelectorAll(".events-item").length;e.addEventListener("click",c=>{
      t+=4;const n=Array.from(document.querySelector(".events-items").children).slice(0,t);
      n.forEach(t=>t.classList.add("is-visible"))})}

  // Скрытие кнопки после открытия карточек
  document.querySelector('#events-btn').addEventListener('click', function(){
    document.querySelector('#events-btn').classList.toggle('is-invisible')
  })
  
  // бургер
  document.querySelector('.burder').addEventListener('click', function(){
    document.querySelector('.burder').classList.toggle('burger_active')
    document.querySelector('.first-nav').classList.toggle('first-nav_open')
  })
  
  // modal
  new GraphModal();

  //  Спойлер категории
  document.querySelector('.search-btn').addEventListener('click', function(){
    if (window.innerWidth <= 576) {
      document.querySelector('.first-header__form_mobile').classList.toggle('form-mobile__active')
      document.querySelector('.search-btn__close ').classList.toggle('form-mobile__active')
    }
    else {
      document.querySelector('.search-btn').addEventListener('click', function(){
        document.querySelector('.first-header__form').classList.toggle('first-header__form_open')
      })
    }
  })
  
  document.querySelector('.search-btn__close').addEventListener('click', function(){
    document.querySelector('.first-header__form_mobile').classList.remove('form-mobile__active')
    document.querySelector('.search-btn__close ').classList.remove('form-mobile__active')
  })
  
  const categoriesSpoiler = () => {
    document.querySelectorAll('.publication-categories__input').forEach((check) => {
      if (check.checked) {
        check.parentElement.classList.add('categories__items_active');
      }
    });
  
    document.querySelector('.publication-categories__title').addEventListener('click', () => {
  
      document.querySelectorAll('.publication-categories__item').forEach((category) => {
  
        category.classList.toggle('categories__items_show');
  
        if (category.childNodes[1].checked) {
          category.classList.add('categories__items_active');
        };
  
        if (!category.childNodes[1].checked) {
          category.classList.remove('categories__items_active');
        };
      });
    });
  
    document.querySelectorAll('.publication-categories__item-icon').forEach((btn) => {
      btn.addEventListener('click', (ev) => {
        ev.currentTarget.previousElementSibling.previousElementSibling.checked = ''
      });
    });
  };
  categoriesSpoiler();

  // скролл до художника на мобильном экране
  const paiterstBtn = document.querySelectorAll('.catalog-painters__link');
  const paintersContent = document.querySelectorAll('.catalog-painters');

  const scrollInto = () => {
    paintersContent.forEach((content) => {
      content.scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
    })
  }

  paiterstBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (document.documentElement.clientWidth <= 576) {
        scrollInto()
      }
    })
  });

  // скролл по странице
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});