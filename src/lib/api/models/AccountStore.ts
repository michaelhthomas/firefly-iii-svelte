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

import { exists, mapValues } from '../runtime';
import type { AccountRoleProperty } from './AccountRoleProperty';
import {
    AccountRolePropertyFromJSON,
    AccountRolePropertyFromJSONTyped,
    AccountRolePropertyToJSON,
} from './AccountRoleProperty';
import type { CreditCardType } from './CreditCardType';
import {
    CreditCardTypeFromJSON,
    CreditCardTypeFromJSONTyped,
    CreditCardTypeToJSON,
} from './CreditCardType';
import type { InterestPeriod } from './InterestPeriod';
import {
    InterestPeriodFromJSON,
    InterestPeriodFromJSONTyped,
    InterestPeriodToJSON,
} from './InterestPeriod';
import type { LiabilityDirection } from './LiabilityDirection';
import {
    LiabilityDirectionFromJSON,
    LiabilityDirectionFromJSONTyped,
    LiabilityDirectionToJSON,
} from './LiabilityDirection';
import type { LiabilityType } from './LiabilityType';
import {
    LiabilityTypeFromJSON,
    LiabilityTypeFromJSONTyped,
    LiabilityTypeToJSON,
} from './LiabilityType';
import type { ShortAccountTypeProperty } from './ShortAccountTypeProperty';
import {
    ShortAccountTypePropertyFromJSON,
    ShortAccountTypePropertyFromJSONTyped,
    ShortAccountTypePropertyToJSON,
} from './ShortAccountTypeProperty';

/**
 * 
 * @export
 * @interface AccountStore
 */
export interface AccountStore {
    /**
     * 
     * @type {string}
     * @memberof AccountStore
     */
    name: string;
    /**
     * 
     * @type {ShortAccountTypeProperty}
     * @memberof AccountStore
     */
    type: ShortAccountTypeProperty;
    /**
     * 
     * @type {string}
     * @memberof AccountStore
     */
    iban?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountStore
     */
    bic?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountStore
     */
    accountNumber?: string | null;
    /**
     * Represents the opening balance, the initial amount this account holds.
     * @type {string}
     * @memberof AccountStore
     */
    openingBalance?: string;
    /**
     * Represents the date of the opening balance.
     * @type {Date}
     * @memberof AccountStore
     */
    openingBalanceDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof AccountStore
     */
    virtualBalance?: string;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     * @type {string}
     * @memberof AccountStore
     */
    currencyId?: string;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     * @type {string}
     * @memberof AccountStore
     */
    currencyCode?: string;
    /**
     * If omitted, defaults to true.
     * @type {boolean}
     * @memberof AccountStore
     */
    active?: boolean;
    /**
     * Order of the account
     * @type {number}
     * @memberof AccountStore
     */
    order?: number;
    /**
     * If omitted, defaults to true.
     * @type {boolean}
     * @memberof AccountStore
     */
    includeNetWorth?: boolean;
    /**
     * 
     * @type {AccountRoleProperty}
     * @memberof AccountStore
     */
    accountRole?: AccountRoleProperty | null;
    /**
     * 
     * @type {CreditCardType}
     * @memberof AccountStore
     */
    creditCardType?: CreditCardType | null;
    /**
     * Mandatory when the account_role is ccAsset. Moment at which CC payment installments are asked for by the bank.
     * @type {Date}
     * @memberof AccountStore
     */
    monthlyPaymentDate?: Date | null;
    /**
     * 
     * @type {LiabilityType}
     * @memberof AccountStore
     */
    liabilityType?: LiabilityType | null;
    /**
     * 
     * @type {LiabilityDirection}
     * @memberof AccountStore
     */
    liabilityDirection?: LiabilityDirection | null;
    /**
     * Mandatory when type is liability. Interest percentage.
     * @type {string}
     * @memberof AccountStore
     */
    interest?: string | null;
    /**
     * 
     * @type {InterestPeriod}
     * @memberof AccountStore
     */
    interestPeriod?: InterestPeriod | null;
    /**
     * 
     * @type {string}
     * @memberof AccountStore
     */
    notes?: string | null;
    /**
     * Latitude of the accounts's location, if applicable. Can be used to draw a map.
     * @type {number}
     * @memberof AccountStore
     */
    latitude?: number | null;
    /**
     * Latitude of the accounts's location, if applicable. Can be used to draw a map.
     * @type {number}
     * @memberof AccountStore
     */
    longitude?: number | null;
    /**
     * Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels.
     * @type {number}
     * @memberof AccountStore
     */
    zoomLevel?: number | null;
}

