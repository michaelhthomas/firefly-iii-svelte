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
 * @interface RuleGroup
 */
export interface RuleGroup {
    /**
     * 
     * @type {Date}
     * @memberof RuleGroup
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof RuleGroup
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof RuleGroup
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof RuleGroup
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RuleGroup
     */
    readonly order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RuleGroup
     */
    active?: boolean;
}

/**
 * Check if a given object implements the RuleGroup interface.
 */
export function instanceOfRuleGroup(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;

    return isInstance;
}

export function RuleGroupFromJSON(json: any): RuleGroup {
    return RuleGroupFromJSONTyped(json, false);
}

export function RuleGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'title': json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'active': !exists(json, 'active') ? undefined : json['active'],
    };
}

export function RuleGroupToJSON(value?: RuleGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'description': value.description,
        'active': value.active,
    };
}

