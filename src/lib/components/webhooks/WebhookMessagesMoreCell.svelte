<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	import { openWebhookAttemptDialog } from './WebhookAttemptsDialog.svelte';
	import { openWebhookMessageDialog } from './WebhookMessageDialog.svelte';

	export let webhookId: string;
	export let messageId: number;
</script>

<Button
	icon="bxs:envelope"
	on:click={() => openWebhookMessageDialog(webhookId, messageId)}
/>

<Button
	icon="bxs:cloud"
	on:click={() => openWebhookAttemptDialog(webhookId, messageId)}
/>
