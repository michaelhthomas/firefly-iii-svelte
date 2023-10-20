import { DateFormat } from '$lib/models/DateFormat';
import type { PageMeta } from '$lib/models/PageMeta';
import { usePreferencesStore } from '$lib/stores/preferences';
import dayjs from 'dayjs';
import { get } from 'svelte/store';

export function load() {
	const PreferencesStore = usePreferencesStore();
	const range = get(PreferencesStore).range;
	const startTime = dayjs(range.start).format(DateFormat.Full);
	const endTime = dayjs(range.end).format(DateFormat.Full);

	const meta: PageMeta = {
		title: 'Transactions',
		description: `All transfers between ${startTime} and ${endTime}`,
		icon: 'tabler:arrows-exchange'
	};
	return { meta };
}