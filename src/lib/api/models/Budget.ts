/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AutoBudgetPeriod } from './AutoBudgetPeriod';
import type { AutoBudgetType } from './AutoBudgetType';
import type { BudgetSpent } from './BudgetSpent';

export type Budget = {
    readonly created_at?: string;
    readonly updated_at?: string;
    name: string;
    active?: boolean;
    notes?: string | null;
    readonly order?: number;
    auto_budget_type?: AutoBudgetType;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     */
    auto_budget_currency_id?: string | null;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     */
    auto_budget_currency_code?: string | null;
    auto_budget_amount?: string | null;
    auto_budget_period?: AutoBudgetPeriod;
    /**
     * Information on how much was spent in this budget. Is only filled in when the start and end date are submitted.
     */
    readonly spent?: Array<BudgetSpent>;
};

