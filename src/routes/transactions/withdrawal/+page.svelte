<script lang="ts">
	import { InsightCategory } from '$lib/models/InsightCategory';
	import { TransactionCategory } from '$lib/models/TransactionCategory';

	import Section from '$lib/components/layout/Section.svelte';
	import InsightChart from '$lib/components/visualization/InsightChart.svelte';

	import TransactionsPage from '../TransactionsPage.svelte';
</script>

<TransactionsPage category={TransactionCategory.Expenses}>
	<svelte:fragment slot="charts">
		<Section title="Categories" class="col-span-4">
			<InsightChart
				category={InsightCategory.ExpenseCategory | InsightCategory.ExpenseNoCategory}
				emptyLabel="(no category)"
				class="max-h-[15em]"
			/>
		</Section>
		<Section title="Budgets" class="col-span-4">
			<InsightChart
				category={InsightCategory.ExpenseBudget | InsightCategory.ExpenseNoBudget}
				emptyLabel="(no budget)"
				class="max-h-[15em]"
			/>
		</Section>
		<Section title="Destination accounts" class="col-span-4">
			<InsightChart category={InsightCategory.ExpenseExpense} class="max-h-[15em]" />
		</Section>
	</svelte:fragment>
</TransactionsPage>
