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
import type { Currency } from './Currency';
import {
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
} from './Currency';

/**
 * 
 * @export
 * @interface CurrencyRead
 */
export interface CurrencyRead {
    /**
     * Immutable value
     * @type {string}
     * @memberof CurrencyRead
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof CurrencyRead
     */
    id: string;
    /**
     * 
     * @type {Currency}
     * @memberof CurrencyRead
     */
    attributes: Currency;
}

/**
 * Check if a given object implements the CurrencyRead interface.
 */
export function instanceOfCurrencyRead(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function CurrencyReadFromJSON(json: any): CurrencyRead {
    return CurrencyReadFromJSONTyped(json, false);
}

export function CurrencyReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyRead {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': CurrencyFromJSON(json['attributes']),
    };
}

export function CurrencyReadToJSON(value?: CurrencyRead | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': CurrencyToJSON(value.attributes),
    };
}

