<script lang="ts">
	import type { CreateMutationResult } from '@tanstack/svelte-query';
	import { scale } from 'svelte/transition';

	import { prettyPrintError } from '$lib/api/errors';

	import Alert from './Alert.svelte';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let mutation: CreateMutationResult<any, any, any, any>;
</script>

{#if $mutation.isError}
	<div transition:scale={{ duration: 100 }}>
		<Alert color="red" icon="bxs:error-circle" label="Error:">
			{prettyPrintError($mutation.error)}
		</Alert>
	</div>
{/if}
