/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RuleActionStore } from './RuleActionStore';
import type { RuleTriggerStore } from './RuleTriggerStore';
import type { RuleTriggerType } from './RuleTriggerType';

export type RuleStore = {
    title: string;
    description?: string;
    /**
     * ID of the rule group under which the rule must be stored. Either this field or rule_group_title is mandatory.
     */
    rule_group_id: string;
    /**
     * Title of the rule group under which the rule must be stored. Either this field or rule_group_id is mandatory.
     */
    rule_group_title?: string;
    order?: number;
    trigger: RuleTriggerType;
    /**
     * Whether or not the rule is even active. Default is true.
     */
    active?: boolean;
    /**
     * If the rule is set to be strict, ALL triggers must hit in order for the rule to fire. Otherwise, just one is enough. Default value is true.
     */
    strict?: boolean;
    /**
     * If this value is true and the rule is triggered, other rules  after this one in the group will be skipped. Default value is false.
     */
    stop_processing?: boolean;
    triggers: Array<RuleTriggerStore>;
    actions: Array<RuleActionStore>;
};

