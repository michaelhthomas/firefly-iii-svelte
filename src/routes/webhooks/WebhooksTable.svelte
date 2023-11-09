<script lang="ts">
	import { match } from 'ts-pattern';
	import {
		WebhookTrigger,
		type WebhookArray,
		WebhookDelivery,
		WebhookResponse,
		type WebhookRead
	} from '$lib/api';
	import CrudTable from '$lib/components/table/DataTable.svelte';
	import { createRender, createTable } from 'svelte-headless-table';
	import { get, writable } from 'svelte/store';
	import SecretTableCell from '$lib/components/table/SecretTableCell.svelte';
	import Button from '$lib/components/Button.svelte';
	import { openEditDrawer } from '$lib/components/drawer/EditDrawer.svelte';
	import HtmlCell from '$lib/components/table/HtmlCell.svelte';
	import { htmlEscape } from '$lib/utils/html';
	import type { ReadOrWritable } from 'svelte-headless-table/lib/utils/store';
	import WebhookTitleCell from '$lib/components/table/WebhookTitleCell.svelte';

	export let data: WebhookArray;

	// reactive store from prop
	const webhooks = writable(data.data);
	$: webhooks.set(data.data);

	const table = createTable(webhooks);

	function mapTrigger(trigger: WebhookTrigger): string {
		switch (trigger) {
			case WebhookTrigger.STORE_TRANSACTION:
				return 'After transaction creation';
			case WebhookTrigger.UPDATE_TRANSACTION:
				return 'After transaction update';
			case WebhookTrigger.DESTROY_TRANSACTION:
				return 'After transaction delete';
		}
	}

	function mapResponseDelivery(
		response: WebhookResponse,
		delivery: WebhookDelivery
	): string {
		const responseName = match(response)
			.with(WebhookResponse.ACCOUNTS, () => 'Account details')
			.with(WebhookResponse.TRANSACTIONS, () => 'Transactions details')
			.with(WebhookResponse.NONE, () => 'No details')
			.exhaustive();

		const deliveryName = match(delivery)
			.with(WebhookDelivery.JSON, () => 'JSON')
			.exhaustive();

		return `${responseName} (${deliveryName})`;
	}

	const getRowFromData = (data: ReadOrWritable<WebhookRead[]>, rowId: string) => {
		return get(data).find((val) => val.id === rowId)!;
	};

	const columns = table.createColumns([
		table.column({
			header: 'Title',
			accessor: (item) => item.attributes.title,
			cell: ({ value, row }, { data }) => {
				if (!row.isData()) return value;
				console.log(
					'cell renderer called for row ' +
						getRowFromData(data, row.dataId).attributes.title
				);
				return createRender(WebhookTitleCell, {
					value,
					dataId: row.dataId
				});

				// A, {})
				// 	.slot(value + ': ' + row.dataId)
				// 	.on('click', () => {
				// 		console.log(value);
				// 		console.log(row.dataId);
				// 		openEditDrawer(row.dataId);
				// 	});
			}
		}),
		table.column({
			header: 'Responds when',
			id: 'trigger',
			accessor: (item) => mapTrigger(item.attributes.trigger),
			cell: ({ value, row }, { data }) => {
				if (!row.isData() || getRowFromData(data, row.dataId).attributes.active)
					return value;
				return createRender(HtmlCell, {
					html: `
						<span class="line-through">${htmlEscape(value)}</span>
						<span>(Inactive)</span>
					`
				});
			}
		}),
		table.column({
			header: 'Responds with (delivery)',
			id: 'response-delivery',
			accessor: (item) =>
				mapResponseDelivery(item.attributes.response, item.attributes.delivery)
		}),
		table.column({
			header: 'Secret',
			accessor: (item) => item.attributes.secret,
			cell: ({ value }) =>
				createRender(SecretTableCell, {
					text: value
				})
		}),
		table.column({
			header: 'URL',
			accessor: (item) => item.attributes.url
		})
	]);

	const vm = table.createViewModel(columns, {
		rowDataId(item) {
			return item.id;
		}
	});

	const newWebhook = () => openEditDrawer();
</script>

<CrudTable {vm}>
	<svelte:fragment slot="header">
		<Button icon="bx:plus" on:click={newWebhook}>New Webhook</Button>
	</svelte:fragment>
</CrudTable>
