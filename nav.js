const navToggle = document.querySelector('.menu-button');
const mobileNav = document.querySelector('#mobile-nav');

function closeMobileNav() {
  document.body.classList.remove('is-menu-open');
  if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
}

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('is-menu-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMobileNav();
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileNav();
  });
}
