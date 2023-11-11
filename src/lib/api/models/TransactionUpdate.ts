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
import type { TransactionSplitUpdate } from './TransactionSplitUpdate';
import {
    TransactionSplitUpdateFromJSON,
    TransactionSplitUpdateFromJSONTyped,
    TransactionSplitUpdateToJSON,
} from './TransactionSplitUpdate';

/**
 * 
 * @export
 * @interface TransactionUpdate
 */
export interface TransactionUpdate {
    /**
     * Whether or not to apply rules when submitting transaction.
     * @type {boolean}
     * @memberof TransactionUpdate
     */
    applyRules?: boolean;
    /**
     * Whether or not to fire the webhooks that are related to this event.
     * @type {boolean}
     * @memberof TransactionUpdate
     */
    fireWebhooks?: boolean;
    /**
     * Title of the transaction if it has been split in more than one piece. Empty otherwise.
     * @type {string}
     * @memberof TransactionUpdate
     */
    groupTitle?: string | null;
    /**
     * 
     * @type {Array<TransactionSplitUpdate>}
     * @memberof TransactionUpdate
     */
    transactions?: Array<TransactionSplitUpdate>;
}

/**
 * Check if a given object implements the TransactionUpdate interface.
 */
export function instanceOfTransactionUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionUpdateFromJSON(json: any): TransactionUpdate {
    return TransactionUpdateFromJSONTyped(json, false);
}

export function TransactionUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applyRules': !exists(json, 'apply_rules') ? undefined : json['apply_rules'],
        'fireWebhooks': !exists(json, 'fire_webhooks') ? undefined : json['fire_webhooks'],
        'groupTitle': !exists(json, 'group_title') ? undefined : json['group_title'],
        'transactions': !exists(json, 'transactions') ? undefined : ((json['transactions'] as Array<any>).map(TransactionSplitUpdateFromJSON)),
    };
}

export function TransactionUpdateToJSON(value?: TransactionUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apply_rules': value.applyRules,
        'fire_webhooks': value.fireWebhooks,
        'group_title': value.groupTitle,
        'transactions': value.transactions === undefined ? undefined : ((value.transactions as Array<any>).map(TransactionSplitUpdateToJSON)),
    };
}

