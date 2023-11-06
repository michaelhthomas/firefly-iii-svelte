/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountRoleProperty } from './AccountRoleProperty';
import type { CreditCardType } from './CreditCardType';
import type { InterestPeriod } from './InterestPeriod';
import type { LiabilityDirection } from './LiabilityDirection';
import type { LiabilityType } from './LiabilityType';
import type { ShortAccountTypeProperty } from './ShortAccountTypeProperty';

export type AccountStore = {
    name: string;
    type: ShortAccountTypeProperty;
    iban?: string | null;
    bic?: string | null;
    account_number?: string | null;
    /**
     * Represents the opening balance, the initial amount this account holds.
     */
    opening_balance?: string;
    /**
     * Represents the date of the opening balance.
     */
    opening_balance_date?: string | null;
    virtual_balance?: string;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     */
    currency_id?: string;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     */
    currency_code?: string;
    /**
     * If omitted, defaults to true.
     */
    active?: boolean;
    /**
     * Order of the account
     */
    order?: number;
    /**
     * If omitted, defaults to true.
     */
    include_net_worth?: boolean;
    account_role?: AccountRoleProperty;
    credit_card_type?: CreditCardType;
    /**
     * Mandatory when the account_role is ccAsset. Moment at which CC payment installments are asked for by the bank.
     */
    monthly_payment_date?: string | null;
    liability_type?: LiabilityType;
    liability_direction?: LiabilityDirection;
    /**
     * Mandatory when type is liability. Interest percentage.
     */
    interest?: string | null;
    interest_period?: InterestPeriod;
    notes?: string | null;
    /**
     * Latitude of the accounts's location, if applicable. Can be used to draw a map.
     */
    latitude?: number | null;
    /**
     * Latitude of the accounts's location, if applicable. Can be used to draw a map.
     */
    longitude?: number | null;
    /**
     * Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels.
     */
    zoom_level?: number | null;
};

