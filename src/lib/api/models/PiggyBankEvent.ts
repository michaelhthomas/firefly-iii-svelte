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
/**
 * 
 * @export
 * @interface PiggyBankEvent
 */
export interface PiggyBankEvent {
    /**
     * 
     * @type {Date}
     * @memberof PiggyBankEvent
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PiggyBankEvent
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof PiggyBankEvent
     */
    currencyId?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBankEvent
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBankEvent
     */
    currencySymbol?: string;
    /**
     * 
     * @type {number}
     * @memberof PiggyBankEvent
     */
    currencyDecimalPlaces?: number;
    /**
     * 
     * @type {string}
     * @memberof PiggyBankEvent
     */
    amount?: string;
    /**
     * The journal associated with the event.
     * @type {string}
     * @memberof PiggyBankEvent
     */
    transactionJournalId?: string | null;
    /**
     * The transaction group associated with the event.
     * @type {string}
     * @memberof PiggyBankEvent
     */
    transactionGroupId?: string | null;
}

/**
 * Check if a given object implements the PiggyBankEvent interface.
 */
export function instanceOfPiggyBankEvent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PiggyBankEventFromJSON(json: any): PiggyBankEvent {
    return PiggyBankEventFromJSONTyped(json, false);
}

export function PiggyBankEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): PiggyBankEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'currencySymbol': !exists(json, 'currency_symbol') ? undefined : json['currency_symbol'],
        'currencyDecimalPlaces': !exists(json, 'currency_decimal_places') ? undefined : json['currency_decimal_places'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'transactionJournalId': !exists(json, 'transaction_journal_id') ? undefined : json['transaction_journal_id'],
        'transactionGroupId': !exists(json, 'transaction_group_id') ? undefined : json['transaction_group_id'],
    };
}

export function PiggyBankEventToJSON(value?: PiggyBankEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'currency_symbol': value.currencySymbol,
        'currency_decimal_places': value.currencyDecimalPlaces,
        'amount': value.amount,
        'transaction_journal_id': value.transactionJournalId,
        'transaction_group_id': value.transactionGroupId,
    };
}

