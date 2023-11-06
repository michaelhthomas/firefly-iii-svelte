/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachableType } from './AttachableType';

export type Attachment = {
    readonly created_at?: string;
    readonly updated_at?: string;
    attachable_type: AttachableType;
    /**
     * ID of the model this attachment is linked to.
     */
    attachable_id: string;
    /**
     * MD5 hash of the file for basic duplicate detection.
     */
    md5?: string;
    filename: string;
    download_url?: string;
    upload_url?: string;
    title?: string;
    notes?: string | null;
    readonly mime?: string;
    readonly size?: number;
};

