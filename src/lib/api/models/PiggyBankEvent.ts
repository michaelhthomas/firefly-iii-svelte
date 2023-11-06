/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PiggyBankEvent = {
    created_at?: string;
    updated_at?: string;
    currency_id?: string;
    currency_code?: string;
    currency_symbol?: string;
    currency_decimal_places?: number;
    amount?: string;
    /**
     * The journal associated with the event.
     */
    transaction_journal_id?: string;
    /**
     * The transaction group associated with the event.
     */
    transaction_group_id?: string;
};

