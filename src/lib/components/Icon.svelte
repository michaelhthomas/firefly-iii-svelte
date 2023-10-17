<script lang="ts">
	import Icon from '@iconify/svelte';

	export let icon: string;
	export let inline = false;
	let className = '';
	export { className as class };
</script>

<Icon {icon} {inline} class={(inline ? 'inline-block ' : '') + className} {...$$restProps} />
