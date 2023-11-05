<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { ButtonGroup, Input, InputAddon } from 'flowbite-svelte';
</script>

<form class="search-form">
	<ButtonGroup class="w-full">
		<Input id="search-query" placeholder="Search..." />
		<InputAddon>
			<Icon icon="bx:search" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
		</InputAddon>
	</ButtonGroup>
</form>
