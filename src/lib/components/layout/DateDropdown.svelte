<script lang="ts">
	import { DateRangeChoice, formatDateRange, getDateRange } from '$lib/models/DateRange';
	import { DropdownItem } from 'flowbite-svelte';
	import Dropdown from '../Dropdown.svelte';
	import { usePreferencesStore } from '$lib/stores/preferences';
	import { queryClient } from '$lib/client';

	const choices = Object.keys(DateRangeChoice)
		.filter((k) => !isNaN(Number(k)))
		.map((n) => Number(n)) as DateRangeChoice[];

	let options = choices.map((c) => {
		console.log(c);
		const range = getDateRange(c);
		console.log(range);
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
