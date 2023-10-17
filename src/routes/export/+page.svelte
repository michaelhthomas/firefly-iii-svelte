<script lang="ts">
	import { useService } from '$lib/services';
	import { DataApi } from 'firefly-iii-typescript-sdk-fetch';

	import Icon from '$lib/components/Icon.svelte';
	import DashboardPage from '$lib/components/layout/DashboardPage.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import { createMutation } from '@tanstack/svelte-query';
	import { downloadBlob } from '$lib/utils/download';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	const exportService = useService(DataApi);

	$: exportTransactions = createMutation({
		mutationFn: async () => {
			const today = new Date(Date.now());
			const blob = await exportService.exportTransactions({ start: new Date(0), end: today });

			const dateString = `${today.getFullYear()}_${today.getMonth() + 1}_${today.getDate()}`;

			downloadBlob(blob, `${dateString}_transaction_export.csv`);
		}
	});
</script>

<DashboardPage>
	<Section>
		<p>
			This link allows you to export all transactions + meta data from Firefly III. Please refer to
			the help (top right (?)-icon) for more information about the process.
		</p>

		<button
			class="btn btn-lg variant-filled"
			class:!bg-primary-500={$exportTransactions.isSuccess}
			on:click={() => $exportTransactions.mutate()}
		>
			{#if $exportTransactions.isLoading}
				<ProgressRadial width="w-5" />
			{:else if $exportTransactions.isSuccess}
				<Icon icon="bx-check" />
			{:else}
				<span><Icon icon="bx:data" inline /></span>
				<span>Export all transactions</span>
			{/if}
		</button>

		<p>
			If you need a more advanced or specific type of export, read the help on how to use the
			console command
			<code>php artisan help firefly-iii:export-data</code>.
		</p>
	</Section>
</DashboardPage>
