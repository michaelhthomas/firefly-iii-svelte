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
/**
 * 
 * @export
 * @interface CronResultRow
 */
export interface CronResultRow {
    /**
     * This value tells you if this specific cron job actually fired. It may not fire. Some cron jobs
     * only fire every 24 hours, for example.
     * @type {boolean}
     * @memberof CronResultRow
     */
    jobFired?: boolean | null;
    /**
     * This value tells you if this specific cron job actually did something. The job may fire but not
     * change anything.
     * @type {boolean}
     * @memberof CronResultRow
     */
    jobSucceeded?: boolean | null;
    /**
     * If the cron job ran into some kind of an error, this value will be true.
     * @type {boolean}
     * @memberof CronResultRow
     */
    jobErrored?: boolean | null;
    /**
     * If the cron job ran into some kind of an error, this value will be the error message. The success message
     * if the job actually ran OK.
     * @type {string}
     * @memberof CronResultRow
     */
    message?: string | null;
}

/**
 * Check if a given object implements the CronResultRow interface.
 */
export function instanceOfCronResultRow(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CronResultRowFromJSON(json: any): CronResultRow {
    return CronResultRowFromJSONTyped(json, false);
}

export function CronResultRowFromJSONTyped(json: any, ignoreDiscriminator: boolean): CronResultRow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jobFired': !exists(json, 'job_fired') ? undefined : json['job_fired'],
        'jobSucceeded': !exists(json, 'job_succeeded') ? undefined : json['job_succeeded'],
        'jobErrored': !exists(json, 'job_errored') ? undefined : json['job_errored'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function CronResultRowToJSON(value?: CronResultRow | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'job_fired': value.jobFired,
        'job_succeeded': value.jobSucceeded,
        'job_errored': value.jobErrored,
        'message': value.message,
    };
}

