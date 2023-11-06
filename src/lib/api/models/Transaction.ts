/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionSplit } from './TransactionSplit';

export type Transaction = {
    readonly created_at?: string;
    readonly updated_at?: string;
    /**
     * User ID
     */
    readonly user?: string;
    /**
     * Title of the transaction if it has been split in more than one piece. Empty otherwise.
     */
    group_title?: string | null;
    transactions: Array<TransactionSplit>;
};

