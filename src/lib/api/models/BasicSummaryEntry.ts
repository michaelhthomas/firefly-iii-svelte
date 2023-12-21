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
 * @interface BasicSummaryEntry
 */
export interface BasicSummaryEntry {
    /**
     * This is a reference to the type of info shared, not influenced by translations or user preferences. The EUR value is a reference to the currency code. Possibilities are: balance-in-ABC, spent-in-ABC, earned-in-ABC, bills-paid-in-ABC, bills-unpaid-in-ABC, left-to-spend-in-ABC and net-worth-in-ABC.
     * @type {string}
     * @memberof BasicSummaryEntry
     */
    key?: string;
    /**
     * A translated title for the information shared.
     * @type {string}
     * @memberof BasicSummaryEntry
     */
    title?: string;
    /**
     * The amount as a float.
     * @type {number}
     * @memberof BasicSummaryEntry
     */
    monetaryValue?: number;
    /**
     * The currency ID of the associated currency.
     * @type {string}
     * @memberof BasicSummaryEntry
     */
    currencyId?: string;
    /**
     * 
     * @type {string}
     * @memberof BasicSummaryEntry
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof BasicSummaryEntry
     */
    currencySymbol?: string;
    /**
     * Number of decimals for the associated currency.
     * @type {number}
     * @memberof BasicSummaryEntry
     */
    currencyDecimalPlaces?: number;
    /**
     * The amount formatted according to the users locale
     * @type {string}
     * @memberof BasicSummaryEntry
     */
    valueParsed?: string;
    /**
     * Reference to a font-awesome icon without the fa- part.
     * @type {string}
     * @memberof BasicSummaryEntry
     */
    localIcon?: string;
    /**
     * A short explanation of the amounts origin. Already formatted according to the locale of the user or translated, if relevant.
     * @type {string}
     * @memberof BasicSummaryEntry
     */
    subTitle?: string;
}

/**
 * Check if a given object implements the BasicSummaryEntry interface.
 */
export function instanceOfBasicSummaryEntry(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BasicSummaryEntryFromJSON(json: any): BasicSummaryEntry {
    return BasicSummaryEntryFromJSONTyped(json, false);
}

export function BasicSummaryEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicSummaryEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : json['key'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'monetaryValue': !exists(json, 'monetary_value') ? undefined : json['monetary_value'],
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'currencySymbol': !exists(json, 'currency_symbol') ? undefined : json['currency_symbol'],
        'currencyDecimalPlaces': !exists(json, 'currency_decimal_places') ? undefined : json['currency_decimal_places'],
        'valueParsed': !exists(json, 'value_parsed') ? undefined : json['value_parsed'],
        'localIcon': !exists(json, 'local_icon') ? undefined : json['local_icon'],
        'subTitle': !exists(json, 'sub_title') ? undefined : json['sub_title'],
    };
}

export function BasicSummaryEntryToJSON(value?: BasicSummaryEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'title': value.title,
        'monetary_value': value.monetaryValue,
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'currency_symbol': value.currencySymbol,
        'currency_decimal_places': value.currencyDecimalPlaces,
        'value_parsed': value.valueParsed,
        'local_icon': value.localIcon,
        'sub_title': value.subTitle,
    };
}

