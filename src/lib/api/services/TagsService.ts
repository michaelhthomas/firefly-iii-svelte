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
     * @param tag Either the tag itself or the tag ID.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns AttachmentArray A list of attachments
     * @throws ApiError
     */
    public static listAttachmentByTag(
        tag: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<AttachmentArray> {
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
     * @param tag Either the tag itself or the tag ID.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @param start A date formatted YYYY-MM-DD. This is the start date of the selected range (inclusive).
     *
     * @param end A date formatted YYYY-MM-DD. This is the end date of the selected range (inclusive).
     *
     * @param type Optional filter on the transaction type(s) returned.
     * @returns TransactionArray A list of transactions.
     * @throws ApiError
     */
    public static listTransactionByTag(
        tag: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
        start?: string,
        end?: string,
        type?: TransactionTypeFilter,
    ): CancelablePromise<TransactionArray> {
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
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns TagArray A list of tags
     * @throws ApiError
     */
    public static listTag(
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<TagArray> {
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
     * @param requestBody JSON array or key=value pairs with the necessary tag information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns TagSingle New tag stored, result in response.
     * @throws ApiError
     */
    public static storeTag(
        requestBody: TagModelStore,
        xTraceId?: string,
    ): CancelablePromise<TagSingle> {
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
     * @param tag Either the tag itself or the tag ID. If you use the tag itself, and it contains international (non-ASCII) characters, your milage may vary.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns TagSingle The requested tag
     * @throws ApiError
     */
    public static getTag(
        tag: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<TagSingle> {
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
     * @param tag Either the tag itself or the tag ID. If you use the tag itself, and it contains international (non-ASCII) characters, your milage may vary.
     * @param requestBody JSON array with updated tag information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns TagSingle Updated tag stored, result in response
     * @throws ApiError
     */
    public static updateTag(
        tag: string,
        requestBody: TagModelUpdate,
        xTraceId?: string,
    ): CancelablePromise<TagSingle> {
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
     * @param tag Either the tag itself or the tag ID. If you use the tag itself, and it contains international (non-ASCII) characters, your milage may vary.
     * @param xTraceId Unique identifier associated with this request.
     * @returns void
     * @throws ApiError
     */
    public static deleteTag(
        tag: string,
        xTraceId?: string,
    ): CancelablePromise<void> {
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
