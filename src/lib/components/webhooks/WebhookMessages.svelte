<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import dayjs from 'dayjs';
	import { Spinner } from 'flowbite-svelte';
	import { createRender, createTable } from 'svelte-headless-table';
	import { writable } from 'svelte/store';

	import { type WebhookMessageRead, WebhooksApi } from '$lib/api';
	import { useService } from '$lib/services';

	import Icon from '$lib/components/Icon.svelte';
	import DataTable from '$lib/components/table/DataTable.svelte';

	import WebhookMessagesMoreCell from './WebhookMessagesMoreCell.svelte';

	export let webhookId: string;

	const webhooksService = useService(WebhooksApi);

	const data = createQuery({
		queryKey: ['webhooks', 'messages', webhookId],
		queryFn: () => webhooksService.getWebhookMessages({ id: webhookId })
	});

	const messages = writable<WebhookMessageRead[]>([]);
	$: messages.set($data.data?.data ?? []);

	const table = createTable(messages);

	const columns = table.createColumns([
		table.column({
			header: 'Date and Time',
			accessor: (item) => item.attributes.createdAt,
			cell: (item) => dayjs(item.value).format('MMMM Do, YYYY @ hh:mm:ss')
		}),
		table.column({
			header: 'UUID',
			accessor: (item) => item.attributes.uuid
		}),
		table.column({
			header: () => createRender(Icon, { icon: 'bxs:cloud-upload', class: 'w-6 h-6' }),
			accessor: (item) => !item.attributes.errored,
			cell: (cell) =>
				createRender(
					Icon,
					cell.value
						? { icon: 'bx:check', class: 'text-green-500 w-6 h-6' }
						: { icon: 'bx:x', class: 'text-red-500 w-6 h-6' }
				)
		}),
		table.column({
			id: 'more-info',
			accessor: 'id',
			header: 'Details',
			cell: (cell) =>
				cell.row.isData()
					? createRender(WebhookMessagesMoreCell, {
							webhookId,
							messageId: parseInt(cell.row.original.id)
					  })
					: ''
		})
	]);

	const vm = table.createViewModel(columns);
</script>

{#if $data.isSuccess}
	{#if $messages.length > 0}
		<DataTable {vm} />
	{:else}
		<div class="p-6 text-center">
			<p class="text-xl">No messages yet</p>
			<p class="text-sm">Try sending a test message</p>
		</div>
	{/if}
{:else if $data.isLoading}
	<div class="p-6 flex items-center justify-center">
		<Spinner size="8" />
	</div>
{/if}
