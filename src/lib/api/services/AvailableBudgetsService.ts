/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailableBudgetArray } from '../models/AvailableBudgetArray';
import type { AvailableBudgetSingle } from '../models/AvailableBudgetSingle';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AvailableBudgetsService {

    /**
     * List all available budget amounts.
     * Firefly III allows users to set the amount that is available to be budgeted in so-called "available budgets". For example, the user could have 1200,- available to be divided during the coming month. This amount is used on the /budgets page. This endpoint returns all of these amounts and the periods for which they are set.
     *
     * @returns AvailableBudgetArray A list of available budget amounts.
     * @throws ApiError
     */
    public static listAvailableBudget({
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
         * A date formatted YYYY-MM-DD.
         *
         */
        start?: string,
        /**
         * A date formatted YYYY-MM-DD.
         *
         */
        end?: string,
    }): CancelablePromise<AvailableBudgetArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/available-budgets',
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
     * Get a single available budget.
     * Get a single available budget, by ID.
     * @returns AvailableBudgetSingle The requested available budget
     * @throws ApiError
     */
    public static getAvailableBudget({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the available budget.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<AvailableBudgetSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/available-budgets/{id}',
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
