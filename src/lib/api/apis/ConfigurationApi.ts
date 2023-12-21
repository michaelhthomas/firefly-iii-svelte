/* tslint:disable */
/* eslint-disable */
/**
 * Firefly III API v2.0.10
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2023-12-21T01:54:06+00:00  Please keep in mind that the demo site does not accept requests from curl, colly, wget, etc. You must use a browser or a tool like Postman to make requests. Too many script kiddies out there, sorry about that. 
 *
 * The version of the OpenAPI document: 2.0.10
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BadRequest,
  ConfigValueFilter,
  ConfigValueUpdateFilter,
  ConfigurationSingle,
  InternalException,
  ModelConfiguration,
  NotFound,
  PolymorphicProperty,
  Unauthenticated,
  ValidationError,
} from '../models/index';
import {
    BadRequestFromJSON,
    BadRequestToJSON,
    ConfigValueFilterFromJSON,
    ConfigValueFilterToJSON,
    ConfigValueUpdateFilterFromJSON,
    ConfigValueUpdateFilterToJSON,
    ConfigurationSingleFromJSON,
    ConfigurationSingleToJSON,
    InternalExceptionFromJSON,
    InternalExceptionToJSON,
    ModelConfigurationFromJSON,
    ModelConfigurationToJSON,
    NotFoundFromJSON,
    NotFoundToJSON,
    PolymorphicPropertyFromJSON,
    PolymorphicPropertyToJSON,
    UnauthenticatedFromJSON,
    UnauthenticatedToJSON,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models/index';

export interface GetConfigurationRequest {
    xTraceId?: string;
}

export interface GetSingleConfigurationRequest {
    name: ConfigValueFilter;
    xTraceId?: string;
}

export interface SetConfigurationRequest {
    name: ConfigValueUpdateFilter;
    value: PolymorphicProperty;
    xTraceId?: string;
}

/**
 * 
 */
export class ConfigurationApi extends runtime.BaseAPI {

    /**
     * Returns all editable and not-editable configuration values for this Firefly III installation
     * Get Firefly III system configuration values.
     */
    async getConfigurationRaw(requestParameters: GetConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelConfiguration>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xTraceId !== undefined && requestParameters.xTraceId !== null) {
            headerParameters['X-Trace-Id'] = String(requestParameters.xTraceId);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("firefly_iii_auth", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("local_bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/configuration`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelConfigurationFromJSON));
    }

    /**
     * Returns all editable and not-editable configuration values for this Firefly III installation
     * Get Firefly III system configuration values.
     */
    async getConfiguration(requestParameters: GetConfigurationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelConfiguration>> {
        const response = await this.getConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns one configuration variable for this Firefly III installation
     * Get a single Firefly III system configuration value
     */
    async getSingleConfigurationRaw(requestParameters: GetSingleConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationSingle>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getSingleConfiguration.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xTraceId !== undefined && requestParameters.xTraceId !== null) {
            headerParameters['X-Trace-Id'] = String(requestParameters.xTraceId);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("firefly_iii_auth", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("local_bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/configuration/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationSingleFromJSON(jsonValue));
    }

    /**
     * Returns one configuration variable for this Firefly III installation
     * Get a single Firefly III system configuration value
     */
    async getSingleConfiguration(requestParameters: GetSingleConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationSingle> {
        const response = await this.getSingleConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Set a single configuration value. Not all configuration values can be updated so the list of accepted configuration variables is small.
     * Update configuration value
     */
    async setConfigurationRaw(requestParameters: SetConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurationSingle>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling setConfiguration.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling setConfiguration.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xTraceId !== undefined && requestParameters.xTraceId !== null) {
            headerParameters['X-Trace-Id'] = String(requestParameters.xTraceId);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("firefly_iii_auth", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("local_bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
            { contentType: 'application/json' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.value !== undefined) {
            formParams.append('value', new Blob([JSON.stringify(PolymorphicPropertyToJSON(requestParameters.value))], { type: "application/json", }));
                    }

        const response = await this.request({
            path: `/v1/configuration/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConfigurationSingleFromJSON(jsonValue));
    }

    /**
     * Set a single configuration value. Not all configuration values can be updated so the list of accepted configuration variables is small.
     * Update configuration value
     */
    async setConfiguration(requestParameters: SetConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurationSingle> {
        const response = await this.setConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
