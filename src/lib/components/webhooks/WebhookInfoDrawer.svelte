<script context="module" lang="ts">
	import { openModal } from 'svelte-modals';

	import WebhookInfoDrawer from './WebhookInfoDrawer.svelte';

	const webhooksService = useService(WebhooksApi);

	export const openWebhookInfoDrawer = async (id: string) => {
		const initialWebhookData = await queryClient.fetchQuery({
			queryKey: ['webhooks', id],
			queryFn: () => webhooksService.getWebhook({ id })
		});

		openModal(WebhookInfoDrawer, {
			id,
			initialWebhookData
		});
	};
</script>

<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';

	import { type WebhookSingle, WebhooksApi } from '$lib/api';
	import { queryClient } from '$lib/client';
	import { deliveryMap, responseMap, triggerMap } from '$lib/schemas/webhook';
	import { useService } from '$lib/services';

	import Button from '$lib/components/Button.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import SecretTableCell from '$lib/components/SecretText.svelte';
	import DetailCard from '$lib/components/details/DetailCard.svelte';
	import DetailsGrid from '$lib/components/details/DetailsGrid.svelte';
	import Drawer from '$lib/components/modals/Drawer.svelte';

	import { openWebhookEditDrawer } from './WebhookEditDrawer.svelte';
	import WebhookMessages from './WebhookMessages.svelte';
	import WebhookResetSecretButton from './WebhookResetSecretButton.svelte';

	export let isOpen: boolean;
	export let id: string;
	export let initialWebhookData: WebhookSingle;

	const webhooksService = useService(WebhooksApi);

	const webhookQuery = createQuery({
		queryKey: ['webhooks', id],
		queryFn: () => webhooksService.getWebhook({ id }),
		initialData: initialWebhookData
	});

	$: webhook = $webhookQuery.data.data;

	const editWebhook = () => openWebhookEditDrawer(webhook.id);
</script>

<Drawer title={webhook.attributes.title} icon="bxs:bolt" {isOpen}>
	<div class="grid grid-cols-1 md:grid-cols-5 gap-4">
		<div class="md:col-span-3 space-y-2">
			<h5 class="h5">Settings</h5>
			<DetailsGrid>
				<DetailCard label="Active">
					{#if webhook.attributes.active}
						Enabled <Icon icon="bx:check" class="text-green-500 w-6 h-6 mr-2" />
					{:else}
						Disabled <Icon icon="bx-x" class="text-red-500 w-6 h-6 mr-2" />
					{/if}
				</DetailCard>
				<DetailCard label="Trigger">
					{triggerMap[webhook.attributes.trigger]}
				</DetailCard>
				<DetailCard label="Response">
					{responseMap[webhook.attributes.response]}
				</DetailCard>
				<DetailCard label="Delivery">
					{deliveryMap[webhook.attributes.delivery]}
				</DetailCard>
			</DetailsGrid>
		</div>

		<div class="md:col-span-2 space-y-2">
			<h5 class="h5">Metadata</h5>
			<DetailsGrid cols="grid-cols-1">
				<DetailCard label="URL">
					{webhook.attributes.url}
				</DetailCard>
				<DetailCard label="Secret">
					<SecretTableCell text={webhook.attributes.secret} class="text-sm" />
					<div class="flex-grow" />
					<WebhookResetSecretButton id={webhook.id} />
				</DetailCard>
			</DetailsGrid>
		</div>
	</div>

	<div class="space-y-2">
		<h5 class="h5">Messages</h5>

		<WebhookMessages webhookId={webhook.id} />
	</div>

	<div slot="footer" class="flex flex-row gap-4 justify-between">
		<Button color="alternative" on:click={editWebhook} icon="bx:test-tube">Test</Button>

		<Button color="primary" on:click={editWebhook} icon="bxs:pencil">
			Edit Webhook
		</Button>
	</div>
</Drawer>
