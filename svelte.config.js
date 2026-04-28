import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			out: 'build',
			precompress: false,
			envPrefix: ''
		}),csrf:{ trustedOrigins: ['http://localhost:5173', 'http://localhost:4173', "https://www.xabier.uk", "http://www.xabier.uk"] },
		experimental: {
			remoteFunctions: true
		}
	},
	compilerOptions: {
		runes: true,
		experimental: {
			async: true
		}
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'alt-x',
			showToggleButton: 'always',
			toggleButtonPos: 'bottom-left',
			customStyles: true
		}
	}
};

export default config;
