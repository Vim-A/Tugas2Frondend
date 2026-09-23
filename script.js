// JavaScript hanya digunakan untuk toggle hamburger navigasi responsif.
const navigation = document.querySelector('.nav');
const menuButton = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('#nav-links');

navigation.classList.add('menu-ready');

function toggleMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
  menuLinks.classList.toggle('is-open', open);
}

menuButton.addEventListener('click', () => {
  toggleMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

menuLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => toggleMenu(false));
});

navigation.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    toggleMenu(false);
    menuButton.focus();
  }
});
