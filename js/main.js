window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#second-nav__item1').addEventListener('click', function(){
    document.querySelector('.dropdown-first').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#second-nav__item2').addEventListener('click', function(){
    document.querySelector('.dropdown-second').classList.toggle('is-active2')
  })
})

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#second-nav__item3').addEventListener('click', function(){
    document.querySelector('.dropdown-third').classList.toggle('is-active3')
  })
})

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#second-nav__item4').addEventListener('click', function(){
    document.querySelector('.dropdown-fourth').classList.toggle('is-active4')
  })
})

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#second-nav__item5').addEventListener('click', function(){
    document.querySelector('.dropdown-fifth').classList.toggle('is-active5')
  })
})

document.addEventListener('mouseup', (e) => {
  if ( !document.querySelector('#second-nav__item1').contains(e.target)) 
  document.querySelector('.dropdown-first').classList.remove('is-active')
})

document.addEventListener('mouseup', (e) => {
  if ( !document.querySelector('#second-nav__item2').contains(e.target)) 
  document.querySelector('.dropdown-second').classList.remove('is-active2')
})

document.addEventListener('mouseup', (e) => {
  if ( !document.querySelector('#second-nav__item3').contains(e.target)) 
  document.querySelector('.dropdown-third').classList.remove('is-active3')
})

document.addEventListener('mouseup', (e) => {
  if ( !document.querySelector('#second-nav__item4').contains(e.target)) 
  document.querySelector('.dropdown-fourth').classList.remove('is-active4')
})

document.addEventListener('mouseup', (e) => {
  if ( !document.querySelector('#second-nav__item5').contains(e.target)) 
  document.querySelector('.dropdown-fifth').classList.remove('is-active5')
})

document.addEventListener("DOMContentLoaded",()=>{
  if(document.querySelector(".events-container")){
    let t=3;const e=document.querySelector(".events-btn"),
    o=document.querySelectorAll(".events-item").length;e.addEventListener("click",c=>{
      t+=3;const n=Array.from(document.querySelector(".events-items").children).slice(0,t);
      n.forEach(t=>t.classList.add("is-visible"))})}}
)

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#events-btn').addEventListener('click', function(){
    document.querySelector('#events-btn').classList.toggle('is-invisible')
  })
})

