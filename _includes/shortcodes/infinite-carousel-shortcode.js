import { removeHtmlWhitespace } from '../utils/whitespace.util.js';

export default async function(images, label, height = 48, width = 60, duration = 40, visible = 12) {
  const imgHtml = images.map(img => `<div class="infinite-cell"><img src=${img.url} alt=${img.alt} /></div>`).join('')

  return removeHtmlWhitespace(`
    ${label ? `<span class="infinite-carousel-label">${label}</span>` : ''}
    <div class="infinite-carousel" style="--height: ${height}px; --width: ${width}px; --duration: ${duration}s; --visible: ${visible}">
      ${imgHtml}
    </div>
  `);
}