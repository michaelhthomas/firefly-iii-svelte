<script lang="ts">
	import DashboardPage from '$lib/components/layout/DashboardPage.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import { createQuery } from '@tanstack/svelte-query';
	import WebhooksTable from '$lib/components/webhooks/WebhooksTable.svelte';
	import { WebhooksService } from '$lib/api';

	$: webhooksResult = createQuery({
		queryKey: ['webhooks'],
		queryFn: () => WebhooksService.listWebhook()
	});
</script>

<DashboardPage>
	<Section>
		{#if $webhooksResult.isSuccess}
			<WebhooksTable data={$webhooksResult.data} />
		{/if}
	</Section>
</DashboardPage>
