/**
 * This file is copied to ./core during the client generation process, and is
 * preserved between builds.
 */

import { ApiError } from './ApiError';
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { ApiResult } from './ApiResult';
import { CancelablePromise } from './CancelablePromise';
import type { OnCancel } from './CancelablePromise';
import type { OpenAPIConfig } from './OpenAPI';

export const isDefined = <T>(
	value: T | null | undefined
): value is NonNullable<Exclude<T, null | undefined>> => {
	return value !== undefined && value !== null;
};

export const isString = (value: unknown): value is string => {
	return typeof value === 'string';
};

export const isStringWithValue = (value: unknown): value is string => {
	return isString(value) && value !== '';
};

export const isBlob = (value: unknown): value is Blob => {
	return (
		isDefined(value) &&
		typeof value === 'object' &&
		'type' in value &&
		typeof value.type === 'string' &&
		'stream' in value &&
		typeof value.stream === 'function' &&
		'arrayBuffer' in value &&
		typeof value.arrayBuffer === 'function' &&
		typeof value.constructor === 'function' &&
		typeof value.constructor.name === 'string' &&
		/^(Blob|File)$/.test(value.constructor.name) &&
		Symbol.toStringTag in value &&
		/^(Blob|File)$/.test(value[Symbol.toStringTag] as string)
	);
};

export const isFormData = (value: unknown): value is FormData => {
	return value instanceof FormData;
};

export const base64 = (str: string): string => {
	try {
		return btoa(str);
	} catch (err) {
		return Buffer.from(str).toString('base64');
	}
};

export const getQueryString = (params: Record<string, unknown>): string => {
	const qs: string[] = [];

	const append = (key: string, value: unknown) => {
		qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
	};

	const process = (key: string, value: unknown) => {
		if (isDefined(value)) {
			if (Array.isArray(value)) {
				value.forEach((v) => {
					process(key, v);
				});
			} else if (typeof value === 'object') {
				Object.entries(value).forEach(([k, v]) => {
					process(`${key}[${k}]`, v);
				});
			} else {
				append(key, value);
			}
		}
	};

	Object.entries(params).forEach(([key, value]) => {
		process(key, value);
	});

	if (qs.length > 0) {
		return `?${qs.join('&')}`;
	}

	return '';
};

const getUrl = (config: OpenAPIConfig, options: ApiRequestOptions): string => {
	const encoder = config.ENCODE_PATH || encodeURI;

	const path = options.url
		.replace('{api-version}', config.VERSION)
		.replace(/{(.*?)}/g, (substring: string, group: string) => {
			if (options.path && Object.hasOwn(options.path, group)) {
				return encoder(String(options.path[group]));
			}
			return substring;
		});

	const url = `${config.BASE}${path}`;
	if (options.query) {
		return `${url}${getQueryString(options.query)}`;
	}
	return url;
};

export const getFormData = (options: ApiRequestOptions): FormData | undefined => {
	if (options.formData) {
		const formData = new FormData();

		const process = (key: string, value: unknown) => {
			if (isString(value) || isBlob(value)) {
				formData.append(key, value);
			} else {
				formData.append(key, JSON.stringify(value));
			}
		};

		Object.entries(options.formData)
			.filter(([_, value]) => isDefined(value))
			.forEach(([key, value]) => {
				if (Array.isArray(value)) {
					value.forEach((v) => process(key, v));
				} else {
					process(key, value);
				}
			});

		return formData;
	}
	return undefined;
};

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;

export const resolve = async <T>(
	options: ApiRequestOptions,
	resolver?: T | Resolver<T>
): Promise<T | undefined> => {
	if (typeof resolver === 'function') {
		return (resolver as Resolver<T>)(options);
	}
	return resolver;
};

