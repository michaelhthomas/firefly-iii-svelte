/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentArray } from '../models/AttachmentArray';
import type { PiggyBankEventArray } from '../models/PiggyBankEventArray';
import type { TransactionArray } from '../models/TransactionArray';
import type { TransactionLinkArray } from '../models/TransactionLinkArray';
import type { TransactionSingle } from '../models/TransactionSingle';
import type { TransactionStore } from '../models/TransactionStore';
import type { TransactionTypeFilter } from '../models/TransactionTypeFilter';
import type { TransactionUpdate } from '../models/TransactionUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TransactionsService {

    /**
     * Lists all the transaction links for an individual journal (individual split).
     * Lists all the transaction links for an individual journal (a split). Don't use the group ID, you need the actual underlying journal (the split).
     * @param id The ID of the transaction journal / the split.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns TransactionLinkArray A list of transaction links.
     * @throws ApiError
     */
    public static listLinksByJournal(
        id: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<TransactionLinkArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/transaction-journals/{id}/links',
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
     * Get a single transaction, based on one of the underlying transaction journals (transaction splits).
     * Get a single transaction by underlying journal (split).
     * @param id The ID of the transaction journal (split).
     * @param xTraceId Unique identifier associated with this request.
     * @returns TransactionSingle The requested transaction.
     * @throws ApiError
     */
    public static getTransactionByJournal(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<TransactionSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/transaction-journals/{id}',
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
     * Delete split from transaction
     * Delete an individual journal (split) from a transaction.
     * @param id The ID of the transaction journal (the split) you wish to delete.
     * @param xTraceId Unique identifier associated with this request.
     * @returns void
     * @throws ApiError
     */
    public static deleteTransactionJournal(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/transaction-journals/{id}',
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
     * Lists all attachments.
     * Lists all attachments.
     * @param id The ID of the transaction.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns AttachmentArray A list of attachments
     * @throws ApiError
     */
    public static listAttachmentByTransaction(
        id: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<AttachmentArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/transactions/{id}/attachments',
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
     * Lists all piggy bank events.
     * Lists all piggy bank events.
     * @param id The ID of the transaction.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns PiggyBankEventArray A list of piggy bank events.
     * @throws ApiError
     */
    public static listEventByTransaction(
        id: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<PiggyBankEventArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/transactions/{id}/piggy-bank-events',
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
     * List all the user's transactions.
     *
     * List all the user's transactions.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @param start A date formatted YYYY-MM-DD. This is the start date of the selected range (inclusive).
     *
     * @param end A date formatted YYYY-MM-DD. This is the end date of the selected range (inclusive).
     *
     * @param type Optional filter on the transaction type(s) returned.
     * @returns TransactionArray A list of transactions.
     * @throws ApiError
     */
    public static listTransaction(
        xTraceId?: string,
        limit?: number,
        page?: number,
        start?: string,
        end?: string,
        type?: TransactionTypeFilter,
    ): CancelablePromise<TransactionArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/transactions',
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
     * Store a new transaction
     * Creates a new transaction. The data required can be submitted as a JSON body or as a list of parameters.
     * @param requestBody JSON array or key=value pairs with the necessary transaction information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns TransactionSingle New transaction stored(s), result in response.
     * @throws ApiError
     */
    public static storeTransaction(
        requestBody: TransactionStore,
        xTraceId?: string,
    ): CancelablePromise<TransactionSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/transactions',
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
     * Get a single transaction.
     * Get a single transaction.
     * @param id The ID of the transaction.
     * @param xTraceId Unique identifier associated with this request.
     * @returns TransactionSingle The requested transaction.
     * @throws ApiError
     */
    public static getTransaction(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<TransactionSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/transactions/{id}',
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
     * Update existing transaction. For more information, see https://docs.firefly-iii.org/firefly-iii/api/specials
     * Update an existing transaction.
     * @param id The ID of the transaction.
     * @param requestBody JSON array with updated transaction information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns TransactionSingle Updated transaction stored, result in response
     * @throws ApiError
     */
    public static updateTransaction(
        id: string,
        requestBody: TransactionUpdate,
        xTraceId?: string,
    ): CancelablePromise<TransactionSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/transactions/{id}',
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
     * Delete a transaction.
     * Delete a transaction.
     * @param id The ID of the transaction.
     * @param xTraceId Unique identifier associated with this request.
     * @returns void
     * @throws ApiError
     */
    public static deleteTransaction(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/transactions/{id}',
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
