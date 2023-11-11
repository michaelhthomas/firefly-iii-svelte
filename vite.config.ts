import { sveltekit } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

dotenv.config();

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	server: {
		proxy: {
			'/api': {
				target: process.env.FIREFLY_III_BASE_URL,
				changeOrigin: true
			}
		}
	},
	envPrefix: 'FIREFLY_III_'
});
