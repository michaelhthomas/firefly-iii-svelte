/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionTypeProperty } from './TransactionTypeProperty';

export type TransactionSplitStore = {
    type: TransactionTypeProperty;
    /**
     * Date of the transaction
     */
    date: string;
    /**
     * Amount of the transaction.
     */
    amount: string;
    /**
     * Description of the transaction.
     */
    description: string;
    /**
     * Order of this entry in the list of transactions.
     */
    order?: number | null;
    /**
     * Currency ID. Default is the source account's currency, or the user's default currency. The value you submit may be overruled by the source or destination account.
     */
    currency_id?: string | null;
    /**
     * Currency code. Default is the source account's currency, or the user's default currency. The value you submit may be overruled by the source or destination account.
     */
    currency_code?: string | null;
    /**
     * The amount in a foreign currency.
     */
    foreign_amount?: string | null;
    /**
     * Currency ID of the foreign currency. Default is null. Is required when you submit a foreign amount.
     */
    foreign_currency_id?: string | null;
    /**
     * Currency code of the foreign currency. Default is NULL. Can be used instead of the foreign_currency_id, but this or the ID is required when submitting a foreign amount.
     */
    foreign_currency_code?: string | null;
    /**
     * The budget ID for this transaction.
     */
    budget_id?: string | null;
    /**
     * The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored.
     */
    readonly budget_name?: string | null;
    /**
     * The category ID for this transaction.
     */
    category_id?: string | null;
    /**
     * The name of the category to be used. If the category is unknown, it will be created. If the ID and the name point to different categories, the ID overrules the name.
     */
    category_name?: string | null;
    /**
     * ID of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account.
     */
    source_id?: string | null;
    /**
     * Name of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account. Can be used instead of the source_id. If the transaction is a deposit, the source_name can be filled in freely: the account will be created based on the name.
     */
    source_name?: string | null;
    /**
     * ID of the destination account. For a deposit or a transfer, this must always be an asset account. For withdrawals this must be an expense account.
     */
    destination_id?: string | null;
    /**
     * Name of the destination account. You can submit the name instead of the ID. For everything except transfers, the account will be auto-generated if unknown, so submitting a name is enough.
     */
    destination_name?: string | null;
    /**
     * If the transaction has been reconciled already. When you set this, the amount can no longer be edited by the user.
     */
    reconciled?: boolean;
    /**
     * Optional. Use either this or the piggy_bank_name
     */
    piggy_bank_id?: number;
    /**
     * Optional. Use either this or the piggy_bank_id
     */
    piggy_bank_name?: string;
    /**
     * Optional. Use either this or the bill_name
     */
    bill_id?: string | null;
    /**
     * Optional. Use either this or the bill_id
     */
    bill_name?: string | null;
    /**
     * Array of tags.
     */
    tags?: Array<string> | null;
    notes?: string | null;
    /**
     * Reference to internal reference of other systems.
     */
    internal_reference?: string | null;
    /**
     * Reference to external ID in other systems.
     */
    external_id?: string | null;
    /**
     * External, custom URL for this transaction.
     */
    external_url?: string | null;
    /**
     * Internal ID of bunq transaction. Field is no longer used but still works.
     */
    bunq_payment_id?: string | null;
    /**
     * SEPA Clearing Code
     */
    sepa_cc?: string | null;
    /**
     * SEPA Opposing Account Identifier
     */
    sepa_ct_op?: string | null;
    /**
     * SEPA end-to-end Identifier
     */
    sepa_ct_id?: string | null;
    /**
     * SEPA mandate identifier
     */
    sepa_db?: string | null;
    /**
     * SEPA Country
     */
    sepa_country?: string | null;
    /**
     * SEPA External Purpose indicator
     */
    sepa_ep?: string | null;
    /**
     * SEPA Creditor Identifier
     */
    sepa_ci?: string | null;
    /**
     * SEPA Batch ID
     */
    sepa_batch_id?: string | null;
    interest_date?: string | null;
    book_date?: string | null;
    process_date?: string | null;
    due_date?: string | null;
    payment_date?: string | null;
    invoice_date?: string | null;
};

