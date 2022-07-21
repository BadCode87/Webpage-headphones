// Inicializacion de AOS
AOS.init();

const menu = document.getElementById('menu');
const menuBar = document.getElementById('menu-bar');


menuBar.addEventListener('click', () =>{
    

    menu.classList.toggle('menu-toggle');
});