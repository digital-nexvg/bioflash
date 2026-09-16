/**
 * Modal de galeria do portfólio
 */
(function () {
  var DATA = window.BIOFLASH_DATA;
  var modal, imageEl, imageWrapper, titleEl, subtitleEl, counterEl, prevBtn, nextBtn, closeButtons;
  var currentCase = null;
  var currentIndex = 0;
  var lastFocusedTrigger = null;

  function setImage() {
    if (!currentCase) return;
    var total = currentCase.images.length;
    var src = currentCase.folder + currentCase.images[currentIndex];
    var alt = currentCase.altBase + ' - foto ' + (currentIndex + 1);

    imageEl.classList.remove('is-broken');
    imageEl.src = src;
    imageEl.alt = alt;
    counterEl.textContent = (currentIndex + 1) + ' / ' + total;
  }

  function openGallery(caseIndex, trigger) {
    currentCase = DATA.portfolio[caseIndex];
    currentIndex = 0;
    lastFocusedTrigger = trigger || null;

    titleEl.textContent = currentCase.title;
    subtitleEl.textContent = currentCase.meta;
    setImage();

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeButtons[0].focus();
  }

  function closeGallery() {
    modal.hidden = true;
    document.body.style.overflow = '';
    currentCase = null;
    if (lastFocusedTrigger) lastFocusedTrigger.focus();
  }

  function showPrev() {
    if (!currentCase) return;
    currentIndex = (currentIndex - 1 + currentCase.images.length) % currentCase.images.length;
    setImage();
  }

  function showNext() {
    if (!currentCase) return;
    currentIndex = (currentIndex + 1) % currentCase.images.length;
    setImage();
  }

  function onKeydown(e) {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  }

  document.addEventListener('DOMContentLoaded', function () {
    modal = document.getElementById('gallery-modal');
    imageEl = document.getElementById('gallery-image');
    imageWrapper = document.getElementById('gallery-image-wrapper');
    titleEl = document.getElementById('gallery-modal-title');
    subtitleEl = document.getElementById('gallery-modal-subtitle');
    counterEl = document.getElementById('gallery-counter');
    prevBtn = document.getElementById('gallery-prev');
    nextBtn = document.getElementById('gallery-next');
    closeButtons = modal.querySelectorAll('[data-gallery-close]');

    if (!modal || !DATA) return;

    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-portfolio-index]');
      if (trigger) {
        var index = parseInt(trigger.getAttribute('data-portfolio-index'), 10);
        openGallery(index, trigger);
      }
    });

    closeButtons.forEach(function (btn) {
      btn.addEventListener('click', closeGallery);
    });

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
    document.addEventListener('keydown', onKeydown);
  });
})();
