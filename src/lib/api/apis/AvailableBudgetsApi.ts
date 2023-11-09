/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v2.0.10
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2023-10-15T12:13:25+00:00  Please keep in mind that the demo site does not accept requests from curl, colly, wget, etc. You must use a browser or a tool like Postman to make requests. Too many script kiddies out there, sorry about that. 
 *
 * The version of the OpenAPI document: 2.0.10
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AvailableBudgetArray,
  AvailableBudgetSingle,
  BadRequest,
  InternalException,
  NotFound,
  Unauthenticated,
} from '../models/index';
import {
    AvailableBudgetArrayFromJSON,
    AvailableBudgetArrayToJSON,
    AvailableBudgetSingleFromJSON,
    AvailableBudgetSingleToJSON,
    BadRequestFromJSON,
    BadRequestToJSON,
    InternalExceptionFromJSON,
    InternalExceptionToJSON,
    NotFoundFromJSON,
    NotFoundToJSON,
    UnauthenticatedFromJSON,
    UnauthenticatedToJSON,
} from '../models/index';

export interface GetAvailableBudgetRequest {
    id: string;
    xTraceId?: string;
}

export interface ListAvailableBudgetRequest {
    xTraceId?: string;
    limit?: number;
    page?: number;
    start?: Date;
    end?: Date;
}

/**
 * 
 */
export class AvailableBudgetsApi extends runtime.BaseAPI {

    /**
     * Get a single available budget, by ID.
     * Get a single available budget.
     */
    async getAvailableBudgetRaw(requestParameters: GetAvailableBudgetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AvailableBudgetSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getAvailableBudget.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xTraceId !== undefined && requestParameters.xTraceId !== null) {
            headerParameters['X-Trace-Id'] = String(requestParameters.xTraceId);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("firefly_iii_auth", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("local_bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/available-budgets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AvailableBudgetSingleFromJSON(jsonValue));
    }

    /**
     * Get a single available budget, by ID.
     * Get a single available budget.
     */
    async getAvailableBudget(requestParameters: GetAvailableBudgetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AvailableBudgetSingle> {
        const response = await this.getAvailableBudgetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Firefly III allows users to set the amount that is available to be budgeted in so-called \"available budgets\". For example, the user could have 1200,- available to be divided during the coming month. This amount is used on the /budgets page. This endpoint returns all of these amounts and the periods for which they are set. 
     * List all available budget amounts.
     */
    async listAvailableBudgetRaw(requestParameters: ListAvailableBudgetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AvailableBudgetArray>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = (requestParameters.start as any).toISOString().substring(0,10);
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = (requestParameters.end as any).toISOString().substring(0,10);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xTraceId !== undefined && requestParameters.xTraceId !== null) {
            headerParameters['X-Trace-Id'] = String(requestParameters.xTraceId);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("firefly_iii_auth", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("local_bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/available-budgets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AvailableBudgetArrayFromJSON(jsonValue));
    }

    /**
     * Firefly III allows users to set the amount that is available to be budgeted in so-called \"available budgets\". For example, the user could have 1200,- available to be divided during the coming month. This amount is used on the /budgets page. This endpoint returns all of these amounts and the periods for which they are set. 
     * List all available budget amounts.
     */
    async listAvailableBudget(requestParameters: ListAvailableBudgetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AvailableBudgetArray> {
        const response = await this.listAvailableBudgetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
