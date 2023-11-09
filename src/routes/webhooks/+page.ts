import type { PageMeta } from '$lib/models/PageMeta.js';

export function load() {
	const meta: PageMeta = {
		title: 'Webhooks',
		icon: 'bxs:bolt'
	};
	return { meta };
}
