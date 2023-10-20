<script lang="ts">
	import type { DateRange } from '$lib/models/DateRange';
	import { useService } from '$lib/services';
	import { createQuery } from '@tanstack/svelte-query';
	import {
		TransactionsApi,
		type ListTransactionRequest,
		InsightApi
	} from 'firefly-iii-typescript-sdk-fetch';
	import Section from '../layout/Section.svelte';
	import dayjs from 'dayjs';
	import Currency from '../format/Currency.svelte';
	import {
		TransactionCategory,
		getTransactionCategoryTypeFilter
	} from '$lib/models/TransactionCategory';

	export let range: DateRange;
	export let category: TransactionCategory;
	let type = getTransactionCategoryTypeFilter(category);

	const totalRowName =
		category === TransactionCategory.Expenses
			? 'Spent'
			: category === TransactionCategory.Income
			? 'Earned'
			: 'Transferred';

	const transactionsService = useService(TransactionsApi);
	const insightsService = useService(InsightApi);

	async function getTotal(range: DateRange) {
		switch (category) {
			case TransactionCategory.Expenses:
				return insightsService.insightExpenseTotal(range);
			case TransactionCategory.Income:
				return insightsService.insightIncomeTotal(range);
			case TransactionCategory.Transfers:
				return insightsService.insightTransferTotal(range);
		}
	}

	$: summary = createQuery({
		queryKey: ['period-summary', type, range],
		queryFn: async () => {
			const { start, end } = range;

			const transactions = await transactionsService.listTransaction({
				start,
				end,
				// TODO: update types to allow
				limit: 0,
				type
			} as ListTransactionRequest);

			const transactionCount = transactions.meta.pagination?.total ?? 0;

			const expenseTotal = await getTotal(range);

			return { transactionCount, total: expenseTotal[0]?.differenceFloat ?? 0 };
		}
	});
</script>

<Section class="!space-y-2 !p-0 grow">
	<h6 slot="header" class="font-bold pt-3 px-3">
		{dayjs(range.start).format('MMMM YYYY')}
	</h6>

	{#if $summary.isSuccess}
		<div class="table-container w-full">
			<table class="w-full table table-compact table-hover">
				<tbody>
					<tr>
						<td>Transactions</td>
						<td class="text-right">{$summary.data.transactionCount}</td>
					</tr>
					<tr>
						<td>{totalRowName}</td>
						<td class="text-right"><Currency amount={$summary.data.total} /></td>
					</tr>
				</tbody>
			</table>
		</div>
	{/if}
</Section>
