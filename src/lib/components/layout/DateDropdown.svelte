<script lang="ts">
	import { DropdownItem } from 'flowbite-svelte';

	import {
		DateRangeChoice,
		formatDateRange,
		getDateRange
	} from '$lib/models/DateRange';
	import { usePreferencesStore } from '$lib/stores/preferences';

	import Dropdown from '$lib/components/Dropdown.svelte';

	const choices = Object.keys(DateRangeChoice)
		.filter((k) => !isNaN(Number(k)))
		.map((n) => Number(n)) as DateRangeChoice[];

	let options = choices.map((c) => {
		const range = getDateRange(c);
		return {
			label: formatDateRange(range),
			value: c
		};
	});

	$: preferences = usePreferencesStore();

	function setItem(choice: DateRangeChoice) {
		$preferences.range = getDateRange(choice);
	}
</script>

<Dropdown>
	{#each options as option}
		<DropdownItem on:click={() => setItem(option.value)}>
			{option.label}
		</DropdownItem>
	{/each}
</Dropdown>
