/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CronResult } from '../models/CronResult';
import type { SystemInfo } from '../models/SystemInfo';
import type { UserSingle } from '../models/UserSingle';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AboutService {

    /**
     * System information end point.
     * Returns general system information and versions of the (supporting) software.
     *
     * @returns SystemInfo The available system information
     * @throws ApiError
     */
    public static getAbout({
        xTraceId,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<SystemInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/about',
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
     * Currently authenticated user endpoint.
     * Returns the currently authenticated user.
     *
     * @returns UserSingle The user
     * @throws ApiError
     */
    public static getCurrentUser({
        xTraceId,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<UserSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/about/user',
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
     * Cron job endpoint
     * Firefly III has one endpoint for its various cron related tasks. Send a GET to this endpoint
     * to run the cron. The cron requires the CLI token to be present. The cron job will fire for all
     * users.
     *
     * @returns CronResult The result of the cron job(s) firing.
     * @throws ApiError
     */
    public static getCron({
        cliToken,
        xTraceId,
        date,
        force,
    }: {
        /**
         * The CLI token of any user in Firefly III, required to run the cron job.
         */
        cliToken: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * A date formatted YYYY-MM-DD. This can be used to make the cron job pretend it's running
         * on another day.
         *
         */
        date?: string,
        /**
         * Forces the cron job to fire, regardless of whether it has fired before. This may result
         * in double transactions or weird budgets, so be careful.
         *
         */
        force?: boolean,
    }): CancelablePromise<CronResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/cron/{cliToken}',
            path: {
                'cliToken': cliToken,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'date': date,
                'force': force,
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
