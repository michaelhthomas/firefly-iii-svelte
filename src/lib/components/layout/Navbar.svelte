<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createQuery } from '@tanstack/svelte-query';
	import { Button, DarkMode, NavHamburger } from 'flowbite-svelte';
	import { createEventDispatcher } from 'svelte';

	import { formatDateRange } from '$lib/models/DateRange';
	import { userQuery } from '$lib/queries';
	import { usePreferencesStore } from '$lib/stores/preferences';

	import DateDropdown from './DateDropdown.svelte';

	const dispatch = createEventDispatcher();

	const preferences = usePreferencesStore();

	const user = createQuery(userQuery);

	function toggleSidebar() {
		dispatch('toggleSidebar');
	}
</script>

<nav
	class="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700 px-2 sm:px-4 py-2.5 w-full h-14"
>
	<div class="flex justify-between h-full">
		<div class="flex">
			<NavHamburger onClick={toggleSidebar} />
		</div>
		<div class="flex gap-2">
			<DarkMode />
			<Button size="sm" pill color="light">
				{formatDateRange($preferences.range)}
			</Button>
			<DateDropdown />
			{#if $user.isSuccess}
				<Button size="sm" pill color="light" class="hidden lg:block">
					{$user.data.data.attributes.email}
				</Button>
			{/if}
			<Button size="sm" pill color="light">
				<Icon icon="bx:plus" />
			</Button>
		</div>
	</div>
</nav>
