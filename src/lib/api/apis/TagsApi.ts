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
  InternalException,
  NotFound,
  TagArray,
  TagModelStore,
  TagModelUpdate,
  TagSingle,
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
    InternalExceptionFromJSON,
    InternalExceptionToJSON,
    NotFoundFromJSON,
    NotFoundToJSON,
    TagArrayFromJSON,
    TagArrayToJSON,
    TagModelStoreFromJSON,
    TagModelStoreToJSON,
    TagModelUpdateFromJSON,
    TagModelUpdateToJSON,
    TagSingleFromJSON,
    TagSingleToJSON,
    TransactionArrayFromJSON,
    TransactionArrayToJSON,
    TransactionTypeFilterFromJSON,
    TransactionTypeFilterToJSON,
    UnauthenticatedFromJSON,
    UnauthenticatedToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface DeleteTagRequest {
    tag: string;
    xTraceId?: string;
}

export interface GetTagRequest {
    tag: string;
    xTraceId?: string;
    limit?: number;
    page?: number;
}

export interface ListAttachmentByTagRequest {
    tag: string;
    xTraceId?: string;
    limit?: number;
    page?: number;
}

export interface ListTagRequest {
    xTraceId?: string;
    limit?: number;
    page?: number;
}

export interface ListTransactionByTagRequest {
    tag: string;
    xTraceId?: string;
    limit?: number;
    page?: number;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}

export interface StoreTagRequest {
    tagModelStore: TagModelStore;
    xTraceId?: string;
}

export interface UpdateTagRequest {
    tag: string;
    tagModelUpdate: TagModelUpdate;
    xTraceId?: string;
}

/**
 * 
 */
export class TagsApi extends runtime.BaseAPI {

    /**
     * Delete an tag.
     * Delete an tag.
     */
    async deleteTagRaw(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling deleteTag.');
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
            path: `/v1/tags/{tag}`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an tag.
     * Delete an tag.
     */
    async deleteTag(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTagRaw(requestParameters, initOverrides);
    }

    /**
     * Get a single tag.
     * Get a single tag.
     */
    async getTagRaw(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagSingle>> {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling getTag.');
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
            path: `/v1/tags/{tag}`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagSingleFromJSON(jsonValue));
    }

    /**
     * Get a single tag.
     * Get a single tag.
     */
    async getTag(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagSingle> {
        const response = await this.getTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    async listAttachmentByTagRaw(requestParameters: ListAttachmentByTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachmentArray>> {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling listAttachmentByTag.');
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
            path: `/v1/tags/{tag}/attachments`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
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
    async listAttachmentByTag(requestParameters: ListAttachmentByTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachmentArray> {
        const response = await this.listAttachmentByTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all of the user\'s tags.
     * List all tags.
     */
    async listTagRaw(requestParameters: ListTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagArray>> {
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
            path: `/v1/tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagArrayFromJSON(jsonValue));
    }

    /**
     * List all of the user\'s tags.
     * List all tags.
     */
    async listTag(requestParameters: ListTagRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagArray> {
        const response = await this.listTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all transactions with this tag.
     * List all transactions with this tag.
     */
    async listTransactionByTagRaw(requestParameters: ListTransactionByTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionArray>> {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling listTransactionByTag.');
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
            path: `/v1/tags/{tag}/transactions`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionArrayFromJSON(jsonValue));
    }

    /**
     * List all transactions with this tag.
     * List all transactions with this tag.
     */
    async listTransactionByTag(requestParameters: ListTransactionByTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionArray> {
        const response = await this.listTransactionByTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new tag. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new tag
     */
    async storeTagRaw(requestParameters: StoreTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagSingle>> {
        if (requestParameters.tagModelStore === null || requestParameters.tagModelStore === undefined) {
            throw new runtime.RequiredError('tagModelStore','Required parameter requestParameters.tagModelStore was null or undefined when calling storeTag.');
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
            path: `/v1/tags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TagModelStoreToJSON(requestParameters.tagModelStore),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagSingleFromJSON(jsonValue));
    }

    /**
     * Creates a new tag. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new tag
     */
    async storeTag(requestParameters: StoreTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagSingle> {
        const response = await this.storeTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update existing tag.
     * Update existing tag.
     */
    async updateTagRaw(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagSingle>> {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling updateTag.');
        }

        if (requestParameters.tagModelUpdate === null || requestParameters.tagModelUpdate === undefined) {
            throw new runtime.RequiredError('tagModelUpdate','Required parameter requestParameters.tagModelUpdate was null or undefined when calling updateTag.');
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
            path: `/v1/tags/{tag}`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TagModelUpdateToJSON(requestParameters.tagModelUpdate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagSingleFromJSON(jsonValue));
    }

    /**
     * Update existing tag.
     * Update existing tag.
     */
    async updateTag(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagSingle> {
        const response = await this.updateTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

}