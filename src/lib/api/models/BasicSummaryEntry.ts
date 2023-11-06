/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BasicSummaryEntry = {
    /**
     * This is a reference to the type of info shared, not influenced by translations or user preferences. The EUR value is a reference to the currency code. Possibilities are: balance-in-ABC, spent-in-ABC, earned-in-ABC, bills-paid-in-ABC, bills-unpaid-in-ABC, left-to-spend-in-ABC and net-worth-in-ABC.
     */
    key?: string;
    /**
     * A translated title for the information shared.
     */
    title?: string;
    /**
     * The amount as a float.
     */
    monetary_value?: number;
    /**
     * The currency ID of the associated currency.
     */
    currency_id?: string;
    currency_code?: string;
    currency_symbol?: string;
    /**
     * Number of decimals for the associated currency.
     */
    currency_decimal_places?: number;
    /**
     * The amount formatted according to the users locale
     */
    value_parsed?: string;
    /**
     * Reference to a font-awesome icon without the fa- part.
     */
    local_icon?: string;
    /**
     * A short explanation of the amounts origin. Already formatted according to the locale of the user or translated, if relevant.
     */
    sub_title?: string;
};

