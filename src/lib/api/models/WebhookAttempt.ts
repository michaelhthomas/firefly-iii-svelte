/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookAttempt = {
    readonly created_at?: string;
    readonly updated_at?: string;
    /**
     * The ID of the webhook message this attempt belongs to.
     */
    webhook_message_id?: string;
    /**
     * The HTTP status code of the error, if any.
     */
    status_code?: number | null;
    /**
     * Internal log for this attempt. May contain sensitive user data.
     */
    logs?: string | null;
    /**
     * Webhook receiver response for this attempt, if any. May contain sensitive user data.
     */
    response?: string | null;
};

