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
 * Which action is necessary for the rule to fire? Use either store-journal or update-journal.
 * @export
 */
export const RuleTriggerType = {
    StoreJournal: 'store-journal',
    UpdateJournal: 'update-journal'
} as const;
export type RuleTriggerType = typeof RuleTriggerType[keyof typeof RuleTriggerType];


export function RuleTriggerTypeFromJSON(json: any): RuleTriggerType {
    return RuleTriggerTypeFromJSONTyped(json, false);
}

export function RuleTriggerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleTriggerType {
    return json as RuleTriggerType;
}

export function RuleTriggerTypeToJSON(value?: RuleTriggerType | null): any {
    return value as any;
}

