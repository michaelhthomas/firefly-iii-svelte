<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import dayjs from 'dayjs';
	import { Table, TableBody, TableBodyCell, TableBodyRow } from 'flowbite-svelte';

	import { InsightApi, type ListTransactionRequest, TransactionsApi } from '$lib/api';
	import Currency from '$lib/components/format/Currency.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import type { DateRange } from '$lib/models/DateRange';
	import {
		TransactionCategory,
		getTransactionCategoryTypeFilter
	} from '$lib/models/TransactionCategory';
	import { useService } from '$lib/services';

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
		{@const tdClass = 'px-4 py-2 whitespace-nowrap font-medium !text-inherit'}
		<div class="period-summary table-container w-full pb-2">
			<Table class="table w-full" color="custom">
				<TableBody tableBodyClass="table-body">
					<TableBodyRow>
						<TableBodyCell {tdClass}>Transactions</TableBodyCell>
						<TableBodyCell tdClass={`${tdClass} text-right`}>
							{$summary.data.transactionCount}
						</TableBodyCell>
					</TableBodyRow>
					<TableBodyRow>
						<TableBodyCell {tdClass}>{totalRowName}</TableBodyCell>
						<TableBodyCell tdClass={`${tdClass} text-right`}>
							<Currency amount={$summary.data.total} />
						</TableBodyCell>
					</TableBodyRow>
				</TableBody>
			</Table>
		</div>
	{/if}
</Section>

<style lang="postcss">
	:global(.period-summary table tbody tr) {
		@apply border-b-gray-200;
	}

	:global(.dark .period-summary table tbody tr) {
		@apply border-b-gray-700;
	}
</style>
