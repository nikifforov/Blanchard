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

const publicationBtn = document.querySelector('.publication-categories__title');
const publicationFormItem = document.querySelectorAll('.publication-categories__item');
const publicationFormInput = document.querySelectorAll('.publication-categories__input');
const publicationBtnArrow = document.querySelector('.publication-categories__title-arrow');

const showActiveCheckbox = () => {
  publicationFormInput.forEach(el => {
    if (el.checked) {
      el.parentNode.classList.add('categories__items_active')
    }
  })
}

const publicationAccordion = () => {
  publicationBtn.addEventListener('click', () => {
    publicationBtnArrow.classList.toggle('arrow-active');
    publicationFormItem.forEach(el => {
      el.classList.toggle('categories__items_active')
      showActiveCheckbox();
    })
  })
}

const publicationCheck = () => {
  for (let i = 0; i < publicationFormInput.length; i++) {
    const el = publicationFormInput[i];
    el.addEventListener('change', () => {
      el.parentNode.classList.toggle('categories__items_active');
      showActiveCheckbox();
    })
  }
  showActiveCheckbox();
}
publicationAccordion();
publicationCheck();