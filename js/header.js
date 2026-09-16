/**
 * Header: efeito de rolagem e menu mobile
 */
(function () {
  var header = document.querySelector('[data-header]');
  var menuToggle = document.getElementById('menu-toggle');
  var mainNav = document.getElementById('main-nav');
  var overlay = document.getElementById('nav-overlay');

  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }

  function openMenu() {
    mainNav.classList.add('is-open');
    overlay.classList.add('is-active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mainNav.classList.remove('is-open');
    overlay.classList.remove('is-active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    var isOpen = mainNav.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  }

  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (menuToggle && mainNav && overlay) {
      menuToggle.addEventListener('click', toggleMenu);
      overlay.addEventListener('click', closeMenu);

      mainNav.querySelectorAll('.main-nav__link').forEach(function (link) {
        link.addEventListener('click', closeMenu);
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
      });
    }
  });
})();
