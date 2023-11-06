/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionSplitUpdate } from './TransactionSplitUpdate';

export type TransactionUpdate = {
    /**
     * Whether or not to apply rules when submitting transaction.
     */
    apply_rules?: boolean;
    /**
     * Whether or not to fire the webhooks that are related to this event.
     */
    fire_webhooks?: boolean;
    /**
     * Title of the transaction if it has been split in more than one piece. Empty otherwise.
     */
    group_title?: string | null;
    transactions?: Array<TransactionSplitUpdate>;
};

