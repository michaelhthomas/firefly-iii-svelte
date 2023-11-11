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
import type { WebhookRead } from './WebhookRead';
import {
    WebhookReadFromJSON,
    WebhookReadFromJSONTyped,
    WebhookReadToJSON,
} from './WebhookRead';

/**
 * 
 * @export
 * @interface WebhookArray
 */
export interface WebhookArray {
    /**
     * 
     * @type {Array<WebhookRead>}
     * @memberof WebhookArray
     */
    data: Array<WebhookRead>;
    /**
     * 
     * @type {Meta}
     * @memberof WebhookArray
     */
    meta: Meta;
    /**
     * 
     * @type {PageLink}
     * @memberof WebhookArray
     */
    links: PageLink;
}

/**
 * Check if a given object implements the WebhookArray interface.
 */
export function instanceOfWebhookArray(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function WebhookArrayFromJSON(json: any): WebhookArray {
    return WebhookArrayFromJSONTyped(json, false);
}

export function WebhookArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookArray {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(WebhookReadFromJSON)),
        'meta': MetaFromJSON(json['meta']),
        'links': PageLinkFromJSON(json['links']),
    };
}

export function WebhookArrayToJSON(value?: WebhookArray | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(WebhookReadToJSON)),
        'meta': MetaToJSON(value.meta),
        'links': PageLinkToJSON(value.links),
    };
}

