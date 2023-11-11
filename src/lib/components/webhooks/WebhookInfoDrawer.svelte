<script context="module" lang="ts">
	import { openModal } from 'svelte-modals';

	import WebhookInfoDrawer from './WebhookInfoDrawer.svelte';

	export const openWebhookInfoDrawer = async (webhook: WebhookRead) => {
		openModal(WebhookInfoDrawer, {
			webhook
		});
	};
</script>

<script lang="ts">
	import type { WebhookRead } from '$lib/api';
	import Button from '$lib/components/Button.svelte';
	import Drawer from '$lib/components/drawer/Drawer.svelte';
	import { deliveryMap, responseMap, triggerMap } from '$lib/schemas/webhook';

	import Icon from '../Icon.svelte';
	import DetailCard from '../details/DetailCard.svelte';
	import DetailsGrid from '../details/DetailsGrid.svelte';
	import { openWebhookEditDrawer } from './WebhookEditDrawer.svelte';

	export let isOpen: boolean;
	export let webhook: WebhookRead;

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
					{webhook.attributes.secret}
				</DetailCard>
			</DetailsGrid>
		</div>
	</div>

	<div>
		<h5 class="h5">Messages</h5>
	</div>

	<div slot="footer" class="flex flex-row gap-4 justify-between">
		<Button color="alternative" on:click={editWebhook} icon="bx:test-tube">Test</Button>

		<Button color="primary" on:click={editWebhook} icon="bxs:pencil">
			Edit Webhook
		</Button>
	</div>
</Drawer>
