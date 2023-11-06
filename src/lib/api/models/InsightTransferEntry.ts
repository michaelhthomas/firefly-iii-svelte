/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InsightTransferEntry = {
    /**
     * This ID is a reference to the original object.
     */
    id?: string;
    /**
     * This is the name of the object.
     */
    name?: string;
    /**
     * The total amount transferred between start date and end date, a number defined as a string, for this asset account.
     */
    difference?: string;
    /**
     * The total amount transferred between start date and end date, a number as a float, for this asset account. May have rounding errors.
     */
    difference_float?: number;
    /**
     * The total amount transferred TO this account between start date and end date, a number defined as a string, for this asset account.
     */
    in?: string;
    /**
     * The total amount transferred FROM this account between start date and end date, a number as a float, for this asset account. May have rounding errors.
     */
    in_float?: number;
    /**
     * The total amount transferred FROM this account between start date and end date, a number defined as a string, for this asset account.
     */
    out?: string;
    /**
     * The total amount transferred TO this account between start date and end date, a number as a float, for this asset account. May have rounding errors.
     */
    out_float?: number;
    /**
     * The currency ID of the expenses listed for this account.
     */
    currency_id?: string;
    /**
     * The currency code of the expenses listed for this account.
     */
    currency_code?: string;
};

