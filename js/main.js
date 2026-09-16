/**
 * Ponto de entrada — ajustes globais
 */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var mainNav = document.getElementById('main-nav');
    var overlay = document.getElementById('nav-overlay');
    var menuToggle = document.getElementById('menu-toggle');

    window.addEventListener('resize', function () {
      if (window.innerWidth > 860 && mainNav && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        overlay.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  });
})();
