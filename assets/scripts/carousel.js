function initCarousel() {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
  const prevButton = carousel.querySelector('.carousel-button.prev');
  const nextButton = carousel.querySelector('.carousel-button.next');
  const indicators = Array.from(carousel.querySelectorAll('.carousel-indicator'));
  let activeIndex = slides.findIndex((slide) => slide.classList.contains('active'));
  if (activeIndex < 0) activeIndex = 0;

  const updateState = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle('active', isActive);
      slide.setAttribute('aria-hidden', (!isActive).toString());
    });
    indicators.forEach((indicator, indicatorIndex) => {
      const isActive = indicatorIndex === activeIndex;
      indicator.classList.toggle('active', isActive);
      indicator.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  };

  prevButton?.addEventListener('click', () => updateState(activeIndex - 1));
  nextButton?.addEventListener('click', () => updateState(activeIndex + 1));
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => updateState(index));
  });
}

initCarousel();