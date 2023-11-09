/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentArray } from '../models/AttachmentArray';
import type { AttachmentSingle } from '../models/AttachmentSingle';
import type { AttachmentStore } from '../models/AttachmentStore';
import type { AttachmentUpdate } from '../models/AttachmentUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AttachmentsService {

    /**
     * List all attachments.
     * This endpoint lists all attachments.
     *
     * @returns AttachmentArray A list of attachments.
     * @throws ApiError
     */
    public static listAttachment({
        xTraceId,
        limit,
        page,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * Number of items per page. The default pagination is per 50 items.
         */
        limit?: number,
        /**
         * Page number. The default pagination is per 50 items.
         */
        page?: number,
    }): CancelablePromise<AttachmentArray> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/attachments',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'limit': limit,
                'page': page,
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
     * Store a new attachment.
     * Creates a new attachment. The data required can be submitted as a JSON body or as a list of parameters. You cannot use this endpoint to upload the actual file data (see below). This endpoint only creates the attachment object.
     *
     * @returns AttachmentSingle New attachment stored, result in response.
     * @throws ApiError
     */
    public static storeAttachment({
        requestBody,
        xTraceId,
    }: {
        /**
         * JSON array or key=value pairs with the necessary attachment information. See the model for the exact specifications.
         */
        requestBody: AttachmentStore,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<AttachmentSingle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/attachments',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                422: `Validation error. The body will have the exact details.`,
                500: `Internal exception`,
            },
        });
    }

    /**
     * Get a single attachment.
     * Get a single attachment. This endpoint only returns the available metadata for the attachment. Actual file data is handled in two other endpoints (see below).
     *
     * @returns AttachmentSingle The requested attachment
     * @throws ApiError
     */
    public static getAttachment({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the attachment.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<AttachmentSingle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/attachments/{id}',
            path: {
                'id': id,
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
     * Update existing attachment.
     * Update the meta data for an existing attachment. This endpoint does not allow you to upload or download data. For that, see below.
     *
     * @returns AttachmentSingle Updated attachment stored, result in response
     * @throws ApiError
     */
    public static updateAttachment({
        id,
        requestBody,
        xTraceId,
    }: {
        /**
         * The ID of the attachment.
         */
        id: string,
        /**
         * JSON array with updated attachment information. See the model for the exact specifications.
         */
        requestBody: AttachmentUpdate,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<AttachmentSingle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/attachments/{id}',
            path: {
                'id': id,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                404: `Page not found`,
                422: `Validation error. The body will have the exact details.`,
                500: `Internal exception`,
            },
        });
    }

    /**
     * Delete an attachment.
     * With this endpoint you delete an attachment, including any stored file data.
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteAttachment({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the single attachment.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/attachments/{id}',
            path: {
                'id': id,
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
     * Download a single attachment.
     * This endpoint allows you to download the binary content of a transaction. It will be sent to you as a download, using the content type "application/octet-stream" and content disposition "attachment; filename=example.pdf".
     *
     * @returns binary The requested attachment
     * @throws ApiError
     */
    public static downloadAttachment({
        id,
        xTraceId,
    }: {
        /**
         * The ID of the attachment.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/attachments/{id}/download',
            path: {
                'id': id,
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
     * Upload an attachment.
     * Use this endpoint to upload (and possible overwrite) the file contents of an attachment. Simply put the entire file in the body as binary data.
     *
     * @returns void
     * @throws ApiError
     */
    public static uploadAttachment({
        id,
        xTraceId,
        requestBody,
    }: {
        /**
         * The ID of the attachment.
         */
        id: string,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        requestBody?: Blob,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/attachments/{id}/upload',
            path: {
                'id': id,
            },
            headers: {
                'X-Trace-Id': xTraceId,
            },
            body: requestBody,
            mediaType: 'application/octet-stream',
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
