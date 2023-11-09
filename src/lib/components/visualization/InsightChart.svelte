<script lang="ts">
	import {
		insightCategoryQuery,
		type InsightCategory
	} from '$lib/models/InsightCategory';
	import { useService } from '$lib/services';
	import { usePreferencesStore } from '$lib/stores/preferences';
	import { createQuery } from '@tanstack/svelte-query';
	import { InsightApi } from 'firefly-iii-typescript-sdk-fetch';
	import type { ChartData } from 'chart.js';
	import { Pie } from 'svelte-chartjs';
	import { useFormat } from '$lib/utils/format';
	import { asyncGeneratorToList } from '$lib/utils/async-generator';
	import { interpolateColors } from '$lib/utils/color-generator';
	import { interpolateViridis } from 'd3-scale-chromatic';

	export let category: InsightCategory;
	export let emptyLabel = '(no name)';

	let preferences = usePreferencesStore();
	let format = useFormat();
	let range = $preferences.range;

	const insightService = useService(InsightApi);

	$: insights = createQuery({
		queryKey: ['insights', category, range],
		queryFn: () =>
			asyncGeneratorToList(insightCategoryQuery(insightService, category, range))
	});

	$: insightsSorted = $insights.data?.toSorted(
		(a, b) => Math.abs(b.differenceFloat!) - Math.abs(a.differenceFloat!)
	);

	type PieData = { amount: number; currency?: string };

	$: data =
		$insights.isSuccess && insightsSorted
			? ({
					labels: insightsSorted.map((insight) =>
						'name' in insight ? (insight.name as string) : emptyLabel
					),
					datasets: [
						{
							label: 'Expenses',
							backgroundColor: interpolateColors(
								insightsSorted.length,
								interpolateViridis
							),
							data: insightsSorted.map((insight) => ({
								amount: insight.differenceFloat!,
								currency: insight.currencyCode
							}))
						}
					]
			  } satisfies ChartData<'pie', PieData[], string>)
			: null;

	let options: Pie['$$prop_def']['options'] = {
		parsing: {
			key: 'amount'
		},
		plugins: {
			tooltip: {
				callbacks: {
					label: function (context) {
						return format.formatCurrency(
							Math.abs(context.parsed),
							(context.raw as PieData).currency
						);
					}
				}
			}
		}
	};

	// hack for type coercion, required as `parsing` property of options is not properly applied to dataset type
	$: parsedData = data as unknown as Pie['$$prop_def']['data'] | undefined;
</script>

{#if parsedData}
	<Pie data={parsedData} {options} {...$$restProps} />
{/if}
