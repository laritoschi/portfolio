export default function(image, browser = false) {
  if (browser) {
    return `
      <div class="hero-visual" aria-hidden="true">
        <div class="mock-browser">
          <div class="mock-browser-top">
            <span></span> <span></span> <span></span>
          </div>
          <div class="mock-browser-body">
            <div class="mock-card large" style="background-image: url('${image}');"> 
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <img class="hero-visual" src="${image}" loading="lazy" />
  `
}