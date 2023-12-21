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
import type { AccountRead } from './AccountRead';
import {
    AccountReadFromJSON,
    AccountReadFromJSONTyped,
    AccountReadToJSON,
} from './AccountRead';

/**
 * 
 * @export
 * @interface AccountSingle
 */
export interface AccountSingle {
    /**
     * 
     * @type {AccountRead}
     * @memberof AccountSingle
     */
    data: AccountRead;
}

/**
 * Check if a given object implements the AccountSingle interface.
 */
export function instanceOfAccountSingle(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AccountSingleFromJSON(json: any): AccountSingle {
    return AccountSingleFromJSONTyped(json, false);
}

export function AccountSingleFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountSingle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AccountReadFromJSON(json['data']),
    };
}

export function AccountSingleToJSON(value?: AccountSingle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AccountReadToJSON(value.data),
    };
}

