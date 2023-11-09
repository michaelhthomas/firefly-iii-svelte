/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LinkType } from '../models/LinkType';
import type { LinkTypeArray } from '../models/LinkTypeArray';
import type { LinkTypeSingle } from '../models/LinkTypeSingle';
import type { LinkTypeUpdate } from '../models/LinkTypeUpdate';
import type { TransactionArray } from '../models/TransactionArray';
import type { TransactionLinkArray } from '../models/TransactionLinkArray';
import type { TransactionLinkSingle } from '../models/TransactionLinkSingle';
import type { TransactionLinkStore } from '../models/TransactionLinkStore';
import type { TransactionLinkUpdate } from '../models/TransactionLinkUpdate';
import type { TransactionTypeFilter } from '../models/TransactionTypeFilter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LinksService {

    /**
     * List all transactions under this link type.
     * List all transactions under this link type, both the inward and outward transactions.
     *
     * @returns TransactionArray A list of transactions
     * @throws ApiError
     */
    public static listTransactionByLinkType({
        id,
        xTraceId,
        limit,
        page,
        start,
        end,
        type,
    }: {
        /**
         * The ID of the link type.
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
         * A date formatted YYYY-MM-DD, to limit the results.
         *
         */
        start?: string,
        /**
         * A date formatted YYYY-MM-DD, to limit the results.
         *
         */
        end?: string,
        /**
         * Optional filter on the transaction type(s) returned.
         */
        type?: TransactionTypeFilter,
    }): CancelablePromise<TransactionArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/link-types/{id}/transactions',
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
     * List all types of links.
     * List all the link types the system has. These include the default ones as well as any new ones.
     *
     * @returns LinkTypeArray A list of link types.
     * @throws ApiError
     */
    public static listLinkType({
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
    }): CancelablePromise<LinkTypeArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/link-types',
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
     * Create a new link type
     * Creates a new link type. The data required can be submitted as a JSON body or as a list of parameters (in key=value pairs, like a webform).
     * @returns LinkTypeSingle New link type stored, result in response.
     * @throws ApiError
     */
    public static storeLinkType({
        requestBody,
        xTraceId,
    }: {
        /**
         * JSON array with the necessary link type information or key=value pairs. See the model for the exact specifications.
         */
        requestBody: LinkType,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<LinkTypeSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/link-types',
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
     * Get single a link type.
     * Returns a single link type by its ID.
     *
     * @returns LinkTypeSingle The requested link type
     * @throws ApiError
     */
    public static getLinkType({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the link type.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<LinkTypeSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/link-types/{id}',
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
     * Update existing link type.
     * Used to update a single link type. All fields that are not submitted will be cleared (set to NULL). The model will tell you which fields are mandatory. You cannot update some of the system provided link types, indicated by the editable=false flag when you list it.
     *
     * @returns LinkTypeSingle Updated link type stored, result in response
     * @throws ApiError
     */
    public static updateLinkType({
        id,
        requestBody,
        xTraceId,
    }: {
        /**
         * The ID of the link type.
         */
        id: string,
        /**
         * JSON array or formdata with updated link type information. See the model for the exact specifications.
         */
        requestBody: LinkTypeUpdate,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<LinkTypeSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/link-types/{id}',
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
     * Permanently delete link type.
     * Will permanently delete a link type. The links between transactions will be removed. The transactions themselves remain. You cannot delete some of the system provided link types, indicated by the editable=false flag when you list it.
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteLinkType({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the link type.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/link-types/{id}',
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
     * List all transaction links.
     * List all the transaction links.
     *
     * @returns TransactionLinkArray A list of transaction links
     * @throws ApiError
     */
    public static listTransactionLink({
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
    }): CancelablePromise<TransactionLinkArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/transaction-links',
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
     * Create a new link between transactions
     * Store a new link between two transactions. For this end point you need the journal_id from a transaction.
     * @returns TransactionLinkSingle New transaction link stored, result in response.
     * @throws ApiError
     */
    public static storeTransactionLink({
        requestBody,
        xTraceId,
    }: {
        /**
         * JSON array with the necessary link type information or key=value pairs. See the model for the exact specifications.
         */
        requestBody: TransactionLinkStore,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<TransactionLinkSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/transaction-links',
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
     * Get a single link.
     * Returns a single link by its ID.
     *
     * @returns TransactionLinkSingle The requested link
     * @throws ApiError
     */
    public static getTransactionLink({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the transaction link.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<TransactionLinkSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/transaction-links/{id}',
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
     * Permanently delete link between transactions.
     * Will permanently delete link. Transactions remain.
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteTransactionLink({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the transaction link.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/transaction-links/{id}',
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
     * Update an existing link between transactions.
     * Used to update a single existing link.
     *
     * @returns TransactionLinkSingle Updated link type stored, result in response
     * @throws ApiError
     */
    public static updateTransactionLink({
        id,
        requestBody,
        xTraceId,
    }: {
        /**
         * The ID of the transaction link.
         */
        id: string,
        /**
         * JSON array or formdata with updated link type information. See the model for the exact specifications.
         */
        requestBody: TransactionLinkUpdate,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<TransactionLinkSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/transaction-links/{id}',
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

}
