/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InsightGroup } from '../models/InsightGroup';
import type { InsightTotal } from '../models/InsightTotal';
import type { InsightTransfer } from '../models/InsightTransfer';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InsightService {

    /**
     * Insight into expenses, grouped by expense account.
     * This endpoint gives a summary of the expenses made by the user, grouped by expense account.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you add the accounts ID's of expense accounts, only those accounts
     * are included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those
     * asset accounts / liabilities will be included. You can combine both asset / liability and expense account ID's.
     * Other account ID's will be ignored.
     *
     * @returns InsightGroup A list of expense accounts and expense details. Each expense acccount has one row per currency.
     * @throws ApiError
     */
    public static insightExpenseExpense(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/expense/expense',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into expenses, grouped by asset account.
     * This endpoint gives a summary of the expenses made by the user, grouped by asset account.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightGroup A list of asset accounts and expense details. Each asset account has one row per currency.
     * @throws ApiError
     */
    public static insightExpenseAsset(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/expense/asset',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into income, grouped by revenue account.
     * This endpoint gives a summary of the income received by the user, grouped by revenue account.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you add the accounts ID's of revenue accounts, only those accounts
     * are included in the results. If you include ID's of asset accounts or liabilities, only deposits to those
     * asset accounts / liabilities will be included. You can combine both asset / liability and deposit account ID's.
     * Other account ID's will be ignored.
     *
     * @returns InsightGroup A list of revenue accounts and income details. Each revenue acccount has one row per currency.
     * @throws ApiError
     */
    public static insightIncomeRevenue(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/income/revenue',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into income, grouped by asset account.
     * This endpoint gives a summary of the income received by the user, grouped by asset account.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightGroup A list of asset accounts and income details. Each asset account has one row per currency.
     * @throws ApiError
     */
    public static insightIncomeAsset(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/income/asset',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into transfers, grouped by account.
     * This endpoint gives a summary of the transfers made by the user, grouped by asset account or lability.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightTransfer A list of asset accounts and transfer details. Each asset account has one row per currency.
     * @throws ApiError
     */
    public static insightTransfers(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightTransfer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/transfer/asset',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into expenses, grouped by bill.
     * This endpoint gives a summary of the expenses made by the user, grouped by (any) bill.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param billsArray The bills to be included in the results.
     *
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightGroup A list of budget and expense details. Each budget has one row per currency.
     * @throws ApiError
     */
    public static insightExpenseBill(
        start: string,
        end: string,
        xTraceId?: string,
        billsArray?: Array<number>,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/expense/bill',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'bills[]': billsArray,
                'accounts[]': accountsArray,
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
     * Insight into expenses, without bill.
     * This endpoint gives a summary of the expenses made by the user, including only expenses with no bill.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightTotal A list of expense details. One row per currency.
     * @throws ApiError
     */
    public static insightExpenseNoBill(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightTotal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/expense/no-bill',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into expenses, grouped by budget.
     * This endpoint gives a summary of the expenses made by the user, grouped by (any) budget.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param budgetsArray The budgets to be included in the results.
     *
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightGroup A list of budget and expense details. Each budget has one row per currency.
     * @throws ApiError
     */
    public static insightExpenseBudget(
        start: string,
        end: string,
        xTraceId?: string,
        budgetsArray?: Array<number>,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/expense/budget',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'budgets[]': budgetsArray,
                'accounts[]': accountsArray,
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
     * Insight into expenses, without budget.
     * This endpoint gives a summary of the expenses made by the user, including only expenses with no budget.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightTotal A list of expense details. One row per currency.
     * @throws ApiError
     */
    public static insightExpenseNoBudget(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightTotal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/expense/no-budget',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into expenses, grouped by category.
     * This endpoint gives a summary of the expenses made by the user, grouped by (any) category.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param categoriesArray The categories to be included in the results.
     *
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightGroup A list of category and expense details. Each category has one row per currency.
     * @throws ApiError
     */
    public static insightExpenseCategory(
        start: string,
        end: string,
        xTraceId?: string,
        categoriesArray?: Array<number>,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/expense/category',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'categories[]': categoriesArray,
                'accounts[]': accountsArray,
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
     * Insight into expenses, without category.
     * This endpoint gives a summary of the expenses made by the user, including only expenses with no category.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightTotal A list of expense details. One row per currency.
     * @throws ApiError
     */
    public static insightExpenseNoCategory(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightTotal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/expense/no-category',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into income, grouped by category.
     * This endpoint gives a summary of the income received by the user, grouped by (any) category.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param categoriesArray The categories to be included in the results.
     *
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightGroup A list of category and income details. Each category has one row per currency.
     * @throws ApiError
     */
    public static insightIncomeCategory(
        start: string,
        end: string,
        xTraceId?: string,
        categoriesArray?: Array<number>,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/income/category',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'categories[]': categoriesArray,
                'accounts[]': accountsArray,
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
     * Insight into income, without category.
     * This endpoint gives a summary of the income received by the user, including only income with no category.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightTotal A list of income details. One row per currency.
     * @throws ApiError
     */
    public static insightIncomeNoCategory(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightTotal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/income/no-category',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into transfers, grouped by category.
     * This endpoint gives a summary of the transfers made by the user, grouped by (any) category.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param categoriesArray The categories to be included in the results.
     *
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightGroup A list of category and transfer details. Each category has one row per currency.
     * @throws ApiError
     */
    public static insightTransferCategory(
        start: string,
        end: string,
        xTraceId?: string,
        categoriesArray?: Array<number>,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/transfer/category',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'categories[]': categoriesArray,
                'accounts[]': accountsArray,
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
     * Insight into transfers, without category.
     * This endpoint gives a summary of the transfers made by the user, including only transfers with no category.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightTotal A list of transfer details. One row per currency.
     * @throws ApiError
     */
    public static insightTransferNoCategory(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightTotal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/transfer/no-category',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into expenses, grouped by tag.
     * This endpoint gives a summary of the expenses made by the user, grouped by (any) tag.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param tagsArray The tags to be included in the results.
     *
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightGroup A list of tag and expense details. Each tag has one row per currency.
     * @throws ApiError
     */
    public static insightExpenseTag(
        start: string,
        end: string,
        xTraceId?: string,
        tagsArray?: Array<number>,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/expense/tag',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'tags[]': tagsArray,
                'accounts[]': accountsArray,
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
     * Insight into expenses, without tag.
     * This endpoint gives a summary of the expenses made by the user, including only expenses with no tag.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightTotal A list of expense details. One row per currency.
     * @throws ApiError
     */
    public static insightExpenseNoTag(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightTotal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/expense/no-tag',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into income, grouped by tag.
     * This endpoint gives a summary of the income received by the user, grouped by (any) tag.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param tagsArray The tags to be included in the results.
     *
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightGroup A list of tag and income details. Each tag has one row per currency.
     * @throws ApiError
     */
    public static insightIncomeTag(
        start: string,
        end: string,
        xTraceId?: string,
        tagsArray?: Array<number>,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/income/tag',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'tags[]': tagsArray,
                'accounts[]': accountsArray,
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
     * Insight into income, without tag.
     * This endpoint gives a summary of the income received by the user, including only income with no tag.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightTotal A list of income details. One row per currency.
     * @throws ApiError
     */
    public static insightIncomeNoTag(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightTotal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/income/no-tag',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into transfers, grouped by tag.
     * This endpoint gives a summary of the transfers created by the user, grouped by (any) tag.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param tagsArray The tags to be included in the results.
     *
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightGroup A list of tag and transfer details. Each tag has one row per currency.
     * @throws ApiError
     */
    public static insightTransferTag(
        start: string,
        end: string,
        xTraceId?: string,
        tagsArray?: Array<number>,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/transfer/tag',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'tags[]': tagsArray,
                'accounts[]': accountsArray,
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
     * Insight into expenses, without tag.
     * This endpoint gives a summary of the transfers made by the user, including only transfers with no tag.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers from those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightTotal A list of transfer details. One row per currency.
     * @throws ApiError
     */
    public static insightTransferNoTag(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightTotal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/transfer/no-tag',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into total expenses.
     * This endpoint gives a sum of the total expenses made by the user.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only withdrawals from those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightTotal A list of sums in different currencies.
     * @throws ApiError
     */
    public static insightExpenseTotal(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightTotal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/expense/total',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into total income.
     * This endpoint gives a sum of the total income received by the user.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only deposits to those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightTotal A list of sums in different currencies.
     * @throws ApiError
     */
    public static insightIncomeTotal(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightTotal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/income/total',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
     * Insight into total transfers.
     * This endpoint gives a sum of the total amount transfers made by the user.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @param accountsArray The accounts to be included in the results. If you include ID's of asset accounts or liabilities, only transfers between those
     * asset accounts / liabilities will be included. Other account ID's will be ignored.
     *
     * @returns InsightTotal A list of sums in different currencies.
     * @throws ApiError
     */
    public static insightTransferTotal(
        start: string,
        end: string,
        xTraceId?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<InsightTotal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/insight/transfer/total',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts[]': accountsArray,
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
