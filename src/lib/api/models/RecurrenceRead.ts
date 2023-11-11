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
import type { ObjectLink } from './ObjectLink';
import {
    ObjectLinkFromJSON,
    ObjectLinkFromJSONTyped,
    ObjectLinkToJSON,
} from './ObjectLink';
import type { Recurrence } from './Recurrence';
import {
    RecurrenceFromJSON,
    RecurrenceFromJSONTyped,
    RecurrenceToJSON,
} from './Recurrence';

/**
 * 
 * @export
 * @interface RecurrenceRead
 */
export interface RecurrenceRead {
    /**
     * Immutable value
     * @type {string}
     * @memberof RecurrenceRead
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof RecurrenceRead
     */
    id: string;
    /**
     * 
     * @type {Recurrence}
     * @memberof RecurrenceRead
     */
    attributes: Recurrence;
    /**
     * 
     * @type {ObjectLink}
     * @memberof RecurrenceRead
     */
    links: ObjectLink;
}

/**
 * Check if a given object implements the RecurrenceRead interface.
 */
export function instanceOfRecurrenceRead(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function RecurrenceReadFromJSON(json: any): RecurrenceRead {
    return RecurrenceReadFromJSONTyped(json, false);
}

export function RecurrenceReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurrenceRead {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': RecurrenceFromJSON(json['attributes']),
        'links': ObjectLinkFromJSON(json['links']),
    };
}

export function RecurrenceReadToJSON(value?: RecurrenceRead | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': RecurrenceToJSON(value.attributes),
        'links': ObjectLinkToJSON(value.links),
    };
}

