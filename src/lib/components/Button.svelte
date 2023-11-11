<script lang="ts">
	import { Button } from 'flowbite-svelte';

	import Icon from './Icon.svelte';

	export let icon: string | null = null;
	export let iconAnchor: 'left' | 'right' = 'left';
</script>

<Button
	on:change
	on:click
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	on:touchcancel
	on:touchstart
	on:touchend
	{...$$restProps}
>
	<div class="inline-flex gap-2 items-center">
		{#if icon && iconAnchor === 'left'}
			<Icon {icon} class="w-3.5 h-3.5" />
		{/if}

		<slot />

		{#if icon && iconAnchor === 'right'}
			<Icon {icon} class="w-c3.5 h-3.5" />
		{/if}
	</div>
</Button>
