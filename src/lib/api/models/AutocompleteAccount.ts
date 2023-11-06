/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AutocompleteAccount = {
    id: string;
    /**
     * Name of the account found by an auto-complete search.
     */
    name: string;
    /**
     * Asset accounts and liabilities have a second field with the given date's account balance.
     */
    name_with_balance: string;
    /**
     * Account type of the account found by the auto-complete search.
     */
    type: string;
    /**
     * ID for the currency used by this account.
     */
    currency_id: string;
    /**
     * Currency name for the currency used by this account.
     */
    currency_name: string;
    /**
     * Currency code for the currency used by this account.
     */
    currency_code: string;
    /**
     * Currency symbol for the currency used by this account.
     */
    currency_symbol: string;
    /**
     * Number of decimal places for the currency used by this account.
     */
    currency_decimal_places: number;
};

