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
import type { RuleActionStore } from './RuleActionStore';
import {
    RuleActionStoreFromJSON,
    RuleActionStoreFromJSONTyped,
    RuleActionStoreToJSON,
} from './RuleActionStore';
import type { RuleTriggerStore } from './RuleTriggerStore';
import {
    RuleTriggerStoreFromJSON,
    RuleTriggerStoreFromJSONTyped,
    RuleTriggerStoreToJSON,
} from './RuleTriggerStore';
import type { RuleTriggerType } from './RuleTriggerType';
import {
    RuleTriggerTypeFromJSON,
    RuleTriggerTypeFromJSONTyped,
    RuleTriggerTypeToJSON,
} from './RuleTriggerType';

/**
 * 
 * @export
 * @interface RuleStore
 */
export interface RuleStore {
    /**
     * 
     * @type {string}
     * @memberof RuleStore
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof RuleStore
     */
    description?: string;
    /**
     * ID of the rule group under which the rule must be stored. Either this field or rule_group_title is mandatory.
     * @type {string}
     * @memberof RuleStore
     */
    ruleGroupId: string;
    /**
     * Title of the rule group under which the rule must be stored. Either this field or rule_group_id is mandatory.
     * @type {string}
     * @memberof RuleStore
     */
    ruleGroupTitle?: string;
    /**
     * 
     * @type {number}
     * @memberof RuleStore
     */
    order?: number;
    /**
     * 
     * @type {RuleTriggerType}
     * @memberof RuleStore
     */
    trigger: RuleTriggerType;
    /**
     * Whether or not the rule is even active. Default is true.
     * @type {boolean}
     * @memberof RuleStore
     */
    active?: boolean;
    /**
     * If the rule is set to be strict, ALL triggers must hit in order for the rule to fire. Otherwise, just one is enough. Default value is true.
     * @type {boolean}
     * @memberof RuleStore
     */
    strict?: boolean;
    /**
     * If this value is true and the rule is triggered, other rules  after this one in the group will be skipped. Default value is false.
     * @type {boolean}
     * @memberof RuleStore
     */
    stopProcessing?: boolean;
    /**
     * 
     * @type {Array<RuleTriggerStore>}
     * @memberof RuleStore
     */
    triggers: Array<RuleTriggerStore>;
    /**
     * 
     * @type {Array<RuleActionStore>}
     * @memberof RuleStore
     */
    actions: Array<RuleActionStore>;
}

/**
 * Check if a given object implements the RuleStore interface.
 */
export function instanceOfRuleStore(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "ruleGroupId" in value;
    isInstance = isInstance && "trigger" in value;
    isInstance = isInstance && "triggers" in value;
    isInstance = isInstance && "actions" in value;

    return isInstance;
}

export function RuleStoreFromJSON(json: any): RuleStore {
    return RuleStoreFromJSONTyped(json, false);
}

export function RuleStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'ruleGroupId': json['rule_group_id'],
        'ruleGroupTitle': !exists(json, 'rule_group_title') ? undefined : json['rule_group_title'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'trigger': RuleTriggerTypeFromJSON(json['trigger']),
        'active': !exists(json, 'active') ? undefined : json['active'],
        'strict': !exists(json, 'strict') ? undefined : json['strict'],
        'stopProcessing': !exists(json, 'stop_processing') ? undefined : json['stop_processing'],
        'triggers': ((json['triggers'] as Array<any>).map(RuleTriggerStoreFromJSON)),
        'actions': ((json['actions'] as Array<any>).map(RuleActionStoreFromJSON)),
    };
}

export function RuleStoreToJSON(value?: RuleStore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'description': value.description,
        'rule_group_id': value.ruleGroupId,
        'rule_group_title': value.ruleGroupTitle,
        'order': value.order,
        'trigger': RuleTriggerTypeToJSON(value.trigger),
        'active': value.active,
        'strict': value.strict,
        'stop_processing': value.stopProcessing,
        'triggers': ((value.triggers as Array<any>).map(RuleTriggerStoreToJSON)),
        'actions': ((value.actions as Array<any>).map(RuleActionStoreToJSON)),
    };
}

