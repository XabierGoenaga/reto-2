import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		experimental: {
			remoteFunctions: true
		}
	},
	// onwarn: (warning, handler) => {
	// 	// Desactivar la advertencia específica
	// 	if (warning.code === 'a11y_invalid_attribute') {
	// 		return;
	// 	}
	// 	handler(warning);
	// },
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
