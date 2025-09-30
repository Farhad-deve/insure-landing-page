const sideOpener = document.querySelector('.side-opener');

const sidebarWindow = document.querySelector('.sidebar-window');

const closeX = document.querySelector('.x');

const hamBurger = document.querySelector('.hamburger');

sideOpener.onclick = () => {
    sidebarWindow.classList.toggle('open');
    closeX.classList.toggle('d-none');
    hamBurger.classList.toggle('d-none');
};