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
  AttachmentArray,
  BadRequest,
  BillArray,
  BillSingle,
  BillStore,
  BillUpdate,
  InternalException,
  NotFound,
  RuleArray,
  TransactionArray,
  TransactionTypeFilter,
  Unauthenticated,
  ValidationError,
} from '../models/index';
import {
    AttachmentArrayFromJSON,
    AttachmentArrayToJSON,
    BadRequestFromJSON,
    BadRequestToJSON,
    BillArrayFromJSON,
    BillArrayToJSON,
    BillSingleFromJSON,
    BillSingleToJSON,
    BillStoreFromJSON,
    BillStoreToJSON,
    BillUpdateFromJSON,
    BillUpdateToJSON,
    InternalExceptionFromJSON,
    InternalExceptionToJSON,
    NotFoundFromJSON,
    NotFoundToJSON,
    RuleArrayFromJSON,
    RuleArrayToJSON,
    TransactionArrayFromJSON,
    TransactionArrayToJSON,
    TransactionTypeFilterFromJSON,
    TransactionTypeFilterToJSON,
    UnauthenticatedFromJSON,
    UnauthenticatedToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface DeleteBillRequest {
    id: string;
    xTraceId?: string;
}

export interface GetBillRequest {
    id: string;
    xTraceId?: string;
    start?: Date;
    end?: Date;
}

export interface ListAttachmentByBillRequest {
    id: string;
    xTraceId?: string;
    limit?: number;
    page?: number;
}

export interface ListBillRequest {
    xTraceId?: string;
    limit?: number;
    page?: number;
    start?: Date;
    end?: Date;
}

export interface ListRuleByBillRequest {
    id: string;
    xTraceId?: string;
}

export interface ListTransactionByBillRequest {
    id: string;
    xTraceId?: string;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}

export interface StoreBillRequest {
    billStore: BillStore;
    xTraceId?: string;
}

export interface UpdateBillRequest {
    id: string;
    billUpdate: BillUpdate;
    xTraceId?: string;
}

/**
 * 
 */
export class BillsApi extends runtime.BaseAPI {

    /**
     * Delete a bill. This will not delete any associated rules. Will not remove associated transactions. WILL remove all associated attachments.
     * Delete a bill.
     */
    async deleteBillRaw(requestParameters: DeleteBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteBill.');
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
            path: `/v1/bills/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a bill. This will not delete any associated rules. Will not remove associated transactions. WILL remove all associated attachments.
     * Delete a bill.
     */
    async deleteBill(requestParameters: DeleteBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteBillRaw(requestParameters, initOverrides);
    }

    /**
     * Get a single bill.
     * Get a single bill.
     */
    async getBillRaw(requestParameters: GetBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BillSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getBill.');
        }

        const queryParameters: any = {};

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
            path: `/v1/bills/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BillSingleFromJSON(jsonValue));
    }

    /**
     * Get a single bill.
     * Get a single bill.
     */
    async getBill(requestParameters: GetBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BillSingle> {
        const response = await this.getBillRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint will list all attachments linked to the bill.
     * List all attachments uploaded to the bill.
     */
    async listAttachmentByBillRaw(requestParameters: ListAttachmentByBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachmentArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listAttachmentByBill.');
        }

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
            path: `/v1/bills/{id}/attachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentArrayFromJSON(jsonValue));
    }

    /**
     * This endpoint will list all attachments linked to the bill.
     * List all attachments uploaded to the bill.
     */
    async listAttachmentByBill(requestParameters: ListAttachmentByBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachmentArray> {
        const response = await this.listAttachmentByBillRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint will list all the user\'s bills.
     * List all bills.
     */
    async listBillRaw(requestParameters: ListBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BillArray>> {
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
            path: `/v1/bills`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BillArrayFromJSON(jsonValue));
    }

    /**
     * This endpoint will list all the user\'s bills.
     * List all bills.
     */
    async listBill(requestParameters: ListBillRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BillArray> {
        const response = await this.listBillRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint will list all rules that have an action to set the bill to this bill.
     * List all rules associated with the bill.
     */
    async listRuleByBillRaw(requestParameters: ListRuleByBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RuleArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listRuleByBill.');
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
            path: `/v1/bills/{id}/rules`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RuleArrayFromJSON(jsonValue));
    }

    /**
     * This endpoint will list all rules that have an action to set the bill to this bill.
     * List all rules associated with the bill.
     */
    async listRuleByBill(requestParameters: ListRuleByBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RuleArray> {
        const response = await this.listRuleByBillRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint will list all transactions linked to this bill.
     * List all transactions associated with the  bill.
     */
    async listTransactionByBillRaw(requestParameters: ListTransactionByBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listTransactionByBill.');
        }

        const queryParameters: any = {};

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
            path: `/v1/bills/{id}/transactions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionArrayFromJSON(jsonValue));
    }

    /**
     * This endpoint will list all transactions linked to this bill.
     * List all transactions associated with the  bill.
     */
    async listTransactionByBill(requestParameters: ListTransactionByBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionArray> {
        const response = await this.listTransactionByBillRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new bill. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new bill
     */
    async storeBillRaw(requestParameters: StoreBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BillSingle>> {
        if (requestParameters.billStore === null || requestParameters.billStore === undefined) {
            throw new runtime.RequiredError('billStore','Required parameter requestParameters.billStore was null or undefined when calling storeBill.');
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
            path: `/v1/bills`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BillStoreToJSON(requestParameters.billStore),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BillSingleFromJSON(jsonValue));
    }

    /**
     * Creates a new bill. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new bill
     */
    async storeBill(requestParameters: StoreBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BillSingle> {
        const response = await this.storeBillRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update existing bill.
     * Update existing bill.
     */
    async updateBillRaw(requestParameters: UpdateBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BillSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateBill.');
        }

        if (requestParameters.billUpdate === null || requestParameters.billUpdate === undefined) {
            throw new runtime.RequiredError('billUpdate','Required parameter requestParameters.billUpdate was null or undefined when calling updateBill.');
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
            path: `/v1/bills/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: BillUpdateToJSON(requestParameters.billUpdate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BillSingleFromJSON(jsonValue));
    }

    /**
     * Update existing bill.
     * Update existing bill.
     */
    async updateBill(requestParameters: UpdateBillRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BillSingle> {
        const response = await this.updateBillRaw(requestParameters, initOverrides);
        return await response.value();
    }

}