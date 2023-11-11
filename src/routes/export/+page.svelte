<script lang="ts">
	import { createMutation } from '@tanstack/svelte-query';
	import { Button, Spinner } from 'flowbite-svelte';

	import { DataApi } from '$lib/api';
	import Icon from '$lib/components/Icon.svelte';
	import DashboardPage from '$lib/components/layout/DashboardPage.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import { useService } from '$lib/services';
	import { downloadBlob } from '$lib/utils/download';

	const exportService = useService(DataApi);

	$: exportTransactions = createMutation({
		mutationFn: async () => {
			const today = new Date(Date.now());
			const blob = await exportService.exportTransactions({
				start: new Date(0),
				end: today
			});

			const dateString = `${today.getFullYear()}_${
				today.getMonth() + 1
			}_${today.getDate()}`;

			downloadBlob(blob, `${dateString}_transaction_export.csv`);
		}
	});
</script>

<DashboardPage>
	<Section>
		<p>
			This link allows you to export all transactions + meta data from Firefly III.
			Please refer to the help (top right (?)-icon) for more information about the
			process.
		</p>

		<Button
			size="lg"
			color={$exportTransactions.isSuccess ? 'green' : 'primary'}
			on:click={() => $exportTransactions.mutate()}
		>
			{#if $exportTransactions.isLoading}
				<Spinner size="6" />
			{:else if $exportTransactions.isSuccess}
				<Icon icon="bx-check" class="w-6 h-6" />
			{:else}
				<span class="inline-flex gap-2">
					<Icon icon="bx:data" class="w-6 h-6" inline />
					<span>Export all transactions</span>
				</span>
			{/if}
		</Button>

		<p>
			If you need a more advanced or specific type of export, read the help on how to
			use the console command <code>php artisan help firefly-iii:export-data</code>.
		</p>
	</Section>
</DashboardPage>
