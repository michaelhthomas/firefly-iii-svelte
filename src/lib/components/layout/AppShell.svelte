<script lang="ts">
	export let sidebarActive = true;
</script>

<div
	class="layout h-full max-h-full w-full grid transition-all"
	class:sidebar-full={sidebarActive}
>
	<aside class="sidebar overflow-x-hidden transition-all bg-gray-50 dark:bg-gray-800">
		<div class="h-14">
			<slot name="brand" />
		</div>
		<slot name="sidebar" />
	</aside>

	<header class="header h-14">
		<slot name="header" />
	</header>

	<main class="main transition-all overflow-y-auto">
		<slot />
	</main>
</div>

<style lang="postcss">
	.layout {
		grid-template-columns: 0px 1fr;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			'sidebar header'
			'sidebar main';
	}

	.sidebar {
		grid-area: sidebar;
	}

	.header {
		grid-area: header;
	}

	.main {
		grid-area: main;
	}

	.layout.sidebar-full {
		grid-template-columns: theme(spacing.64) 100%;
	}

	@media screen(md) {
		.layout,
		.layout.sidebar-full {
			grid-template-columns: theme(spacing.64) 1fr;
		}
	}
</style>
