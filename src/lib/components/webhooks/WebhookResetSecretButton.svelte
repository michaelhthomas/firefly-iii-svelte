<script lang="ts">
	import { createMutation } from '@tanstack/svelte-query';
	import { Spinner } from 'flowbite-svelte';

	import { WebhooksApi } from '$lib/api';
	import { queryClient } from '$lib/client';
	import { useService } from '$lib/services';

	import Icon from '$lib/components/Icon.svelte';
	import IconButton from '$lib/components/IconButton.svelte';

	const webhooksService = useService(WebhooksApi);

	export let id: string;

	const resetSecretMutation = createMutation({
		mutationFn: async (id: string) => {
			const webhookUpdate = webhooksService.updateWebhook({
				id,
				webhookUpdate: {
					secret: 'reset'
				}
			});
			// ensure update is not instant
			await new Promise((resolve) => setTimeout(resolve, 500));
			return webhookUpdate;
		},
		onSuccess() {
			queryClient.invalidateQueries(['webhooks', id]);
		}
	});
</script>

{#if $resetSecretMutation.isLoading}
	<Spinner size="6" />
{:else if $resetSecretMutation.isSuccess}
	<Icon icon="bx:check-circle" class="w-6 h-6 text-green-500" />
{:else if $resetSecretMutation.isError}
	<Icon icon="bx:x-circle" class="w-6 h-6 text-red-500" />
{:else}
	<IconButton
		icon="mdi:restart"
		label="Reset Secret"
		iconClass="w-6 h-6"
		on:click={() => $resetSecretMutation.mutate(id)}
	/>
{/if}
