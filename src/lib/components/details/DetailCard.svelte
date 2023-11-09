<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let className: string | undefined = undefined;
	export { className as class };

	export let label: string | undefined = undefined;

	$: mergedClassName = twMerge(
		'col-span-2 p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 sm:col-span-1 dark:border-gray-600',
		className
	);
</script>

<div class={mergedClassName}>
	{#if $$slots.label || label}
		<dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
			<slot name="label">
				{label}
			</slot>
		</dt>
	{/if}
	<dd class="flex items-center text-gray-500 dark:text-gray-400">
		<slot />
	</dd>
</div>
