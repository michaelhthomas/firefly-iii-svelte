<script lang="ts">
	import Icon from '@iconify/svelte';

	export let icon: string;
	export let inline = false;
</script>

<Icon {icon} {inline} class={inline ? 'inline' : ''} />
