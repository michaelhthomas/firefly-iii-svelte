<script lang="ts">
	import type { WebhookRead } from '$lib/api';

	import { openWebhookInfoDrawer } from './WebhookInfoDrawer.svelte';

	export let value: string;
	export let webhook: WebhookRead;

	$: handler = () => openWebhookInfoDrawer(webhook);
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
