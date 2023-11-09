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

import { exists, mapValues } from '../runtime';
import type { AutoBudgetPeriod } from './AutoBudgetPeriod';
import {
    AutoBudgetPeriodFromJSON,
    AutoBudgetPeriodFromJSONTyped,
    AutoBudgetPeriodToJSON,
} from './AutoBudgetPeriod';
import type { AutoBudgetType } from './AutoBudgetType';
import {
    AutoBudgetTypeFromJSON,
    AutoBudgetTypeFromJSONTyped,
    AutoBudgetTypeToJSON,
} from './AutoBudgetType';

/**
 * 
 * @export
 * @interface BudgetStore
 */
export interface BudgetStore {
    /**
     * 
     * @type {string}
     * @memberof BudgetStore
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof BudgetStore
     */
    active?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BudgetStore
     */
    readonly order?: number;
    /**
     * 
     * @type {string}
     * @memberof BudgetStore
     */
    notes?: string | null;
    /**
     * 
     * @type {AutoBudgetType}
     * @memberof BudgetStore
     */
    autoBudgetType?: AutoBudgetType | null;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     * @type {string}
     * @memberof BudgetStore
     */
    autoBudgetCurrencyId?: string | null;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     * @type {string}
     * @memberof BudgetStore
     */
    autoBudgetCurrencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BudgetStore
     */
    autoBudgetAmount?: string | null;
    /**
     * 
     * @type {AutoBudgetPeriod}
     * @memberof BudgetStore
     */
    autoBudgetPeriod?: AutoBudgetPeriod | null;
}

/**
 * Check if a given object implements the BudgetStore interface.
 */
export function instanceOfBudgetStore(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function BudgetStoreFromJSON(json: any): BudgetStore {
    return BudgetStoreFromJSONTyped(json, false);
}

export function BudgetStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'autoBudgetType': !exists(json, 'auto_budget_type') ? undefined : AutoBudgetTypeFromJSON(json['auto_budget_type']),
        'autoBudgetCurrencyId': !exists(json, 'auto_budget_currency_id') ? undefined : json['auto_budget_currency_id'],
        'autoBudgetCurrencyCode': !exists(json, 'auto_budget_currency_code') ? undefined : json['auto_budget_currency_code'],
        'autoBudgetAmount': !exists(json, 'auto_budget_amount') ? undefined : json['auto_budget_amount'],
        'autoBudgetPeriod': !exists(json, 'auto_budget_period') ? undefined : AutoBudgetPeriodFromJSON(json['auto_budget_period']),
    };
}

export function BudgetStoreToJSON(value?: BudgetStore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'active': value.active,
        'notes': value.notes,
        'auto_budget_type': AutoBudgetTypeToJSON(value.autoBudgetType),
        'auto_budget_currency_id': value.autoBudgetCurrencyId,
        'auto_budget_currency_code': value.autoBudgetCurrencyCode,
        'auto_budget_amount': value.autoBudgetAmount,
        'auto_budget_period': AutoBudgetPeriodToJSON(value.autoBudgetPeriod),
    };
}

