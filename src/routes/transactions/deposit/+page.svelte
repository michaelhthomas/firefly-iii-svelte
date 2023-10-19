<script lang="ts">
	import { page } from '$app/stores';
	import DashboardPage from '$lib/components/layout/DashboardPage.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import TransactionsGrid from '$lib/components/transactions/TransactionsGrid.svelte';
	import TransactionsSidebar from '$lib/components/transactions/TransactionsSidebar.svelte';
	import { TransactionCategory } from '$lib/models/TransactionCategory';
</script>

<DashboardPage>
	<div class="transactions-grid grid grid-cols-12 gap-4">
		<Section title="Categories" class="col-span-4">Pie chart</Section>
		<Section title="Source accounts" class="col-span-4">Pie chart</Section>
		<Section title="Destination accounts" class="col-span-4">Pie chart</Section>
		<Section title={$page.data.meta?.description} class="col-span-10">
			<div class="-mx-4 -mb-4">
				<TransactionsGrid />
			</div>
		</Section>
		<div class="col-span-2">
			<TransactionsSidebar category={TransactionCategory.Income} />
		</div>
	</div>
</DashboardPage>
