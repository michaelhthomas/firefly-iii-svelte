<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Icon from '$lib/components/Icon.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';

	import { page } from '$app/stores';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { PageMeta } from '$lib/models/PageMeta';
	import { queryClient } from '$lib/client';

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
			<AppBar>
				<svelte:fragment slot="lead">
					<strong class="text-xl">Firefly III</strong>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<a
						class="btn btn-sm variant-ghost-surface"
						href="https://discord.gg/EXqV7W8MtY"
						target="_blank"
						rel="noreferrer"
					>
						October 1st, 2023
					</a>
					<a
						class="btn btn-sm variant-ghost-surface"
						href="https://twitter.com/SkeletonUI"
						target="_blank"
						rel="noreferrer"
					>
						Michael Thomas
					</a>
					<a
						class="btn btn-sm variant-ghost-surface"
						href="https://github.com/skeletonlabs/skeleton"
						target="_blank"
						rel="noreferrer"
					>
						<Icon icon="bx:plus" />
					</a>
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">
			<Sidebar />
		</svelte:fragment>
		<!-- Page Route Content -->
		<slot />
	</AppShell>
</QueryClientProvider>
