/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillArray } from '../models/BillArray';
import type { ObjectGroupArray } from '../models/ObjectGroupArray';
import type { ObjectGroupSingle } from '../models/ObjectGroupSingle';
import type { ObjectGroupUpdate } from '../models/ObjectGroupUpdate';
import type { PiggyBankArray } from '../models/PiggyBankArray';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ObjectGroupsService {

    /**
     * List all piggy banks related to the object group.
     * This endpoint returns a list of all the piggy banks connected to the object group.
     *
     * @param id The ID of the account.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns PiggyBankArray A list of piggy banks
     * @throws ApiError
     */
    public static listPiggyBankByObjectGroup(
        id: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<PiggyBankArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/object-groups/{id}/piggy-banks',
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
     * List all bills with this object group.
     * List all bills with this object group.
     * @param id The ID of the account.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns BillArray A list of bills.
     * @throws ApiError
     */
    public static listBillByObjectGroup(
        id: string,
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<BillArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/object-groups/{id}/bills',
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
     * List all oject groups.
     * List all oject groups.
     * @param xTraceId Unique identifier associated with this request.
     * @param limit Number of items per page. The default pagination is per 50 items.
     * @param page Page number. The default pagination is per 50 items.
     * @returns ObjectGroupArray A list of object groups
     * @throws ApiError
     */
    public static listObjectGroups(
        xTraceId?: string,
        limit?: number,
        page?: number,
    ): CancelablePromise<ObjectGroupArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/object-groups',
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
     * Get a single object group.
     * Get a single object group.
     * @param id The ID of the object group.
     * @param xTraceId Unique identifier associated with this request.
     * @returns ObjectGroupSingle The requested object group
     * @throws ApiError
     */
    public static getObjectGroup(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<ObjectGroupSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/object-groups/{id}',
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
     * Update existing object group.
     * Update existing object group.
     * @param id The ID of the object group
     * @param requestBody JSON array with updated piggy bank information. See the model for the exact specifications.
     * @param xTraceId Unique identifier associated with this request.
     * @returns ObjectGroupSingle Updated object group stored, result in response
     * @throws ApiError
     */
    public static updateObjectGroup(
        id: string,
        requestBody: ObjectGroupUpdate,
        xTraceId?: string,
    ): CancelablePromise<ObjectGroupSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/object-groups/{id}',
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
     * Delete a object group.
     * Delete a object group.
     * @param id The ID of the object group.
     * @param xTraceId Unique identifier associated with this request.
     * @returns void
     * @throws ApiError
     */
    public static deleteObjectGroup(
        id: string,
        xTraceId?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/object-groups/{id}',
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
