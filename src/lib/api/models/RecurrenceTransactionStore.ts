/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RecurrenceTransactionStore = {
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
    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     */
    foreign_currency_id?: string | null;
    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     */
    foreign_currency_code?: string | null;
    /**
     * The budget ID for this transaction.
     */
    budget_id?: string;
    /**
     * Category ID for this transaction.
     */
    category_id?: string;
    /**
     * ID of the source account.
     */
    source_id: string;
    /**
     * ID of the destination account.
     */
    destination_id: string;
    /**
     * Array of tags.
     */
    tags?: Array<string> | null;
    /**
     * Optional.
     */
    piggy_bank_id?: string | null;
    /**
     * Optional.
     */
    bill_id?: string | null;
};

