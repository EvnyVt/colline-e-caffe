const btn = document.querySelector('#btn-mobile');
const menu = document.querySelector('#menuMobile');

btn.addEventListener('click', ()=>{
  menu.classList.toggle('hidden');
})
  