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
import type { RuleActionKeyword } from './RuleActionKeyword';
import {
    RuleActionKeywordFromJSON,
    RuleActionKeywordFromJSONTyped,
    RuleActionKeywordToJSON,
} from './RuleActionKeyword';

/**
 * 
 * @export
 * @interface RuleActionStore
 */
export interface RuleActionStore {
    /**
     * 
     * @type {RuleActionKeyword}
     * @memberof RuleActionStore
     */
    type: RuleActionKeyword;
    /**
     * The accompanying value the action will set, change or update. Can be empty, but for some types this value is mandatory.
     * @type {string}
     * @memberof RuleActionStore
     */
    value: string | null;
    /**
     * Order of the action
     * @type {number}
     * @memberof RuleActionStore
     */
    order?: number;
    /**
     * If the action is active. Defaults to true.
     * @type {boolean}
     * @memberof RuleActionStore
     */
    active?: boolean;
    /**
     * When true, other actions will not be fired after this action has fired. Defaults to false.
     * @type {boolean}
     * @memberof RuleActionStore
     */
    stopProcessing?: boolean;
}

/**
 * Check if a given object implements the RuleActionStore interface.
 */
export function instanceOfRuleActionStore(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function RuleActionStoreFromJSON(json: any): RuleActionStore {
    return RuleActionStoreFromJSONTyped(json, false);
}

export function RuleActionStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleActionStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': RuleActionKeywordFromJSON(json['type']),
        'value': json['value'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'stopProcessing': !exists(json, 'stop_processing') ? undefined : json['stop_processing'],
    };
}

export function RuleActionStoreToJSON(value?: RuleActionStore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': RuleActionKeywordToJSON(value.type),
        'value': value.value,
        'order': value.order,
        'active': value.active,
        'stop_processing': value.stopProcessing,
    };
}

