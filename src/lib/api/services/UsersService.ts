/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { UserArray } from '../models/UserArray';
import type { UserSingle } from '../models/UserSingle';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * List all users.
     * List all the users in this instance of Firefly III.
     * @returns UserArray A list of users.
     * @throws ApiError
     */
    public static listUser({
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
    }): CancelablePromise<UserArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/users',
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
     * Store a new user
     * Creates a new user. The data required can be submitted as a JSON body or as a list of parameters. The user will be given a random password, which they can reset using the "forgot password" function.
     *
     * @returns UserSingle New user stored, result in response.
     * @throws ApiError
     */
    public static storeUser({
        requestBody,
        xTraceId,
    }: {
        /**
         * JSON array or key=value pairs with the necessary user information. See the model for the exact specifications.
         */
        requestBody: User,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<UserSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/users',
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
     * Get a single user.
     * Gets all info of a single user.
     * @returns UserSingle The requested user.
     * @throws ApiError
     */
    public static getUser({
        id,
        xTraceId,
    }: {
        /**
         * The user ID.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<UserSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/users/{id}',
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
     * Update an existing user's information.
     * Update existing user.
     * @returns UserSingle Updated user stored, result in response
     * @throws ApiError
     */
    public static updateUser({
        id,
        requestBody,
        xTraceId,
    }: {
        /**
         * The user ID.
         */
        id: string,
        /**
         * JSON array with updated user information. See the model for the exact specifications.
         */
        requestBody: User,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<UserSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/users/{id}',
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
     * Delete a user.
     * Delete a user. You cannot delete the user you're authenticated with. This cannot be undone. Be careful!
     * @returns void
     * @throws ApiError
     */
    public static deleteUser({
        id,
        xTraceId,
    }: {
        /**
         * The user ID.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/users/{id}',
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
