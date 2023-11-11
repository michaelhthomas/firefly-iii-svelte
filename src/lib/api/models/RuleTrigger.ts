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
import type { RuleTriggerKeyword } from './RuleTriggerKeyword';
import {
    RuleTriggerKeywordFromJSON,
    RuleTriggerKeywordFromJSONTyped,
    RuleTriggerKeywordToJSON,
} from './RuleTriggerKeyword';

/**
 * 
 * @export
 * @interface RuleTrigger
 */
export interface RuleTrigger {
    /**
     * 
     * @type {string}
     * @memberof RuleTrigger
     */
    readonly id?: string;
    /**
     * 
     * @type {Date}
     * @memberof RuleTrigger
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof RuleTrigger
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {RuleTriggerKeyword}
     * @memberof RuleTrigger
     */
    type: RuleTriggerKeyword;
    /**
     * The accompanying value the trigger responds to. This value is often mandatory, but this depends on the trigger.
     * @type {string}
     * @memberof RuleTrigger
     */
    value: string;
    /**
     * Order of the trigger
     * @type {number}
     * @memberof RuleTrigger
     */
    readonly order?: number;
    /**
     * If the trigger is active. Defaults to true.
     * @type {boolean}
     * @memberof RuleTrigger
     */
    active?: boolean;
    /**
     * When true, other triggers will not be checked if this trigger was triggered. Defaults to false.
     * @type {boolean}
     * @memberof RuleTrigger
     */
    stopProcessing?: boolean;
}

/**
 * Check if a given object implements the RuleTrigger interface.
 */
export function instanceOfRuleTrigger(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function RuleTriggerFromJSON(json: any): RuleTrigger {
    return RuleTriggerFromJSONTyped(json, false);
}

export function RuleTriggerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleTrigger {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'type': RuleTriggerKeywordFromJSON(json['type']),
        'value': json['value'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'stopProcessing': !exists(json, 'stop_processing') ? undefined : json['stop_processing'],
    };
}

export function RuleTriggerToJSON(value?: RuleTrigger | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': RuleTriggerKeywordToJSON(value.type),
        'value': value.value,
        'active': value.active,
        'stop_processing': value.stopProcessing,
    };
}

