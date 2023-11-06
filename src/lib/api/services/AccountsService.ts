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
     * @param id The ID of the account.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param type Optional filter on the transaction type(s) returned.
     * @returns TransactionArray A list of transactions
     * @throws ApiError
     */
    public static listTransactionByAccount(
        id: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
        start?: string,
        end?: string,
        type?: TransactionTypeFilter,
    ): CancelablePromise<TransactionArray> {
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
     * @param id The ID of the account.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns AttachmentArray A list of attachments
     * @throws ApiError
     */
    public static listAttachmentByAccount(
        id: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<AttachmentArray> {
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
     * @param id The ID of the account.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns PiggyBankArray A list of piggy banks
     * @throws ApiError
     */
    public static listPiggyBankByAccount(
        id: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<PiggyBankArray> {
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
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @param date A date formatted YYYY-MM-DD. When added to the request, Firefly III will show the account's balance on that day.
     *
     * @param type Optional filter on the account type(s) returned
     * @returns AccountArray A list of accounts
     * @throws ApiError
     */
    public static listAccount(
        xTraceId?: string,
        limit?: number,
        page?: number,
        date?: string,
        type?: AccountTypeFilter,
    ): CancelablePromise<AccountArray> {
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
     * @param requestBody JSON array with the necessary account information or key=value pairs. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns AccountSingle New account stored, result in response.
     * @throws ApiError
     */
    public static storeAccount(
        requestBody: AccountStore,
        xTraceId?: string,
    ): CancelablePromise<AccountSingle> {
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
     * @param id The ID of the account.
     * @param xTraceId Unique identifier associated with this request.
     * @param date A date formatted YYYY-MM-DD. When added to the request, Firefly III will show the account's balance on that day.
     *
     * @returns AccountSingle The requested account
     * @throws ApiError
     */
    public static getAccount(
        id: string,
        xTraceId?: string,
        date?: string,
    ): CancelablePromise<AccountSingle> {
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
     * @param id The ID of the account.
     * @param requestBody JSON array or formdata with updated account information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns AccountSingle Updated account stored, result in response
     * @throws ApiError
     */
    public static updateAccount(
        id: string,
        requestBody: AccountUpdate,
        xTraceId?: string,
    ): CancelablePromise<AccountSingle> {
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
     * @param id The ID of the account.
     * @param xTraceId Unique identifier associated with this request.
     * @returns void
     * @throws ApiError
     */
    public static deleteAccount(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<void> {
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
