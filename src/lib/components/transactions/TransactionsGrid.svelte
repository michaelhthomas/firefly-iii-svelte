<script lang="ts">
	import { useService } from '$lib/services';
	import { usePreferencesStore } from '$lib/stores/preferences';
	import { createQuery } from '@tanstack/svelte-query';
	import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
	import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
	import type { ColDef, GridReadyEvent } from 'ag-grid-community';

	import AgGrid from 'ag-grid-svelte';
	import {
		TransactionTypeFilter,
		TransactionsApi,
		type TransactionSplit,
		type Transaction
	} from 'firefly-iii-typescript-sdk-fetch';
	import dayjs from 'dayjs';
	import { DateFormat } from '$lib/models/DateFormat';
	import { useFormat } from '$lib/utils/format';

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

	type TransactionMeta = TransactionSplit & { group?: Transaction };

	$: transactionSplits = $transactionQuery.data?.data.flatMap((transaction): TransactionMeta[] => {
		const splits = transaction.attributes.transactions;
		if (splits.length < 2) return splits;

		return splits.map((split) => ({ ...split, group: transaction.attributes }));
	});

	let columnDefs: ColDef<TransactionSplit>[] = [
		{ field: 'description' },
		{ field: 'amount', valueFormatter: (amount) => formatter.formatCurrency(amount.value) },
		{ field: 'date', valueFormatter: (date) => dayjs(date.value).format(DateFormat.Full) },
		{ field: 'sourceName', headerName: 'Source account' },
		{ field: 'destinationName', headerName: 'Destination account' },
		{ field: 'categoryName', headerName: 'Category' }
	];

	function onGridReady(event: GridReadyEvent<TransactionSplit>) {
		event.columnApi.autoSizeAllColumns();
	}
</script>

<div class="ag-theme-alpine">
	{#if $transactionQuery.isSuccess}
		<AgGrid {columnDefs} rowData={transactionSplits} domLayout="autoHeight" {onGridReady} />
	{/if}
</div>
