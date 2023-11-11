<script lang="ts">
	import Section from '$lib/components/layout/Section.svelte';
	import InsightChart from '$lib/components/visualization/InsightChart.svelte';
	import { InsightCategory } from '$lib/models/InsightCategory';
	import { TransactionCategory } from '$lib/models/TransactionCategory';

	import TransactionsPage from '../TransactionsPage.svelte';
</script>

<TransactionsPage category={TransactionCategory.Income}>
	<svelte:fragment slot="charts">
		<Section title="Categories" class="col-span-4">
			<InsightChart
				category={InsightCategory.IncomeCategory | InsightCategory.IncomeNoCategory}
				emptyLabel="(no category)"
				class="max-h-[15em]"
			/>
		</Section>
		<Section title="Source accounts" class="col-span-4">
			<InsightChart category={InsightCategory.IncomeRevenue} class="max-h-[15em]" />
		</Section>
		<Section title="Destination accounts" class="col-span-4">
			<InsightChart category={InsightCategory.IncomeAsset} class="max-h-[15em]" />
		</Section>
	</svelte:fragment>
</TransactionsPage>
