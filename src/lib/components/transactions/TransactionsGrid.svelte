<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	// Optional theme CSS
	import type { ColDef, GridReadyEvent, IsFullWidthRowParams } from 'ag-grid-community';
	import 'ag-grid-community/styles/ag-grid.css';
	// Core grid CSS, always needed
	import 'ag-grid-community/styles/ag-theme-alpine.css';
	import AgGrid from 'ag-grid-svelte';
	import dayjs from 'dayjs';
	import { getAllContexts } from 'svelte';

	import { TransactionTypeFilter, TransactionsApi } from '$lib/api';
	import { DateFormat } from '$lib/models/DateFormat';
	import type { TransactionMeta } from '$lib/models/TransactionMeta';
	import { useService } from '$lib/services';
	import { usePreferencesStore } from '$lib/stores/preferences';
	import { useFormat } from '$lib/utils/format';
	import { createSvelteCellRenderer } from '$lib/utils/grid/cell-renderer';

	import TransactionSplitComponent from './TransactionSplit.svelte';

	let preferences = usePreferencesStore();
	let formatter = useFormat();

	let { start, end } = $preferences.range;

	const transactionsService = useService(TransactionsApi);

	const transactionQuery = createQuery({
		queryKey: ['transactions', 'expenses'],
		queryFn: () => {
			return transactionsService.listTransaction({
				start,
				end,
				type: TransactionTypeFilter.Expense
			});
		}
	});

	$: transactionMeta = $transactionQuery.data?.data.flatMap(
		(transaction): TransactionMeta[] => {
			const splits = transaction.attributes.transactions;
			if (splits.length < 2)
				return splits.map((split) => ({ ...split, isGroup: false }));

			return [
				// main group
				{ isGroup: true, group: transaction.attributes },
				// splits
				...splits.map((split) => ({
					...split,
					isGroup: false as const,
					group: transaction.attributes
				}))
			];
		}
	);

	let columnDefs: ColDef<TransactionMeta>[] = [
		{ valueGetter: (row) => !!row.data?.group },
		{ field: 'description', headerName: 'Description' },
		{
			field: 'amount',
			valueFormatter: (amount) => formatter.formatCurrency(amount.value),
			headerName: 'Amount'
		},
		{
			field: 'date',
			valueFormatter: (date) => dayjs(date.value).format(DateFormat.Full),
			headerName: 'Date'
		},
		{ field: 'sourceName', headerName: 'Source account' },
		{ field: 'destinationName', headerName: 'Destination account' },
		{ field: 'categoryName', headerName: 'Category' }
	];

	function onGridReady(event: GridReadyEvent<TransactionMeta>) {
		event.columnApi.autoSizeAllColumns();
	}

	function isFullWidthRow(params: IsFullWidthRowParams<TransactionMeta>) {
		return params.rowNode.data?.isGroup ?? false;
	}
</script>

<div class="ag-theme-alpine">
	{#if $transactionQuery.isSuccess}
		<AgGrid
			{columnDefs}
			rowData={transactionMeta}
			domLayout="autoHeight"
			{onGridReady}
			{isFullWidthRow}
			fullWidthCellRenderer={createSvelteCellRenderer(
				TransactionSplitComponent,
				getAllContexts()
			)}
		/>
	{/if}
</div>
