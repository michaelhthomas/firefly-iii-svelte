/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v2.0.10
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2023-12-21T01:54:06+00:00  Please keep in mind that the demo site does not accept requests from curl, colly, wget, etc. You must use a browser or a tool like Postman to make requests. Too many script kiddies out there, sorry about that. 
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
  BadRequest,
  InternalException,
  NotFound,
  RecurrenceArray,
  RecurrenceSingle,
  RecurrenceStore,
  RecurrenceUpdate,
  TransactionArray,
  TransactionTypeFilter,
  Unauthenticated,
  ValidationError,
} from '../models/index';
import {
    BadRequestFromJSON,
    BadRequestToJSON,
    InternalExceptionFromJSON,
    InternalExceptionToJSON,
    NotFoundFromJSON,
    NotFoundToJSON,
    RecurrenceArrayFromJSON,
    RecurrenceArrayToJSON,
    RecurrenceSingleFromJSON,
    RecurrenceSingleToJSON,
    RecurrenceStoreFromJSON,
    RecurrenceStoreToJSON,
    RecurrenceUpdateFromJSON,
    RecurrenceUpdateToJSON,
    TransactionArrayFromJSON,
    TransactionArrayToJSON,
    TransactionTypeFilterFromJSON,
    TransactionTypeFilterToJSON,
    UnauthenticatedFromJSON,
    UnauthenticatedToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface DeleteRecurrenceRequest {
    id: string;
    xTraceId?: string;
}

export interface GetRecurrenceRequest {
    id: string;
    xTraceId?: string;
}

export interface ListRecurrenceRequest {
    xTraceId?: string;
    limit?: number;
    page?: number;
}

export interface ListTransactionByRecurrenceRequest {
    id: string;
    xTraceId?: string;
    limit?: number;
    page?: number;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}

export interface StoreRecurrenceRequest {
    recurrenceStore: RecurrenceStore;
    xTraceId?: string;
}

export interface UpdateRecurrenceRequest {
    id: string;
    recurrenceUpdate: RecurrenceUpdate;
    xTraceId?: string;
}

/**
 * 
 */
export class RecurrencesApi extends runtime.BaseAPI {

    /**
     * Delete a recurring transaction. Transactions created by the recurring transaction will not be deleted.
     * Delete a recurring transaction.
     */
    async deleteRecurrenceRaw(requestParameters: DeleteRecurrenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteRecurrence.');
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
            path: `/v1/recurrences/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a recurring transaction. Transactions created by the recurring transaction will not be deleted.
     * Delete a recurring transaction.
     */
    async deleteRecurrence(requestParameters: DeleteRecurrenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRecurrenceRaw(requestParameters, initOverrides);
    }

    /**
     * Get a single recurring transaction.
     * Get a single recurring transaction.
     */
    async getRecurrenceRaw(requestParameters: GetRecurrenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecurrenceSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getRecurrence.');
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
            path: `/v1/recurrences/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecurrenceSingleFromJSON(jsonValue));
    }

    /**
     * Get a single recurring transaction.
     * Get a single recurring transaction.
     */
    async getRecurrence(requestParameters: GetRecurrenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecurrenceSingle> {
        const response = await this.getRecurrenceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all recurring transactions.
     * List all recurring transactions.
     */
    async listRecurrenceRaw(requestParameters: ListRecurrenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecurrenceArray>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
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
            path: `/v1/recurrences`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecurrenceArrayFromJSON(jsonValue));
    }

    /**
     * List all recurring transactions.
     * List all recurring transactions.
     */
    async listRecurrence(requestParameters: ListRecurrenceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecurrenceArray> {
        const response = await this.listRecurrenceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all transactions created by a recurring transaction, optionally limited to the date ranges specified.
     * List all transactions created by a recurring transaction.
     */
    async listTransactionByRecurrenceRaw(requestParameters: ListTransactionByRecurrenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listTransactionByRecurrence.');
        }

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

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
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
            path: `/v1/recurrences/{id}/transactions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionArrayFromJSON(jsonValue));
    }

    /**
     * List all transactions created by a recurring transaction, optionally limited to the date ranges specified.
     * List all transactions created by a recurring transaction.
     */
    async listTransactionByRecurrence(requestParameters: ListTransactionByRecurrenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionArray> {
        const response = await this.listTransactionByRecurrenceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new recurring transaction. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new recurring transaction
     */
    async storeRecurrenceRaw(requestParameters: StoreRecurrenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecurrenceSingle>> {
        if (requestParameters.recurrenceStore === null || requestParameters.recurrenceStore === undefined) {
            throw new runtime.RequiredError('recurrenceStore','Required parameter requestParameters.recurrenceStore was null or undefined when calling storeRecurrence.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/v1/recurrences`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RecurrenceStoreToJSON(requestParameters.recurrenceStore),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecurrenceSingleFromJSON(jsonValue));
    }

    /**
     * Creates a new recurring transaction. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new recurring transaction
     */
    async storeRecurrence(requestParameters: StoreRecurrenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecurrenceSingle> {
        const response = await this.storeRecurrenceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update existing recurring transaction.
     * Update existing recurring transaction.
     */
    async updateRecurrenceRaw(requestParameters: UpdateRecurrenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RecurrenceSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateRecurrence.');
        }

        if (requestParameters.recurrenceUpdate === null || requestParameters.recurrenceUpdate === undefined) {
            throw new runtime.RequiredError('recurrenceUpdate','Required parameter requestParameters.recurrenceUpdate was null or undefined when calling updateRecurrence.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/v1/recurrences/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RecurrenceUpdateToJSON(requestParameters.recurrenceUpdate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RecurrenceSingleFromJSON(jsonValue));
    }

    /**
     * Update existing recurring transaction.
     * Update existing recurring transaction.
     */
    async updateRecurrence(requestParameters: UpdateRecurrenceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RecurrenceSingle> {
        const response = await this.updateRecurrenceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
