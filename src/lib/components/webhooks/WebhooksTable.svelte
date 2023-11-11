<script lang="ts">
	import { createRender, createTable } from 'svelte-headless-table';
	import type { ReadOrWritable } from 'svelte-headless-table/lib/utils/store';
	import { get, writable } from 'svelte/store';

	import type {
		WebhookArray,
		WebhookDelivery,
		WebhookRead,
		WebhookResponse
	} from '$lib/api';
	import Button from '$lib/components/Button.svelte';
	import CrudTable from '$lib/components/table/DataTable.svelte';
	import HtmlCell from '$lib/components/table/HtmlCell.svelte';
	import SecretTableCell from '$lib/components/table/SecretTableCell.svelte';
	import { deliveryMap, responseMap, triggerMap } from '$lib/schemas/webhook';
	import { htmlEscape } from '$lib/utils/html';

	import { openWebhookEditDrawer } from './WebhookEditDrawer.svelte';
	import WebhookTitleCell from './WebhookTitleCell.svelte';

	export let data: WebhookArray;

	// reactive store from prop
	const webhooks = writable(data.data);
	$: webhooks.set(data.data);

	const table = createTable(webhooks);

	function mapResponseDelivery(
		response: WebhookResponse,
		delivery: WebhookDelivery
	): string {
		const responseName = responseMap[response];

		const deliveryName = deliveryMap[delivery];

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
				return createRender(WebhookTitleCell, {
					value,
					webhook: getRowFromData(data, row.dataId)
				});
			}
		}),
		table.column({
			header: 'Responds when',
			id: 'trigger',
			accessor: (item) => triggerMap[item.attributes.trigger],
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

	const newWebhook = () => openWebhookEditDrawer();
</script>

<CrudTable {vm}>
	<svelte:fragment slot="header">
		<Button icon="bx:plus" on:click={newWebhook}>New Webhook</Button>
	</svelte:fragment>
</CrudTable>
