/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookDelivery } from './WebhookDelivery';
import type { WebhookResponse } from './WebhookResponse';
import type { WebhookTrigger } from './WebhookTrigger';

export type WebhookStore = {
    /**
     * Boolean to indicate if the webhook is active
     */
    active?: boolean;
    /**
     * A title for the webhook for easy recognition.
     */
    title: string;
    trigger: WebhookTrigger;
    response: WebhookResponse;
    delivery: WebhookDelivery;
    /**
     * The URL of the webhook. Has to start with `https`.
     */
    url: string;
};

