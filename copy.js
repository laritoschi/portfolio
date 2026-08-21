(function () {
  const copyButtons = document.querySelectorAll('[data-copy-value]');

  function copyWithFallback(value) {
    const textArea = document.createElement('textarea');
    textArea.value = value;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    const copied = document.execCommand('copy');
    textArea.remove();
    return copied;
  }

  copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const value = button.dataset.copyValue;
      let copied = false;

      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(value);
          copied = true;
        } else {
          copied = copyWithFallback(value);
        }
      } catch (error) {
        copied = copyWithFallback(value);
      }

      if (!copied) return;

      const originalLabel = button.getAttribute('aria-label');
      button.classList.add('is-copied');
      button.setAttribute('aria-label', 'Copied');
      button.setAttribute('title', 'Copied');

      window.setTimeout(() => {
        button.classList.remove('is-copied');
        button.setAttribute('aria-label', originalLabel);
        button.setAttribute('title', originalLabel);
      }, 1600);
    });
  });
})();