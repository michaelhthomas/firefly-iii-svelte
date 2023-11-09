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
import type { BillRepeatFrequency } from './BillRepeatFrequency';
import {
    BillRepeatFrequencyFromJSON,
    BillRepeatFrequencyFromJSONTyped,
    BillRepeatFrequencyToJSON,
} from './BillRepeatFrequency';

/**
 * 
 * @export
 * @interface BillUpdate
 */
export interface BillUpdate {
    /**
     * Use either currency_id or currency_code
     * @type {string}
     * @memberof BillUpdate
     */
    currencyId?: string;
    /**
     * Use either currency_id or currency_code
     * @type {string}
     * @memberof BillUpdate
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof BillUpdate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof BillUpdate
     */
    amountMin?: string;
    /**
     * 
     * @type {string}
     * @memberof BillUpdate
     */
    amountMax?: string;
    /**
     * 
     * @type {Date}
     * @memberof BillUpdate
     */
    date?: Date;
    /**
     * The date after which this bill is no longer valid or applicable
     * @type {Date}
     * @memberof BillUpdate
     */
    endDate?: Date;
    /**
     * The date before which the bill must be renewed (or cancelled)
     * @type {Date}
     * @memberof BillUpdate
     */
    extensionDate?: Date;
    /**
     * 
     * @type {BillRepeatFrequency}
     * @memberof BillUpdate
     */
    repeatFreq?: BillRepeatFrequency;
    /**
     * How often the bill must be skipped. 1 means a bi-monthly bill.
     * @type {number}
     * @memberof BillUpdate
     */
    skip?: number;
    /**
     * If the bill is active.
     * @type {boolean}
     * @memberof BillUpdate
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BillUpdate
     */
    notes?: string | null;
    /**
     * The group ID of the group this object is part of. NULL if no group.
     * @type {string}
     * @memberof BillUpdate
     */
    objectGroupId?: string | null;
    /**
     * The name of the group. NULL if no group.
     * @type {string}
     * @memberof BillUpdate
     */
    objectGroupTitle?: string | null;
}

/**
 * Check if a given object implements the BillUpdate interface.
 */
export function instanceOfBillUpdate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function BillUpdateFromJSON(json: any): BillUpdate {
    return BillUpdateFromJSONTyped(json, false);
}

export function BillUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'name': json['name'],
        'amountMin': !exists(json, 'amount_min') ? undefined : json['amount_min'],
        'amountMax': !exists(json, 'amount_max') ? undefined : json['amount_max'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'endDate': !exists(json, 'end_date') ? undefined : (new Date(json['end_date'])),
        'extensionDate': !exists(json, 'extension_date') ? undefined : (new Date(json['extension_date'])),
        'repeatFreq': !exists(json, 'repeat_freq') ? undefined : BillRepeatFrequencyFromJSON(json['repeat_freq']),
        'skip': !exists(json, 'skip') ? undefined : json['skip'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'objectGroupId': !exists(json, 'object_group_id') ? undefined : json['object_group_id'],
        'objectGroupTitle': !exists(json, 'object_group_title') ? undefined : json['object_group_title'],
    };
}

export function BillUpdateToJSON(value?: BillUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'name': value.name,
        'amount_min': value.amountMin,
        'amount_max': value.amountMax,
        'date': value.date === undefined ? undefined : (value.date.toISOString()),
        'end_date': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'extension_date': value.extensionDate === undefined ? undefined : (value.extensionDate.toISOString()),
        'repeat_freq': BillRepeatFrequencyToJSON(value.repeatFreq),
        'skip': value.skip,
        'active': value.active,
        'notes': value.notes,
        'object_group_id': value.objectGroupId,
        'object_group_title': value.objectGroupTitle,
    };
}

