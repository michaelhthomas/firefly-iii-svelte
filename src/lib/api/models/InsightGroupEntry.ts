/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InsightGroupEntry = {
    /**
     * This ID is a reference to the original object.
     */
    id?: string;
    /**
     * This is the name of the object.
     */
    name?: string;
    /**
     * The amount spent or earned between start date and end date, a number defined as a string, for this object and all asset accounts.
     */
    difference?: string;
    /**
     * The amount spent or earned between start date and end date, a number as a float, for this object and all asset accounts. May have rounding errors.
     */
    difference_float?: number;
    /**
     * The currency ID of the expenses listed for this account.
     */
    currency_id?: string;
    /**
     * The currency code of the expenses listed for this account.
     */
    currency_code?: string;
};

