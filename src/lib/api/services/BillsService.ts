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
     * @param id The ID of the bill.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns AttachmentArray A list of attachments
     * @throws ApiError
     */
    public static listAttachmentByBill(
        id: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<AttachmentArray> {
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
     * @param id The ID of the bill.
     * @param xTraceId Unique identifier associated with this request.
     * @returns RuleArray A list of rules
     * @throws ApiError
     */
    public static listRuleByBill(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<RuleArray> {
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
     * @param id The ID of the bill.
     * @param xTraceId Unique identifier associated with this request.
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param type Optional filter on the transaction type(s) returned
     * @returns TransactionArray A list of transactions
     * @throws ApiError
     */
    public static listTransactionByBill(
        id: string,
        xTraceId?: string,
        start?: string,
        end?: string,
        type?: TransactionTypeFilter,
    ): CancelablePromise<TransactionArray> {
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
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @param start A date formatted YYYY-MM-DD. If it is are added to the request, Firefly III will calculate the appropriate payment and paid dates.
     *
     * @param end A date formatted YYYY-MM-DD. If it is added to the request, Firefly III will calculate the appropriate payment and paid dates.
     *
     * @returns BillArray A list of bills
     * @throws ApiError
     */
    public static listBill(
        xTraceId?: string,
        limit?: number,
        page?: number,
        start?: string,
        end?: string,
    ): CancelablePromise<BillArray> {
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
     * @param requestBody JSON array or key=value pairs with the necessary bill information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns BillSingle New bill stored, result in response.
     * @throws ApiError
     */
    public static storeBill(
        requestBody: BillStore,
        xTraceId?: string,
    ): CancelablePromise<BillSingle> {
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
     * @param id The ID of the bill.
     * @param xTraceId Unique identifier associated with this request.
     * @param start A date formatted YYYY-MM-DD. If it is are added to the request, Firefly III will calculate the appropriate payment and paid dates.
     *
     * @param end A date formatted YYYY-MM-DD. If it is added to the request, Firefly III will calculate the appropriate payment and paid dates.
     *
     * @returns BillSingle The requested bill
     * @throws ApiError
     */
    public static getBill(
        id: string,
        xTraceId?: string,
        start?: string,
        end?: string,
    ): CancelablePromise<BillSingle> {
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
     * @param id The ID of the bill.
     * @param requestBody JSON array or key=value pairs with updated bill information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns BillSingle Updated bill stored, result in response
     * @throws ApiError
     */
    public static updateBill(
        id: string,
        requestBody: BillUpdate,
        xTraceId?: string,
    ): CancelablePromise<BillSingle> {
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
     * @param id The ID of the bill.
     * @param xTraceId Unique identifier associated with this request.
     * @returns void
     * @throws ApiError
     */
    public static deleteBill(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<void> {
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
