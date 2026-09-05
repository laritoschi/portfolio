import { removeHtmlWhitespace } from '../utils/whitespace.util.js';

export default function(links) {
  const linksHtml = links.map((link) => `
    <a href="${link.url}" target="_blank">${link.title}</a>
  `).join('');

  const finalHtml = `
    <div class="link-row">
      ${linksHtml}
    </div>
  `;

  return removeHtmlWhitespace(finalHtml);
}