/**
 * Modal de detalhes do serviço ("Ver mais": foto + descrição)
 */
(function () {
  var DATA = window.BIOFLASH_DATA;
  var modal, imageEl, titleEl, descEl, closeButtons;
  var lastFocusedTrigger = null;

  function openServiceModal(index, trigger) {
    var service = DATA.services[index];
    if (!service) return;

    lastFocusedTrigger = trigger || null;

    imageEl.classList.remove('is-broken');
    imageEl.src = service.image || '';
    imageEl.alt = service.title;
    titleEl.textContent = service.title;
    descEl.textContent = service.description;

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeButtons[0].focus();
  }

  function closeServiceModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocusedTrigger) lastFocusedTrigger.focus();
  }

  function onKeydown(e) {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeServiceModal();
  }

  document.addEventListener('DOMContentLoaded', function () {
    modal = document.getElementById('service-modal');
    if (!modal || !DATA) return;

    imageEl = document.getElementById('service-modal-image');
    titleEl = document.getElementById('service-modal-title');
    descEl = document.getElementById('service-modal-desc');
    closeButtons = modal.querySelectorAll('[data-service-close]');

    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-service-index]');
      if (trigger) {
        var index = parseInt(trigger.getAttribute('data-service-index'), 10);
        openServiceModal(index, trigger);
      }
    });

    closeButtons.forEach(function (btn) {
      btn.addEventListener('click', closeServiceModal);
    });

    document.addEventListener('keydown', onKeydown);
  });
})();
