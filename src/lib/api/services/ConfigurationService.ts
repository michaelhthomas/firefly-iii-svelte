/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfigurationArray } from '../models/ConfigurationArray';
import type { ConfigurationSingle } from '../models/ConfigurationSingle';
import type { ConfigurationUpdate } from '../models/ConfigurationUpdate';
import type { ConfigValueFilter } from '../models/ConfigValueFilter';
import type { ConfigValueUpdateFilter } from '../models/ConfigValueUpdateFilter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConfigurationService {

    /**
     * Get Firefly III system configuration values.
     * Returns all editable and not-editable configuration values for this Firefly III installation
     * @returns ConfigurationArray System configuration values
     * @throws ApiError
     */
    public static getConfiguration({
        xTraceId,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<ConfigurationArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/configuration',
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
     * Get a single Firefly III system configuration value
     * Returns one configuration variable for this Firefly III installation
     * @returns ConfigurationSingle One system configuration value
     * @throws ApiError
     */
    public static getSingleConfiguration({
        name,
        xTraceId,
    }: {
        /**
         * The name of the configuration value you want to know.
         */
        name: ConfigValueFilter,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<ConfigurationSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/configuration/{name}',
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
     * Update configuration value
     * Set a single configuration value. Not all configuration values can be updated so the list of accepted configuration variables is small.
     * @returns ConfigurationSingle New configuration value stored, result in response.
     * @throws ApiError
     */
    public static setConfiguration({
        name,
        formData,
        xTraceId,
    }: {
        /**
         * The name of the configuration value you want to update.
         */
        name: ConfigValueUpdateFilter,
        /**
         * JSON array with the necessary account information or key=value pairs. See the model for the exact specifications.
         */
        formData: ConfigurationUpdate,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<ConfigurationSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/configuration/{name}',
            path: {
                'name': name,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
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
