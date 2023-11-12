<script lang="ts">
	import { page } from '$app/stores';

	import type { TransactionCategory } from '$lib/models/TransactionCategory';

	import DashboardPage from '$lib/components/layout/DashboardPage.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import TransactionsGrid from '$lib/components/transactions/TransactionsGrid.svelte';
	import TransactionsSidebar from '$lib/components/transactions/TransactionsSidebar.svelte';

	export let category: TransactionCategory;
</script>

<DashboardPage>
	<div class="transactions-grid grid grid-cols-12 gap-4">
		<slot name="charts" />
		<Section title={$page.data.meta?.description} class="col-span-12 2xl:col-span-10">
			<div class="-mx-4 -mb-4">
				<TransactionsGrid />
			</div>
		</Section>
		<div class="col-span-12 2xl:col-span-2 overflow-y-auto">
			<TransactionsSidebar {category} />
		</div>
	</div>
</DashboardPage>
