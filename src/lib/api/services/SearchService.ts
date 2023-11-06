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
     * @param query The query you wish to search for.
     * @param field The account field(s) you want to search in.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @param type The type of accounts you wish to limit the search to.
     * @returns AccountArray A list of accounts.
     * @throws ApiError
     */
    public static searchAccounts(
        query: string,
        field: AccountSearchFieldFilter,
        xTraceId?: string,
        limit?: number,
        page?: number,
        type?: AccountTypeFilter,
    ): CancelablePromise<AccountArray> {
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
     * @param query The query you wish to search for.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns TransactionArray A list of transactions.
     * @throws ApiError
     */
    public static searchTransactions(
        query: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<TransactionArray> {
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
