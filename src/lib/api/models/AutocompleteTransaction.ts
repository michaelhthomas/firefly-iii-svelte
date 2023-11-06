/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AutocompleteTransaction = {
    /**
     * The ID of a transaction journal (basically a single split).
     */
    id: string;
    /**
     * The ID of the underlying transaction group.
     */
    transaction_group_id?: string;
    /**
     * Transaction description
     */
    name: string;
    /**
     * Transaction description
     */
    description: string;
};

