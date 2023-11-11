<script lang="ts">
	import dayjs from 'dayjs';

	import type { DateRange } from '$lib/models/DateRange';
	import type { TransactionCategory } from '$lib/models/TransactionCategory';

	import PeriodSummary from './PeriodSummary.svelte';

	const periods = [...Array(5).keys()].map((offset) => {
		const start = dayjs().startOf('month').subtract(offset, 'months');
		const end = start.endOf('month');
		return { start: start.toDate(), end: end.toDate() } as DateRange;
	});

	export let category: TransactionCategory;
</script>

<div class="flex gap-4 flex-row 2xl:flex-col">
	{#each periods as period}
		<PeriodSummary range={period} {category} />
	{/each}
</div>
