<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
</script>

<div class="container mx-auto py-6 px-5">
	<div class="space-y-6">
		<slot name="header">
			{#if $page.data.meta}
				<h1 class="h3">
					<slot name="icon">
						<Icon icon={$page.data.meta.icon} inline class="pr-1 text-2xl" />
					</slot>
					<slot name="title">
						{$page.data.meta.title}
					</slot>
					<slot name="description">
						{#if $page.data.meta.description}
							<small class="text-sm font-normal pl-1">
								{$page.data.meta.description}
							</small>
						{/if}
					</slot>
				</h1>
			{/if}
		</slot>

		<slot />
	</div>
</div>
