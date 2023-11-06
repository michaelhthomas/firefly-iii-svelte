/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChartLine } from '../models/ChartLine';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChartsService {

    /**
     * Dashboard chart with asset account balance information.
     * This endpoint returns the data required to generate a chart with basic asset account balance information.
     *
     * @param start A date formatted YYYY-MM-DD.
     *
     * @param end A date formatted YYYY-MM-DD.
     *
     * @param xTraceId Unique identifier associated with this request.
     * @returns ChartLine Line chart oriented chart information. Check out the model for more details. Each entry is a line (or bar) in the chart.
     * @throws ApiError
     */
    public static getChartAccountOverview(
        start: string,
        end: string,
        xTraceId?: string,
    ): CancelablePromise<ChartLine> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/chart/account/overview',
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

}
