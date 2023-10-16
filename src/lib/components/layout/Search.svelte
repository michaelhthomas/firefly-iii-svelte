<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
</script>

<form class="search-form">
	<div class="input-group input-group-divider grid-cols-[1fr_auto]">
		<input type="search" placeholder="Search..." />
		<div class="input-group-shim">
			<Icon icon="bx:search" />
		</div>
	</div>
</form>
