/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentArray } from '../models/AttachmentArray';
import type { BillArray } from '../models/BillArray';
import type { BillSingle } from '../models/BillSingle';
import type { BillStore } from '../models/BillStore';
import type { BillUpdate } from '../models/BillUpdate';
import type { RuleArray } from '../models/RuleArray';
import type { TransactionArray } from '../models/TransactionArray';
import type { TransactionTypeFilter } from '../models/TransactionTypeFilter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BillsService {

    /**
     * List all attachments uploaded to the bill.
     * This endpoint will list all attachments linked to the bill.
     * @returns AttachmentArray A list of attachments
     * @throws ApiError
     */
    public static listAttachmentByBill({
        id,
        xTraceId,
        limit,
        page,
    }: {
        /**
         * The ID of the bill.
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
            url: '/v1/bills/{id}/attachments',
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
     * List all rules associated with the bill.
     * This endpoint will list all rules that have an action to set the bill to this bill.
     * @returns RuleArray A list of rules
     * @throws ApiError
     */
    public static listRuleByBill({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the bill.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<RuleArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/bills/{id}/rules',
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
     * List all transactions associated with the  bill.
     * This endpoint will list all transactions linked to this bill.
     * @returns TransactionArray A list of transactions
     * @throws ApiError
     */
    public static listTransactionByBill({
        id,
        xTraceId,
        start,
        end,
        type,
    }: {
        /**
         * The ID of the bill.
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
        /**
         * Optional filter on the transaction type(s) returned
         */
        type?: TransactionTypeFilter,
    }): CancelablePromise<TransactionArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/bills/{id}/transactions',
            path: {
                'id': id,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
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
     * List all bills.
     * This endpoint will list all the user's bills.
     * @returns BillArray A list of bills
     * @throws ApiError
     */
    public static listBill({
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
         * A date formatted YYYY-MM-DD. If it is are added to the request, Firefly III will calculate the appropriate payment and paid dates.
         *
         */
        start?: string,
        /**
         * A date formatted YYYY-MM-DD. If it is added to the request, Firefly III will calculate the appropriate payment and paid dates.
         *
         */
        end?: string,
    }): CancelablePromise<BillArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/bills',
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
     * Store a new bill
     * Creates a new bill. The data required can be submitted as a JSON body or as a list of parameters.
     * @returns BillSingle New bill stored, result in response.
     * @throws ApiError
     */
    public static storeBill({
        requestBody,
        xTraceId,
    }: {
        /**
         * JSON array or key=value pairs with the necessary bill information. See the model for the exact specifications.
         */
        requestBody: BillStore,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<BillSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/bills',
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
     * Get a single bill.
     * Get a single bill.
     * @returns BillSingle The requested bill
     * @throws ApiError
     */
    public static getBill({
        id,
        xTraceId,
        start,
        end,
    }: {
        /**
         * The ID of the bill.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * A date formatted YYYY-MM-DD. If it is are added to the request, Firefly III will calculate the appropriate payment and paid dates.
         *
         */
        start?: string,
        /**
         * A date formatted YYYY-MM-DD. If it is added to the request, Firefly III will calculate the appropriate payment and paid dates.
         *
         */
        end?: string,
    }): CancelablePromise<BillSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/bills/{id}',
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
     * Update existing bill.
     * Update existing bill.
     * @returns BillSingle Updated bill stored, result in response
     * @throws ApiError
     */
    public static updateBill({
        id,
        requestBody,
        xTraceId,
    }: {
        /**
         * The ID of the bill.
         */
        id: string,
        /**
         * JSON array or key=value pairs with updated bill information. See the model for the exact specifications.
         */
        requestBody: BillUpdate,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<BillSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/bills/{id}',
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
     * Delete a bill.
     * Delete a bill. This will not delete any associated rules. Will not remove associated transactions. WILL remove all associated attachments.
     * @returns void
     * @throws ApiError
     */
    public static deleteBill({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the bill.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/bills/{id}',
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
