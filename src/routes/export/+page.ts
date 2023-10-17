import type { PageMeta } from '$lib/models/PageMeta.js';

export function load() {
	const meta: PageMeta = {
		title: 'Export data from Firefly III',
		icon: 'bxs:file-export'
	};
	return { meta };
}
