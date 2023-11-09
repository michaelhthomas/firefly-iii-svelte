/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecurrenceArray } from '../models/RecurrenceArray';
import type { RecurrenceSingle } from '../models/RecurrenceSingle';
import type { RecurrenceStore } from '../models/RecurrenceStore';
import type { RecurrenceUpdate } from '../models/RecurrenceUpdate';
import type { TransactionArray } from '../models/TransactionArray';
import type { TransactionTypeFilter } from '../models/TransactionTypeFilter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RecurrencesService {

    /**
     * List all transactions created by a recurring transaction.
     * List all transactions created by a recurring transaction, optionally limited to the date ranges specified.
     * @returns TransactionArray A list of transactions
     * @throws ApiError
     */
    public static listTransactionByRecurrence({
        id,
        xTraceId,
        limit,
        page,
        start,
        end,
        type,
    }: {
        /**
         * The ID of the recurring transaction.
         */
        id: string,
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
        /**
         * A date formatted YYYY-MM-DD. Both the start and end date must be present.
         *
         */
        start?: string,
        /**
         * A date formatted YYYY-MM-DD. Both the start and end date must be present.
         *
         */
        end?: string,
        /**
         * Optional filter on the transaction type(s) returned
         */
        type?: TransactionTypeFilter,
    }): CancelablePromise<TransactionArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/recurrences/{id}/transactions',
            path: {
                'id': id,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'limit': limit,
                'page': page,
                'start': start,
                'end': end,
                'type': type,
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
     * List all recurring transactions.
     * List all recurring transactions.
     * @returns RecurrenceArray A list of recurring transactions.
     * @throws ApiError
     */
    public static listRecurrence({
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
    }): CancelablePromise<RecurrenceArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/recurrences',
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
     * Store a new recurring transaction
     * Creates a new recurring transaction. The data required can be submitted as a JSON body or as a list of parameters.
     * @returns RecurrenceSingle New recurring transaction stored, result in response.
     * @throws ApiError
     */
    public static storeRecurrence({
        requestBody,
        xTraceId,
    }: {
        /**
         * JSON array or key=value pairs with the necessary recurring transaction information. See the model for the exact specifications.
         */
        requestBody: RecurrenceStore,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<RecurrenceSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/recurrences',
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
     * Get a single recurring transaction.
     * Get a single recurring transaction.
     * @returns RecurrenceSingle The requested recurring transaction
     * @throws ApiError
     */
    public static getRecurrence({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the recurring transaction.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<RecurrenceSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/recurrences/{id}',
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
     * Update existing recurring transaction.
     * Update existing recurring transaction.
     * @returns RecurrenceSingle Updated recurring transaction stored, result in response
     * @throws ApiError
     */
    public static updateRecurrence({
        id,
        requestBody,
        xTraceId,
    }: {
        /**
         * The ID of the recurring transaction.
         */
        id: string,
        /**
         * JSON array with updated recurring transaction information. See the model for the exact specifications.
         */
        requestBody: RecurrenceUpdate,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<RecurrenceSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/recurrences/{id}',
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
     * Delete a recurring transaction.
     * Delete a recurring transaction. Transactions created by the recurring transaction will not be deleted.
     * @returns void
     * @throws ApiError
     */
    public static deleteRecurrence({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the recurring transaction.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/recurrences/{id}',
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
