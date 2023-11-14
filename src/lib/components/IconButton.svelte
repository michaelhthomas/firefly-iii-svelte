<script lang="ts">
	import { Popover } from 'flowbite-svelte';
	import { fade } from 'svelte/transition';

	import Icon from './Icon.svelte';

	export let icon: string;
	export let label: string;
	export let iconClass: string;

	const id = 'popover-' + crypto.randomUUID();

	const transition = (node: Element) => fade(node, { duration: 150 });
</script>

<button on:click {id} aria-label={label} {...$$restProps}>
	<Icon {icon} class={iconClass} />
</button>

<Popover
	placement="top"
	triggeredBy={'#' + id}
	trigger="hover"
	{transition}
	class="min-w-fit"
>
	{label}
</Popover>
