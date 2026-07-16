(function () {
  const modalId = 'shared-modal';
  const defaultEmail = 'larissaftoschi@gmail.com';

  function createModalMarkup() {
    if (document.getElementById(modalId)) {
      return document.getElementById(modalId);
    }

    const translate = (key, fallback) => (window.getTranslation ? window.getTranslation(key) : '') || fallback;
    const modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="modal-backdrop" data-modal-close></div>
      <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button class="modal-close" type="button" aria-label="${translate('modal.close.label', 'Fechar modal')}" data-modal-close>×</button>
        <div class="modal-content">
          <p class="section-label">${translate('modal.restricted-access', 'Acesso restrito')}</p>
          <h3 id="modal-title" class="modal-title">${translate('modal.access.title', 'Acessar case completo')}</h3>
          <p id="modal-description" class="modal-description"></p>
          <form class="modal-form">
            <label class="modal-label">
              <span>${translate('modal.password.label', 'Senha')}</span>
              <input id="modal-input" name="password" type="password" placeholder="${translate('modal.password.placeholder', 'Digite a senha')}" />
            </label>
            <div class="modal-actions">
              <button class="button primary" type="submit">${translate('modal.submit', 'Acessar')}</button>
              <button class="button secondary text-button" type="button" id="modal-request">${translate('modal.request', 'Solicitar senha')}</button>
            </div>
            <p id="modal-error" class="modal-error" aria-live="polite"></p>
          </form>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    return modal;
  }

  function openModal(options) {
    const modal = createModalMarkup();
    const title = modal.querySelector('#modal-title');
    const description = modal.querySelector('#modal-description');
    const input = modal.querySelector('#modal-input');
    const error = modal.querySelector('#modal-error');
    const form = modal.querySelector('.modal-form');
    const requestButton = modal.querySelector('#modal-request');
    const closeBtn = modal.querySelector('.modal-close');
    const sectionLabel = modal.querySelector('.section-label');
    const passwordLabel = modal.querySelector('.modal-label span');
    const submitButton = modal.querySelector('.modal-actions .button.primary');

    const translate = (key, fallback) => (window.getTranslation ? window.getTranslation(key) : '') || fallback;

    sectionLabel.textContent = translate('modal.restricted-access', 'Acesso restrito');
    closeBtn.setAttribute('aria-label', translate('modal.close.label', 'Fechar modal'));
    passwordLabel.textContent = translate('modal.password.label', 'Senha');
    input.placeholder = translate('modal.password.placeholder', 'Digite a senha');
    submitButton.textContent = translate('modal.submit', 'Acessar');
    requestButton.textContent = translate('modal.request', 'Solicitar senha');

    title.textContent = options.title || translate('modal.access.title', 'Acessar case completo');
    description.textContent = options.description || translate('modal.access.description', 'Digite a senha para visualizar a versão completa do case.');
    modal.setAttribute('data-target-url', options.targetUrl || '');
    modal.setAttribute('data-password', options.password || '');
    modal.setAttribute('data-email', options.email || defaultEmail);
    input.value = '';
    error.textContent = '';

    form.onsubmit = function (event) {
      event.preventDefault();
      const password = input.value.trim();
      const expectedPassword = modal.getAttribute('data-password');
      const targetUrl = modal.getAttribute('data-target-url');

      if (password && password === expectedPassword) {
        if (targetUrl) {
          window.location.href = targetUrl;
        }
      } else {
        error.textContent = translate('modal.error.invalid-password', 'Senha incorreta. Tente novamente ou solicite uma nova senha.');
      }
    };

    requestButton.onclick = function () {
      const email = modal.getAttribute('data-email');
      const subject = encodeURIComponent(translate('modal.request.subject', 'Solicitação de senha para case study'));
      const body = encodeURIComponent(translate('modal.request.body', 'Olá, gostaria de receber a senha para acessar o case completo.'));
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    input.focus();
  }

  function closeModal() {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  document.addEventListener('click', function (event) {
    const trigger = event.target.closest('[data-open-modal]');
    if (trigger) {
      event.preventDefault();
      openModal({
        title: trigger.getAttribute('data-title') || 'Acessar case completo',
        description: trigger.getAttribute('data-description') || 'Digite a senha para visualizar a versão completa do case.',
        targetUrl: trigger.getAttribute('data-target-url') || '',
        password: trigger.getAttribute('data-password') || '',
        email: trigger.getAttribute('data-email') || defaultEmail
      });
      return;
    }

    if (event.target.matches('[data-modal-close]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  window.openPasswordModal = openModal;
  window.closePasswordModal = closeModal;
})();
