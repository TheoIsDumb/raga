import adapterAuto from '@sveltejs/adapter-auto'
import adapterVercel from '@sveltejs/adapter-vercel'
import adapterNode from '@sveltejs/adapter-node'

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const deployTarget = process.env.DEPLOY_TARGET || 'auto'; // Default to 'auto'

const adapterVercelConfig = {
	runtime: 'nodejs18.x'
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: deployTarget === 'auto' ? adapterVercel(adapterVercelConfig) : adapterNode()
	},
	preprocess: vitePreprocess()
};

export default config;
