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
 * @interface WebhookAttempt
 */
export interface WebhookAttempt {
    /**
     * 
     * @type {Date}
     * @memberof WebhookAttempt
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof WebhookAttempt
     */
    readonly updatedAt?: Date;
    /**
     * The ID of the webhook message this attempt belongs to.
     * @type {string}
     * @memberof WebhookAttempt
     */
    webhookMessageId?: string;
    /**
     * The HTTP status code of the error, if any.
     * @type {number}
     * @memberof WebhookAttempt
     */
    statusCode?: number | null;
    /**
     * Internal log for this attempt. May contain sensitive user data.
     * @type {string}
     * @memberof WebhookAttempt
     */
    logs?: string | null;
    /**
     * Webhook receiver response for this attempt, if any. May contain sensitive user data.
     * @type {string}
     * @memberof WebhookAttempt
     */
    response?: string | null;
}

/**
 * Check if a given object implements the WebhookAttempt interface.
 */
export function instanceOfWebhookAttempt(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebhookAttemptFromJSON(json: any): WebhookAttempt {
    return WebhookAttemptFromJSONTyped(json, false);
}

export function WebhookAttemptFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookAttempt {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'webhookMessageId': !exists(json, 'webhook_message_id') ? undefined : json['webhook_message_id'],
        'statusCode': !exists(json, 'status_code') ? undefined : json['status_code'],
        'logs': !exists(json, 'logs') ? undefined : json['logs'],
        'response': !exists(json, 'response') ? undefined : json['response'],
    };
}

export function WebhookAttemptToJSON(value?: WebhookAttempt | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'webhook_message_id': value.webhookMessageId,
        'status_code': value.statusCode,
        'logs': value.logs,
        'response': value.response,
    };
}

