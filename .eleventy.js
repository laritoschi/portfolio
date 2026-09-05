import lightningCSS from "@11tyrocks/eleventy-plugin-lightningcss";
import { I18nPlugin, RenderPlugin } from "@11ty/eleventy";

import keepLangFilter from './_includes/filters/keep-lang-filter.js';
import l10nFilter from './_includes/filters/l10n-filter.js';
import sectionFilter from './_includes/filters/section-filter.js';
import switchLangFilter from './_includes/filters/switch-lang-filter.js';

import cardRowShortcode from './_includes/shortcodes/card-row-shortcode.js';
import carouselShortcode from './_includes/shortcodes/carousel-shortcode.js';
import heroVisualShortcode from './_includes/shortcodes/hero-visual-shortcode.js';
import infiniteCarouselShortcode from './_includes/shortcodes/infinite-carousel-shortcode.js';
import linkRowShortcode from './_includes/shortcodes/link-row-shortcode.js';
import metricsGridShortcode from './_includes/shortcodes/metrics-grid-shortcode.js';
import pillShortcode from './_includes/shortcodes/pill-shortcode.js';
import twoColShortcode from './_includes/shortcodes/two-col-shortcode.js';
import wrapShortcode from './_includes/shortcodes/wrap-shortcode.js';

export default async function(eleventyConfig) {
	// default localization (english)
	eleventyConfig.addGlobalData('dir', 'ltr');
	eleventyConfig.addGlobalData('lang', 'en');

	eleventyConfig.addPassthroughCopy("assets");

	eleventyConfig.addPlugin(lightningCSS);
	eleventyConfig.addPlugin(I18nPlugin, { defaultLanguage: 'en', errorMode: 'never' });
	eleventyConfig.addPlugin(RenderPlugin);

	eleventyConfig.addFilter('keepLang', keepLangFilter);
	eleventyConfig.addFilter('t', l10nFilter);
	eleventyConfig.addFilter('section', sectionFilter);
	eleventyConfig.addFilter('switchLang', switchLangFilter);

	eleventyConfig.addShortcode('heroVisual', heroVisualShortcode);
	eleventyConfig.addShortcode('metricsGrid', metricsGridShortcode);
	eleventyConfig.addShortcode('pill', pillShortcode);
	eleventyConfig.addShortcode('carousel', carouselShortcode);
	eleventyConfig.addShortcode('linkRow', linkRowShortcode);
	eleventyConfig.addShortcode('infiniteCarousel', infiniteCarouselShortcode);

	eleventyConfig.addPairedAsyncShortcode('twoCol', async function(content) {
		return twoColShortcode(this, eleventyConfig, content);
	});
	eleventyConfig.addPairedAsyncShortcode('wrap', async function(content) {
		return wrapShortcode(this, eleventyConfig, content);
	});
	eleventyConfig.addPairedAsyncShortcode('cardRow', async function(content, cols) {
		return cardRowShortcode(this, eleventyConfig, content, cols);
	});

	return {
		dir: {
			input: 'content',          // default: '.'
			includes: '../_includes',  // default: '_includes',
			data: '../_data',          // default: '_data'
		},
		markdownTemplateEngine: "njk",
	}
};