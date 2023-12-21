<script lang="ts" context="module">
	import type { ComponentProps } from 'svelte';
	import { closeModal, openModal } from 'svelte-modals';

	import WebhookTestDialog from './WebhookTestDialog.svelte';

	type WebhookTestDialogProps = Omit<ComponentProps<WebhookTestDialog>, 'isOpen'>;

	export function openWebhookTestDialog(props: WebhookTestDialogProps) {
		openModal(WebhookTestDialog, props);
	}
</script>

<script lang="ts">
	import { createMutation } from '@tanstack/svelte-query';
	import { Input, Label } from 'flowbite-svelte';

	import { WebhooksApi } from '$lib/api';
	import { useService } from '$lib/services';

	import Button from '$lib/components/Button.svelte';
	import StatusButton from '$lib/components/StatusButton.svelte';
	import Modal from '$lib/components/modals/Modal.svelte';

	export let id: string;
	export let isOpen: boolean;

	let transactionId = '';

	const webhooksService = useService(WebhooksApi);

	const testMutation = createMutation({
		mutationFn: () => webhooksService.triggerTransactionWebhook({ id, transactionId })
	});
</script>

<Modal title="Test Webhook" {isOpen}>
	<Label for="webhook-test-transaction-id" class="block mb-2">
		Enter a transaction ID
	</Label>
	<Input
		id="webhook-test-transaction-id"
		name="webhook-test-transaction-id"
		type="number"
		bind:value={transactionId}
	/>

	<StatusButton
		status={$testMutation.status}
		color="primary"
		class="mr-2"
		on:click={() => $testMutation.mutate()}
	>
		Test
	</StatusButton>
	<Button color="alternative" on:click={() => closeModal()}>Cancel</Button>
</Modal>
