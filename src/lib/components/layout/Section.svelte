<script lang="ts">
	import { Card } from 'flowbite-svelte';

	export let title: string | null = null;
	let className = '';
	export { className as class };
</script>

<Card
	class={`!p-4 max-w-none space-y-4 shadow-sm bg-gray-50 dark:bg-gray-800 ${className}`}
	{...$$restProps}
>
	{#if $$slots.header || $$slots.title || title}
		<header class="text-gray-900 dark:text-white">
			<slot name="header">
				<h5 class="h5 font-semibold">
					<slot name="title">
						{title}
					</slot>
				</h5>
			</slot>
		</header>
	{/if}
	<section class="space-y-4">
		<slot />
	</section>
	{#if $$slots.footer}
		<footer class="card-footer">
			<slot name="footer" />
		</footer>
	{/if}
</Card>
