/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentArray } from '../models/AttachmentArray';
import type { Category } from '../models/Category';
import type { CategoryArray } from '../models/CategoryArray';
import type { CategorySingle } from '../models/CategorySingle';
import type { CategoryUpdate } from '../models/CategoryUpdate';
import type { TransactionArray } from '../models/TransactionArray';
import type { TransactionTypeFilter } from '../models/TransactionTypeFilter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoriesService {

    /**
     * List all transactions in a category.
     * List all transactions in a category, optionally limited to the date ranges specified.
     * @param id The ID of the category.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @param start A date formatted YYYY-MM-DD, to limit the result list.
     *
     * @param end A date formatted YYYY-MM-DD, to limit the result list.
     *
     * @param type Optional filter on the transaction type(s) returned
     * @returns TransactionArray A list of transactions.
     * @throws ApiError
     */
    public static listTransactionByCategory(
        id: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
        start?: string,
        end?: string,
        type?: TransactionTypeFilter,
    ): CancelablePromise<TransactionArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/categories/{id}/transactions',
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
     * Lists all attachments.
     * Lists all attachments.
     * @param id The ID of the category.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns AttachmentArray A list of attachments
     * @throws ApiError
     */
    public static listAttachmentByCategory(
        id: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<AttachmentArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/categories/{id}/attachments',
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
     * List all categories.
     * List all categories.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns CategoryArray A list of categories.
     * @throws ApiError
     */
    public static listCategory(
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<CategoryArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/categories',
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
     * Store a new category
     * Creates a new category. The data required can be submitted as a JSON body or as a list of parameters.
     * @param requestBody JSON array or key=value pairs with the necessary category information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns CategorySingle New category stored, result in response.
     * @throws ApiError
     */
    public static storeCategory(
        requestBody: Category,
        xTraceId?: string,
    ): CancelablePromise<CategorySingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/categories',
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
     * Get a single category.
     * Get a single category.
     * @param id The ID of the category.
     * @param xTraceId Unique identifier associated with this request.
     * @param start A date formatted YYYY-MM-DD, to show spent and earned info.
     *
     * @param end A date formatted YYYY-MM-DD, to show spent and earned info.
     *
     * @returns CategorySingle The requested category
     * @throws ApiError
     */
    public static getCategory(
        id: string,
        xTraceId?: string,
        start?: string,
        end?: string,
    ): CancelablePromise<CategorySingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/categories/{id}',
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
     * Update existing category.
     * Update existing category.
     * @param id The ID of the category.
     * @param requestBody JSON array with updated category information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns CategorySingle Updated category stored, result in response
     * @throws ApiError
     */
    public static updateCategory(
        id: string,
        requestBody: CategoryUpdate,
        xTraceId?: string,
    ): CancelablePromise<CategorySingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/categories/{id}',
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
     * Delete a category.
     * Delete a category. Transactions will not be removed.
     * @param id The ID of the category.
     * @param xTraceId Unique identifier associated with this request.
     * @returns void
     * @throws ApiError
     */
    public static deleteCategory(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/categories/{id}',
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
