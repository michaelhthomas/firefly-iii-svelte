import dayjs from 'dayjs';

import type { DateRange } from '$lib/models/DateRange';
import { writable } from 'svelte/store';
import { deserialize } from '$lib/utils/deserialize';

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
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(preferences));
}

export const PreferencesStore = writable(loadPreferences());

PreferencesStore.subscribe((value) => storePreferences(value));
