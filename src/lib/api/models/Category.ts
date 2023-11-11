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
import type { CategoryEarned } from './CategoryEarned';
import {
    CategoryEarnedFromJSON,
    CategoryEarnedFromJSONTyped,
    CategoryEarnedToJSON,
} from './CategoryEarned';
import type { CategorySpent } from './CategorySpent';
import {
    CategorySpentFromJSON,
    CategorySpentFromJSONTyped,
    CategorySpentToJSON,
} from './CategorySpent';

/**
 * 
 * @export
 * @interface Category
 */
export interface Category {
    /**
     * 
     * @type {Date}
     * @memberof Category
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Category
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    notes?: string | null;
    /**
     * 
     * @type {Array<CategorySpent>}
     * @memberof Category
     */
    readonly spent?: Array<CategorySpent>;
    /**
     * 
     * @type {Array<CategoryEarned>}
     * @memberof Category
     */
    readonly earned?: Array<CategoryEarned>;
}

/**
 * Check if a given object implements the Category interface.
 */
export function instanceOfCategory(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function CategoryFromJSON(json: any): Category {
    return CategoryFromJSONTyped(json, false);
}

export function CategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Category {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'name': json['name'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'spent': !exists(json, 'spent') ? undefined : ((json['spent'] as Array<any>).map(CategorySpentFromJSON)),
        'earned': !exists(json, 'earned') ? undefined : ((json['earned'] as Array<any>).map(CategoryEarnedFromJSON)),
    };
}

export function CategoryToJSON(value?: Category | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'notes': value.notes,
    };
}

