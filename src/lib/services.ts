import { Configuration, type BaseAPI } from 'firefly-iii-typescript-sdk-fetch';

const serviceRepository = new Map<string, BaseAPI>();

const configuration = new Configuration({
	basePath: '',
	accessToken: `Bearer ${import.meta.env.FIREFLY_III_BEARER_TOKEN}`,
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/vnd.api+json'
	},
	fetchApi: fetch
});

export function useService<T extends typeof BaseAPI>(ApiService: T): InstanceType<T> {
	const key = ApiService.constructor.name;

	if (serviceRepository.has(key)) return serviceRepository.get(key) as InstanceType<T>;

	const service = new ApiService(configuration) as InstanceType<T>;
	serviceRepository.set(key, service);
	return service;
}
