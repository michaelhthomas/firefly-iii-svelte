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
 * @interface AutocompleteCurrency
 */
export interface AutocompleteCurrency {
    /**
     * 
     * @type {string}
     * @memberof AutocompleteCurrency
     */
    id: string;
    /**
     * Currency name.
     * @type {string}
     * @memberof AutocompleteCurrency
     */
    name: string;
    /**
     * Currency code.
     * @type {string}
     * @memberof AutocompleteCurrency
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof AutocompleteCurrency
     */
    symbol: string;
    /**
     * 
     * @type {number}
     * @memberof AutocompleteCurrency
     */
    decimalPlaces: number;
}

/**
 * Check if a given object implements the AutocompleteCurrency interface.
 */
export function instanceOfAutocompleteCurrency(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "decimalPlaces" in value;

    return isInstance;
}

export function AutocompleteCurrencyFromJSON(json: any): AutocompleteCurrency {
    return AutocompleteCurrencyFromJSONTyped(json, false);
}

export function AutocompleteCurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutocompleteCurrency {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'code': json['code'],
        'symbol': json['symbol'],
        'decimalPlaces': json['decimal_places'],
    };
}

export function AutocompleteCurrencyToJSON(value?: AutocompleteCurrency | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'code': value.code,
        'symbol': value.symbol,
        'decimal_places': value.decimalPlaces,
    };
}

