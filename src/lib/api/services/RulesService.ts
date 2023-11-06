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
     * @param id The ID of the rule.
     * @param xTraceId Unique identifier associated with this request.
     * @param start A date formatted YYYY-MM-DD, to limit the transactions the test will be applied to. Both the start date and the end date must be present.
     *
     * @param end A date formatted YYYY-MM-DD, to limit the transactions the test will be applied to. Both the start date and the end date must be present.
     *
     * @param accountsArray Limit the testing of the rule to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped.
     *
     * @returns TransactionArray A list of transactions that would be changed by the rule. No changes will be made.
     * @throws ApiError
     */
    public static testRule(
        id: string,
        xTraceId?: string,
        start?: string,
        end?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<TransactionArray> {
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
     * @param id The ID of the rule.
     * @param xTraceId Unique identifier associated with this request.
     * @param start A date formatted YYYY-MM-DD, to limit the transactions the actions will be applied to. If the start date is not present, it will be set to one year ago. If you use this field, both the start date and the end date must be present.
     *
     * @param end A date formatted YYYY-MM-DD, to limit the transactions the actions will be applied to. If the end date is not present, it will be set to today. If you use this field, both the start date and the end date must be present.
     *
     * @param accountsArray Limit the triggering of the rule to these asset accounts or liabilities. Only asset accounts and liabilities will be accepted. Other types will be silently dropped.
     *
     * @returns void
     * @throws ApiError
     */
    public static fireRule(
        id: string,
        xTraceId?: string,
        start?: string,
        end?: string,
        accountsArray?: Array<number>,
    ): CancelablePromise<void> {
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
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns RuleArray A list of rules
     * @throws ApiError
     */
    public static listRule(
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<RuleArray> {
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
     * @param requestBody JSON array or key=value pairs with the necessary rule information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns RuleSingle New rule stored, result in response.
     * @throws ApiError
     */
    public static storeRule(
        requestBody: RuleStore,
        xTraceId?: string,
    ): CancelablePromise<RuleSingle> {
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
     * @param id The ID of the object.
     * @param xTraceId Unique identifier associated with this request.
     * @returns RuleSingle The requested rule
     * @throws ApiError
     */
    public static getRule(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<RuleSingle> {
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
     * @param id The ID of the object.
     * @param requestBody JSON array with updated rule information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns RuleSingle Updated rule stored, result in response
     * @throws ApiError
     */
    public static updateRule(
        id: string,
        requestBody: RuleUpdate,
        xTraceId?: string,
    ): CancelablePromise<RuleSingle> {
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
     * @param id The ID of the rule.
     * @param xTraceId Unique identifier associated with this request.
     * @returns void
     * @throws ApiError
     */
    public static deleteRule(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<void> {
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
