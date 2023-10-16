import type { PageMeta } from '$lib/models/PageMeta';

export function load() {
	const meta: PageMeta = {
		title: "What's playing?",
		shortTitle: 'Dashboard',
		icon: 'bxs:dashboard'
	};
	return { meta };
}
