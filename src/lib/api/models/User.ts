/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserBlockedCodeProperty } from './UserBlockedCodeProperty';
import type { UserRoleProperty } from './UserRoleProperty';

export type User = {
    readonly created_at?: string;
    readonly updated_at?: string;
    /**
     * The new users email address.
     */
    email: string;
    /**
     * Boolean to indicate if the user is blocked.
     */
    blocked?: boolean;
    blocked_code?: UserBlockedCodeProperty;
    role?: UserRoleProperty;
};

