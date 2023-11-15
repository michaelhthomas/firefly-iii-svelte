import { sveltekit } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import GithubActionsReporter from 'vitest-github-actions-reporter';

dotenv.config();

const proxySettings = {
	'/api': {
		target: process.env.FIREFLY_III_BASE_URL,
		changeOrigin: true
	}
};

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		reporters: process.env.GITHUB_ACTIONS
			? ['default', new GithubActionsReporter()]
			: 'default'
	},
	server: {
		proxy: proxySettings
	},
	preview: {
		proxy: proxySettings
	},
	envPrefix: 'FIREFLY_III_'
});
