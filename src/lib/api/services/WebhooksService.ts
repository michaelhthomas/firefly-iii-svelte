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
     * @param id The webhook ID.
     * @param xTraceId Unique identifier associated with this request.
     * @returns WebhookMessageArray A list of webhook messages.
     * @throws ApiError
     */
    public static getWebhookMessages(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<WebhookMessageArray> {
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
     * @param id The webhook ID.
     * @param messageId The webhook message ID.
     * @param xTraceId Unique identifier associated with this request.
     * @returns WebhookMessageSingle A single webhook message.
     * @throws ApiError
     */
    public static getSingleWebhookMessage(
        id: string,
        messageId: number,
        xTraceId?: string,
    ): CancelablePromise<WebhookMessageSingle> {
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
     * @param id The webhook ID.
     * @param messageId The webhook message ID.
     * @param xTraceId Unique identifier associated with this request.
     * @returns void
     * @throws ApiError
     */
    public static deleteWebhookMessage(
        id: string,
        messageId: number,
        xTraceId?: string,
    ): CancelablePromise<void> {
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
     * @param id The webhook ID.
     * @param messageId The webhook message ID.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns WebhookAttemptArray A list of webhook attempts.
     * @throws ApiError
     */
    public static getWebhookMessageAttempts(
        id: string,
        messageId: number,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<WebhookAttemptArray> {
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
     * @param id The webhook ID.
     * @param messageId The webhook message ID.
     * @param attemptId The webhook attempt ID.
     * @param xTraceId Unique identifier associated with this request.
     * @returns WebhookAttemptSingle A single webhook attempt.
     * @throws ApiError
     */
    public static getSingleWebhookMessageAttempt(
        id: string,
        messageId: number,
        attemptId: number,
        xTraceId?: string,
    ): CancelablePromise<WebhookAttemptSingle> {
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
     * @param id The webhook ID.
     * @param messageId The webhook message ID.
     * @param attemptId The webhook message attempt ID.
     * @param xTraceId Unique identifier associated with this request.
     * @returns void
     * @throws ApiError
     */
    public static deleteWebhookMessageAttempt(
        id: string,
        messageId: number,
        attemptId: number,
        xTraceId?: string,
    ): CancelablePromise<void> {
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
     * @param id The webhook ID.
     * @param xTraceId Unique identifier associated with this request.
     * @returns any OK!
     * @throws ApiError
     */
    public static submitWebook(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<any> {
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
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns WebhookArray A list of webhooks.
     * @throws ApiError
     */
    public static listWebhook(
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<WebhookArray> {
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
     * @param requestBody JSON array or key=value pairs with the necessary webhook information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns WebhookSingle New webhook stored, result in response.
     * @throws ApiError
     */
    public static storeWebhook(
        requestBody: WebhookStore,
        xTraceId?: string,
    ): CancelablePromise<WebhookSingle> {
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
     * @param id The webhook ID.
     * @param xTraceId Unique identifier associated with this request.
     * @returns WebhookSingle The requested webhook.
     * @throws ApiError
     */
    public static getWebhook(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<WebhookSingle> {
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
     * @param id The webhook ID.
     * @param requestBody JSON array with updated webhook information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns WebhookSingle Updated webhook stored, result in response
     * @throws ApiError
     */
    public static updateWebhook(
        id: string,
        requestBody: WebhookUpdate,
        xTraceId?: string,
    ): CancelablePromise<WebhookSingle> {
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
     * @param id The webhook ID.
     * @param xTraceId Unique identifier associated with this request.
     * @returns void
     * @throws ApiError
     */
    public static deleteWebhook(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<void> {
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
