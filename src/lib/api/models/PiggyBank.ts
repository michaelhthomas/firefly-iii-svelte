/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PiggyBank = {
    readonly created_at?: string;
    readonly updated_at?: string;
    /**
     * The ID of the asset account this piggy bank is connected to.
     */
    account_id: string;
    /**
     * The name of the asset account this piggy bank is connected to.
     */
    readonly account_name?: string;
    name: string;
    readonly currency_id?: string;
    readonly currency_code?: string;
    readonly currency_symbol?: string;
    /**
     * Number of decimals supported by the currency
     */
    readonly currency_decimal_places?: number;
    target_amount: string | null;
    readonly percentage?: number | null;
    current_amount?: string;
    readonly left_to_save?: string | null;
    readonly save_per_month?: string | null;
    /**
     * The date you started with this piggy bank.
     */
    start_date?: string;
    /**
     * The date you intend to finish saving money.
     */
    target_date?: string | null;
    order?: number;
    readonly active?: boolean;
    notes?: string | null;
    /**
     * The group ID of the group this object is part of. NULL if no group.
     */
    object_group_id?: string | null;
    /**
     * The order of the group. At least 1, for the highest sorting.
     */
    readonly object_group_order?: number | null;
    /**
     * The name of the group. NULL if no group.
     */
    object_group_title?: string | null;
};

