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

document.addEventListener("DOMContentLoaded",()=>{
  if(document.querySelector(".events-container")){
    let t=4;const e=document.querySelector(".events-btn"),
    o=document.querySelectorAll(".events-item").length;e.addEventListener("click",c=>{
      t+=4;const n=Array.from(document.querySelector(".events-items").children).slice(0,t);
      n.forEach(t=>t.classList.add("is-visible"))})}}
)

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#events-btn').addEventListener('click', function(){
    document.querySelector('#events-btn').classList.toggle('is-invisible')
  })
})


document.querySelector('.burder').addEventListener('click', function(){
  document.querySelector('.burder').classList.toggle('burger_active')
  document.querySelector('.first-nav').classList.toggle('first-nav_open')
})

const modal = new GraphModal();



document.querySelector('.publication-categories__title').addEventListener('click', function(){
  document.querySelector('.publication-categories__items').classList.toggle('categories__items_active')
})


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


// var x = document.querySelectorAll(".publication-categories__item");


// x.addEventListener('click', function() {
//   if (x.hasAttribute("data-checked", false)) {
//     x.setAttribute("data-checked", true);
//   } else {
//     x.setAttribute("data-checked", false);
//   }
// })
    

// const x = document.querySelectorAll('.publication-categories__item');

// x.forEach( element => {
//   element.setAttribute("data-checked", false)
// })

// x.addEventListener('click', function() {
//   if (x.hasAttribute("data-checked", false)) {
//     x.setAttribute("data-checked", true);
//   }
// })


// function pci () {
//   const x = document.querySelectorAll('.publication-categories__item');

//   for (let i = 0; i < x.attribute.length; i++) {
//     if (x.hasAttribute("data-checked", false)) {
//       x.setAttribute(("data-checked", true))
//     } else (x.setAttribute("data-checked", false))
//   }
// }


// const x = document.querySelector('.publication-categories__item');
// const y = x.getAttribute('data-checked')

// console.log(y)

// for (i = 0; i < y; i++) {
//   console.log(y)
//   if (y === false) {
//     x.setAttribute('data-checked', true)
//   } else {
//     x.setAttribute('data-checked', false)
//   }
// }

// console.log(x.getAttribute('data-checked'))

// const categoriesCheackBoxes = document.querySelector('.publication-categories__items');

// function optimizeCheckbox() {
//   if (document.documentElement.clientWidth <= 576 && !document.querySelector('.publication-categories__title')) {

//     let button = document.createElement('button');
//     button.classList.add('publication-categories__title');

//     button.addEventListener('click', (ev) => {
//       ev.target.classList.toggle('btn-show-categories-active');
//       categoriesCheackBoxes.classList.toggle('.categories__items_active');
//     });

//     document.querySelector('.publication-categories__title').append(button);

//     let inputs = document.querySelectorAll('.publication-categories__check');
//     inputs.forEach((input) => {
//       if (input.checked == true) {
//         input.parentElement.classList.add('categories__items_active');
//       }
//     })

//     let checkboxWrapper = document.querySelectorAll('.publication-categories__item');

//     checkboxWrapper.forEach((wrapper) => {
//       wrapper.addEventListener('click', function (ev) {
//         if (this.children[0].checked == true) {
//           this.classList.add('categories__items_active');
//         } else {
//           this.classList.remove('categories__items_active');
//         }
//       })
//     })
//   } else if (document.querySelector('.btn-show-categories')) {
//     document.querySelector('.btn-show-categories').remove();
//   };
// }