/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v2.0.10
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2023-10-15T12:13:25+00:00  Please keep in mind that the demo site does not accept requests from curl, colly, wget, etc. You must use a browser or a tool like Postman to make requests. Too many script kiddies out there, sorry about that. 
 *
 * The version of the OpenAPI document: 2.0.10
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RecurrenceTransactionStore
 */
export interface RecurrenceTransactionStore {
    /**
     * 
     * @type {string}
     * @memberof RecurrenceTransactionStore
     */
    description: string;
    /**
     * Amount of the transaction.
     * @type {string}
     * @memberof RecurrenceTransactionStore
     */
    amount: string;
    /**
     * Foreign amount of the transaction.
     * @type {string}
     * @memberof RecurrenceTransactionStore
     */
    foreignAmount?: string | null;
    /**
     * Submit either a currency_id or a currency_code.
     * @type {string}
     * @memberof RecurrenceTransactionStore
     */
    currencyId?: string;
    /**
     * Submit either a currency_id or a currency_code.
     * @type {string}
     * @memberof RecurrenceTransactionStore
     */
    currencyCode?: string;
    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     * @type {string}
     * @memberof RecurrenceTransactionStore
     */
    foreignCurrencyId?: string | null;
    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     * @type {string}
     * @memberof RecurrenceTransactionStore
     */
    foreignCurrencyCode?: string | null;
    /**
     * The budget ID for this transaction.
     * @type {string}
     * @memberof RecurrenceTransactionStore
     */
    budgetId?: string;
    /**
     * Category ID for this transaction.
     * @type {string}
     * @memberof RecurrenceTransactionStore
     */
    categoryId?: string;
    /**
     * ID of the source account.
     * @type {string}
     * @memberof RecurrenceTransactionStore
     */
    sourceId: string;
    /**
     * ID of the destination account.
     * @type {string}
     * @memberof RecurrenceTransactionStore
     */
    destinationId: string;
    /**
     * Array of tags.
     * @type {Array<string>}
     * @memberof RecurrenceTransactionStore
     */
    tags?: Array<string> | null;
    /**
     * Optional.
     * @type {string}
     * @memberof RecurrenceTransactionStore
     */
    piggyBankId?: string | null;
    /**
     * Optional.
     * @type {string}
     * @memberof RecurrenceTransactionStore
     */
    billId?: string | null;
}

/**
 * Check if a given object implements the RecurrenceTransactionStore interface.
 */
export function instanceOfRecurrenceTransactionStore(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "sourceId" in value;
    isInstance = isInstance && "destinationId" in value;

    return isInstance;
}

export function RecurrenceTransactionStoreFromJSON(json: any): RecurrenceTransactionStore {
    return RecurrenceTransactionStoreFromJSONTyped(json, false);
}

export function RecurrenceTransactionStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurrenceTransactionStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'amount': json['amount'],
        'foreignAmount': !exists(json, 'foreign_amount') ? undefined : json['foreign_amount'],
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'foreignCurrencyId': !exists(json, 'foreign_currency_id') ? undefined : json['foreign_currency_id'],
        'foreignCurrencyCode': !exists(json, 'foreign_currency_code') ? undefined : json['foreign_currency_code'],
        'budgetId': !exists(json, 'budget_id') ? undefined : json['budget_id'],
        'categoryId': !exists(json, 'category_id') ? undefined : json['category_id'],
        'sourceId': json['source_id'],
        'destinationId': json['destination_id'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'piggyBankId': !exists(json, 'piggy_bank_id') ? undefined : json['piggy_bank_id'],
        'billId': !exists(json, 'bill_id') ? undefined : json['bill_id'],
    };
}

export function RecurrenceTransactionStoreToJSON(value?: RecurrenceTransactionStore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'amount': value.amount,
        'foreign_amount': value.foreignAmount,
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'foreign_currency_id': value.foreignCurrencyId,
        'foreign_currency_code': value.foreignCurrencyCode,
        'budget_id': value.budgetId,
        'category_id': value.categoryId,
        'source_id': value.sourceId,
        'destination_id': value.destinationId,
        'tags': value.tags,
        'piggy_bank_id': value.piggyBankId,
        'bill_id': value.billId,
    };
}

