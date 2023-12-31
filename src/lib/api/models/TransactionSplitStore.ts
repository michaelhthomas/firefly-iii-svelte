/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v2.0.10
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2023-12-21T01:54:06+00:00  Please keep in mind that the demo site does not accept requests from curl, colly, wget, etc. You must use a browser or a tool like Postman to make requests. Too many script kiddies out there, sorry about that. 
 *
 * The version of the OpenAPI document: 2.0.10
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TransactionTypeProperty } from './TransactionTypeProperty';
import {
    TransactionTypePropertyFromJSON,
    TransactionTypePropertyFromJSONTyped,
    TransactionTypePropertyToJSON,
} from './TransactionTypeProperty';

/**
 * 
 * @export
 * @interface TransactionSplitStore
 */
export interface TransactionSplitStore {
    /**
     * 
     * @type {TransactionTypeProperty}
     * @memberof TransactionSplitStore
     */
    type: TransactionTypeProperty;
    /**
     * Date of the transaction
     * @type {Date}
     * @memberof TransactionSplitStore
     */
    date: Date;
    /**
     * Amount of the transaction.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    amount: string;
    /**
     * Description of the transaction.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    description: string;
    /**
     * Order of this entry in the list of transactions.
     * @type {number}
     * @memberof TransactionSplitStore
     */
    order?: number | null;
    /**
     * Currency ID. Default is the source account's currency, or the user's default currency. The value you submit may be overruled by the source or destination account.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    currencyId?: string | null;
    /**
     * Currency code. Default is the source account's currency, or the user's default currency. The value you submit may be overruled by the source or destination account.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    currencyCode?: string | null;
    /**
     * The amount in a foreign currency.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    foreignAmount?: string | null;
    /**
     * Currency ID of the foreign currency. Default is null. Is required when you submit a foreign amount.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    foreignCurrencyId?: string | null;
    /**
     * Currency code of the foreign currency. Default is NULL. Can be used instead of the foreign_currency_id, but this or the ID is required when submitting a foreign amount.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    foreignCurrencyCode?: string | null;
    /**
     * The budget ID for this transaction.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    budgetId?: string | null;
    /**
     * The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    readonly budgetName?: string | null;
    /**
     * The category ID for this transaction.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    categoryId?: string | null;
    /**
     * The name of the category to be used. If the category is unknown, it will be created. If the ID and the name point to different categories, the ID overrules the name.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    categoryName?: string | null;
    /**
     * ID of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    sourceId?: string | null;
    /**
     * Name of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account. Can be used instead of the source_id. If the transaction is a deposit, the source_name can be filled in freely: the account will be created based on the name.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    sourceName?: string | null;
    /**
     * ID of the destination account. For a deposit or a transfer, this must always be an asset account. For withdrawals this must be an expense account.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    destinationId?: string | null;
    /**
     * Name of the destination account. You can submit the name instead of the ID. For everything except transfers, the account will be auto-generated if unknown, so submitting a name is enough.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    destinationName?: string | null;
    /**
     * If the transaction has been reconciled already. When you set this, the amount can no longer be edited by the user.
     * @type {boolean}
     * @memberof TransactionSplitStore
     */
    reconciled?: boolean;
    /**
     * Optional. Use either this or the piggy_bank_name
     * @type {number}
     * @memberof TransactionSplitStore
     */
    piggyBankId?: number | null;
    /**
     * Optional. Use either this or the piggy_bank_id
     * @type {string}
     * @memberof TransactionSplitStore
     */
    piggyBankName?: string | null;
    /**
     * Optional. Use either this or the bill_name
     * @type {string}
     * @memberof TransactionSplitStore
     */
    billId?: string | null;
    /**
     * Optional. Use either this or the bill_id
     * @type {string}
     * @memberof TransactionSplitStore
     */
    billName?: string | null;
    /**
     * Array of tags.
     * @type {Array<string>}
     * @memberof TransactionSplitStore
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof TransactionSplitStore
     */
    notes?: string | null;
    /**
     * Reference to internal reference of other systems.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    internalReference?: string | null;
    /**
     * Reference to external ID in other systems.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    externalId?: string | null;
    /**
     * External, custom URL for this transaction.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    externalUrl?: string | null;
    /**
     * Internal ID of bunq transaction. Field is no longer used but still works.
     * @type {string}
     * @memberof TransactionSplitStore
     */
    bunqPaymentId?: string | null;
    /**
     * SEPA Clearing Code
     * @type {string}
     * @memberof TransactionSplitStore
     */
    sepaCc?: string | null;
    /**
     * SEPA Opposing Account Identifier
     * @type {string}
     * @memberof TransactionSplitStore
     */
    sepaCtOp?: string | null;
    /**
     * SEPA end-to-end Identifier
     * @type {string}
     * @memberof TransactionSplitStore
     */
    sepaCtId?: string | null;
    /**
     * SEPA mandate identifier
     * @type {string}
     * @memberof TransactionSplitStore
     */
    sepaDb?: string | null;
    /**
     * SEPA Country
     * @type {string}
     * @memberof TransactionSplitStore
     */
    sepaCountry?: string | null;
    /**
     * SEPA External Purpose indicator
     * @type {string}
     * @memberof TransactionSplitStore
     */
    sepaEp?: string | null;
    /**
     * SEPA Creditor Identifier
     * @type {string}
     * @memberof TransactionSplitStore
     */
    sepaCi?: string | null;
    /**
     * SEPA Batch ID
     * @type {string}
     * @memberof TransactionSplitStore
     */
    sepaBatchId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof TransactionSplitStore
     */
    interestDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof TransactionSplitStore
     */
    bookDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof TransactionSplitStore
     */
    processDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof TransactionSplitStore
     */
    dueDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof TransactionSplitStore
     */
    paymentDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof TransactionSplitStore
     */
    invoiceDate?: Date | null;
}

