import { WebhookTrigger, WebhookResponse, WebhookDelivery } from '$lib/api';
import type { SelectOptionType } from 'flowbite-svelte';
import { z } from 'zod';

export const webhookSchema = z.object({
	title: z.string(),
	trigger: z.nativeEnum(WebhookTrigger),
	response: z.nativeEnum(WebhookResponse),
	delivery: z.nativeEnum(WebhookDelivery),
	url: z.string().url(),
	active: z.boolean().optional()
});

export type WebhookSchema = typeof webhookSchema;

export const triggerItems: SelectOptionType<WebhookTrigger>[] = [
	{
		name: 'After transaction creation',
		value: WebhookTrigger.STORE_TRANSACTION
	},
	{
		name: 'After transaction update',
		value: WebhookTrigger.UPDATE_TRANSACTION
	},
	{
		name: 'After transaction delete',
		value: WebhookTrigger.DESTROY_TRANSACTION
	}
];

export const responseItems: SelectOptionType<WebhookResponse>[] = [
	{
		name: 'Transaction details',
		value: WebhookResponse.TRANSACTIONS
	},
	{
		name: 'Account details',
		value: WebhookResponse.ACCOUNTS
	},
	{
		name: 'No details',
		value: WebhookResponse.NONE
	}
];

export const deliveryItems: SelectOptionType<WebhookDelivery>[] = [
	{
		name: 'JSON',
		value: WebhookDelivery.JSON
	}
];
