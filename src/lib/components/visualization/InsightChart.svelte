<script lang="ts">
	import { insightCategoryQuery, type InsightCategory } from '$lib/models/InsightCategory';
	import { useService } from '$lib/services';
	import { usePreferencesStore } from '$lib/stores/preferences';
	import { createQuery } from '@tanstack/svelte-query';
	import { InsightApi } from 'firefly-iii-typescript-sdk-fetch';
	import type { ChartData } from 'chart.js';
	import { Pie } from 'svelte-chartjs';
	import { useFormat } from '$lib/utils/format';
	import { asyncGeneratorToList } from '$lib/utils/async-generator';

	export let category: InsightCategory;

	let preferences = usePreferencesStore();
	let format = useFormat();
	let range = $preferences.range;

	const insightService = useService(InsightApi);

	$: insights = createQuery({
		queryKey: ['insights', category, range],
		queryFn: () => asyncGeneratorToList(insightCategoryQuery(insightService, category, range))
	});

	$: insightsSorted = $insights.data?.toSorted((a, b) => a.differenceFloat! - b.differenceFloat!);

	$: data =
		$insights.isSuccess && insightsSorted
			? ({
					labels: insightsSorted.map((insight) =>
						'name' in insight ? (insight.name as string) : 'No name.'
					),
					datasets: [
						{
							label: 'Expenses',
							data: insightsSorted.map((insight) => insight.differenceFloat!)
						}
					]
			  } satisfies ChartData<'pie', number[], string>)
			: null;

	let options: Pie['$$prop_def']['options'] = {
		plugins: {
			tooltip: {
				callbacks: {
					label: function (context) {
						return format.formatCurrency(Math.abs(context.parsed));
					}
				}
			}
		}
	};
</script>

{#if data}
	<Pie {data} {options} {...$$restProps} />
{/if}