/**
 * Check if a given object implements the TransactionSplitStore interface.
 */
export function instanceOfTransactionSplitStore(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "date" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function TransactionSplitStoreFromJSON(json: any): TransactionSplitStore {
    return TransactionSplitStoreFromJSONTyped(json, false);
}

export function TransactionSplitStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionSplitStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': TransactionTypePropertyFromJSON(json['type']),
        'date': (new Date(json['date'])),
        'amount': json['amount'],
        'description': json['description'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'foreignAmount': !exists(json, 'foreign_amount') ? undefined : json['foreign_amount'],
        'foreignCurrencyId': !exists(json, 'foreign_currency_id') ? undefined : json['foreign_currency_id'],
        'foreignCurrencyCode': !exists(json, 'foreign_currency_code') ? undefined : json['foreign_currency_code'],
        'budgetId': !exists(json, 'budget_id') ? undefined : json['budget_id'],
        'budgetName': !exists(json, 'budget_name') ? undefined : json['budget_name'],
        'categoryId': !exists(json, 'category_id') ? undefined : json['category_id'],
        'categoryName': !exists(json, 'category_name') ? undefined : json['category_name'],
        'sourceId': !exists(json, 'source_id') ? undefined : json['source_id'],
        'sourceName': !exists(json, 'source_name') ? undefined : json['source_name'],
        'destinationId': !exists(json, 'destination_id') ? undefined : json['destination_id'],
        'destinationName': !exists(json, 'destination_name') ? undefined : json['destination_name'],
        'reconciled': !exists(json, 'reconciled') ? undefined : json['reconciled'],
        'piggyBankId': !exists(json, 'piggy_bank_id') ? undefined : json['piggy_bank_id'],
        'piggyBankName': !exists(json, 'piggy_bank_name') ? undefined : json['piggy_bank_name'],
        'billId': !exists(json, 'bill_id') ? undefined : json['bill_id'],
        'billName': !exists(json, 'bill_name') ? undefined : json['bill_name'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'internalReference': !exists(json, 'internal_reference') ? undefined : json['internal_reference'],
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
        'externalUrl': !exists(json, 'external_url') ? undefined : json['external_url'],
        'bunqPaymentId': !exists(json, 'bunq_payment_id') ? undefined : json['bunq_payment_id'],
        'sepaCc': !exists(json, 'sepa_cc') ? undefined : json['sepa_cc'],
        'sepaCtOp': !exists(json, 'sepa_ct_op') ? undefined : json['sepa_ct_op'],
        'sepaCtId': !exists(json, 'sepa_ct_id') ? undefined : json['sepa_ct_id'],
        'sepaDb': !exists(json, 'sepa_db') ? undefined : json['sepa_db'],
        'sepaCountry': !exists(json, 'sepa_country') ? undefined : json['sepa_country'],
        'sepaEp': !exists(json, 'sepa_ep') ? undefined : json['sepa_ep'],
        'sepaCi': !exists(json, 'sepa_ci') ? undefined : json['sepa_ci'],
        'sepaBatchId': !exists(json, 'sepa_batch_id') ? undefined : json['sepa_batch_id'],
        'interestDate': !exists(json, 'interest_date') ? undefined : (json['interest_date'] === null ? null : new Date(json['interest_date'])),
        'bookDate': !exists(json, 'book_date') ? undefined : (json['book_date'] === null ? null : new Date(json['book_date'])),
        'processDate': !exists(json, 'process_date') ? undefined : (json['process_date'] === null ? null : new Date(json['process_date'])),
        'dueDate': !exists(json, 'due_date') ? undefined : (json['due_date'] === null ? null : new Date(json['due_date'])),
        'paymentDate': !exists(json, 'payment_date') ? undefined : (json['payment_date'] === null ? null : new Date(json['payment_date'])),
        'invoiceDate': !exists(json, 'invoice_date') ? undefined : (json['invoice_date'] === null ? null : new Date(json['invoice_date'])),
    };
}

export function TransactionSplitStoreToJSON(value?: TransactionSplitStore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': TransactionTypePropertyToJSON(value.type),
        'date': (value.date.toISOString()),
        'amount': value.amount,
        'description': value.description,
        'order': value.order,
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'foreign_amount': value.foreignAmount,
        'foreign_currency_id': value.foreignCurrencyId,
        'foreign_currency_code': value.foreignCurrencyCode,
        'budget_id': value.budgetId,
        'category_id': value.categoryId,
        'category_name': value.categoryName,
        'source_id': value.sourceId,
        'source_name': value.sourceName,
        'destination_id': value.destinationId,
        'destination_name': value.destinationName,
        'reconciled': value.reconciled,
        'piggy_bank_id': value.piggyBankId,
        'piggy_bank_name': value.piggyBankName,
        'bill_id': value.billId,
        'bill_name': value.billName,
        'tags': value.tags,
        'notes': value.notes,
        'internal_reference': value.internalReference,
        'external_id': value.externalId,
        'external_url': value.externalUrl,
        'bunq_payment_id': value.bunqPaymentId,
        'sepa_cc': value.sepaCc,
        'sepa_ct_op': value.sepaCtOp,
        'sepa_ct_id': value.sepaCtId,
        'sepa_db': value.sepaDb,
        'sepa_country': value.sepaCountry,
        'sepa_ep': value.sepaEp,
        'sepa_ci': value.sepaCi,
        'sepa_batch_id': value.sepaBatchId,
        'interest_date': value.interestDate === undefined ? undefined : (value.interestDate === null ? null : value.interestDate.toISOString()),
        'book_date': value.bookDate === undefined ? undefined : (value.bookDate === null ? null : value.bookDate.toISOString()),
        'process_date': value.processDate === undefined ? undefined : (value.processDate === null ? null : value.processDate.toISOString()),
        'due_date': value.dueDate === undefined ? undefined : (value.dueDate === null ? null : value.dueDate.toISOString()),
        'payment_date': value.paymentDate === undefined ? undefined : (value.paymentDate === null ? null : value.paymentDate.toISOString()),
        'invoice_date': value.invoiceDate === undefined ? undefined : (value.invoiceDate === null ? null : value.invoiceDate.toISOString()),
    };
}

