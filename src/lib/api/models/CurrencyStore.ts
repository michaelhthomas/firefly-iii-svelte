/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CurrencyStore = {
    /**
     * Defaults to true
     */
    enabled?: boolean;
    /**
     * Make this currency the default currency.
     */
    default?: boolean;
    code: string;
    name: string;
    symbol: string;
    /**
     * Supports 0-16 decimals.
     */
    decimal_places?: number;
};

