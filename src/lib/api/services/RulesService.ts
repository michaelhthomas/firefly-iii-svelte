/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RuleArray } from '../models/RuleArray';
import type { RuleSingle } from '../models/RuleSingle';
import type { RuleStore } from '../models/RuleStore';
import type { RuleUpdate } from '../models/RuleUpdate';
import type { TransactionArray } from '../models/TransactionArray';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RulesService {

    /**
     * Test which transactions would be hit by the rule. No changes will be made.
     * Test which transactions would be hit by the rule. No changes will be made. Limit the result if you want to.
     * @returns TransactionArray A list of transactions that would be changed by the rule. No changes will be made.
     * @throws ApiError
     */
    public static testRule({
        id,
        xTraceId,
        start,
        end,
        accountsArray,
    }: {
        /**
         * The ID of the rule.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * A date formatted YYYY-MM-DD, to limit the transactions the test will be applied to. Both the start date and the end date must be present.
         *
         */
        start?: string,
        /**
         * A date formatted YYYY-MM-DD, to limit the transactions the test will be applied to. Both the start date and the end date must be present.
         *
         */
        end?: string,
        /**
         * Limit the testing of the rule to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped.
         *
         */
        accountsArray?: Array<number>,
    }): CancelablePromise<TransactionArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rules/{id}/test',
            path: {
                'id': id,
            },
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
     * Fire the rule on your transactions.
     * Fire the rule group on your transactions. Changes will be made by the rules in the group! Limit the result if you want to.
     * @returns void
     * @throws ApiError
     */
    public static fireRule({
        id,
        xTraceId,
        start,
        end,
        accountsArray,
    }: {
        /**
         * The ID of the rule.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * A date formatted YYYY-MM-DD, to limit the transactions the actions will be applied to. If the start date is not present, it will be set to one year ago. If you use this field, both the start date and the end date must be present.
         *
         */
        start?: string,
        /**
         * A date formatted YYYY-MM-DD, to limit the transactions the actions will be applied to. If the end date is not present, it will be set to today. If you use this field, both the start date and the end date must be present.
         *
         */
        end?: string,
        /**
         * Limit the triggering of the rule to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped.
         *
         */
        accountsArray?: Array<number>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rules/{id}/trigger',
            path: {
                'id': id,
            },
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
     * List all rules.
     * List all rules.
     * @returns RuleArray A list of rules
     * @throws ApiError
     */
    public static listRule({
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
    }): CancelablePromise<RuleArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rules',
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
     * Store a new rule
     * Creates a new rule. The data required can be submitted as a JSON body or as a list of parameters.
     * @returns RuleSingle New rule stored, result in response.
     * @throws ApiError
     */
    public static storeRule({
        requestBody,
        xTraceId,
    }: {
        /**
         * JSON array or key=value pairs with the necessary rule information. See the model for the exact specifications.
         */
        requestBody: RuleStore,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<RuleSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rules',
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
     * Get a single rule.
     * Get a single rule.
     * @returns RuleSingle The requested rule
     * @throws ApiError
     */
    public static getRule({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the object.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<RuleSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rules/{id}',
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
     * Update existing rule.
     * Update existing rule.
     * @returns RuleSingle Updated rule stored, result in response
     * @throws ApiError
     */
    public static updateRule({
        id,
        requestBody,
        xTraceId,
    }: {
        /**
         * The ID of the object.
         */
        id: string,
        /**
         * JSON array with updated rule information. See the model for the exact specifications.
         */
        requestBody: RuleUpdate,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<RuleSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/rules/{id}',
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
     * Delete an rule.
     * Delete an rule.
     * @returns void
     * @throws ApiError
     */
    public static deleteRule({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the rule.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/rules/{id}',
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
