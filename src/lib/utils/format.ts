import { getContext } from 'svelte';
import { type Writable, get } from 'svelte/store';

import type { LocalizationInfo } from '$lib/queries/localization';

export function useFormat() {
	const localization = getContext<Writable<LocalizationInfo>>('localization');

	return {
		formatCurrency(amount: number, currency?: string, locale?: string) {
			if (!currency || !locale) {
				if (!currency) currency = get(localization).currency;
				if (!locale) locale = get(localization).locale;
			}

			return formatCurrency(amount, currency, locale);
		}
	};
}

export function formatCurrency(amount: number, currency: string, locale: string) {
	return Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}
