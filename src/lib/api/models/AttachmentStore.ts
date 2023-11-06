/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttachableType } from './AttachableType';

export type AttachmentStore = {
    filename: string;
    attachable_type: AttachableType;
    /**
     * ID of the model this attachment is linked to.
     */
    attachable_id: string;
    title?: string;
    notes?: string | null;
};

