<script lang="ts">
	import type { BasicSummaryEntry } from 'firefly-iii-typescript-sdk-fetch';
	import { Card } from 'flowbite-svelte';

	export let data: BasicSummaryEntry;
</script>

<Card class="shadow-sm !p-4">
	<div class="space-y-2">
		<h4 class="h4">{data.title}</h4>
		<h3 class="h3">{data.valueParsed}</h3>
		<h6 class="h6">{data.subTitle}</h6>
	</div>
</Card>
