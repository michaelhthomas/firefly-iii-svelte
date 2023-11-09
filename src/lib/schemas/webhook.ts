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

export const triggerMap: { [key in WebhookTrigger]: string } = {
	[WebhookTrigger.STORE_TRANSACTION]: 'After transaction creation',
	[WebhookTrigger.UPDATE_TRANSACTION]: 'After transaction update',
	[WebhookTrigger.DESTROY_TRANSACTION]: 'After transaction delete'
};

export const responseMap: { [key in WebhookResponse]: string } = {
	[WebhookResponse.TRANSACTIONS]: 'Transaction details',
	[WebhookResponse.ACCOUNTS]: 'Account details',
	[WebhookResponse.NONE]: 'No details'
};

export const deliveryMap: { [key in WebhookDelivery]: string } = {
	[WebhookDelivery.JSON]: 'JSON'
};

export const triggerItems: SelectOptionType<WebhookTrigger>[] = Object.entries(
	triggerMap
).map((entry) => ({
	name: entry[1],
	value: entry[0] as WebhookTrigger
}));

export const responseItems: SelectOptionType<WebhookResponse>[] = Object.entries(
	responseMap
).map((entry) => ({
	name: entry[1],
	value: entry[0] as WebhookResponse
}));

export const deliveryItems: SelectOptionType<WebhookDelivery>[] = Object.entries(
	deliveryMap
).map((entry) => ({
	name: entry[1],
	value: entry[0] as WebhookDelivery
}));
