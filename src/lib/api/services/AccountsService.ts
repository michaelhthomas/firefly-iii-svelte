/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountArray } from '../models/AccountArray';
import type { AccountSingle } from '../models/AccountSingle';
import type { AccountStore } from '../models/AccountStore';
import type { AccountTypeFilter } from '../models/AccountTypeFilter';
import type { AccountUpdate } from '../models/AccountUpdate';
import type { AttachmentArray } from '../models/AttachmentArray';
import type { PiggyBankArray } from '../models/PiggyBankArray';
import type { TransactionArray } from '../models/TransactionArray';
import type { TransactionTypeFilter } from '../models/TransactionTypeFilter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountsService {

    /**
     * List all transactions related to the account.
     * This endpoint returns a list of all the transactions connected to the account.
     *
     * @returns TransactionArray A list of transactions
     * @throws ApiError
     */
    public static listTransactionByAccount({
        id,
        xTraceId,
        limit,
        page,
        start,
        end,
        type,
    }: {
        /**
         * The ID of the account.
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
         * A date formatted YYYY-MM-DD.
         *
         */
        start?: string,
        /**
         * A date formatted YYYY-MM-DD.
         *
         */
        end?: string,
        /**
         * Optional filter on the transaction type(s) returned.
         */
        type?: TransactionTypeFilter,
    }): CancelablePromise<TransactionArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/accounts/{id}/transactions',
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
     * Lists all attachments.
     * Lists all attachments.
     * @returns AttachmentArray A list of attachments
     * @throws ApiError
     */
    public static listAttachmentByAccount({
        id,
        xTraceId,
        limit,
        page,
    }: {
        /**
         * The ID of the account.
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
    }): CancelablePromise<AttachmentArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/accounts/{id}/attachments',
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
     * List all piggy banks related to the account.
     * This endpoint returns a list of all the piggy banks connected to the account.
     *
     * @returns PiggyBankArray A list of piggy banks
     * @throws ApiError
     */
    public static listPiggyBankByAccount({
        id,
        xTraceId,
        limit,
        page,
    }: {
        /**
         * The ID of the account.
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
    }): CancelablePromise<PiggyBankArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/accounts/{id}/piggy-banks',
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
     * List all accounts.
     * This endpoint returns a list of all the accounts owned by the authenticated user.
     *
     * @returns AccountArray A list of accounts
     * @throws ApiError
     */
    public static listAccount({
        xTraceId,
        limit,
        page,
        date,
        type,
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
        /**
         * A date formatted YYYY-MM-DD. When added to the request, Firefly III will show the account's balance on that day.
         *
         */
        date?: string,
        /**
         * Optional filter on the account type(s) returned
         */
        type?: AccountTypeFilter,
    }): CancelablePromise<AccountArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/accounts',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'limit': limit,
                'page': page,
                'date': date,
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
     * Create new account.
     * Creates a new account. The data required can be submitted as a JSON body or as a list of parameters (in key=value pairs, like a webform).
     * @returns AccountSingle New account stored, result in response.
     * @throws ApiError
     */
    public static storeAccount({
        requestBody,
        xTraceId,
    }: {
        /**
         * JSON array with the necessary account information or key=value pairs. See the model for the exact specifications.
         */
        requestBody: AccountStore,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<AccountSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/accounts',
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
     * Get single account.
     * Returns a single account by its ID.
     *
     * @returns AccountSingle The requested account
     * @throws ApiError
     */
    public static getAccount({
        id,
        xTraceId,
        date,
    }: {
        /**
         * The ID of the account.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * A date formatted YYYY-MM-DD. When added to the request, Firefly III will show the account's balance on that day.
         *
         */
        date?: string,
    }): CancelablePromise<AccountSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/accounts/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'date': date,
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
     * Update existing account.
     * Used to update a single account. All fields that are not submitted will be cleared (set to NULL). The model will tell you which fields are mandatory.
     *
     * @returns AccountSingle Updated account stored, result in response
     * @throws ApiError
     */
    public static updateAccount({
        id,
        requestBody,
        xTraceId,
    }: {
        /**
         * The ID of the account.
         */
        id: string,
        /**
         * JSON array or formdata with updated account information. See the model for the exact specifications.
         */
        requestBody: AccountUpdate,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<AccountSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/accounts/{id}',
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
     * Permanently delete account.
     * Will permanently delete an account. Any associated transactions and piggy banks are ALSO deleted. Cannot be recovered from.
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteAccount({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the account.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/accounts/{id}',
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
