/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RuleActionKeyword } from './RuleActionKeyword';

export type RuleActionStore = {
    type: RuleActionKeyword;
    /**
     * The accompanying value the action will set, change or update. Can be empty, but for some types this value is mandatory.
     */
    value: string | null;
    /**
     * Order of the action
     */
    order?: number;
    /**
     * If the action is active. Defaults to true.
     */
    active?: boolean;
    /**
     * When true, other actions will not be fired after this action has fired. Defaults to false.
     */
    stop_processing?: boolean;
};

