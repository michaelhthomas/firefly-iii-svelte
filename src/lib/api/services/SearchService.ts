/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountArray } from '../models/AccountArray';
import type { AccountSearchFieldFilter } from '../models/AccountSearchFieldFilter';
import type { AccountTypeFilter } from '../models/AccountTypeFilter';
import type { TransactionArray } from '../models/TransactionArray';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SearchService {

    /**
     * Search for accounts
     * Search for accounts
     * @returns AccountArray A list of accounts.
     * @throws ApiError
     */
    public static searchAccounts({
        query,
        field,
        xTraceId,
        limit,
        page,
        type,
    }: {
        /**
         * The query you wish to search for.
         */
        query: string,
        /**
         * The account field(s) you want to search in.
         */
        field: AccountSearchFieldFilter,
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
         * The type of accounts you wish to limit the search to.
         */
        type?: AccountTypeFilter,
    }): CancelablePromise<AccountArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/search/accounts',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'limit': limit,
                'page': page,
                'query': query,
                'type': type,
                'field': field,
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
     * Search for transactions
     * Searches through the users transactions.
     * @returns TransactionArray A list of transactions.
     * @throws ApiError
     */
    public static searchTransactions({
        query,
        xTraceId,
        limit,
        page,
    }: {
        /**
         * The query you wish to search for.
         */
        query: string,
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
    }): CancelablePromise<TransactionArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/search/transactions',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'limit': limit,
                'page': page,
                'query': query,
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
