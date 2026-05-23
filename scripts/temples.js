const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuBtn.classList.toggle('open');
});