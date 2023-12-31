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
 * @interface CategoryEarned
 */
export interface CategoryEarned {
    /**
     * 
     * @type {string}
     * @memberof CategoryEarned
     */
    currencyId?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryEarned
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryEarned
     */
    currencySymbol?: string;
    /**
     * Number of decimals supported by the currency
     * @type {number}
     * @memberof CategoryEarned
     */
    currencyDecimalPlaces?: number;
    /**
     * The amount earned.
     * @type {string}
     * @memberof CategoryEarned
     */
    sum?: string;
}

/**
 * Check if a given object implements the CategoryEarned interface.
 */
export function instanceOfCategoryEarned(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CategoryEarnedFromJSON(json: any): CategoryEarned {
    return CategoryEarnedFromJSONTyped(json, false);
}

export function CategoryEarnedFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryEarned {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'currencySymbol': !exists(json, 'currency_symbol') ? undefined : json['currency_symbol'],
        'currencyDecimalPlaces': !exists(json, 'currency_decimal_places') ? undefined : json['currency_decimal_places'],
        'sum': !exists(json, 'sum') ? undefined : json['sum'],
    };
}

export function CategoryEarnedToJSON(value?: CategoryEarned | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'currency_symbol': value.currencySymbol,
        'currency_decimal_places': value.currencyDecimalPlaces,
        'sum': value.sum,
    };
}

