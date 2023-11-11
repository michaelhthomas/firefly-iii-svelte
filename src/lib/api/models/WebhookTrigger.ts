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
 * The trigger for the webhook.
 * @export
 */
export const WebhookTrigger = {
    StoreTransaction: 'STORE_TRANSACTION',
    UpdateTransaction: 'UPDATE_TRANSACTION',
    DestroyTransaction: 'DESTROY_TRANSACTION'
} as const;
export type WebhookTrigger = typeof WebhookTrigger[keyof typeof WebhookTrigger];


export function WebhookTriggerFromJSON(json: any): WebhookTrigger {
    return WebhookTriggerFromJSONTyped(json, false);
}

export function WebhookTriggerFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookTrigger {
    return json as WebhookTrigger;
}

export function WebhookTriggerToJSON(value?: WebhookTrigger | null): any {
    return value as any;
}

