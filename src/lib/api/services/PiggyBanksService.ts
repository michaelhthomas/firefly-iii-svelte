/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentArray } from '../models/AttachmentArray';
import type { PiggyBankArray } from '../models/PiggyBankArray';
import type { PiggyBankEventArray } from '../models/PiggyBankEventArray';
import type { PiggyBankSingle } from '../models/PiggyBankSingle';
import type { PiggyBankStore } from '../models/PiggyBankStore';
import type { PiggyBankUpdate } from '../models/PiggyBankUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PiggyBanksService {

    /**
     * List all events linked to a piggy bank.
     * List all events linked to a piggy bank (adding and removing money).
     * @param id The ID of the piggy bank
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns PiggyBankEventArray A list of piggy bank related events
     * @throws ApiError
     */
    public static listEventByPiggyBank(
        id: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<PiggyBankEventArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/piggy-banks/{id}/events',
            path: {
                'id': id,
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
     * Lists all attachments.
     * Lists all attachments.
     * @param id The ID of the piggy bank.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns AttachmentArray A list of attachments
     * @throws ApiError
     */
    public static listAttachmentByPiggyBank(
        id: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<AttachmentArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/piggy-banks/{id}/attachments',
            path: {
                'id': id,
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
     * List all piggy banks.
     * List all piggy banks.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns PiggyBankArray A list of piggy banks
     * @throws ApiError
     */
    public static listPiggyBank(
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<PiggyBankArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/piggy-banks',
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
     * Store a new piggy bank
     * Creates a new piggy bank. The data required can be submitted as a JSON body or as a list of parameters.
     * @param requestBody JSON array or key=value pairs with the necessary piggy bank information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns PiggyBankSingle New piggy bank stored, result in response.
     * @throws ApiError
     */
    public static storePiggyBank(
        requestBody: PiggyBankStore,
        xTraceId?: string,
    ): CancelablePromise<PiggyBankSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/piggy-banks',
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
     * Get a single piggy bank.
     * Get a single piggy bank.
     * @param id The ID of the piggy bank.
     * @param xTraceId Unique identifier associated with this request.
     * @returns PiggyBankSingle The requested piggy bank
     * @throws ApiError
     */
    public static getPiggyBank(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<PiggyBankSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/piggy-banks/{id}',
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
     * Update existing piggy bank.
     * Update existing piggy bank.
     * @param id The ID of the piggy bank
     * @param requestBody JSON array with updated piggy bank information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns PiggyBankSingle Updated piggy bank stored, result in response
     * @throws ApiError
     */
    public static updatePiggyBank(
        id: string,
        requestBody: PiggyBankUpdate,
        xTraceId?: string,
    ): CancelablePromise<PiggyBankSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/piggy-banks/{id}',
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
     * Delete a piggy bank.
     * Delete a piggy bank.
     * @param id The ID of the piggy bank.
     * @param xTraceId Unique identifier associated with this request.
     * @returns void
     * @throws ApiError
     */
    public static deletePiggyBank(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/piggy-banks/{id}',
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
