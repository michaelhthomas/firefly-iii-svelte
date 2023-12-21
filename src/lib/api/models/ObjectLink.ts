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
import type { ObjectLink0 } from './ObjectLink0';
import {
    ObjectLink0FromJSON,
    ObjectLink0FromJSONTyped,
    ObjectLink0ToJSON,
} from './ObjectLink0';

/**
 * 
 * @export
 * @interface ObjectLink
 */
export interface ObjectLink {
    /**
     * 
     * @type {ObjectLink0}
     * @memberof ObjectLink
     */
    _0?: ObjectLink0;
    /**
     * 
     * @type {string}
     * @memberof ObjectLink
     */
    self?: string;
}

/**
 * Check if a given object implements the ObjectLink interface.
 */
export function instanceOfObjectLink(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ObjectLinkFromJSON(json: any): ObjectLink {
    return ObjectLinkFromJSONTyped(json, false);
}

export function ObjectLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObjectLink {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_0': !exists(json, '0') ? undefined : ObjectLink0FromJSON(json['0']),
        'self': !exists(json, 'self') ? undefined : json['self'],
    };
}

export function ObjectLinkToJSON(value?: ObjectLink | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '0': ObjectLink0ToJSON(value._0),
        'self': value.self,
    };
}

