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


const modal = new GraphModal();