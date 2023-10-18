import type { LocalizationInfo } from '$lib/queries/localization';
import { getContext } from 'svelte';
import { get, type Writable } from 'svelte/store';

export function formatCurrency(amount: number, currency?: string, locale?: string) {
	if (!currency || !locale) {
		const localization = getContext<Writable<LocalizationInfo>>('localization');
		if (!currency) currency = get(localization).currency;
		if (!locale) locale = get(localization).locale;
	}

	return Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}
