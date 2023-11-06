/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CurrencyUpdate = {
    /**
     * If the currency is enabled
     */
    enabled?: boolean;
    /**
     * If the currency must be the default for the user. You can only submit TRUE.
     */
    default?: boolean;
    /**
     * The currency code
     */
    code?: string;
    /**
     * The currency name
     */
    name?: string;
    /**
     * The currency symbol
     */
    symbol?: string;
    /**
     * How many decimals to use when displaying this currency. Between 0 and 16.
     */
    decimal_places?: number;
};

