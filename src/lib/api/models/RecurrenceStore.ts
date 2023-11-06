/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RecurrenceRepetitionStore } from './RecurrenceRepetitionStore';
import type { RecurrenceTransactionStore } from './RecurrenceTransactionStore';
import type { RecurrenceTransactionType } from './RecurrenceTransactionType';

export type RecurrenceStore = {
    type: RecurrenceTransactionType;
    title: string;
    /**
     * Not to be confused with the description of the actual transaction(s) being created.
     */
    description?: string;
    /**
     * First time the recurring transaction will fire. Must be after today.
     */
    first_date: string;
    /**
     * Date until the recurring transaction can fire. Use either this field or repetitions.
     */
    repeat_until: string | null;
    /**
     * Max number of created transactions. Use either this field or repeat_until.
     */
    nr_of_repetitions?: number | null;
    /**
     * Whether or not to fire the rules after the creation of a transaction.
     */
    apply_rules?: boolean;
    /**
     * If the recurrence is even active.
     */
    active?: boolean;
    notes?: string | null;
    repetitions: Array<RecurrenceRepetitionStore>;
    transactions: Array<RecurrenceTransactionStore>;
};

