/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookMessage = {
    readonly created_at?: string;
    readonly updated_at?: string;
    /**
     * If this message is sent yet.
     */
    sent?: boolean;
    /**
     * If this message has errored out.
     */
    errored?: boolean;
    /**
     * The ID of the webhook this message belongs to.
     */
    webhook_id?: string;
    /**
     * Long UUID string for identification of this webhook message.
     */
    uuid?: string;
    /**
     * The actual message that is sent or will be sent as JSON string.
     */
    string?: string | null;
};

