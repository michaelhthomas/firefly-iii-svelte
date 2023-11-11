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
 * @interface InsightGroupEntry
 */
export interface InsightGroupEntry {
    /**
     * This ID is a reference to the original object.
     * @type {string}
     * @memberof InsightGroupEntry
     */
    id?: string;
    /**
     * This is the name of the object.
     * @type {string}
     * @memberof InsightGroupEntry
     */
    name?: string;
    /**
     * The amount spent or earned between start date and end date, a number defined as a string, for this object and all asset accounts.
     * @type {string}
     * @memberof InsightGroupEntry
     */
    difference?: string;
    /**
     * The amount spent or earned between start date and end date, a number as a float, for this object and all asset accounts. May have rounding errors.
     * @type {number}
     * @memberof InsightGroupEntry
     */
    differenceFloat?: number;
    /**
     * The currency ID of the expenses listed for this account.
     * @type {string}
     * @memberof InsightGroupEntry
     */
    currencyId?: string;
    /**
     * The currency code of the expenses listed for this account.
     * @type {string}
     * @memberof InsightGroupEntry
     */
    currencyCode?: string;
}

/**
 * Check if a given object implements the InsightGroupEntry interface.
 */
export function instanceOfInsightGroupEntry(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InsightGroupEntryFromJSON(json: any): InsightGroupEntry {
    return InsightGroupEntryFromJSONTyped(json, false);
}

export function InsightGroupEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): InsightGroupEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'difference': !exists(json, 'difference') ? undefined : json['difference'],
        'differenceFloat': !exists(json, 'difference_float') ? undefined : json['difference_float'],
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
    };
}

export function InsightGroupEntryToJSON(value?: InsightGroupEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'difference': value.difference,
        'difference_float': value.differenceFloat,
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
    };
}

