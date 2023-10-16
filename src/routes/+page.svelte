<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import BasicSummary from '$lib/components/dashboard/BasicSummary.svelte';

	import { createQuery } from '@tanstack/svelte-query';
	import { useService } from '$lib/services';
	import { SummaryApi } from 'firefly-iii-typescript-sdk-fetch';

	const summaryService = useService(SummaryApi);

	$: query = createQuery({
		queryKey: ['summary'],
		queryFn: () =>
			summaryService.getBasicSummary({ start: new Date('2022/1/1'), end: new Date('2023/1/1') })
	});
</script>

<div class="container h-full mx-auto py-6 px-5">
	<div class="space-y-6">
		<h3 class="h3">
			<Icon icon="ph:fire-fill" inline />
			Firefly III
			<small class="text-sm font-normal pl-1">What's playing?</small>
		</h3>
		<div class="dashboard-grid grid grid-cols-4 gap-4">
			{#if $query.isSuccess}
				{#each $query.data as item}
					<BasicSummary data={item} />
				{/each}
			{/if}
		</div>
	</div>
</div>
