<script context="module" lang="ts">
	import { openModal } from 'svelte-modals';
	import { superValidate } from 'sveltekit-superforms/client';

	import { WebhooksApi } from '$lib/api';

	import WebhookEditDrawer from './WebhookEditDrawer.svelte';

	const webhooksService = useService(WebhooksApi);

	type EditDrawerType = 'create' | 'update';

	export const openWebhookEditDrawer = async (id?: string) => {
		const webhook =
			id != null
				? await webhooksService.getWebhook({ id }).then((w) => w.data.attributes)
				: {
						title: '',
						trigger: WebhookTrigger.StoreTransaction,
						response: WebhookResponse.Transactions,
						delivery: WebhookDelivery.Json,
						url: '',
						active: true
				  };

		const validated = await superValidate(webhook, webhookSchema);
		openModal(WebhookEditDrawer, {
			webhook: validated,
			type: id != null ? 'update' : 'create',
			webhookId: id
		});
	};
</script>

<script lang="ts">
	import { createMutation } from '@tanstack/svelte-query';
	import { closeModal } from 'svelte-modals';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';

	import {
		WebhookDelivery,
		WebhookResponse,
		type WebhookStore,
		WebhookTrigger,
		type WebhookUpdate
	} from '$lib/api';
	import { queryClient } from '$lib/client';
	import Button from '$lib/components/Button.svelte';
	import MutationError from '$lib/components/MutationError.svelte';
	import StatusButton from '$lib/components/StatusButton.svelte';
	import Drawer from '$lib/components/drawer/Drawer.svelte';
	import SelectField from '$lib/components/form/SelectField.svelte';
	import TextField from '$lib/components/form/TextField.svelte';
	import ToggleField from '$lib/components/form/ToggleField.svelte';
	import {
		type WebhookSchema,
		deliveryItems,
		responseItems,
		triggerItems,
		webhookSchema
	} from '$lib/schemas/webhook';
	import { useService } from '$lib/services';

	export let isOpen: boolean;
	export let type: EditDrawerType;
	export let webhookId: string | undefined = undefined;
	export let webhook: SuperValidated<WebhookSchema>;

	if (type === 'update' && !webhookId)
		throw new Error('webhookId must be supplied for update operations.');
	// typescript doesn't properly narrow this for some reason
	const id = webhookId!;

	type MutationOptions =
		| {
				type: 'create';
				webhook: WebhookStore;
		  }
		| {
				type: 'update';
				id: string;
				webhook: WebhookUpdate;
		  };

	const updateWebhookMutation = createMutation({
		mutationFn: (options: MutationOptions) =>
			options.type === 'create'
				? webhooksService.storeWebhook({ webhookStore: options.webhook })
				: webhooksService.updateWebhook({
						id: options.id,
						webhookUpdate: options.webhook
				  }),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['webhooks']
			});
			closeModal();
		}
	});

	const deleteWebhookMutation = createMutation({
		mutationFn: (id: string) => webhooksService.deleteWebhook({ id }),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['webhooks']
			});
			closeModal();
		}
	});

	const form = superForm(webhook, {
		SPA: true,
		validators: webhookSchema,
		onUpdate({ form }) {
			if (!form.valid) return;

			if (type === 'create') {
				$updateWebhookMutation.mutate({ type, webhook: form.data });
			} else if (type === 'update') {
				$updateWebhookMutation.mutate({ type, id, webhook: form.data });
			}
		}
	});

	const { fields, enhance } = form;

	const title = fields.title.value;
</script>

<Drawer
	title={type === 'create' ? 'New Webhook' : `Edit ${$title}`}
	icon="bxs:bolt"
	{isOpen}
>
	<form use:enhance method="POST" id="webhook_update_form">
		<div
			class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500 dark:text-gray-400"
		>
			<TextField {form} field="title" label="Title" placeholder="Webhook Title" />

			<SelectField
				{form}
				field="trigger"
				label="Trigger"
				items={triggerItems}
				helpText="Indicate on what event the webhook will trigger"
			/>

			<SelectField
				{form}
				field="response"
				label="Response"
				items={responseItems}
				helpText="Indicate what the webhook must submit to the URL."
			/>

			<SelectField
				{form}
				field="delivery"
				label="Delivery"
				items={deliveryItems}
				helpText="Which format the webhook must deliver data in."
			/>

			<TextField {form} field="url" label="URL" placeholder="Webhook URL" />

			<ToggleField
				{form}
				field="active"
				label="Active"
				helpText="The webhook must be active or it won't be called."
			/>
		</div>
	</form>

	<div slot="footer" class="space-y-4">
		<MutationError mutation={updateWebhookMutation} />
		<MutationError mutation={deleteWebhookMutation} />

		<div class="flex flex-row gap-4">
			{#if type === 'update'}
				<StatusButton
					on:click={() => $deleteWebhookMutation.mutate(id)}
					color="red"
					outline
					status={$deleteWebhookMutation.status}
					icon="bxs:trash"
				>
					<span class="hidden sm:inline">Delete</span>
				</StatusButton>
			{/if}
			<div class="flex-grow hidden sm:block" />
			<Button color="alternative" on:click={closeModal} class="hidden sm:block">
				Cancel
			</Button>
			<StatusButton
				status={$updateWebhookMutation.status}
				color="primary"
				type="submit"
				form="webhook_update_form"
				icon="bxs:save"
				class="px-4 flex-grow sm:flex-grow-0"
			>
				Save Webhook
			</StatusButton>
		</div>
	</div>
</Drawer>
