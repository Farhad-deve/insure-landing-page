const IconHamburger = document.getElementById('icon-hamburger');
const IconClose = document.getElementById('icon-close');
const MobileMenu = document.getElementById('mobile-menu');

// Open Mobile Menu
IconHamburger.addEventListener('click', () => {
    MobileMenu.classList.remove('translate-x-[100%]');
    MobileMenu.classList.remove('pointer-events-none');
    MobileMenu.classList.add('translate-x-0');
    IconHamburger.classList.add('hidden');
    IconClose.classList.remove('hidden');
});

// Close Mobile Menu
IconClose.addEventListener('click', () => {
    MobileMenu.classList.remove('translate-x-0');
    MobileMenu.classList.add('pointer-events-none');
    MobileMenu.classList.add('translate-x-[100%]');
    IconHamburger.classList.remove('hidden');
    IconClose.classList.add('hidden');
});

// Close Mobile Menu when scroll
window.onscroll = () => {
    if (window.scrollY > 0) {
        MobileMenu.classList.remove('translate-x-0');
        MobileMenu.classList.add('translate-x-[100%]');
        IconHamburger.classList.remove('hidden');
        IconClose.classList.add('hidden');
    }
}
