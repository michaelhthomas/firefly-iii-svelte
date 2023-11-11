<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';

	import { WebhooksApi } from '$lib/api';
	import DashboardPage from '$lib/components/layout/DashboardPage.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import WebhooksTable from '$lib/components/webhooks/WebhooksTable.svelte';
	import { useService } from '$lib/services';

	const webhooksService = useService(WebhooksApi);

	$: webhooksResult = createQuery({
		queryKey: ['webhooks'],
		queryFn: () => webhooksService.listWebhook()
	});
</script>

<DashboardPage>
	<Section>
		{#if $webhooksResult.isSuccess}
			<WebhooksTable data={$webhooksResult.data} />
		{/if}
	</Section>
</DashboardPage>
