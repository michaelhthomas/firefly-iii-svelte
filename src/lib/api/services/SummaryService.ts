/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasicSummary } from '../models/BasicSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SummaryService {

    /**
     * Returns basic sums of the users data.
     * Returns basic sums of the users data, like the net worth, spent and earned amounts. It is multi-currency, and is used in Firefly III to populate the dashboard.
     *
     * @returns BasicSummary An array of sums. It depends on the user what you can expect to get back, so please try this out on the demo site.
     * @throws ApiError
     */
    public static getBasicSummary({
        start,
        end,
        xTraceId,
        currencyCode,
    }: {
        /**
         * A date formatted YYYY-MM-DD.
         *
         */
        start: string,
        /**
         * A date formatted YYYY-MM-DD.
         *
         */
        end: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * A currency code like EUR or USD, to filter the result.
         *
         */
        currencyCode?: string,
    }): CancelablePromise<BasicSummary> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/summary/basic',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'currency_code': currencyCode,
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
