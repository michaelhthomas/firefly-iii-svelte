/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillRepeatFrequency } from './BillRepeatFrequency';

export type BillStore = {
    /**
     * Use either currency_id or currency_code
     */
    currency_id?: string;
    /**
     * Use either currency_id or currency_code
     */
    currency_code?: string;
    name: string;
    amount_min: string;
    amount_max: string;
    date: string;
    /**
     * The date after which this bill is no longer valid or applicable
     */
    end_date?: string;
    /**
     * The date before which the bill must be renewed (or cancelled)
     */
    extension_date?: string;
    repeat_freq: BillRepeatFrequency;
    /**
     * How often the bill must be skipped. 1 means a bi-monthly bill.
     */
    skip?: number;
    /**
     * If the bill is active.
     */
    active?: boolean;
    notes?: string | null;
    /**
     * The group ID of the group this object is part of. NULL if no group.
     */
    object_group_id?: string | null;
    /**
     * The name of the group. NULL if no group.
     */
    object_group_title?: string | null;
};

