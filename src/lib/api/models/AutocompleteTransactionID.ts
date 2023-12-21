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
 * @interface AutocompleteTransactionID
 */
export interface AutocompleteTransactionID {
    /**
     * The ID of a transaction journal (basically a single split).
     * @type {string}
     * @memberof AutocompleteTransactionID
     */
    id: string;
    /**
     * The ID of the underlying transaction group.
     * @type {string}
     * @memberof AutocompleteTransactionID
     */
    transactionGroupId?: string;
    /**
     * Transaction description with ID in the name.
     * @type {string}
     * @memberof AutocompleteTransactionID
     */
    name: string;
    /**
     * Transaction description with ID in the name.
     * @type {string}
     * @memberof AutocompleteTransactionID
     */
    description: string;
}

/**
 * Check if a given object implements the AutocompleteTransactionID interface.
 */
export function instanceOfAutocompleteTransactionID(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function AutocompleteTransactionIDFromJSON(json: any): AutocompleteTransactionID {
    return AutocompleteTransactionIDFromJSONTyped(json, false);
}

export function AutocompleteTransactionIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutocompleteTransactionID {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'transactionGroupId': !exists(json, 'transaction_group_id') ? undefined : json['transaction_group_id'],
        'name': json['name'],
        'description': json['description'],
    };
}

export function AutocompleteTransactionIDToJSON(value?: AutocompleteTransactionID | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'transaction_group_id': value.transactionGroupId,
        'name': value.name,
        'description': value.description,
    };
}

