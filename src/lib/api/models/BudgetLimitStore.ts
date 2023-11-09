/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BudgetLimitStore = {
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     */
    currency_id?: string;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     */
    currency_code?: string;
    /**
     * The budget ID of the associated budget.
     */
    readonly budget_id: string;
    /**
     * Start date of the budget limit.
     */
    start: string;
    /**
     * Period of the budget limit. Only used when auto-generated by auto-budget.
     */
    readonly period?: string | null;
    /**
     * End date of the budget limit.
     */
    end: string;
    amount: string;
};
