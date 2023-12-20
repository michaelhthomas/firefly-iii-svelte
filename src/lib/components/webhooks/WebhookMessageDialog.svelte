<script context="module" lang="ts">
	import { openModal } from 'svelte-modals';

	import { queryClient } from '$lib/client';

	import WebhookMessageDialog from './WebhookMessageDialog.svelte';

	const webhooksService = useService(WebhooksApi);

	export const openWebhookMessageDialog = async (
		webhookId: string,
		messageId: number
	) => {
		const initialWebhookMessage = await queryClient.fetchQuery({
			queryKey: ['webhooks', webhookId, 'message', messageId],
			queryFn: () =>
				webhooksService.getSingleWebhookMessage({ id: webhookId, messageId })
		});

		openModal(WebhookMessageDialog, {
			webhookId,
			messageId,
			initialWebhookMessage
		});
	};
</script>

<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';

	import { type WebhookMessageSingle, WebhooksApi } from '$lib/api';
	import { useService } from '$lib/services';

	import Modal from '$lib/components/modals/Modal.svelte';

	export let isOpen: boolean;

	export let webhookId: string;
	export let messageId: number;

	export let initialWebhookMessage: WebhookMessageSingle;

	const webhooksService = useService(WebhooksApi);

	const query = createQuery({
		queryKey: ['webhooks', webhookId, 'message', messageId],
		queryFn: () =>
			webhooksService.getSingleWebhookMessage({ id: webhookId, messageId }),
		initialData: initialWebhookMessage
	});

	$: message = $query.data.data.attributes;

	function tryPrettyPrint(message: string) {
		try {
			return JSON.stringify(JSON.parse(message), null, 2);
		} catch {
			return message;
		}
	}
</script>

<Modal title="Webhook message content" {isOpen}>
	<p>This is the content of the message that was sent (or tried) using this webhook.</p>
	<textarea
		rows="10"
		readonly
		class="resize-y w-full bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-700 rounded"
		>{message.message ? tryPrettyPrint(message.message) : ''}</textarea
	>
</Modal>
