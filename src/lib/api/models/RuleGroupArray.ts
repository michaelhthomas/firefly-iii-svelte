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
import type { Meta } from './Meta';
import {
    MetaFromJSON,
    MetaFromJSONTyped,
    MetaToJSON,
} from './Meta';
import type { PageLink } from './PageLink';
import {
    PageLinkFromJSON,
    PageLinkFromJSONTyped,
    PageLinkToJSON,
} from './PageLink';
import type { RuleGroupRead } from './RuleGroupRead';
import {
    RuleGroupReadFromJSON,
    RuleGroupReadFromJSONTyped,
    RuleGroupReadToJSON,
} from './RuleGroupRead';

/**
 * 
 * @export
 * @interface RuleGroupArray
 */
export interface RuleGroupArray {
    /**
     * 
     * @type {Array<RuleGroupRead>}
     * @memberof RuleGroupArray
     */
    data: Array<RuleGroupRead>;
    /**
     * 
     * @type {Meta}
     * @memberof RuleGroupArray
     */
    meta: Meta;
    /**
     * 
     * @type {PageLink}
     * @memberof RuleGroupArray
     */
    links: PageLink;
}

/**
 * Check if a given object implements the RuleGroupArray interface.
 */
export function instanceOfRuleGroupArray(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function RuleGroupArrayFromJSON(json: any): RuleGroupArray {
    return RuleGroupArrayFromJSONTyped(json, false);
}

export function RuleGroupArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleGroupArray {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(RuleGroupReadFromJSON)),
        'meta': MetaFromJSON(json['meta']),
        'links': PageLinkFromJSON(json['links']),
    };
}

export function RuleGroupArrayToJSON(value?: RuleGroupArray | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(RuleGroupReadToJSON)),
        'meta': MetaToJSON(value.meta),
        'links': PageLinkToJSON(value.links),
    };
}

