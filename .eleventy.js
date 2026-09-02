import lightningCSS from "@11tyrocks/eleventy-plugin-lightningcss";

export default async function(eleventyConfig) {
	eleventyConfig.addPlugin(lightningCSS);

	return {
		dir: {
			input: 'content',          // default: '.'
			includes: '../_includes',  // default: '_includes',
			data: '../_data',          // default: '_data'
		},
	}
};