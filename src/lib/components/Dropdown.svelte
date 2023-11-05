<script lang="ts">
	import { Dropdown } from 'flowbite-svelte';
	import { fly } from 'svelte/transition';
</script>

<Dropdown transition={(node) => fly(node, { y: -20, duration: 100 })} {...$$restProps}>
	<slot />
</Dropdown>
