/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountTypeFilter } from '../models/AccountTypeFilter';
import type { AutocompleteAccountArray } from '../models/AutocompleteAccountArray';
import type { AutocompleteBillArray } from '../models/AutocompleteBillArray';
import type { AutocompleteBudgetArray } from '../models/AutocompleteBudgetArray';
import type { AutocompleteCategoryArray } from '../models/AutocompleteCategoryArray';
import type { AutocompleteCurrencyArray } from '../models/AutocompleteCurrencyArray';
import type { AutocompleteCurrencyCodeArray } from '../models/AutocompleteCurrencyCodeArray';
import type { AutocompleteObjectGroupArray } from '../models/AutocompleteObjectGroupArray';
import type { AutocompletePiggyArray } from '../models/AutocompletePiggyArray';
import type { AutocompletePiggyBalanceArray } from '../models/AutocompletePiggyBalanceArray';
import type { AutocompleteRecurrenceArray } from '../models/AutocompleteRecurrenceArray';
import type { AutocompleteRuleArray } from '../models/AutocompleteRuleArray';
import type { AutocompleteRuleGroupArray } from '../models/AutocompleteRuleGroupArray';
import type { AutocompleteTagArray } from '../models/AutocompleteTagArray';
import type { AutocompleteTransactionArray } from '../models/AutocompleteTransactionArray';
import type { AutocompleteTransactionIDArray } from '../models/AutocompleteTransactionIDArray';
import type { AutocompleteTransactionTypeArray } from '../models/AutocompleteTransactionTypeArray';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AutocompleteService {

    /**
     * Returns all accounts of the user returned in a basic auto-complete array.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @param date If the account is an asset account or a liability, the autocomplete will also return the balance of the account on this date.
     * @param types Optional filter on the account type(s) used in the autocomplete.
     * @returns AutocompleteAccountArray A list of accounts with very basic information.
     * @throws ApiError
     */
    public static getAccountsAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
        date?: string,
        types?: Array<AccountTypeFilter>,
    ): CancelablePromise<AutocompleteAccountArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/accounts',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
                'date': date,
                'types': types,
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
     * Returns all bills of the user returned in a basic auto-complete array.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompleteBillArray A list of bills with very basic information.
     * @throws ApiError
     */
    public static getBillsAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompleteBillArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/bills',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all budgets of the user returned in a basic auto-complete array.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompleteBudgetArray A list of budgets with very basic information.
     * @throws ApiError
     */
    public static getBudgetsAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompleteBudgetArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/budgets',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all categories of the user returned in a basic auto-complete array.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompleteCategoryArray A list of categories with very basic information.
     * @throws ApiError
     */
    public static getCategoriesAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompleteCategoryArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/categories',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all currencies of the user returned in a basic auto-complete array.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompleteCurrencyArray A list of currencies with very basic information.
     * @throws ApiError
     */
    public static getCurrenciesAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompleteCurrencyArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/currencies',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all currencies of the user returned in a basic auto-complete array. This endpoint is DEPRECATED and I suggest you DO NOT use it.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompleteCurrencyCodeArray A list of currencies with very basic information and the currency code between brackets. This endpoint is DEPRECATED and I suggest you DO NOT use it.
     * @throws ApiError
     */
    public static getCurrenciesCodeAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompleteCurrencyCodeArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/currencies-with-code',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all object groups of the user returned in a basic auto-complete array.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompleteObjectGroupArray A list of object groups with very basic information.
     * @throws ApiError
     */
    public static getObjectGroupsAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompleteObjectGroupArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/object-groups',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all piggy banks of the user returned in a basic auto-complete array.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompletePiggyArray A list of piggy banks with very basic information.
     * @throws ApiError
     */
    public static getPiggiesAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompletePiggyArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/piggy-banks',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all piggy banks of the user returned in a basic auto-complete array complemented with balance information.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompletePiggyBalanceArray A list of piggy banks with very basic balance information.
     * @throws ApiError
     */
    public static getPiggiesBalanceAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompletePiggyBalanceArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/piggy-banks-with-balance',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all recurring transactions of the user returned in a basic auto-complete array.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompleteRecurrenceArray A list of recurring transactions with very basic information.
     * @throws ApiError
     */
    public static getRecurringAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompleteRecurrenceArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/recurring',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all rule groups of the user returned in a basic auto-complete array.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompleteRuleGroupArray A list of rule groups with very basic information.
     * @throws ApiError
     */
    public static getRuleGroupsAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompleteRuleGroupArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/rule-groups',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all rules of the user returned in a basic auto-complete array.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompleteRuleArray A list of rules with very basic information.
     * @throws ApiError
     */
    public static getRulesAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompleteRuleArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/rules',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all tags of the user returned in a basic auto-complete array.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompleteTagArray A list of tags with very basic information.
     * @throws ApiError
     */
    public static getTagAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompleteTagArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/tags',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all transaction types returned in a basic auto-complete array. English only.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompleteTransactionTypeArray A list of transaction types with very basic information.
     * @throws ApiError
     */
    public static getTransactionTypesAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompleteTransactionTypeArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/transaction-types',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all transaction descriptions of the user returned in a basic auto-complete array.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompleteTransactionArray A list of transaction descriptions with very basic information.
     * @throws ApiError
     */
    public static getTransactionsAc(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompleteTransactionArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/transactions',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
     * Returns all transactions, complemented with their ID, of the user returned in a basic auto-complete array. This endpoint is DEPRECATED and I suggest you DO NOT use it.
     * @param xTraceId Unique identifier associated with this request.
     * @param query The autocomplete search query.
     * @param limit The number of items returned.
     * @returns AutocompleteTransactionIDArray A list of transactions with very basic information. This endpoint is DEPRECATED and I suggest you DO NOT use it.
     * @throws ApiError
     */
    public static getTransactionsIdac(
        xTraceId?: string,
        query?: string,
        limit?: number,
    ): CancelablePromise<AutocompleteTransactionIDArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/autocomplete/transactions-with-id',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'query': query,
                'limit': limit,
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
