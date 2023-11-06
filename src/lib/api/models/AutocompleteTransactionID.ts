/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AutocompleteTransactionID = {
    /**
     * The ID of a transaction journal (basically a single split).
     */
    id: string;
    /**
     * The ID of the underlying transaction group.
     */
    transaction_group_id?: string;
    /**
     * Transaction description with ID in the name.
     */
    name: string;
    /**
     * Transaction description with ID in the name.
     */
    description: string;
};

