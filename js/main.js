const openBtn = document.getElementById('open-menu-btn');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-menu-btn');

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

function openMenu() {
    openBtn.classList.toggle('hidden')
    openBtn.classList.toggle('flex')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
}

function closeMenu() {
    openBtn.classList.toggle('hidden')
    openBtn.classList.toggle('flex')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
}