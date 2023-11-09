/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentArray } from '../models/AttachmentArray';
import type { BudgetArray } from '../models/BudgetArray';
import type { BudgetLimit } from '../models/BudgetLimit';
import type { BudgetLimitArray } from '../models/BudgetLimitArray';
import type { BudgetLimitSingle } from '../models/BudgetLimitSingle';
import type { BudgetLimitStore } from '../models/BudgetLimitStore';
import type { BudgetSingle } from '../models/BudgetSingle';
import type { BudgetStore } from '../models/BudgetStore';
import type { BudgetUpdate } from '../models/BudgetUpdate';
import type { TransactionArray } from '../models/TransactionArray';
import type { TransactionTypeFilter } from '../models/TransactionTypeFilter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BudgetsService {

    /**
     * List all transactions by a budget limit ID.
     * List all the transactions within one budget limit. The start and end date are dictated by the budget limit.
     * @returns TransactionArray A list of transactions.
     * @throws ApiError
     */
    public static listTransactionByBudgetLimit({
        id,
        limitId,
        xTraceId,
        limit,
        page,
        type,
    }: {
        /**
         * The ID of the budget. The budget limit MUST be associated to the budget ID.
         */
        id: string,
        /**
         * The ID of the budget limit. The budget limit MUST be associated to the budget ID.
         */
        limitId: string,
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
         * Optional filter on the transaction type(s) returned
         */
        type?: TransactionTypeFilter,
    }): CancelablePromise<TransactionArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/budgets/{id}/limits/{limitId}/transactions',
            path: {
                'id': id,
                'limitId': limitId,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'limit': limit,
                'page': page,
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
     * Get all limits for a budget.
     * Get all budget limits for this budget and the money spent, and money left. You can limit the list by submitting a date range as well. The "spent" array for each budget limit is NOT influenced by the start and end date of your query, but by the start and end date of the budget limit itself.
     *
     * @returns BudgetLimitArray A list of budget limits applicable to this budget.
     * @throws ApiError
     */
    public static listBudgetLimitByBudget({
        id,
        xTraceId,
        start,
        end,
    }: {
        /**
         * The ID of the requested budget.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
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
    }): CancelablePromise<BudgetLimitArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/budgets/{id}/limits',
            path: {
                'id': id,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
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
     * Store new budget limit.
     * Store a new budget limit under this budget.
     * @returns BudgetLimitSingle New budget limit stored, result in response.
     * @throws ApiError
     */
    public static storeBudgetLimit({
        id,
        requestBody,
        xTraceId,
    }: {
        /**
         * The ID of the budget.
         */
        id: string,
        /**
         * JSON array or key=value pairs with the necessary budget information. See the model for the exact specifications.
         */
        requestBody: BudgetLimitStore,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<BudgetLimitSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/budgets/{id}/limits',
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
     * Get single budget limit.
     * @returns BudgetLimitSingle The requested budget limit
     * @throws ApiError
     */
    public static getBudgetLimit({
        id,
        limitId,
        xTraceId,
    }: {
        /**
         * The ID of the budget. The budget limit MUST be associated to the budget ID.
         */
        id: string,
        /**
         * The ID of the budget limit. The budget limit MUST be associated to the budget ID.
         */
        limitId: number,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<BudgetLimitSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/budgets/{id}/limits/{limitId}',
            path: {
                'id': id,
                'limitId': limitId,
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
     * Update existing budget limit.
     * Update existing budget limit.
     * @returns BudgetLimitSingle Updated budget limit stored, result in response
     * @throws ApiError
     */
    public static updateBudgetLimit({
        id,
        limitId,
        requestBody,
        xTraceId,
    }: {
        /**
         * The ID of the budget. The budget limit MUST be associated to the budget ID.
         */
        id: string,
        /**
         * The ID of the budget limit. The budget limit MUST be associated to the budget ID.
         */
        limitId: string,
        /**
         * JSON array with updated budget limit information. See the model for the exact specifications.
         */
        requestBody: BudgetLimit,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<BudgetLimitSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/budgets/{id}/limits/{limitId}',
            path: {
                'id': id,
                'limitId': limitId,
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
     * Delete a budget limit.
     * Delete a budget limit.
     * @returns void
     * @throws ApiError
     */
    public static deleteBudgetLimit({
        id,
        limitId,
        xTraceId,
    }: {
        /**
         * The ID of the budget. The budget limit MUST be associated to the budget ID.
         */
        id: string,
        /**
         * The ID of the budget limit. The budget limit MUST be associated to the budget ID.
         */
        limitId: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/budgets/{id}/limits/{limitId}',
            path: {
                'id': id,
                'limitId': limitId,
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
     * Get list of budget limits by date
     * Get all budget limits for for this date range.
     *
     * @returns BudgetLimitArray A list of budget limits.
     * @throws ApiError
     */
    public static listBudgetLimit({
        start,
        end,
        xTraceId,
    }: {
        /**
         * A date formatted YYYY-MM-DD.
         *
         */
        start: string,
        /**
         * A date formatted YYYY-MM-DD.
         *
         */
        end: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<BudgetLimitArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/budget-limits',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
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
     * All transactions to a budget.
     * Get all transactions linked to a budget, possibly limited by start and end
     * @returns TransactionArray A list of transactions.
     * @throws ApiError
     */
    public static listTransactionByBudget({
        id,
        xTraceId,
        limit,
        page,
        start,
        end,
        type,
    }: {
        /**
         * The ID of the budget.
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
         * Optional filter on the transaction type(s) returned
         */
        type?: TransactionTypeFilter,
    }): CancelablePromise<TransactionArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/budgets/{id}/transactions',
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
     * Lists all attachments of a budget.
     * Lists all attachments.
     * @returns AttachmentArray A list of attachments
     * @throws ApiError
     */
    public static listAttachmentByBudget({
        id,
        xTraceId,
        limit,
        page,
    }: {
        /**
         * The ID of the budget.
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
            url: '/v1/budgets/{id}/attachments',
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
     * List all budgets.
     * List all the budgets the user has made. If the start date and end date are submitted as well, the "spent" array will be updated accordingly.
     * @returns BudgetArray A list of budgets.
     * @throws ApiError
     */
    public static listBudget({
        xTraceId,
        limit,
        page,
        start,
        end,
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
         * A date formatted YYYY-MM-DD, to get info on how much the user has spent. You must submit both start and end.
         *
         */
        start?: string,
        /**
         * A date formatted YYYY-MM-DD, to get info on how much the user has spent. You must submit both start and end.
         *
         */
        end?: string,
    }): CancelablePromise<BudgetArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/budgets',
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
     * Store a new budget
     * Creates a new budget. The data required can be submitted as a JSON body or as a list of parameters.
     * @returns BudgetSingle New budget stored, result in response.
     * @throws ApiError
     */
    public static storeBudget({
        requestBody,
        xTraceId,
    }: {
        /**
         * JSON array or key=value pairs with the necessary budget information. See the model for the exact specifications.
         */
        requestBody: BudgetStore,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<BudgetSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/budgets',
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
     * Get a single budget.
     * Get a single budget. If the start date and end date are submitted as well, the "spent" array will be updated accordingly.
     * @returns BudgetSingle The requested budget
     * @throws ApiError
     */
    public static getBudget({
        id,
        xTraceId,
        start,
        end,
    }: {
        /**
         * The ID of the requested budget.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * A date formatted YYYY-MM-DD, to get info on how much the user has spent.
         *
         */
        start?: string,
        /**
         * A date formatted YYYY-MM-DD, to get info on how much the user has spent.
         *
         */
        end?: string,
    }): CancelablePromise<BudgetSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/budgets/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
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
     * Update existing budget.
     * Update existing budget. This endpoint cannot be used to set budget amount limits.
     * @returns BudgetSingle Updated budget stored, result in response
     * @throws ApiError
     */
    public static updateBudget({
        id,
        requestBody,
        xTraceId,
    }: {
        /**
         * The ID of the budget.
         */
        id: string,
        /**
         * JSON array with updated budget information. See the model for the exact specifications.
         */
        requestBody: BudgetUpdate,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<BudgetSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/budgets/{id}',
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
     * Delete a budget.
     * Delete a budget. Transactions will not be deleted.
     * @returns void
     * @throws ApiError
     */
    public static deleteBudget({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the budget.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/budgets/{id}',
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
