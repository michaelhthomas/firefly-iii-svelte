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


/**
 * 
 * @export
 */
export const TransactionTypeFilter = {
    All: 'all',
    Withdrawal: 'withdrawal',
    Withdrawals: 'withdrawals',
    Expense: 'expense',
    Deposit: 'deposit',
    Deposits: 'deposits',
    Income: 'income',
    Transfer: 'transfer',
    Transfers: 'transfers',
    OpeningBalance: 'opening_balance',
    Reconciliation: 'reconciliation',
    Special: 'special',
    Specials: 'specials',
    Default: 'default'
} as const;
export type TransactionTypeFilter = typeof TransactionTypeFilter[keyof typeof TransactionTypeFilter];


export function TransactionTypeFilterFromJSON(json: any): TransactionTypeFilter {
    return TransactionTypeFilterFromJSONTyped(json, false);
}

export function TransactionTypeFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionTypeFilter {
    return json as TransactionTypeFilter;
}

export function TransactionTypeFilterToJSON(value?: TransactionTypeFilter | null): any {
    return value as any;
}

