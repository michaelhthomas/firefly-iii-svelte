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


/**
 * 
 * @export
 */
export const AccountTypeFilter = {
    All: 'all',
    Asset: 'asset',
    Cash: 'cash',
    Expense: 'expense',
    Revenue: 'revenue',
    Special: 'special',
    Hidden: 'hidden',
    Liability: 'liability',
    Liabilities: 'liabilities',
    DefaultAccount: 'Default account',
    CashAccount: 'Cash account',
    AssetAccount: 'Asset account',
    ExpenseAccount: 'Expense account',
    RevenueAccount: 'Revenue account',
    InitialBalanceAccount: 'Initial balance account',
    BeneficiaryAccount: 'Beneficiary account',
    ImportAccount: 'Import account',
    ReconciliationAccount: 'Reconciliation account',
    Loan: 'Loan',
    Debt: 'Debt',
    Mortgage: 'Mortgage'
} as const;
export type AccountTypeFilter = typeof AccountTypeFilter[keyof typeof AccountTypeFilter];


export function AccountTypeFilterFromJSON(json: any): AccountTypeFilter {
    return AccountTypeFilterFromJSONTyped(json, false);
}

export function AccountTypeFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountTypeFilter {
    return json as AccountTypeFilter;
}

export function AccountTypeFilterToJSON(value?: AccountTypeFilter | null): any {
    return value as any;
}

