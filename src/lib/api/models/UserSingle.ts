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
import type { UserRead } from './UserRead';
import {
    UserReadFromJSON,
    UserReadFromJSONTyped,
    UserReadToJSON,
} from './UserRead';

/**
 * 
 * @export
 * @interface UserSingle
 */
export interface UserSingle {
    /**
     * 
     * @type {UserRead}
     * @memberof UserSingle
     */
    data: UserRead;
}

/**
 * Check if a given object implements the UserSingle interface.
 */
export function instanceOfUserSingle(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function UserSingleFromJSON(json: any): UserSingle {
    return UserSingleFromJSONTyped(json, false);
}

export function UserSingleFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSingle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': UserReadFromJSON(json['data']),
    };
}

export function UserSingleToJSON(value?: UserSingle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': UserReadToJSON(value.data),
    };
}

