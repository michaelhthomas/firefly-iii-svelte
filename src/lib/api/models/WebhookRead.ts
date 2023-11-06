/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectLink } from './ObjectLink';
import type { Webhook } from './Webhook';

export type WebhookRead = {
    /**
     * Immutable value
     */
    type: string;
    id: string;
    attributes: Webhook;
    links: ObjectLink;
};

