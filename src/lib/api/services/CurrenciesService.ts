/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountArray } from '../models/AccountArray';
import type { AccountTypeFilter } from '../models/AccountTypeFilter';
import type { AvailableBudgetArray } from '../models/AvailableBudgetArray';
import type { BillArray } from '../models/BillArray';
import type { BudgetLimitArray } from '../models/BudgetLimitArray';
import type { CurrencyArray } from '../models/CurrencyArray';
import type { CurrencySingle } from '../models/CurrencySingle';
import type { CurrencyStore } from '../models/CurrencyStore';
import type { CurrencyUpdate } from '../models/CurrencyUpdate';
import type { RecurrenceArray } from '../models/RecurrenceArray';
import type { RuleArray } from '../models/RuleArray';
import type { TransactionArray } from '../models/TransactionArray';
import type { TransactionTypeFilter } from '../models/TransactionTypeFilter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CurrenciesService {

    /**
     * List all accounts with this currency.
     * List all accounts with this currency.
     * @returns AccountArray A list of accounts
     * @throws ApiError
     */
    public static listAccountByCurrency({
        code,
        xTraceId,
        limit,
        page,
        date,
        type,
    }: {
        /**
         * The currency code.
         */
        code: string,
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
            url: '/v1/currencies/{code}/accounts',
            path: {
                'code': code,
            },
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
     * List all available budgets with this currency.
     * List all available budgets with this currency.
     * @returns AvailableBudgetArray A list of available budgets
     * @throws ApiError
     */
    public static listAvailableBudgetByCurrency({
        code,
        xTraceId,
        limit,
        page,
    }: {
        /**
         * The currency code.
         */
        code: string,
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
    }): CancelablePromise<AvailableBudgetArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/currencies/{code}/available-budgets',
            path: {
                'code': code,
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
     * List all bills with this currency.
     * List all bills with this currency.
     * @returns BillArray A list of bills.
     * @throws ApiError
     */
    public static listBillByCurrency({
        code,
        xTraceId,
        limit,
        page,
    }: {
        /**
         * The currency code.
         */
        code: string,
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
    }): CancelablePromise<BillArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/currencies/{code}/bills',
            path: {
                'code': code,
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
     * List all budget limits with this currency
     * List all budget limits with this currency
     * @returns BudgetLimitArray A list of budget limits.
     * @throws ApiError
     */
    public static listBudgetLimitByCurrency({
        code,
        xTraceId,
        limit,
        page,
        start,
        end,
    }: {
        /**
         * The currency code.
         */
        code: string,
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
         * Start date for the budget limit list.
         */
        start?: string,
        /**
         * End date for the budget limit list.
         */
        end?: string,
    }): CancelablePromise<BudgetLimitArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/currencies/{code}/budget_limits',
            path: {
                'code': code,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'limit': limit,
                'page': page,
                'start': start,
                'end': end,
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
     * List all recurring transactions with this currency.
     * List all recurring transactions with this currency.
     * @returns RecurrenceArray A list of recurring transactions
     * @throws ApiError
     */
    public static listRecurrenceByCurrency({
        code,
        xTraceId,
        limit,
        page,
    }: {
        /**
         * The currency code.
         */
        code: string,
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
            url: '/v1/currencies/{code}/recurrences',
            path: {
                'code': code,
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
     * List all rules with this currency.
     * List all rules with this currency.
     * @returns RuleArray A list of rules
     * @throws ApiError
     */
    public static listRuleByCurrency({
        code,
        xTraceId,
        limit,
        page,
    }: {
        /**
         * The currency code.
         */
        code: string,
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
    }): CancelablePromise<RuleArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/currencies/{code}/rules',
            path: {
                'code': code,
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
     * List all transactions with this currency.
     * List all transactions with this currency.
     * @returns TransactionArray A list of transactions.
     * @throws ApiError
     */
    public static listTransactionByCurrency({
        code,
        xTraceId,
        limit,
        page,
        start,
        end,
        type,
    }: {
        /**
         * The currency code.
         */
        code: string,
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
         * A date formatted YYYY-MM-DD, to limit the list of transactions.
         *
         */
        start?: string,
        /**
         * A date formatted YYYY-MM-DD, to limit the list of transactions.
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
            url: '/v1/currencies/{code}/transactions',
            path: {
                'code': code,
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
     * List all currencies.
     * List all currencies.
     * @returns CurrencyArray A list of currencies.
     * @throws ApiError
     */
    public static listCurrency({
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
    }): CancelablePromise<CurrencyArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/currencies',
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
     * Store a new currency
     * Creates a new currency. The data required can be submitted as a JSON body or as a list of parameters.
     * @returns CurrencySingle New currency stored, result in response.
     * @throws ApiError
     */
    public static storeCurrency({
        requestBody,
        xTraceId,
    }: {
        /**
         * JSON array or key=value pairs with the necessary currency information. See the model for the exact specifications.
         */
        requestBody: CurrencyStore,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<CurrencySingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/currencies',
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
     * Enable a single currency.
     * Enable a single currency.
     * @returns void
     * @throws ApiError
     */
    public static enableCurrency({
        code,
        xTraceId,
    }: {
        /**
         * The currency code.
         */
        code: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/currencies/{code}/enable',
            path: {
                'code': code,
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
     * Disable a currency.
     * Disable a currency.
     * @returns void
     * @throws ApiError
     */
    public static disableCurrency({
        code,
        xTraceId,
    }: {
        /**
         * The currency code.
         */
        code: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/currencies/{code}/disable',
            path: {
                'code': code,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                409: `Currency cannot be disabled, because it is still in use.`,
                500: `Internal exception`,
            },
        });
    }

    /**
     * Make currency default currency.
     * Make this currency the default currency for the user. If the currency is not enabled, it will be enabled as well.
     * @returns void
     * @throws ApiError
     */
    public static defaultCurrency({
        code,
        xTraceId,
    }: {
        /**
         * The currency code.
         */
        code: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/currencies/{code}/default',
            path: {
                'code': code,
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
     * Get a single currency.
     * Get a single currency.
     * @returns CurrencySingle The requested currency
     * @throws ApiError
     */
    public static getCurrency({
        code,
        xTraceId,
    }: {
        /**
         * The currency code.
         */
        code: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<CurrencySingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/currencies/{code}',
            path: {
                'code': code,
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
     * Update existing currency.
     * Update existing currency.
     * @returns CurrencySingle Updated currency stored, result in response
     * @throws ApiError
     */
    public static updateCurrency({
        code,
        formData,
        xTraceId,
    }: {
        /**
         * The currency code.
         */
        code: string,
        /**
         * JSON array with updated currency information. See the model for the exact specifications.
         */
        formData: CurrencyUpdate,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<CurrencySingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/currencies/{code}',
            path: {
                'code': code,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
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
     * Delete a currency.
     * Delete a currency.
     * @returns void
     * @throws ApiError
     */
    public static deleteCurrency({
        code,
        xTraceId,
    }: {
        /**
         * The currency code.
         */
        code: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/currencies/{code}',
            path: {
                'code': code,
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
     * Get the user's default currency.
     * Get the user's default currency.
     * @returns CurrencySingle The default currency
     * @throws ApiError
     */
    public static getDefaultCurrency({
        xTraceId,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<CurrencySingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/currencies/default',
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
