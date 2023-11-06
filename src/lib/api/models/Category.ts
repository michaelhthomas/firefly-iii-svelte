/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryEarned } from './CategoryEarned';
import type { CategorySpent } from './CategorySpent';

export type Category = {
    readonly created_at?: string;
    readonly updated_at?: string;
    name: string;
    notes?: string | null;
    readonly spent?: Array<CategorySpent>;
    readonly earned?: Array<CategoryEarned>;
};

