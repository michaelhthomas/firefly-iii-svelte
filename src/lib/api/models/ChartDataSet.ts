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
import type { ChartDataPoint } from './ChartDataPoint';
import {
    ChartDataPointFromJSON,
    ChartDataPointFromJSONTyped,
    ChartDataPointToJSON,
} from './ChartDataPoint';

/**
 * 
 * @export
 * @interface ChartDataSet
 */
export interface ChartDataSet {
    /**
     * This is the title of the current set. It can refer to an account, a budget or another object (by name).
     * @type {string}
     * @memberof ChartDataSet
     */
    label?: string;
    /**
     * The currency ID of the currency associated to the data in the entries.
     * @type {string}
     * @memberof ChartDataSet
     */
    currencyId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChartDataSet
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ChartDataSet
     */
    currencySymbol?: string;
    /**
     * Number of decimals for the currency associated to the data in the entries.
     * @type {number}
     * @memberof ChartDataSet
     */
    currencyDecimalPlaces?: number;
    /**
     * 
     * @type {Date}
     * @memberof ChartDataSet
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ChartDataSet
     */
    endDate?: Date;
    /**
     * Indicated the type of chart that is expected to be rendered. You can safely ignore this if you want.
     * @type {string}
     * @memberof ChartDataSet
     */
    type?: string;
    /**
     * Used to indicate the Y axis for this data set. Is usually between 0 and 1 (left and right side of the chart).
     * @type {number}
     * @memberof ChartDataSet
     */
    yAxisID?: number;
    /**
     * The actual entries for this data set. They 'key' value is the label for the data point. The value is the actual (numerical) value.
     * @type {Array<ChartDataPoint>}
     * @memberof ChartDataSet
     */
    entries?: Array<ChartDataPoint>;
}

/**
 * Check if a given object implements the ChartDataSet interface.
 */
export function instanceOfChartDataSet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChartDataSetFromJSON(json: any): ChartDataSet {
    return ChartDataSetFromJSONTyped(json, false);
}

export function ChartDataSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChartDataSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'currencySymbol': !exists(json, 'currency_symbol') ? undefined : json['currency_symbol'],
        'currencyDecimalPlaces': !exists(json, 'currency_decimal_places') ? undefined : json['currency_decimal_places'],
        'startDate': !exists(json, 'start_date') ? undefined : (new Date(json['start_date'])),
        'endDate': !exists(json, 'end_date') ? undefined : (new Date(json['end_date'])),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'yAxisID': !exists(json, 'yAxisID') ? undefined : json['yAxisID'],
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(ChartDataPointFromJSON)),
    };
}

export function ChartDataSetToJSON(value?: ChartDataSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'currency_symbol': value.currencySymbol,
        'currency_decimal_places': value.currencyDecimalPlaces,
        'start_date': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
        'end_date': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'type': value.type,
        'yAxisID': value.yAxisID,
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(ChartDataPointToJSON)),
    };
}

