/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RecurrenceRepetitionType } from './RecurrenceRepetitionType';

export type RecurrenceRepetitionUpdate = {
    type?: RecurrenceRepetitionType;
    /**
     * Information that defined the type of repetition.
     * - For 'daily', this is empty.
     * - For 'weekly', it is day of the week between 1 and 7 (Monday - Sunday).
     * - For 'ndom', it is '1,2' or '4,5' or something else, where the first number is the week in the month, and the second number is the day in the week (between 1 and 7). '2,3' means: the 2nd Wednesday of the month
     * - For 'monthly' it is the day of the month (1 - 31)
     * - For yearly, it is a full date, ie '2018-09-17'. The year you use does not matter.
     *
     */
    moment?: string;
    /**
     * How many occurrences to skip. 0 means skip nothing. 1 means every other.
     */
    skip?: number;
    /**
     * How to respond when the recurring transaction falls in the weekend. Possible values:
     * 1. Do nothing, just create it
     * 2. Create no transaction.
     * 3. Skip to the previous Friday.
     * 4. Skip to the next Monday.
     *
     */
    weekend?: number;
};

