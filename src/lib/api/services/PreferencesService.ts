/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Preference } from '../models/Preference';
import type { PreferenceArray } from '../models/PreferenceArray';
import type { PreferenceSingle } from '../models/PreferenceSingle';
import type { PreferenceUpdate } from '../models/PreferenceUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PreferencesService {

    /**
     * List all users preferences.
     * List all of the preferences of the user.
     * @returns PreferenceArray A list of preferences.
     * @throws ApiError
     */
    public static listPreference({
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
    }): CancelablePromise<PreferenceArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/preferences',
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
     * Store a new preference for this user.
     * This endpoint creates a new preference. The name and data are free-format, and entirely up to you. If the preference is not used in Firefly III itself it may not be configurable through the user interface, but you can use this endpoint to persist custom data for your own app.
     * @returns PreferenceSingle New account stored, result in response.
     * @throws ApiError
     */
    public static storePreference({
        requestBody,
        xTraceId,
    }: {
        /**
         * JSON array with the necessary preference information or key=value pairs. See the model for the exact specifications.
         */
        requestBody: Preference,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<PreferenceSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/preferences',
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
     * Return a single preference.
     * Return a single preference and the value.
     * @returns PreferenceSingle A single preference.
     * @throws ApiError
     */
    public static getPreference({
        name,
        xTraceId,
    }: {
        /**
         * The name of the preference.
         */
        name: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<PreferenceSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/preferences/{name}',
            path: {
                'name': name,
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
     * Update preference
     * Update a user's preference.
     * @returns PreferenceSingle Updated preference.
     * @throws ApiError
     */
    public static updatePreference({
        name,
        requestBody,
        xTraceId,
    }: {
        /**
         * The name of the preference. Will always overwrite. Will be created if it does not exist.
         */
        name: string,
        /**
         * JSON array or key=value pairs with the necessary preference information. See the model for the exact specifications.
         */
        requestBody: PreferenceUpdate,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<PreferenceSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/preferences/{name}',
            path: {
                'name': name,
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
