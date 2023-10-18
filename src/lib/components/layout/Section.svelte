<script lang="ts">
	export let title: string | null = null;
	let className = '';
	export { className as class };
</script>

<div class={`card p-4 space-y-4 ${className}`} {...$$restProps}>
	{#if $$slots.header || $$slots.title || title}
		<header class="card-header p-0">
			<slot name="header">
				<h5 class="h5">
					<slot name="title">
						{title}
					</slot>
				</h5>
			</slot>
		</header>
	{/if}
	<section class="space-y-4">
		<slot />
	</section>
	{#if $$slots.footer}
		<footer class="card-footer">
			<slot name="footer" />
		</footer>
	{/if}
</div>
