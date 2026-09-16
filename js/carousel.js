/**
 * Carrossel de clientes: pausa por toque no mobile (o hover já é tratado via CSS)
 */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('clients-carousel');
    var track = document.getElementById('clients-track');
    if (!carousel || !track) return;

    carousel.addEventListener('touchstart', function () {
      track.classList.add('is-paused');
    }, { passive: true });

    carousel.addEventListener('touchend', function () {
      track.classList.remove('is-paused');
    }, { passive: true });
  });
})();
