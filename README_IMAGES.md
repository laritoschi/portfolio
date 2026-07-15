Image preprocessing (assets)

Goal
- Keep source images in `assets/src/` (originals).
- Generate responsive AVIF, WebP and JPG outputs in `assets/images/` at 3 widths (400, 800, 1200).

Setup

1. Install dependencies (first time):

```bash
npm install
```

2. Add source images to `assets/src/` (e.g. `case-askflow.jpg`).

3. Run the resize script:

```bash
npm run resize-images
```

Output
- Generated files will be placed in `assets/images/` with names like `case-askflow-400.avif`, `case-askflow-800.webp`, `case-askflow-1200.jpg`, etc.

Example markup to use the generated images (AVIF → WebP → JPG fallback):

```html
<picture>
  <source type="image/avif" srcset="assets/images/case-askflow-1200.avif 1200w, assets/images/case-askflow-800.avif 800w, assets/images/case-askflow-400.avif 400w" sizes="(max-width:1200px) 100vw, 1200px">
  <source type="image/webp" srcset="assets/images/case-askflow-1200.webp 1200w, assets/images/case-askflow-800.webp 800w, assets/images/case-askflow-400.webp 400w">
  <img src="assets/images/case-askflow-800.jpg" alt="Descrição" loading="lazy">
</picture>
```

Notes
- You can adjust the `widths` array in `scripts/resize-images.js` to change generated sizes.
- Decide whether to commit generated files or run the script in CI/deploy. If you prefer CI, add a step to run `npm ci && npm run resize-images` before publishing.

CI Integration (GitHub Actions)

If you want images generated automatically on push (for example before deploy), add a GitHub Actions workflow that runs the script. Two common patterns:

- Generate images and upload them as a build artifact (no commit to the repo).
- Generate images and commit them back to the repository (use with caution to avoid infinite workflow loops).

Example workflow that generates images and uploads them as an artifact (`.github/workflows/images.yml`):

```yaml
name: Generate images

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run resize-images
      - uses: actions/upload-artifact@v4
        with:
          name: generated-images
          path: assets/images
```

If you prefer committing generated images back to the repo (not recommended for large sites), you can use `git` in the workflow and push to a branch. Be careful to add conditions to avoid triggering the workflow from its own commits.

Generate AVIF (optional)

AVIF offers improved compression vs WebP but takes longer to encode. To generate AVIF alongside WebP/JPG, update `scripts/resize-images.js` to write `.avif` files using `sharp.avif()`:

```js
// inside the widths loop, add:
const avifOut = path.join(outDir, `${name}-${w}.avif`);
await sharp(input).resize({ width: w }).avif({ quality: 60 }).toFile(avifOut);
```

Then include AVIF in your `<picture>` source before WebP for browsers that support it:

```html
<picture>
  <source type="image/avif" srcset="assets/images/case-askflow-1200.avif 1200w, assets/images/case-askflow-800.avif 800w, assets/images/case-askflow-400.avif 400w">
  <source type="image/webp" srcset="assets/images/case-askflow-1200.webp 1200w, assets/images/case-askflow-800.webp 800w, assets/images/case-askflow-400.webp 400w">
  <img src="assets/images/case-askflow-800.jpg" alt="Descrição" loading="lazy">
</picture>
```

Commit artifacts vs CI-only

- Commit: simpler for static hosts that don't run a build step, but increases repo size and requires caution to avoid workflow loops.
- CI-only (artifact or deploy step): keeps the repo clean and ensures images are always generated consistently during deploy. Recommended for most cases.

If you want, I can also:
- Add AVIF generation to `scripts/resize-images.js` automatically (and update `package.json`).
- Create the example GitHub Actions workflow file in `.github/workflows/images.yml`.

---

See the project README for quick usage and markup examples.
