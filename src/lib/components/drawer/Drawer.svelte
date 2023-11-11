<script lang="ts">
	import { CloseButton } from 'flowbite-svelte';
	import { closeModal } from 'svelte-modals';
	import { sineIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	import Icon from '$lib/components/Icon.svelte';

	export let isOpen: boolean;
	export let title: string;
	export let icon: string;

	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};
</script>

{#if isOpen}
	<div
		transition:fly|global={transitionParams}
		id="edit-drawer"
		class="overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800 w-[50rem] max-w-full ma-0 fixed top-0 right-0 h-full space-y-4 flex flex-col text-gray-500 dark:text-gray-400"
	>
		<div class="flex items-center">
			<h5
				id="drawer-label"
				class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400"
			>
				<slot name="label">
					<Icon {icon} class="w-4 h-4 mr-2.5" />
					{title}
				</slot>
			</h5>
			<CloseButton on:click={closeModal} class="dark:text-white" />
		</div>

		<slot />

		<div class="flex-grow" />

		<slot name="footer" />
	</div>
{/if}
