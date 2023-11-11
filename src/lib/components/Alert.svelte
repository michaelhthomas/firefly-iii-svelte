<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import type { AlertProps } from 'flowbite-svelte/dist/alert/Alert.svelte';
	import { twMerge } from 'tailwind-merge';

	import Icon from './Icon.svelte';

	export let color: AlertProps['color'] = undefined;
	export let icon: string | undefined = undefined;
	export let label: string | undefined = undefined;

	let className: string | undefined = undefined;
	export { className as class };

	$: darkColorClass = color === 'red' ? 'dark:border-2 dark:border-red-400' : '';

	$: classList = twMerge(darkColorClass, className);
</script>

<Alert
	on:blur
	on:change
	on:click
	on:focus
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	{color}
	class={classList}
	{...$$restProps}
>
	{#if label}
		<span class="font-semibold">
			{label}
		</span>
	{/if}
	<slot />
	<slot name="close-button" slot="close-button" />
	<slot name="icon" slot="icon">
		{#if icon}
			<Icon {icon} class="w-5 h-5" />
		{/if}
	</slot>
</Alert>
