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
import type { RecurrenceRepetitionUpdate } from './RecurrenceRepetitionUpdate';
import {
    RecurrenceRepetitionUpdateFromJSON,
    RecurrenceRepetitionUpdateFromJSONTyped,
    RecurrenceRepetitionUpdateToJSON,
} from './RecurrenceRepetitionUpdate';
import type { RecurrenceTransactionUpdate } from './RecurrenceTransactionUpdate';
import {
    RecurrenceTransactionUpdateFromJSON,
    RecurrenceTransactionUpdateFromJSONTyped,
    RecurrenceTransactionUpdateToJSON,
} from './RecurrenceTransactionUpdate';

/**
 * 
 * @export
 * @interface RecurrenceUpdate
 */
export interface RecurrenceUpdate {
    /**
     * 
     * @type {string}
     * @memberof RecurrenceUpdate
     */
    title?: string;
    /**
     * Not to be confused with the description of the actual transaction(s) being created.
     * @type {string}
     * @memberof RecurrenceUpdate
     */
    description?: string;
    /**
     * First time the recurring transaction will fire.
     * @type {Date}
     * @memberof RecurrenceUpdate
     */
    firstDate?: Date;
    /**
     * Date until the recurring transaction can fire. After that date, it's basically inactive. Use either this field or repetitions.
     * @type {Date}
     * @memberof RecurrenceUpdate
     */
    repeatUntil?: Date | null;
    /**
     * Max number of created transactions. Use either this field or repeat_until.
     * @type {number}
     * @memberof RecurrenceUpdate
     */
    nrOfRepetitions?: number | null;
    /**
     * Whether or not to fire the rules after the creation of a transaction.
     * @type {boolean}
     * @memberof RecurrenceUpdate
     */
    applyRules?: boolean;
    /**
     * If the recurrence is even active.
     * @type {boolean}
     * @memberof RecurrenceUpdate
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RecurrenceUpdate
     */
    notes?: string | null;
    /**
     * 
     * @type {Array<RecurrenceRepetitionUpdate>}
     * @memberof RecurrenceUpdate
     */
    repetitions?: Array<RecurrenceRepetitionUpdate>;
    /**
     * 
     * @type {Array<RecurrenceTransactionUpdate>}
     * @memberof RecurrenceUpdate
     */
    transactions?: Array<RecurrenceTransactionUpdate>;
}

/**
 * Check if a given object implements the RecurrenceUpdate interface.
 */
export function instanceOfRecurrenceUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RecurrenceUpdateFromJSON(json: any): RecurrenceUpdate {
    return RecurrenceUpdateFromJSONTyped(json, false);
}

export function RecurrenceUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurrenceUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'firstDate': !exists(json, 'first_date') ? undefined : (new Date(json['first_date'])),
        'repeatUntil': !exists(json, 'repeat_until') ? undefined : (json['repeat_until'] === null ? null : new Date(json['repeat_until'])),
        'nrOfRepetitions': !exists(json, 'nr_of_repetitions') ? undefined : json['nr_of_repetitions'],
        'applyRules': !exists(json, 'apply_rules') ? undefined : json['apply_rules'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'repetitions': !exists(json, 'repetitions') ? undefined : ((json['repetitions'] as Array<any>).map(RecurrenceRepetitionUpdateFromJSON)),
        'transactions': !exists(json, 'transactions') ? undefined : ((json['transactions'] as Array<any>).map(RecurrenceTransactionUpdateFromJSON)),
    };
}

export function RecurrenceUpdateToJSON(value?: RecurrenceUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'description': value.description,
        'first_date': value.firstDate === undefined ? undefined : (value.firstDate.toISOString().substring(0,10)),
        'repeat_until': value.repeatUntil === undefined ? undefined : (value.repeatUntil === null ? null : value.repeatUntil.toISOString().substring(0,10)),
        'nr_of_repetitions': value.nrOfRepetitions,
        'apply_rules': value.applyRules,
        'active': value.active,
        'notes': value.notes,
        'repetitions': value.repetitions === undefined ? undefined : ((value.repetitions as Array<any>).map(RecurrenceRepetitionUpdateToJSON)),
        'transactions': value.transactions === undefined ? undefined : ((value.transactions as Array<any>).map(RecurrenceTransactionUpdateToJSON)),
    };
}

