const menu = document.querySelector('.menu');
const NaVMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NaVMenu.classList.toggle('ativo');
})