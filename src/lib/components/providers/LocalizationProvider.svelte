<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import {
		type LocalizationInfo,
		getLocalizationInfo
	} from '$lib/queries/localization';

	const localizationStore = writable<LocalizationInfo>({
		language: 'en_US',
		locale: 'en_US',
		currency: 'USD'
	});
	setContext('localization', localizationStore);

	const promise = getLocalizationInfo().then((localization) => {
		Object.assign($localizationStore, localization);
	});
</script>

{#await promise then}
	<slot />
{/await}
