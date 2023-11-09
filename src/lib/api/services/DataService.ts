/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataDestroyObject } from '../models/DataDestroyObject';
import type { ExportFileFilter } from '../models/ExportFileFilter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DataService {

    /**
     * Bulk update transaction properties. For more information, see https://docs.firefly-iii.org/firefly-iii/api/specials
     * Allows you to update transactions in bulk.
     *
     * @returns void
     * @throws ApiError
     */
    public static bulkUpdateTransactions({
        query,
    }: {
        /**
         * The JSON query.
         */
        query: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/data/bulk/transactions',
            query: {
                'query': query,
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
     * Endpoint to destroy user data
     * A call to this endpoint deletes the requested data type. Use it with care and always with user permission.
     * The demo user is incapable of using this endpoint.
     *
     * @returns void
     * @throws ApiError
     */
    public static destroyData({
        objects,
        xTraceId,
    }: {
        /**
         * The type of data that you wish to destroy. You can only use one at a time.
         */
        objects: DataDestroyObject,
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/data/destroy',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'objects': objects,
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
     * Export account data from Firefly III
     * This endpoint allows you to export your accounts from Firefly III into a file. Currently supports CSV exports only.
     *
     * @returns binary The exported transaction in a file.
     * @throws ApiError
     */
    public static exportAccounts({
        xTraceId,
        type,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * The file type the export file (CSV is currently the only option).
         */
        type?: ExportFileFilter,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/data/export/accounts',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'type': type,
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
     * Export bills from Firefly III
     * This endpoint allows you to export your bills from Firefly III into a file. Currently supports CSV exports only.
     *
     * @returns binary The exported transaction in a file.
     * @throws ApiError
     */
    public static exportBills({
        xTraceId,
        type,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * The file type the export file (CSV is currently the only option).
         */
        type?: ExportFileFilter,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/data/export/bills',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'type': type,
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
     * Export budgets and budget amount data from Firefly III
     * This endpoint allows you to export your budgets and associated budget data from Firefly III into a file. Currently supports CSV exports only.
     *
     * @returns binary The exported transaction in a file.
     * @throws ApiError
     */
    public static exportBudgets({
        xTraceId,
        type,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * The file type the export file (CSV is currently the only option).
         */
        type?: ExportFileFilter,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/data/export/budgets',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'type': type,
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
     * Export category data from Firefly III
     * This endpoint allows you to export your categories from Firefly III into a file. Currently supports CSV exports only.
     *
     * @returns binary The exported transaction in a file.
     * @throws ApiError
     */
    public static exportCategories({
        xTraceId,
        type,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * The file type the export file (CSV is currently the only option).
         */
        type?: ExportFileFilter,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/data/export/categories',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'type': type,
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
     * Export piggy banks from Firefly III
     * This endpoint allows you to export your piggy banks from Firefly III into a file. Currently supports CSV exports only.
     *
     * @returns binary The exported transaction in a file.
     * @throws ApiError
     */
    public static exportPiggies({
        xTraceId,
        type,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * The file type the export file (CSV is currently the only option).
         */
        type?: ExportFileFilter,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/data/export/piggy-banks',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'type': type,
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
     * Export recurring transaction data from Firefly III
     * This endpoint allows you to export your recurring transactions from Firefly III into a file. Currently supports CSV exports only.
     *
     * @returns binary The exported transaction in a file.
     * @throws ApiError
     */
    public static exportRecurring({
        xTraceId,
        type,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * The file type the export file (CSV is currently the only option).
         */
        type?: ExportFileFilter,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/data/export/recurring',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'type': type,
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
     * Export rule groups and rule data from Firefly III
     * This endpoint allows you to export your rules and rule groups from Firefly III into a file. Currently supports CSV exports only.
     *
     * @returns binary The exported transaction in a file.
     * @throws ApiError
     */
    public static exportRules({
        xTraceId,
        type,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * The file type the export file (CSV is currently the only option).
         */
        type?: ExportFileFilter,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/data/export/rules',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'type': type,
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
     * Export tag data from Firefly III
     * This endpoint allows you to export your tags from Firefly III into a file. Currently supports CSV exports only.
     *
     * @returns binary The exported transaction in a file.
     * @throws ApiError
     */
    public static exportTags({
        xTraceId,
        type,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
        /**
         * The file type the export file (CSV is currently the only option).
         */
        type?: ExportFileFilter,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/data/export/tags',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'type': type,
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
     * Export transaction data from Firefly III
     * This endpoint allows you to export transactions from Firefly III into a file. Currently supports CSV exports only.
     *
     * @returns binary The exported transaction in a file.
     * @throws ApiError
     */
    public static exportTransactions({
        start,
        end,
        xTraceId,
        accounts,
        type,
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
         * Limit the export of transactions to these accounts only. Only asset accounts will be accepted. Other types will be silently dropped.
         *
         */
        accounts?: string,
        /**
         * The file type the export file (CSV is currently the only option).
         */
        type?: ExportFileFilter,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/data/export/transactions',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            query: {
                'start': start,
                'end': end,
                'accounts': accounts,
                'type': type,
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
     * Endpoint to purge user data
     * A call to this endpoint purges all previously deleted data. Use it with care and always with user permission.
     * The demo user is incapable of using this endpoint.
     *
     * @returns void
     * @throws ApiError
     */
    public static purgeData({
        xTraceId,
    }: {
        /**
         * Unique identifier associated with this request.
         */
        xTraceId?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/data/purge',
            headers: {
                'X-Trace-Id': xTraceId,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthenticated`,
                500: `Internal exception`,
            },
        });
    }

}
