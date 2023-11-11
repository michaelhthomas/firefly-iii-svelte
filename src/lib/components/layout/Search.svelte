<script lang="ts">
	import { ButtonGroup, Input, InputAddon } from 'flowbite-svelte';

	import Icon from '$lib/components/Icon.svelte';
</script>

<form class="search-form">
	<ButtonGroup class="w-full">
		<Input id="search-query" placeholder="Search..." />
		<InputAddon>
			<Icon icon="bx:search" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
		</InputAddon>
	</ButtonGroup>
</form>
