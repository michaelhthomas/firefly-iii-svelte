<script lang="ts">
	import '../app.postcss';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';

	import { page } from '$app/stores';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { PageMeta } from '$lib/models/PageMeta';
	import { queryClient } from '$lib/client';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import LocalizationProvider from '$lib/components/providers/LocalizationProvider.svelte';
	import AppShell from '$lib/components/layout/AppShell.svelte';

	function renderTitle(title: PageMeta['title'] | undefined) {
		let arr: string[] = [];

		if (typeof title === 'string') arr = [title];
		else if (Array.isArray(title)) arr = title;

		return [...arr, 'Firefly III'].join(' » ');
	}

	$: sidebarActive = false;
</script>

<svelte:head>
	<title>{renderTitle($page.data.meta?.title)}</title>
</svelte:head>

<!-- App Shell -->
<QueryClientProvider client={queryClient}>
	<LocalizationProvider>
		<AppShell {sidebarActive}>
			<svelte:fragment slot="brand">
				<div
					class="w-full h-full flex justify-center items-center text-primary-500 bg-gray-50 dark:bg-gray-800"
				>
					<span class="text-2xl font-thin block">
						<span class="font-semibold">Firefly</span>III
					</span>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="header">
				<!-- App Bar -->
				<Navbar on:toggleSidebar={() => (sidebarActive = !sidebarActive)} />
			</svelte:fragment>
			<svelte:fragment slot="sidebar">
				<Sidebar />
			</svelte:fragment>
			<!-- Page Route Content -->
			<slot />
		</AppShell>
	</LocalizationProvider>
</QueryClientProvider>
