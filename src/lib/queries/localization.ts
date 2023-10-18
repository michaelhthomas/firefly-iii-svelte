import { useService } from '$lib/services';
import { PreferencesApi } from 'firefly-iii-typescript-sdk-fetch';

const preferencesService = useService(PreferencesApi);

export async function getLocalizationInfo() {
	const languagePref = await preferencesService.getPreference({
		name: 'language'
	});
	const language = (languagePref.data.attributes.data as string).replace('_', '-');

	let locale;
	try {
		const localePref = await preferencesService.getPreference({
			name: 'locale'
		});
		locale = (localePref.data.attributes.data as string).replace('_', '-');
	} catch {
		// ignore errors if locale is not a preference
	}

	if (!locale || locale === 'equal') locale = language;

	const currencyPref = await preferencesService.getPreference({
		name: 'currencyPreference'
	});
	const currency = currencyPref.data.attributes.data as string;

	return { language, locale, currency };
}

export type LocalizationInfo = Awaited<ReturnType<typeof getLocalizationInfo>>;
