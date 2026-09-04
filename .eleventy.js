import lightningCSS from "@11tyrocks/eleventy-plugin-lightningcss";
import { I18nPlugin, RenderPlugin } from "@11ty/eleventy";

import switchLangFilter from './_plugins/switch-lang-filter.js';
import keepLangFilter from './_plugins/keep-lang-filter.js';
import l10nFilter from './_plugins/l10n-filter.js';

import cardRowShortcode from './_plugins/card-row-shortcode.js';
import carouselShortcode from './_plugins/carousel-shortcode.js';
import heroVisualShortcode from './_plugins/hero-visual-shortcode.js';
import linkRowShortcode from './_plugins/link-row-shortcode.js';
import metricsGridShortcode from './_plugins/metrics-grid-shortcode.js';
import pillShortcode from './_plugins/pill-shortcode.js';
import twoColShortcode from './_plugins/two-col-shortcode.js';
import wrapShortcode from './_plugins/wrap-shortcode.js';

export default async function(eleventyConfig) {
	// default localization (english)
	eleventyConfig.addGlobalData('dir', 'ltr');
	eleventyConfig.addGlobalData('lang', 'en');

	eleventyConfig.addPassthroughCopy("assets");

	eleventyConfig.addPlugin(lightningCSS);
	eleventyConfig.addPlugin(I18nPlugin, { defaultLanguage: 'en', errorMode: 'never' });
	eleventyConfig.addPlugin(RenderPlugin);

	eleventyConfig.addFilter('keepLang', keepLangFilter);
	eleventyConfig.addFilter('switchLang', switchLangFilter);
	eleventyConfig.addFilter('t', l10nFilter);

	eleventyConfig.addShortcode('heroVisual', heroVisualShortcode);
	eleventyConfig.addShortcode('metricsGrid', metricsGridShortcode);
	eleventyConfig.addShortcode('pill', pillShortcode);
	eleventyConfig.addShortcode('carousel', carouselShortcode);
	eleventyConfig.addShortcode('linkRow', linkRowShortcode);

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