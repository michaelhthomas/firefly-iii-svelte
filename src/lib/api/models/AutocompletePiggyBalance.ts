/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AutocompletePiggyBalance = {
    id: string;
    /**
     * Name of the piggy bank found by an auto-complete search.
     */
    name: string;
    /**
     * Name of the piggy bank found by an auto-complete search with the current balance formatted nicely.
     */
    name_with_balance?: string;
    /**
     * Currency ID for this piggy bank.
     */
    currency_id?: string;
    /**
     * Currency code for this piggy bank.
     */
    currency_code?: string;
    currency_symbol?: string;
    currency_decimal_places?: number;
    /**
     * The group ID of the group this object is part of. NULL if no group.
     */
    object_group_id?: string | null;
    /**
     * The name of the group. NULL if no group.
     */
    object_group_title?: string | null;
};

