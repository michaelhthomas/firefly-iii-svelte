<script lang="ts">
	import type { BasicSummaryEntry } from 'firefly-iii-typescript-sdk-fetch';

	export let data: BasicSummaryEntry;
</script>

<div class="card">
	<div class="p-4 space-y-4">
		<h4 class="h4">{data.title}</h4>
		<h3 class="h3">{data.valueParsed}</h3>
	</div>
	<footer class="card-footer p4">
		<h6 class="h6">{data.subTitle}</h6>
	</footer>
</div>
