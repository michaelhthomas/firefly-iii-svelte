<script lang="ts">
	import { type LocalizationInfo, getLocalizationInfo } from '$lib/queries/localization';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

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
