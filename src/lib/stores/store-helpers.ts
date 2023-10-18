import type { Readable } from 'svelte/store';

const storeRepository = new Map<string, Readable<unknown>>();

export function createUseWrapper<_, T extends Readable<_>>(
	key: string,
	constructor: () => T
): () => T {
	return () => {
		if (storeRepository.has(key)) return storeRepository.get(key) as T;

		const store = constructor();
		storeRepository.set(key, store);
		return store;
	};
}
