/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BudgetSpent } from './BudgetSpent';

export type AvailableBudget = {
    readonly created_at?: string;
    readonly updated_at?: string;
    /**
     * Use either currency_id or currency_code.
     */
    currency_id?: string;
    /**
     * Use either currency_id or currency_code.
     */
    currency_code?: string;
    readonly currency_symbol?: string;
    readonly currency_decimal_places?: number;
    amount: string;
    /**
     * Start date of the available budget.
     */
    start: string;
    /**
     * End date of the available budget.
     */
    end: string;
    readonly spent_in_budgets?: Array<BudgetSpent>;
    readonly spent_outside_budget?: Array<BudgetSpent>;
};

