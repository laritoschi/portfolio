import lightningCSS from "@11tyrocks/eleventy-plugin-lightningcss";
import { I18nPlugin } from "@11ty/eleventy";

import l10nFilter from './_plugins/l10n-filter.js';
import pillShortCode from './_plugins/pill-shortcode.js';

export default async function(eleventyConfig) {
	// default localization (english)
	eleventyConfig.addGlobalData('dir', 'ltr');
	eleventyConfig.addGlobalData('lang', 'en');

	eleventyConfig.addPassthroughCopy("assets");

	eleventyConfig.addFilter('t', l10nFilter);
	eleventyConfig.addShortcode('pill', pillShortCode);

	eleventyConfig.addPlugin(lightningCSS);
	eleventyConfig.addPlugin(I18nPlugin, { defaultLanguage: 'en' });

	return {
		dir: {
			input: 'content',          // default: '.'
			includes: '../_includes',  // default: '_includes',
			data: '../_data',          // default: '_data'
		},
	}
};