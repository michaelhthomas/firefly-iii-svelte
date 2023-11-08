<script lang="ts">
	import { Modals, closeModal } from 'svelte-modals';
	import { sineOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

<Modals>
	<div
		transition:fade={{ duration: 200, easing: sineOut }}
		slot="backdrop"
		class="fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-75"
		on:click={closeModal}
		on:keydown={(e) => e.key === 'Escape' && closeModal()}
		role="presentation"
	/>
</Modals>
