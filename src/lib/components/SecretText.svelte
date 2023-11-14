<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	$: show = false;

	export let text: string | undefined;
</script>

{#if text}
	<span {...$$restProps}>
		{#if show}
			<button on:click={() => (show = !show)}>
				<Icon icon="bxs:show" inline class="mr-1.5 w-4 h-4" />
			</button>
			<code>
				{text}
			</code>
		{:else}
			<button on:click={() => (show = !show)}>
				<Icon icon="bxs:hide" inline class="mr-1.5 w-4 h-4" />
			</button>
			<!-- Maintain full width of secret even when hidden -->
			<code class="inline-block" style:width={`${text.length}ch`}>********</code>
		{/if}
	</span>
{/if}
