<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';

	import { page } from '$app/stores';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { PageMeta } from '$lib/models/PageMeta';
	import { queryClient } from '$lib/client';
	import Navbar from '$lib/components/layout/Navbar.svelte';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	function renderTitle(title: PageMeta['title'] | undefined) {
		let arr: string[] = [];

		if (typeof title === 'string') arr = [title];
		else if (Array.isArray(title)) arr = title;

		return [...arr, 'Firefly III'].join(' » ');
	}
</script>

<svelte:head>
	<title>{renderTitle($page.data.meta?.title)}</title>
</svelte:head>

<!-- App Shell -->
<QueryClientProvider client={queryClient}>
	<AppShell>
		<svelte:fragment slot="header">
			<!-- App Bar -->
			<Navbar />
		</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">
			<Sidebar />
		</svelte:fragment>
		<!-- Page Route Content -->
		<slot />
	</AppShell>
</QueryClientProvider>