export const getHeaders = async (
	config: OpenAPIConfig,
	options: ApiRequestOptions
): Promise<Headers> => {
	const token = await resolve(options, config.TOKEN);
	const username = await resolve(options, config.USERNAME);
	const password = await resolve(options, config.PASSWORD);
	const additionalHeaders = await resolve(options, config.HEADERS);

	const headers = Object.entries({
		Accept: 'application/json',
		...additionalHeaders,
		...options.headers
	})
		.filter(([_, value]) => isDefined(value))
		.reduce(
			(headers, [key, value]) => ({
				...headers,
				[key]: String(value)
			}),
			{} as Record<string, string>
		);

	if (isStringWithValue(token)) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	if (isStringWithValue(username) && isStringWithValue(password)) {
		const credentials = base64(`${username}:${password}`);
		headers['Authorization'] = `Basic ${credentials}`;
	}

	if (options.body) {
		if (options.mediaType) {
			headers['Content-Type'] = options.mediaType;
		} else if (isBlob(options.body)) {
			headers['Content-Type'] = options.body.type || 'application/octet-stream';
		} else if (isString(options.body)) {
			headers['Content-Type'] = 'text/plain';
		} else if (!isFormData(options.body)) {
			headers['Content-Type'] = 'application/json';
		}
	}

	return new Headers(headers);
};

type RequestBody = string | Blob | FormData | undefined;

export const getRequestBody = (options: ApiRequestOptions): RequestBody => {
	if (options.body !== undefined) {
		if (options.mediaType?.includes('/json')) {
			return JSON.stringify(options.body);
		} else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
			return options.body;
		} else {
			return JSON.stringify(options.body);
		}
	}
	return undefined;
};

export const sendRequest = async (
	config: OpenAPIConfig,
	options: ApiRequestOptions,
	url: string,
	body: RequestBody,
	formData: FormData | undefined,
	headers: Headers,
	onCancel: OnCancel
): Promise<Response> => {
	const controller = new AbortController();

	const request: RequestInit = {
		headers,
		body: body ?? formData,
		method: options.method,
		signal: controller.signal
	};

	if (config.WITH_CREDENTIALS) {
		request.credentials = config.CREDENTIALS;
	}

	onCancel(() => controller.abort());

	return await fetch(url, request);
};

export const getResponseHeader = (
	response: Response,
	responseHeader?: string
): string | undefined => {
	if (responseHeader) {
		const content = response.headers.get(responseHeader);
		if (isString(content)) {
			return content;
		}
	}
	return undefined;
};

export const getResponseBody = async (response: Response): Promise<unknown> => {
	if (response.status !== 204) {
		try {
			const contentType = response.headers.get('Content-Type');
			if (contentType) {
				const jsonTypes = [
					'application/json',
					'application/problem+json',
					'application/vnd.api+json'
				];
				const isJSON = jsonTypes.some((type) => contentType.toLowerCase().startsWith(type));
				if (isJSON) {
					return await response.json();
				} else {
					return await response.text();
				}
			}
		} catch (error) {
			console.error(error);
		}
	}
	return undefined;
};

export const catchErrorCodes = (options: ApiRequestOptions, result: ApiResult): void => {
	const errors: Record<number, string> = {
		400: 'Bad Request',
		401: 'Unauthorized',
		403: 'Forbidden',
		404: 'Not Found',
		500: 'Internal Server Error',
		502: 'Bad Gateway',
		503: 'Service Unavailable',
		...options.errors
	};

	const error = errors[result.status];
	if (error) {
		throw new ApiError(options, result, error);
	}

	if (!result.ok) {
		const errorStatus = result.status ?? 'unknown';
		const errorStatusText = result.statusText ?? 'unknown';
		const errorBody = (() => {
			try {
				return JSON.stringify(result.body, null, 2);
			} catch (e) {
				return undefined;
			}
		})();

		throw new ApiError(
			options,
			result,
			`Generic Error: status: ${errorStatus}; status text: ${errorStatusText}; body: ${errorBody}`
		);
	}
};

/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
export const request = <T>(
	config: OpenAPIConfig,
	options: ApiRequestOptions
): CancelablePromise<T> => {
	return new CancelablePromise(async (resolve, reject, onCancel) => {
		try {
			const url = getUrl(config, options);
			const formData = getFormData(options);
			const body = getRequestBody(options);
			const headers = await getHeaders(config, options);

			if (!onCancel.isCancelled) {
				const response = await sendRequest(config, options, url, body, formData, headers, onCancel);
				const responseBody = await getResponseBody(response);
				const responseHeader = getResponseHeader(response, options.responseHeader);

				const result: ApiResult = {
					url,
					ok: response.ok,
					status: response.status,
					statusText: response.statusText,
					body: responseHeader ?? responseBody
				};

				catchErrorCodes(options, result);

				resolve(result.body);
			}
		} catch (error) {
			reject(error);
		}
	});
};