/**
 * Check if a given object implements the AccountStore interface.
 */
export function instanceOfAccountStore(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function AccountStoreFromJSON(json: any): AccountStore {
    return AccountStoreFromJSONTyped(json, false);
}

export function AccountStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': ShortAccountTypePropertyFromJSON(json['type']),
        'iban': !exists(json, 'iban') ? undefined : json['iban'],
        'bic': !exists(json, 'bic') ? undefined : json['bic'],
        'accountNumber': !exists(json, 'account_number') ? undefined : json['account_number'],
        'openingBalance': !exists(json, 'opening_balance') ? undefined : json['opening_balance'],
        'openingBalanceDate': !exists(json, 'opening_balance_date') ? undefined : (json['opening_balance_date'] === null ? null : new Date(json['opening_balance_date'])),
        'virtualBalance': !exists(json, 'virtual_balance') ? undefined : json['virtual_balance'],
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'includeNetWorth': !exists(json, 'include_net_worth') ? undefined : json['include_net_worth'],
        'accountRole': !exists(json, 'account_role') ? undefined : AccountRolePropertyFromJSON(json['account_role']),
        'creditCardType': !exists(json, 'credit_card_type') ? undefined : CreditCardTypeFromJSON(json['credit_card_type']),
        'monthlyPaymentDate': !exists(json, 'monthly_payment_date') ? undefined : (json['monthly_payment_date'] === null ? null : new Date(json['monthly_payment_date'])),
        'liabilityType': !exists(json, 'liability_type') ? undefined : LiabilityTypeFromJSON(json['liability_type']),
        'liabilityDirection': !exists(json, 'liability_direction') ? undefined : LiabilityDirectionFromJSON(json['liability_direction']),
        'interest': !exists(json, 'interest') ? undefined : json['interest'],
        'interestPeriod': !exists(json, 'interest_period') ? undefined : InterestPeriodFromJSON(json['interest_period']),
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'zoomLevel': !exists(json, 'zoom_level') ? undefined : json['zoom_level'],
    };
}

export function AccountStoreToJSON(value?: AccountStore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': ShortAccountTypePropertyToJSON(value.type),
        'iban': value.iban,
        'bic': value.bic,
        'account_number': value.accountNumber,
        'opening_balance': value.openingBalance,
        'opening_balance_date': value.openingBalanceDate === undefined ? undefined : (value.openingBalanceDate === null ? null : value.openingBalanceDate.toISOString()),
        'virtual_balance': value.virtualBalance,
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'active': value.active,
        'order': value.order,
        'include_net_worth': value.includeNetWorth,
        'account_role': AccountRolePropertyToJSON(value.accountRole),
        'credit_card_type': CreditCardTypeToJSON(value.creditCardType),
        'monthly_payment_date': value.monthlyPaymentDate === undefined ? undefined : (value.monthlyPaymentDate === null ? null : value.monthlyPaymentDate.toISOString()),
        'liability_type': LiabilityTypeToJSON(value.liabilityType),
        'liability_direction': LiabilityDirectionToJSON(value.liabilityDirection),
        'interest': value.interest,
        'interest_period': InterestPeriodToJSON(value.interestPeriod),
        'notes': value.notes,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'zoom_level': value.zoomLevel,
    };
}

