<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import BasicSummary from '$lib/components/dashboard/BasicSummary.svelte';

	import { createQuery } from '@tanstack/svelte-query';
	import { useService } from '$lib/services';
	import { SummaryApi } from '$lib/api';
	import { usePreferencesStore } from '$lib/stores/preferences';

	const summaryService = useService(SummaryApi);
	$: preferences = usePreferencesStore();

	$: query = createQuery({
		queryKey: ['summary', $preferences.range],
		queryFn: () =>
			summaryService
				.getBasicSummary({ ...$preferences.range })
				.then((res) => Object.values(res))
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
