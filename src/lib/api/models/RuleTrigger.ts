/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RuleTriggerKeyword } from './RuleTriggerKeyword';

export type RuleTrigger = {
    readonly id?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
    type: RuleTriggerKeyword;
    /**
     * The accompanying value the trigger responds to. This value is often mandatory, but this depends on the trigger.
     */
    value: string;
    /**
     * Order of the trigger
     */
    readonly order?: number;
    /**
     * If the trigger is active. Defaults to true.
     */
    active?: boolean;
    /**
     * When true, other triggers will not be checked if this trigger was triggered. Defaults to false.
     */
    stop_processing?: boolean;
};

