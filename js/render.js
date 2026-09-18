/**
 * Renderização dinâmica de conteúdo a partir de js/data.js e js/config.js
 */
(function () {
  var DATA = window.BIOFLASH_DATA;
  var CONFIG = window.BIOFLASH_CONFIG;
  var CLIENTS_PATH = 'public/images/clientes/';

  function mediaFrame(src, alt, extraClass) {
    return (
      '<div class="media-frame' + (extraClass ? ' ' + extraClass : '') + '">' +
        '<img src="' + src + '" alt="' + alt + '" class="js-media" loading="lazy" onerror="this.classList.add(\'is-broken\')">' +
        '<div class="media-placeholder" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" class="media-placeholder__icon"><path d="M4 5h16v12H4zM2 19h20M9 8h6M9 11h4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
          '<span>Imagem em preparação</span>' +
        '</div>' +
      '</div>'
    );
  }

  function renderServices() {
    var grid = document.getElementById('services-grid');
    if (!grid || !DATA) return;

    grid.innerHTML = DATA.services.map(function (service, index) {
      var cardClass = 'service-card' + (service.featured ? ' service-card--featured' : '');
      return (
        '<article class="' + cardClass + '">' +
          '<span class="service-card__icon" aria-hidden="true">' + service.icon + '</span>' +
          '<h3 class="service-card__title">' + service.title + '</h3>' +
          '<p class="service-card__desc">' + service.description + '</p>' +
          '<button type="button" class="service-card__more" data-service-index="' + index + '">Ver mais</button>' +
        '</article>'
      );
    }).join('');
  }

  function renderPortfolio() {
    var grid = document.getElementById('portfolio-grid');
    if (!grid || !DATA) return;

    grid.innerHTML = DATA.portfolio.map(function (item, index) {
      var cover = item.folder + item.images[0];
      var alt = item.altBase + ' - foto 1';
      return (
        '<article class="portfolio-card">' +
          '<div class="portfolio-card__media">' + mediaFrame(cover, alt) + '</div>' +
          '<div class="portfolio-card__body">' +
            '<p class="portfolio-card__meta">' + item.meta + '</p>' +
            '<h3 class="portfolio-card__title">' + item.title + '</h3>' +
            '<div class="portfolio-card__btn">' +
              '<button type="button" class="portfolio-card__link" data-portfolio-index="' + index + '">Ver fotos &rarr;</button>' +
            '</div>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  function clientLogoMarkup(client) {
    return (
      '<div class="client-logo">' +
        '<img src="' + CLIENTS_PATH + client.file + '" alt="Logo do cliente ' + client.name + '" loading="lazy" onerror="this.classList.add(\'is-broken\')">' +
        '<span class="client-logo__fallback">' + client.name + '</span>' +
      '</div>'
    );
  }

  function renderClients() {
    var track = document.getElementById('clients-track');
    if (!track || !DATA) return;

    // Duplicado uma vez para permitir loop contínuo no carrossel via CSS.
    var single = DATA.clients.map(clientLogoMarkup).join('');
    track.innerHTML = single + single;
  }

  function renderDocuments() {
    var grid = document.getElementById('documents-grid');
    if (!grid || !DATA) return;

    var documents = DATA.documents || [];
    if (!documents.length) {
      grid.innerHTML = '<p class="documents-empty">Documentos em preparação.</p>';
      return;
    }

    grid.innerHTML = documents.map(function (document) {
      return (
        '<a class="quality-card quality-card--document" href="public/documentos/' + document.file + '" target="_blank" rel="noopener" aria-label="Abrir ' + document.title + '">' +
          '<span class="quality-card__icon" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6M9 17h6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</span>' +
          '<span class="quality-card__title">' + document.title + '</span>' +
          '<span class="quality-card__note">Abrir PDF</span>' +
        '</a>'
      );
    }).join('');
  }

  function applyContactConfig() {
    if (!CONFIG) return;

    document.querySelectorAll('[data-field]').forEach(function (el) {
      var field = el.getAttribute('data-field');
      if (CONFIG[field]) {
        el.textContent = CONFIG[field];
      }
    });

    var waLink = 'https://wa.me/' + CONFIG.whatsappNumber + '?text=' + encodeURIComponent(CONFIG.whatsappMessage);

    var floatBtn = document.getElementById('whatsapp-float');
    if (floatBtn) floatBtn.setAttribute('href', waLink);

    var ctaWhats = document.getElementById('cta-whatsapp-btn');
    if (ctaWhats) ctaWhats.setAttribute('href', waLink);

    var ctaOrcamento = document.getElementById('cta-orcamento-btn');
    if (ctaOrcamento) ctaOrcamento.setAttribute('href', waLink);

    var galleryOrcamento = document.getElementById('gallery-modal-orcamento-btn');
    if (galleryOrcamento) galleryOrcamento.setAttribute('href', waLink);

    var serviceOrcamento = document.getElementById('service-modal-orcamento-btn');
    if (serviceOrcamento) serviceOrcamento.setAttribute('href', waLink);

    var year = document.getElementById('footer-year');
    if (year) year.textContent = new Date().getFullYear();
  }

  function render() {
    renderServices();
    renderPortfolio();
    renderClients();
    renderDocuments();
    applyContactConfig();
  }

  document.addEventListener('DOMContentLoaded', render);
})();
