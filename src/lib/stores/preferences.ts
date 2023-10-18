import dayjs from 'dayjs';

import type { DateRange } from '$lib/models/DateRange';
import { writable } from 'svelte/store';
import { deserialize, serialize } from '$lib/utils/serializer';
import { createUseWrapper } from './store-helpers';

interface PreferencesStoreProps {
	range: DateRange;
}

const defaultPreferences: PreferencesStoreProps = {
	range: {
		start: dayjs().startOf('month').toDate(),
		end: dayjs().endOf('month').toDate()
	}
};

const LOCAL_STORAGE_KEY = 'preferences';

function loadPreferences(): PreferencesStoreProps {
	try {
		const json = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (json) return deserialize(json);
	} catch {
		// ignore errors when loading preferences and just revert to defaults
	}

	return defaultPreferences;
}

function storePreferences(preferences: PreferencesStoreProps) {
	localStorage.setItem(LOCAL_STORAGE_KEY, serialize(preferences));
}

export const usePreferencesStore = createUseWrapper('preferences', () => {
	const store = writable(loadPreferences());
	store.subscribe((value) => storePreferences(value));
	return store;
});
