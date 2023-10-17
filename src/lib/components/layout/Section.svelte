<script lang="ts">
	export let title: string | null = null;
</script>

<div class="card p-4">
	{#if $$slots.header || $$slots.title || title}
		<header class="card-header">
			<slot name="header">
				<h5 class="h5">
					<slot name="title">
						{title}
					</slot>
				</h5>
			</slot>
		</header>
	{/if}
	<section class="p-4 space-y-4">
		<slot />
	</section>
	{#if $$slots.footer}
		<footer class="card-footer">
			<slot name="footer" />
		</footer>
	{/if}
</div>
