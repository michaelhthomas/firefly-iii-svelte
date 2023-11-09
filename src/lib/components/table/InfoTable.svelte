<script context="module" lang="ts">
	export type InfoData = {
		label: string;
		value: string | number;
	};
</script>

<script lang="ts">
	import { Table, TableBody, TableBodyCell, TableBodyRow } from 'flowbite-svelte';

	export let info: InfoData[];
</script>

<Table {...$$restProps}>
	<TableBody>
		{#each info as row}
			<TableBodyRow>
				<TableBodyCell tdClass="font-bold">
					{row.label}
				</TableBodyCell>
				<TableBodyCell>
					{row.value}
				</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
