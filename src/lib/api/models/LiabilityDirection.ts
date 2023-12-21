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
 * 'credit' indicates somebody owes you the liability. 'debit' Indicates you owe this debt yourself. Works only for liabiltiies.
 * @export
 */
export const LiabilityDirection = {
    Credit: 'credit',
    Debit: 'debit',
    Null: 'null'
} as const;
export type LiabilityDirection = typeof LiabilityDirection[keyof typeof LiabilityDirection];


export function LiabilityDirectionFromJSON(json: any): LiabilityDirection {
    return LiabilityDirectionFromJSONTyped(json, false);
}

export function LiabilityDirectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiabilityDirection {
    return json as LiabilityDirection;
}

export function LiabilityDirectionToJSON(value?: LiabilityDirection | null): any {
    return value as any;
}

