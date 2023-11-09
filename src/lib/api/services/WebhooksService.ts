/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookArray } from '../models/WebhookArray';
import type { WebhookAttemptArray } from '../models/WebhookAttemptArray';
import type { WebhookAttemptSingle } from '../models/WebhookAttemptSingle';
import type { WebhookMessageArray } from '../models/WebhookMessageArray';
import type { WebhookMessageSingle } from '../models/WebhookMessageSingle';
import type { WebhookSingle } from '../models/WebhookSingle';
import type { WebhookStore } from '../models/WebhookStore';
import type { WebhookUpdate } from '../models/WebhookUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WebhooksService {

    /**
     * Get all the messages of a single webhook.
     * When a webhook is triggered the actual message that will be send is stored in a "message". You can view and analyse these messages.
     * @returns WebhookMessageArray A list of webhook messages.
     * @throws ApiError
     */
    public static getWebhookMessages({
        id,
        xTraceId,
    }: {
        /**
         * The webhook ID.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<WebhookMessageArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/webhooks/{id}/messages',
            path: {
                'id': id,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                500: `Internal exception`,
            },
        });
    }

    /**
     * Get a single message from a webhook.
     * When a webhook is triggered it will store the actual content of the webhook in a webhook message. You can view and analyse a single one using this endpoint.
     * @returns WebhookMessageSingle A single webhook message.
     * @throws ApiError
     */
    public static getSingleWebhookMessage({
        id,
        messageId,
        xTraceId,
    }: {
        /**
         * The webhook ID.
         */
        id: string,
        /**
         * The webhook message ID.
         */
        messageId: number,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<WebhookMessageSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/webhooks/{id}/messages/{messageId}',
            path: {
                'id': id,
                'messageId': messageId,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                500: `Internal exception`,
            },
        });
    }

    /**
     * Delete a webhook message.
     * Delete a webhook message. Any time a webhook is triggered the message is stored before it's sent. You can delete them before or after sending.
     * @returns void
     * @throws ApiError
     */
    public static deleteWebhookMessage({
        id,
        messageId,
        xTraceId,
    }: {
        /**
         * The webhook ID.
         */
        id: string,
        /**
         * The webhook message ID.
         */
        messageId: number,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/webhooks/{id}/messages/{messageId}',
            path: {
                'id': id,
                'messageId': messageId,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                500: `Internal exception`,
            },
        });
    }

    /**
     * Get all the failed attempts of a single webhook message.
     * When a webhook message fails to send it will store the failure in an "attempt". You can view and analyse these. Webhook messages that receive too many attempts (failures) will not be sent again. You must first clear out old attempts before the message can go out again.
     * @returns WebhookAttemptArray A list of webhook attempts.
     * @throws ApiError
     */
    public static getWebhookMessageAttempts({
        id,
        messageId,
        xTraceId,
        limit,
        page,
    }: {
        /**
         * The webhook ID.
         */
        id: string,
        /**
         * The webhook message ID.
         */
        messageId: number,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * Number of items per page. The default pagination is per 50 items.
         */
        limit?: number,
        /**
         * Page number. The default pagination is per 50 items.
         */
        page?: number,
    }): CancelablePromise<WebhookAttemptArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/webhooks/{id}/messages/{messageId}/attempts',
            path: {
                'id': id,
                'messageId': messageId,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'limit': limit,
                'page': page,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                500: `Internal exception`,
            },
        });
    }

    /**
     * Get a single failed attempt from a single webhook message.
     * When a webhook message fails to send it will store the failure in an "attempt". You can view and analyse these. Webhooks messages that receive too many attempts (failures) will not be fired. You must first clear out old attempts and try again. This endpoint shows you the details of a single attempt. The ID of the attempt must match the corresponding webhook and webhook message.
     * @returns WebhookAttemptSingle A single webhook attempt.
     * @throws ApiError
     */
    public static getSingleWebhookMessageAttempt({
        id,
        messageId,
        attemptId,
        xTraceId,
    }: {
        /**
         * The webhook ID.
         */
        id: string,
        /**
         * The webhook message ID.
         */
        messageId: number,
        /**
         * The webhook attempt ID.
         */
        attemptId: number,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<WebhookAttemptSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/webhooks/{id}/messages/{messageId}/attempts/{attemptId}',
            path: {
                'id': id,
                'messageId': messageId,
                'attemptId': attemptId,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                500: `Internal exception`,
            },
        });
    }

    /**
     * Delete a webhook attempt.
     * Delete a webhook message attempt. If you delete all attempts for a webhook message, Firefly III will (once again) assume all is well with the webhook message and will try to send it again.
     * @returns void
     * @throws ApiError
     */
    public static deleteWebhookMessageAttempt({
        id,
        messageId,
        attemptId,
        xTraceId,
    }: {
        /**
         * The webhook ID.
         */
        id: string,
        /**
         * The webhook message ID.
         */
        messageId: number,
        /**
         * The webhook message attempt ID.
         */
        attemptId: number,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/webhooks/{id}/messages/{messageId}/attempts/{attemptId}',
            path: {
                'id': id,
                'messageId': messageId,
                'attemptId': attemptId,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                500: `Internal exception`,
            },
        });
    }

    /**
     * Submit messages for a webhook.
     * This endpoint will submit any open messages for this webhook. This is an asynchronous operation, so you can't see the result. Refresh the webhook message and/or the webhook message attempts to see the results. This may take some time if the webhook receiver is slow.
     * @returns any OK!
     * @throws ApiError
     */
    public static submitWebook({
        id,
        xTraceId,
    }: {
        /**
         * The webhook ID.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/webhooks/{id}/submit',
            path: {
                'id': id,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            errors: {
                404: `Webhook not found.`,
                500: `Error while sending.`,
            },
        });
    }

    /**
     * List all webhooks.
     * List all the user's webhooks.
     * @returns WebhookArray A list of webhooks.
     * @throws ApiError
     */
    public static listWebhook({
        xTraceId,
        limit,
        page,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * Number of items per page. The default pagination is per 50 items.
         */
        limit?: number,
        /**
         * Page number. The default pagination is per 50 items.
         */
        page?: number,
    }): CancelablePromise<WebhookArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/webhooks',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'limit': limit,
                'page': page,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                500: `Internal exception`,
            },
        });
    }

    /**
     * Store a new webhook
     * Creates a new webhook. The data required can be submitted as a JSON body or as a list of parameters. The webhook will be given a random secret.
     *
     * @returns WebhookSingle New webhook stored, result in response.
     * @throws ApiError
     */
    public static storeWebhook({
        requestBody,
        xTraceId,
    }: {
        /**
         * JSON array or key=value pairs with the necessary webhook information. See the model for the exact specifications.
         */
        requestBody: WebhookStore,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<WebhookSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/webhooks',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                422: `Validation error. The body will have the exact details.`,
                500: `Internal exception`,
            },
        });
    }

    /**
     * Get a single webhook.
     * Gets all info of a single webhook.
     * @returns WebhookSingle The requested webhook.
     * @throws ApiError
     */
    public static getWebhook({
        id,
        xTraceId,
    }: {
        /**
         * The webhook ID.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<WebhookSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/webhooks/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                500: `Internal exception`,
            },
        });
    }

    /**
     * Update existing webhook.
     * Update an existing webhook's information. If you wish to reset the secret, submit any value as the "secret". Firefly III will take this as a hint and reset the secret of the webhook.
     * @returns WebhookSingle Updated webhook stored, result in response
     * @throws ApiError
     */
    public static updateWebhook({
        id,
        requestBody,
        xTraceId,
    }: {
        /**
         * The webhook ID.
         */
        id: string,
        /**
         * JSON array with updated webhook information. See the model for the exact specifications.
         */
        requestBody: WebhookUpdate,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<WebhookSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/webhooks/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                422: `Validation error. The body will have the exact details.`,
                500: `Internal exception`,
            },
        });
    }

    /**
     * Delete a webhook.
     * Delete a webhook.
     * @returns void
     * @throws ApiError
     */
    public static deleteWebhook({
        id,
        xTraceId,
    }: {
        /**
         * The webhook ID.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/webhooks/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                500: `Internal exception`,
            },
        });
    }

}
