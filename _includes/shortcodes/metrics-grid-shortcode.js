import { removeHtmlWhitespace } from '../utils/whitespace.util.js';

export default function(metrics) {
  const metricsHtml = metrics.map((metric) => {
    const iconHtml = metric.icon
      ? `<span class="metrics-icon" aria-hidden="true">${metric.icon}</span>`
      : '';

    return `
      <article class="metrics-card">
        ${iconHtml}
        <h3 class="metrics-number ${metric.icon ? '' : 'no-icon'}">${metric.number}</h3>
        <p class="metrics-text">${metric.text}</p>
      </article>
    `;
  }).join('');
  
  const finalHtml = `
    <section class="metrics-grid">
      ${metricsHtml}
    </section>
  `;

  return removeHtmlWhitespace(finalHtml);
}