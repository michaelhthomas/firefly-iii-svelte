/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChartDataSet = {
    /**
     * This is the title of the current set. It can refer to an account, a budget or another object (by name).
     */
    label?: string;
    /**
     * The currency ID of the currency associated to the data in the entries.
     */
    currency_id?: string;
    currency_code?: string;
    currency_symbol?: string;
    /**
     * Number of decimals for the currency associated to the data in the entries.
     */
    currency_decimal_places?: number;
    start_date?: string;
    end_date?: string;
    /**
     * Indicated the type of chart that is expected to be rendered. You can safely ignore this if you want.
     */
    type?: string;
    /**
     * Used to indicate the Y axis for this data set. Is usually between 0 and 1 (left and right side of the chart).
     */
    yAxisID?: number;
    /**
     * The actual entries for this data set. They 'key' value is the label for the data point. The value is the actual (numerical) value.
     */
    entries?: Record<string, any>;
};

