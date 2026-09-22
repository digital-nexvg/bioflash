/**
 * Modal de detalhes do serviço ("Ver mais": fotos + descrição)
 */
(function () {
  var DATA = window.BIOFLASH_DATA;
  var modal, imageEl, titleEl, descEl, counterEl, prevBtn, nextBtn, closeButtons;
  var lastFocusedTrigger = null;
  var currentImages = [];
  var currentIndex = 0;

  function setImage() {
    var total = currentImages.length;
    var src = currentImages[currentIndex] || '';

    imageEl.classList.remove('is-broken');
    imageEl.src = src;
    imageEl.alt = titleEl.textContent + ' - foto ' + (currentIndex + 1);
    counterEl.textContent = total > 1 ? (currentIndex + 1) + ' / ' + total : '';

    var hasMultiple = total > 1;
    prevBtn.hidden = !hasMultiple;
    nextBtn.hidden = !hasMultiple;
  }

  function showPrev() {
    if (!currentImages.length) return;
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    setImage();
  }

  function showNext() {
    if (!currentImages.length) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    setImage();
  }

  function openServiceModal(index, trigger) {
    var service = DATA.services[index];
    if (!service) return;

    lastFocusedTrigger = trigger || null;
    currentImages = (service.images && service.images.length) ? service.images : [service.image];
    currentIndex = 0;

    titleEl.textContent = service.title;
    descEl.textContent = service.description;
    setImage();

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
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  }

  document.addEventListener('DOMContentLoaded', function () {
    modal = document.getElementById('service-modal');
    if (!modal || !DATA) return;

    imageEl = document.getElementById('service-modal-image');
    titleEl = document.getElementById('service-modal-title');
    descEl = document.getElementById('service-modal-desc');
    counterEl = document.getElementById('service-modal-counter');
    prevBtn = document.getElementById('service-modal-prev');
    nextBtn = document.getElementById('service-modal-next');
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

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
    document.addEventListener('keydown', onKeydown);
  });
})();

