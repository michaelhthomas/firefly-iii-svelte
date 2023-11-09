<script context="module" lang="ts">
	import { openModal } from 'svelte-modals';
	import { superValidate } from 'sveltekit-superforms/client';
	import EditDrawer from './WebhooksEditDrawer.svelte';

	type EditDrawerType = 'create' | 'update';

	export const openEditDrawer = async (id?: string) => {
		const webhook =
			id != null
				? await WebhooksService.getWebhook(id).then((w) => w.data.attributes)
				: {
						title: '',
						trigger: WebhookTrigger.STORE_TRANSACTION,
						response: WebhookResponse.TRANSACTIONS,
						delivery: WebhookDelivery.JSON,
						url: '',
						active: true
				  };

		const validated = await superValidate(webhook, webhookSchema);
		openModal(EditDrawer, {
			webhook: validated,
			type: id != null ? 'update' : 'create',
			webhookId: id
		});
	};
</script>

<script lang="ts">
	import Drawer from '../drawer/Drawer.svelte';
	import Button from '../Button.svelte';
	import { closeModal } from 'svelte-modals';
	import {
		WebhooksService,
		WebhookTrigger,
		WebhookResponse,
		WebhookDelivery,
		type WebhookStore,
		type WebhookUpdate
	} from '$lib/api';
	import { superForm } from 'sveltekit-superforms/client';
	import {
		deliveryItems,
		responseItems,
		triggerItems,
		webhookSchema,
		type WebhookSchema
	} from '$lib/schemas';
	import TextField from '../form/TextField.svelte';
	import type { SuperValidated } from 'sveltekit-superforms';
	import SelectField from '../form/SelectField.svelte';
	import { createMutation } from '@tanstack/svelte-query';
	import StatusButton from '../StatusButton.svelte';
	import ToggleField from '../form/ToggleField.svelte';
	import { queryClient } from '$lib/client';
	import MutationError from '../MutationError.svelte';

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
				? WebhooksService.storeWebhook(options.webhook)
				: WebhooksService.updateWebhook(options.id, options.webhook),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['webhooks']
			});
			closeModal();
		}
	});

	const deleteWebhookMutation = createMutation({
		mutationFn: (id: string) => WebhooksService.deleteWebhook(id),
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
