/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InsightTotalEntry = {
    /**
     * The amount spent between start date and end date, defined as a string, for this expense account and all asset accounts.
     */
    difference?: string;
    /**
     * The amount spent between start date and end date, defined as a string, for this expense account and all asset accounts. This number is a float (double) and may have rounding errors.
     */
    difference_float?: number;
    /**
     * The currency ID of the expenses listed for this expense account.
     */
    currency_id?: string;
    /**
     * The currency code of the expenses listed for this expense account.
     */
    currency_code?: string;
};

