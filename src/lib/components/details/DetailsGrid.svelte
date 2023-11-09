<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let className: string | undefined = undefined;
	export { className as class };

	export let cols = 'grid-cols-2';

	$: mergedClassName = twMerge('grid gap-4 mb-4', cols, className);
</script>

<dl class={mergedClassName}>
	<slot />
</dl>
