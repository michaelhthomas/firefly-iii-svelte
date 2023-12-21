<script context="module" lang="ts">
	import { openModal } from 'svelte-modals';

	import { queryClient } from '$lib/client';

	import WebhookAttemptsDialog from './WebhookAttemptsDialog.svelte';

	const webhooksService = useService(WebhooksApi);

	export const openWebhookAttemptDialog = async (
		webhookId: string,
		messageId: number
	) => {
		const initialWebhookMessageAttempts = await queryClient.fetchQuery({
			queryKey: ['webhooks', webhookId, 'attempts', messageId],
			queryFn: () =>
				webhooksService.getWebhookMessageAttempts({ id: webhookId, messageId })
		});

		openModal(WebhookAttemptsDialog, {
			webhookId,
			messageId,
			initialWebhookMessageAttempts
		});
	};
</script>

<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import dayjs from 'dayjs';

	import { type WebhookAttemptArray, WebhooksApi } from '$lib/api';
	import { useService } from '$lib/services';

	import Log from '$lib/components/Log.svelte';
	import Modal from '$lib/components/modals/Modal.svelte';

	export let isOpen: boolean;

	export let webhookId: string;
	export let messageId: number;

	export let initialWebhookMessageAttempts: WebhookAttemptArray;

	const webhooksService = useService(WebhooksApi);

	const query = createQuery({
		queryKey: ['webhooks', webhookId, 'message', messageId],
		queryFn: () =>
			webhooksService.getWebhookMessageAttempts({ id: webhookId, messageId }),
		initialData: initialWebhookMessageAttempts
	});
</script>

<Modal title="Webhook attempts" {isOpen} size="xl">
	<p>
		These are all the unsuccessful attempts of this webhook message to submit to the
		configured URL. After some time, Firefly III will stop trying.
	</p>

	{#each $query.data.data as attempt}
		{#if attempt.attributes.logs}
			<div class="space-y-2">
				<strong class="font-bold text-lg">
					Attempt at {dayjs(attempt.attributes.createdAt).format('LLL')}
					<span class="text-red-500">({attempt.attributes.statusCode})</span>
				</strong>
				<Log log={attempt.attributes.logs} />
			</div>
		{/if}
	{/each}
</Modal>
