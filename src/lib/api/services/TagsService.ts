/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentArray } from '../models/AttachmentArray';
import type { TagArray } from '../models/TagArray';
import type { TagModelStore } from '../models/TagModelStore';
import type { TagModelUpdate } from '../models/TagModelUpdate';
import type { TagSingle } from '../models/TagSingle';
import type { TransactionArray } from '../models/TransactionArray';
import type { TransactionTypeFilter } from '../models/TransactionTypeFilter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagsService {

    /**
     * Lists all attachments.
     * Lists all attachments.
     * @returns AttachmentArray A list of attachments
     * @throws ApiError
     */
    public static listAttachmentByTag({
        tag,
        xTraceId,
        limit,
        page,
    }: {
        /**
         * Either the tag itself or the tag ID.
         */
        tag: string,
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
            url: '/v1/tags/{tag}/attachments',
            path: {
                'tag': tag,
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
     * List all transactions with this tag.
     * List all transactions with this tag.
     * @returns TransactionArray A list of transactions.
     * @throws ApiError
     */
    public static listTransactionByTag({
        tag,
        xTraceId,
        limit,
        page,
        start,
        end,
        type,
    }: {
        /**
         * Either the tag itself or the tag ID.
         */
        tag: string,
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
         * A date formatted YYYY-MM-DD. This is the start date of the selected range (inclusive).
         *
         */
        start?: string,
        /**
         * A date formatted YYYY-MM-DD. This is the end date of the selected range (inclusive).
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
            url: '/v1/tags/{tag}/transactions',
            path: {
                'tag': tag,
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
     * List all tags.
     * List all of the user's tags.
     * @returns TagArray A list of tags
     * @throws ApiError
     */
    public static listTag({
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
    }): CancelablePromise<TagArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/tags',
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
     * Store a new tag
     * Creates a new tag. The data required can be submitted as a JSON body or as a list of parameters.
     * @returns TagSingle New tag stored, result in response.
     * @throws ApiError
     */
    public static storeTag({
        requestBody,
        xTraceId,
    }: {
        /**
         * JSON array or key=value pairs with the necessary tag information. See the model for the exact specifications.
         */
        requestBody: TagModelStore,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<TagSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/tags',
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
     * Get a single tag.
     * Get a single tag.
     * @returns TagSingle The requested tag
     * @throws ApiError
     */
    public static getTag({
        tag,
        xTraceId,
        limit,
        page,
    }: {
        /**
         * Either the tag itself or the tag ID. If you use the tag itself, and it contains international (non-ASCII) characters, your milage may vary.
         */
        tag: string,
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
    }): CancelablePromise<TagSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/tags/{tag}',
            path: {
                'tag': tag,
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
     * Update existing tag.
     * Update existing tag.
     * @returns TagSingle Updated tag stored, result in response
     * @throws ApiError
     */
    public static updateTag({
        tag,
        requestBody,
        xTraceId,
    }: {
        /**
         * Either the tag itself or the tag ID. If you use the tag itself, and it contains international (non-ASCII) characters, your milage may vary.
         */
        tag: string,
        /**
         * JSON array with updated tag information. See the model for the exact specifications.
         */
        requestBody: TagModelUpdate,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<TagSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/tags/{tag}',
            path: {
                'tag': tag,
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
     * Delete an tag.
     * Delete an tag.
     * @returns void
     * @throws ApiError
     */
    public static deleteTag({
        tag,
        xTraceId,
    }: {
        /**
         * Either the tag itself or the tag ID. If you use the tag itself, and it contains international (non-ASCII) characters, your milage may vary.
         */
        tag: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/tags/{tag}',
            path: {
                'tag': tag,
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
