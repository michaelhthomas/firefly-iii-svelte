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
  AttachmentArray,
  AttachmentSingle,
  AttachmentStore,
  AttachmentUpdate,
  BadRequest,
  InternalException,
  NotFound,
  Unauthenticated,
  ValidationError,
} from '../models/index';
import {
    AttachmentArrayFromJSON,
    AttachmentArrayToJSON,
    AttachmentSingleFromJSON,
    AttachmentSingleToJSON,
    AttachmentStoreFromJSON,
    AttachmentStoreToJSON,
    AttachmentUpdateFromJSON,
    AttachmentUpdateToJSON,
    BadRequestFromJSON,
    BadRequestToJSON,
    InternalExceptionFromJSON,
    InternalExceptionToJSON,
    NotFoundFromJSON,
    NotFoundToJSON,
    UnauthenticatedFromJSON,
    UnauthenticatedToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface DeleteAttachmentRequest {
    id: string;
    xTraceId?: string;
}

export interface DownloadAttachmentRequest {
    id: string;
    xTraceId?: string;
}

export interface GetAttachmentRequest {
    id: string;
    xTraceId?: string;
}

export interface ListAttachmentRequest {
    xTraceId?: string;
    limit?: number;
    page?: number;
}

export interface StoreAttachmentRequest {
    attachmentStore: AttachmentStore;
    xTraceId?: string;
}

export interface UpdateAttachmentRequest {
    id: string;
    attachmentUpdate: AttachmentUpdate;
    xTraceId?: string;
}

export interface UploadAttachmentRequest {
    id: string;
    xTraceId?: string;
    body?: Blob;
}

/**
 * 
 */
export class AttachmentsApi extends runtime.BaseAPI {

    /**
     * With this endpoint you delete an attachment, including any stored file data. 
     * Delete an attachment.
     */
    async deleteAttachmentRaw(requestParameters: DeleteAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteAttachment.');
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
            path: `/v1/attachments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * With this endpoint you delete an attachment, including any stored file data. 
     * Delete an attachment.
     */
    async deleteAttachment(requestParameters: DeleteAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAttachmentRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to download the binary content of a transaction. It will be sent to you as a download, using the content type \"application/octet-stream\" and content disposition \"attachment; filename=example.pdf\". 
     * Download a single attachment.
     */
    async downloadAttachmentRaw(requestParameters: DownloadAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling downloadAttachment.');
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
            path: `/v1/attachments/{id}/download`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * This endpoint allows you to download the binary content of a transaction. It will be sent to you as a download, using the content type \"application/octet-stream\" and content disposition \"attachment; filename=example.pdf\". 
     * Download a single attachment.
     */
    async downloadAttachment(requestParameters: DownloadAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.downloadAttachmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a single attachment. This endpoint only returns the available metadata for the attachment. Actual file data is handled in two other endpoints (see below). 
     * Get a single attachment.
     */
    async getAttachmentRaw(requestParameters: GetAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachmentSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getAttachment.');
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
            path: `/v1/attachments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentSingleFromJSON(jsonValue));
    }

    /**
     * Get a single attachment. This endpoint only returns the available metadata for the attachment. Actual file data is handled in two other endpoints (see below). 
     * Get a single attachment.
     */
    async getAttachment(requestParameters: GetAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachmentSingle> {
        const response = await this.getAttachmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint lists all attachments. 
     * List all attachments.
     */
    async listAttachmentRaw(requestParameters: ListAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachmentArray>> {
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
            path: `/v1/attachments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentArrayFromJSON(jsonValue));
    }

    /**
     * This endpoint lists all attachments. 
     * List all attachments.
     */
    async listAttachment(requestParameters: ListAttachmentRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachmentArray> {
        const response = await this.listAttachmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new attachment. The data required can be submitted as a JSON body or as a list of parameters. You cannot use this endpoint to upload the actual file data (see below). This endpoint only creates the attachment object. 
     * Store a new attachment.
     */
    async storeAttachmentRaw(requestParameters: StoreAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachmentSingle>> {
        if (requestParameters.attachmentStore === null || requestParameters.attachmentStore === undefined) {
            throw new runtime.RequiredError('attachmentStore','Required parameter requestParameters.attachmentStore was null or undefined when calling storeAttachment.');
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
            path: `/v1/attachments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AttachmentStoreToJSON(requestParameters.attachmentStore),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentSingleFromJSON(jsonValue));
    }

    /**
     * Creates a new attachment. The data required can be submitted as a JSON body or as a list of parameters. You cannot use this endpoint to upload the actual file data (see below). This endpoint only creates the attachment object. 
     * Store a new attachment.
     */
    async storeAttachment(requestParameters: StoreAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachmentSingle> {
        const response = await this.storeAttachmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the meta data for an existing attachment. This endpoint does not allow you to upload or download data. For that, see below. 
     * Update existing attachment.
     */
    async updateAttachmentRaw(requestParameters: UpdateAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachmentSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateAttachment.');
        }

        if (requestParameters.attachmentUpdate === null || requestParameters.attachmentUpdate === undefined) {
            throw new runtime.RequiredError('attachmentUpdate','Required parameter requestParameters.attachmentUpdate was null or undefined when calling updateAttachment.');
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
            path: `/v1/attachments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AttachmentUpdateToJSON(requestParameters.attachmentUpdate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentSingleFromJSON(jsonValue));
    }

    /**
     * Update the meta data for an existing attachment. This endpoint does not allow you to upload or download data. For that, see below. 
     * Update existing attachment.
     */
    async updateAttachment(requestParameters: UpdateAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachmentSingle> {
        const response = await this.updateAttachmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this endpoint to upload (and possible overwrite) the file contents of an attachment. Simply put the entire file in the body as binary data. 
     * Upload an attachment.
     */
    async uploadAttachmentRaw(requestParameters: UploadAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling uploadAttachment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/octet-stream';

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
            path: `/v1/attachments/{id}/upload`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Use this endpoint to upload (and possible overwrite) the file contents of an attachment. Simply put the entire file in the body as binary data. 
     * Upload an attachment.
     */
    async uploadAttachment(requestParameters: UploadAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.uploadAttachmentRaw(requestParameters, initOverrides);
    }

}
