<script lang="ts">
	import { Card } from 'flowbite-svelte';

	import type { BasicSummaryEntry } from '$lib/api';

	export let data: BasicSummaryEntry;
</script>

<Card class="shadow-sm !p-4">
	<div class="space-y-2">
		<h4 class="h4">{data.title}</h4>
		<h3 class="h3">{data.valueParsed}</h3>
		<h6 class="h6">{data.subTitle}</h6>
	</div>
</Card>
