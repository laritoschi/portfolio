(function () {
  const modalId = 'shared-modal';
  const defaultEmail = 'larissaftoschi@gmail.com';

  function createModalMarkup() {
    if (document.getElementById(modalId)) {
      return document.getElementById(modalId);
    }

    const modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="modal-backdrop" data-modal-close></div>
      <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button class="modal-close" type="button" aria-label="Fechar modal" data-modal-close>×</button>
        <div class="modal-content">
          <p class="section-label">Acesso restrito</p>
          <h3 id="modal-title" class="modal-title">Acessar case completo</h3>
          <p id="modal-description" class="modal-description"></p>
          <form class="modal-form">
            <label class="modal-label">
              <span>Senha</span>
              <input id="modal-input" name="password" type="password" placeholder="Digite a senha" />
            </label>
            <div class="modal-actions">
              <button class="button primary" type="submit">Acessar</button>
              <button class="button secondary text-button" type="button" id="modal-request">Solicitar senha</button>
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

    title.textContent = options.title || 'Acessar case completo';
    description.textContent = options.description || 'Digite a senha para visualizar a versão completa do case.';
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
        error.textContent = 'Senha incorreta. Tente novamente ou solicite uma nova senha.';
      }
    };

    requestButton.onclick = function () {
      const email = modal.getAttribute('data-email');
      const subject = encodeURIComponent('Solicitação de senha para case study');
      const body = encodeURIComponent('Olá, gostaria de receber a senha para acessar o case completo.');
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
