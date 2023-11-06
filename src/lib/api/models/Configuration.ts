/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConfigValueFilter } from './ConfigValueFilter';
import type { PolymorphicProperty } from './PolymorphicProperty';

export type Configuration = {
    title: ConfigValueFilter;
    value: PolymorphicProperty;
    /**
     * If this config variable can be edited by the user
     */
    editable: boolean;
};

