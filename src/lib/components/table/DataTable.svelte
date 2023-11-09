<script lang="ts">
	import { Render, Subscribe, type TableViewModel } from 'svelte-headless-table';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let vm: TableViewModel<any>;

	const { headerRows, rows, tableAttrs } = vm;
</script>

{#if $$slots.header}
	<div
		class="flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
	>
		<slot name="header" />
	</div>
{/if}
<Table {...$tableAttrs}>
	<TableHead>
		{#each $headerRows as headerRow (headerRow.id)}
			<Subscribe rowAttrs={headerRow.attrs()}>
				{#each headerRow.cells as cell (cell.id)}
					<Subscribe attrs={cell.attrs()} let:attrs>
						<TableHeadCell {...attrs}>
							<Render of={cell.render()} />
						</TableHeadCell>
					</Subscribe>
				{/each}
			</Subscribe>
		{/each}
	</TableHead>
	<TableBody>
		{#each $rows as row (row.id)}
			<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
				<TableBodyRow {...rowAttrs}>
					{#each row.cells as cell (cell.id)}
						<Subscribe attrs={cell.attrs()} let:attrs>
							<TableBodyCell {...attrs}>
								<Render of={cell.render()} />
							</TableBodyCell>
						</Subscribe>
					{/each}
				</TableBodyRow>
			</Subscribe>
		{/each}
	</TableBody>
</Table>
