/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TransactionLink = {
    readonly created_at?: string;
    readonly updated_at?: string;
    /**
     * The link type ID to use. You can also use the link_type_name field.
     */
    link_type_id: string;
    /**
     * The link type name to use. You can also use the link_type_id field.
     */
    link_type_name?: string;
    /**
     * The inward transaction transaction_journal_id for the link. This becomes the 'is paid by' transaction of the set.
     */
    inward_id: string;
    /**
     * The outward transaction transaction_journal_id for the link. This becomes the 'pays for' transaction of the set.
     */
    outward_id: string;
    /**
     * Optional. Some notes.
     */
    notes?: string | null;
};

