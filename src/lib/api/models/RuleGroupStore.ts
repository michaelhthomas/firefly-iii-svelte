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
 * @interface RuleGroupStore
 */
export interface RuleGroupStore {
    /**
     * 
     * @type {string}
     * @memberof RuleGroupStore
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof RuleGroupStore
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RuleGroupStore
     */
    order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RuleGroupStore
     */
    active?: boolean;
}

/**
 * Check if a given object implements the RuleGroupStore interface.
 */
export function instanceOfRuleGroupStore(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;

    return isInstance;
}

export function RuleGroupStoreFromJSON(json: any): RuleGroupStore {
    return RuleGroupStoreFromJSONTyped(json, false);
}

export function RuleGroupStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleGroupStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'active': !exists(json, 'active') ? undefined : json['active'],
    };
}

export function RuleGroupStoreToJSON(value?: RuleGroupStore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'description': value.description,
        'order': value.order,
        'active': value.active,
    };
}

