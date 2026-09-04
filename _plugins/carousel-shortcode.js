import { removeHtmlWhitespace } from '../_utils/whitespace.util.js';

export default function(images) {
  const slides = images.map((img, index) => `
    <article class="carousel-slide ${index === 0 ? 'active' : ''}" data-index="${index}" aria-hidden="false">
      <div class="carousel-image">
        <img src="${img.url}" alt="${img.title}" loading="lazy" />
      </div>
      <div class="carousel-caption">
        <p class="carousel-caption-title">${img.title}</p>
        <p class="carousel-caption-text">${img.text}</p>
      </div>
    </article>
  `).join('');

  const indicators = images.map((_, index) => `
    <button class="carousel-indicator ${index === 0 ? 'active' : ''}" type="button" aria-label="Show slide ${index + 1}" aria-selected="true" data-slide-to="${index}"></button>
  `).join('');
  
  const finalHtml = `
    <div class="carousel" data-carousel>
      <div class="carousel-track">
        ${slides}
      </div>

      <button class="carousel-button prev" type="button" aria-label="Previous slide">‹</button>
      <button class="carousel-button next" type="button" aria-label="Next slide">›</button>

      <div class="carousel-indicators" role="tablist">
        ${indicators}
      </div>
    </div>

    <script src="/assets/scripts/carousel.js"></script>
  `;

  return removeHtmlWhitespace(finalHtml);
}