<script lang="ts">
	import { openEditDrawer } from '../drawer/EditDrawer.svelte';

	export let value: string;
	export let dataId: string;

	$: handler = () => openEditDrawer(dataId);
</script>

<span
	class="text-primary-600 dark:text-primary-500 hover:underline"
	on:click={handler}
	on:keydown={handler}
	role="button"
	tabindex="0"
>
	{value}
</span>
