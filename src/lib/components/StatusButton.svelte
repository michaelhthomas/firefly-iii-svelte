<script lang="ts">
	import type { MutationStatus } from '@tanstack/svelte-query';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import type { ButtonProps } from 'flowbite-svelte/dist/buttons/Button.svelte';
	import { Spinner } from 'flowbite-svelte';
	import { fade } from 'svelte/transition';

	export let status: MutationStatus;
	export let icon: string | undefined = undefined;
	export let color: ButtonProps['color'] = undefined;

	let internalStatus: MutationStatus = 'error';

	function updateStatus(status: MutationStatus) {
		internalStatus = status;

		// hide success status after timeout
		if (status === 'success' || status === 'error')
			setTimeout(() => {
				internalStatus = 'idle';
			}, 3000);
	}

	$: updateStatus(status);

	$: internalIcon = internalStatus === 'idle' ? icon : undefined;

	let internalColor: ButtonProps['color'];
	$: internalColor =
		internalStatus === 'success' ? 'green' : internalStatus === 'error' ? 'red' : color;

	$: buttonAttributes = {
		icon: internalIcon,
		...(internalColor ? { color: internalColor } : {})
	};
</script>

<Button
	on:change
	on:click
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	on:touchcancel
	on:touchend
	on:touchstart
	{...buttonAttributes}
	{...$$restProps}
>
	{#if internalStatus !== 'idle'}
		<div class="grid grid-cols-1" in:fade={{ duration: 100 }}>
			<div
				class="col-start-1 col-end-1 row-start-1 row-end-1 flex items-center justify-center"
			>
				{#if internalStatus === 'loading'}
					<Spinner size="4" color="white" />
				{:else if internalStatus === 'success'}
					<Icon icon="bx:check" class="w-5 h-5" />
				{:else if internalStatus === 'error'}
					<Icon icon="bx:x" class="w-5 h-5" />
				{/if}
			</div>
			<!-- Maintain button width regardless of status -->
			<span class="invisible col-start-1 col-end-1 row-start-1 row-end-1">
				{#if icon}
					<!-- Icon placeholder -->
					<span class="mr-5" />
				{/if}
				<slot />
			</span>
		</div>
	{:else}
		<slot />
	{/if}
</Button>
