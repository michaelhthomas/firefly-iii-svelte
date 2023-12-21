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
  AccountArray,
  AccountSingle,
  AccountStore,
  AccountTypeFilter,
  AccountUpdate,
  AttachmentArray,
  BadRequest,
  InternalException,
  NotFound,
  PiggyBankArray,
  TransactionArray,
  TransactionTypeFilter,
  Unauthenticated,
  ValidationError,
} from '../models/index';
import {
    AccountArrayFromJSON,
    AccountArrayToJSON,
    AccountSingleFromJSON,
    AccountSingleToJSON,
    AccountStoreFromJSON,
    AccountStoreToJSON,
    AccountTypeFilterFromJSON,
    AccountTypeFilterToJSON,
    AccountUpdateFromJSON,
    AccountUpdateToJSON,
    AttachmentArrayFromJSON,
    AttachmentArrayToJSON,
    BadRequestFromJSON,
    BadRequestToJSON,
    InternalExceptionFromJSON,
    InternalExceptionToJSON,
    NotFoundFromJSON,
    NotFoundToJSON,
    PiggyBankArrayFromJSON,
    PiggyBankArrayToJSON,
    TransactionArrayFromJSON,
    TransactionArrayToJSON,
    TransactionTypeFilterFromJSON,
    TransactionTypeFilterToJSON,
    UnauthenticatedFromJSON,
    UnauthenticatedToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface DeleteAccountRequest {
    id: string;
    xTraceId?: string;
}

export interface GetAccountRequest {
    id: string;
    xTraceId?: string;
    date?: Date;
}

export interface ListAccountRequest {
    xTraceId?: string;
    limit?: number;
    page?: number;
    date?: Date;
    type?: AccountTypeFilter;
}

export interface ListAttachmentByAccountRequest {
    id: string;
    xTraceId?: string;
    limit?: number;
    page?: number;
}

export interface ListPiggyBankByAccountRequest {
    id: string;
    xTraceId?: string;
    limit?: number;
    page?: number;
}

export interface ListTransactionByAccountRequest {
    id: string;
    xTraceId?: string;
    limit?: number;
    page?: number;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}

export interface StoreAccountRequest {
    accountStore: AccountStore;
    xTraceId?: string;
}

export interface UpdateAccountRequest {
    id: string;
    accountUpdate: AccountUpdate;
    xTraceId?: string;
}

/**
 * 
 */
export class AccountsApi extends runtime.BaseAPI {

    /**
     * Will permanently delete an account. Any associated transactions and piggy banks are ALSO deleted. Cannot be recovered from. 
     * Permanently delete account.
     */
    async deleteAccountRaw(requestParameters: DeleteAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteAccount.');
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
            path: `/v1/accounts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Will permanently delete an account. Any associated transactions and piggy banks are ALSO deleted. Cannot be recovered from. 
     * Permanently delete account.
     */
    async deleteAccount(requestParameters: DeleteAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAccountRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a single account by its ID. 
     * Get single account.
     */
    async getAccountRaw(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getAccount.');
        }

        const queryParameters: any = {};

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = (requestParameters.date as any).toISOString().substring(0,10);
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
            path: `/v1/accounts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountSingleFromJSON(jsonValue));
    }

    /**
     * Returns a single account by its ID. 
     * Get single account.
     */
    async getAccount(requestParameters: GetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountSingle> {
        const response = await this.getAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns a list of all the accounts owned by the authenticated user. 
     * List all accounts.
     */
    async listAccountRaw(requestParameters: ListAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountArray>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = (requestParameters.date as any).toISOString().substring(0,10);
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
            path: `/v1/accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountArrayFromJSON(jsonValue));
    }

    /**
     * This endpoint returns a list of all the accounts owned by the authenticated user. 
     * List all accounts.
     */
    async listAccount(requestParameters: ListAccountRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountArray> {
        const response = await this.listAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    async listAttachmentByAccountRaw(requestParameters: ListAttachmentByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachmentArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listAttachmentByAccount.');
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
            path: `/v1/accounts/{id}/attachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentArrayFromJSON(jsonValue));
    }

    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    async listAttachmentByAccount(requestParameters: ListAttachmentByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachmentArray> {
        const response = await this.listAttachmentByAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns a list of all the piggy banks connected to the account. 
     * List all piggy banks related to the account.
     */
    async listPiggyBankByAccountRaw(requestParameters: ListPiggyBankByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PiggyBankArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listPiggyBankByAccount.');
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
            path: `/v1/accounts/{id}/piggy-banks`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PiggyBankArrayFromJSON(jsonValue));
    }

    /**
     * This endpoint returns a list of all the piggy banks connected to the account. 
     * List all piggy banks related to the account.
     */
    async listPiggyBankByAccount(requestParameters: ListPiggyBankByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PiggyBankArray> {
        const response = await this.listPiggyBankByAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns a list of all the transactions connected to the account. 
     * List all transactions related to the account.
     */
    async listTransactionByAccountRaw(requestParameters: ListTransactionByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listTransactionByAccount.');
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
            path: `/v1/accounts/{id}/transactions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionArrayFromJSON(jsonValue));
    }

    /**
     * This endpoint returns a list of all the transactions connected to the account. 
     * List all transactions related to the account.
     */
    async listTransactionByAccount(requestParameters: ListTransactionByAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionArray> {
        const response = await this.listTransactionByAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new account. The data required can be submitted as a JSON body or as a list of parameters (in key=value pairs, like a webform).
     * Create new account.
     */
    async storeAccountRaw(requestParameters: StoreAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountSingle>> {
        if (requestParameters.accountStore === null || requestParameters.accountStore === undefined) {
            throw new runtime.RequiredError('accountStore','Required parameter requestParameters.accountStore was null or undefined when calling storeAccount.');
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
            path: `/v1/accounts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AccountStoreToJSON(requestParameters.accountStore),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountSingleFromJSON(jsonValue));
    }

    /**
     * Creates a new account. The data required can be submitted as a JSON body or as a list of parameters (in key=value pairs, like a webform).
     * Create new account.
     */
    async storeAccount(requestParameters: StoreAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountSingle> {
        const response = await this.storeAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Used to update a single account. All fields that are not submitted will be cleared (set to NULL). The model will tell you which fields are mandatory. 
     * Update existing account.
     */
    async updateAccountRaw(requestParameters: UpdateAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateAccount.');
        }

        if (requestParameters.accountUpdate === null || requestParameters.accountUpdate === undefined) {
            throw new runtime.RequiredError('accountUpdate','Required parameter requestParameters.accountUpdate was null or undefined when calling updateAccount.');
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
            path: `/v1/accounts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AccountUpdateToJSON(requestParameters.accountUpdate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountSingleFromJSON(jsonValue));
    }

    /**
     * Used to update a single account. All fields that are not submitted will be cleared (set to NULL). The model will tell you which fields are mandatory. 
     * Update existing account.
     */
    async updateAccount(requestParameters: UpdateAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountSingle> {
        const response = await this.updateAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
