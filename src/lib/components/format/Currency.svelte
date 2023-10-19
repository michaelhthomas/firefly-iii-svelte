<script lang="ts">
	import { useFormat } from '$lib/utils/format';

	export let amount: number;
	export let color: boolean = true;
	export let currency: string | undefined = undefined;
	export let locale: string | undefined = undefined;

	const format = useFormat();

	const formatted = format.formatCurrency(amount, currency, locale);
</script>

{#if color}
	{#if amount > 0}
		<span class="money-positive text-green-500">{formatted}</span>
	{:else if amount < 0}
		<span class="money-negative text-red-500">{formatted}</span>
	{:else}
		<span class="money-neutral">{formatted}</span>
	{/if}
{:else}
	{formatted}
{/if}
