/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountTypeProperty } from './AccountTypeProperty';

export type RecurrenceTransaction = {
    id?: string;
    description: string;
    /**
     * Amount of the transaction.
     */
    amount: string;
    /**
     * Foreign amount of the transaction.
     */
    foreign_amount?: string | null;
    /**
     * Submit either a currency_id or a currency_code.
     */
    currency_id?: string;
    /**
     * Submit either a currency_id or a currency_code.
     */
    currency_code?: string;
    readonly currency_symbol?: string;
    /**
     * Number of decimals in the currency
     */
    readonly currency_decimal_places?: number;
    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     */
    foreign_currency_id?: string | null;
    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     */
    foreign_currency_code?: string | null;
    readonly foreign_currency_symbol?: string | null;
    /**
     * Number of decimals in the currency
     */
    readonly foreign_currency_decimal_places?: number | null;
    /**
     * The budget ID for this transaction.
     */
    budget_id?: string;
    /**
     * The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored.
     */
    readonly budget_name?: string | null;
    /**
     * Category ID for this transaction.
     */
    category_id?: string;
    /**
     * Category name for this transaction.
     */
    category_name?: string;
    /**
     * ID of the source account. Submit either this or source_name.
     */
    source_id?: string;
    /**
     * Name of the source account. Submit either this or source_id.
     */
    source_name?: string;
    readonly source_iban?: string | null;
    source_type?: AccountTypeProperty;
    /**
     * ID of the destination account. Submit either this or destination_name.
     */
    destination_id?: string;
    /**
     * Name of the destination account. Submit either this or destination_id.
     */
    destination_name?: string;
    readonly destination_iban?: string | null;
    destination_type?: AccountTypeProperty;
    /**
     * Array of tags.
     */
    tags?: Array<string> | null;
    /**
     * Optional. Use either this or the piggy_bank_name
     */
    piggy_bank_id?: string | null;
    /**
     * Optional. Use either this or the piggy_bank_id
     */
    piggy_bank_name?: string | null;
    /**
     * Optional. Use either this or the bill_name
     */
    bill_id?: string | null;
    /**
     * Optional. Use either this or the bill_id
     */
    bill_name?: string | null;
};

