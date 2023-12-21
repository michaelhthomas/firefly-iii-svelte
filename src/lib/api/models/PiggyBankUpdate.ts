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
 * @interface PiggyBankUpdate
 */
export interface PiggyBankUpdate {
    /**
     * 
     * @type {string}
     * @memberof PiggyBankUpdate
     */
    name?: string;
    /**
     * The ID of the asset account this piggy bank is connected to.
     * @type {string}
     * @memberof PiggyBankUpdate
     */
    accountId?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBankUpdate
     */
    readonly currencyId?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBankUpdate
     */
    readonly currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof PiggyBankUpdate
     */
    targetAmount?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PiggyBankUpdate
     */
    currentAmount?: string;
    /**
     * The date you started with this piggy bank.
     * @type {Date}
     * @memberof PiggyBankUpdate
     */
    startDate?: Date;
    /**
     * The date you intend to finish saving money.
     * @type {Date}
     * @memberof PiggyBankUpdate
     */
    targetDate?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof PiggyBankUpdate
     */
    order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PiggyBankUpdate
     */
    readonly active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PiggyBankUpdate
     */
    notes?: string | null;
    /**
     * The group ID of the group this object is part of. NULL if no group.
     * @type {string}
     * @memberof PiggyBankUpdate
     */
    objectGroupId?: string | null;
    /**
     * The name of the group. NULL if no group.
     * @type {string}
     * @memberof PiggyBankUpdate
     */
    objectGroupTitle?: string | null;
}

/**
 * Check if a given object implements the PiggyBankUpdate interface.
 */
export function instanceOfPiggyBankUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PiggyBankUpdateFromJSON(json: any): PiggyBankUpdate {
    return PiggyBankUpdateFromJSONTyped(json, false);
}

export function PiggyBankUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PiggyBankUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'targetAmount': !exists(json, 'target_amount') ? undefined : json['target_amount'],
        'currentAmount': !exists(json, 'current_amount') ? undefined : json['current_amount'],
        'startDate': !exists(json, 'start_date') ? undefined : (new Date(json['start_date'])),
        'targetDate': !exists(json, 'target_date') ? undefined : (json['target_date'] === null ? null : new Date(json['target_date'])),
        'order': !exists(json, 'order') ? undefined : json['order'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'objectGroupId': !exists(json, 'object_group_id') ? undefined : json['object_group_id'],
        'objectGroupTitle': !exists(json, 'object_group_title') ? undefined : json['object_group_title'],
    };
}

export function PiggyBankUpdateToJSON(value?: PiggyBankUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'account_id': value.accountId,
        'target_amount': value.targetAmount,
        'current_amount': value.currentAmount,
        'start_date': value.startDate === undefined ? undefined : (value.startDate.toISOString().substring(0,10)),
        'target_date': value.targetDate === undefined ? undefined : (value.targetDate === null ? null : value.targetDate.toISOString().substring(0,10)),
        'order': value.order,
        'notes': value.notes,
        'object_group_id': value.objectGroupId,
        'object_group_title': value.objectGroupTitle,
    };
}

