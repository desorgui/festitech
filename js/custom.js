const hamburger = document.querySelector('#hamburger');
const closeBtn = document.querySelector('#btn-close');
const mobileNav = document.querySelector('.menu-list');
const header = document.querySelector('#header')

hamburger.addEventListener('click', () => {
  mobileNav.classList.add('active');
  header.classList.toggle('d-center')
  hamburger.classList.toggle('active')
  closeBtn.classList.toggle('active')
});
closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  header.classList.toggle('d-center')
  hamburger.classList.toggle('active')
  closeBtn.classList.toggle('active')
});