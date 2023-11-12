<script lang="ts">
	import { TransactionTypeProperty } from '$lib/api';
	import type { TransactionMeta } from '$lib/models/TransactionMeta';

	import Currency from '$lib/components/format/Currency.svelte';

	export let data: TransactionMeta & { isGroup: true };

	$: groupAmount = data.group.transactions.reduce(
		(prev, transaction) =>
			prev +
			parseFloat(transaction.amount) *
				(transaction.type === TransactionTypeProperty.Withdrawal ? -1 : 1),
		0
	);
</script>

<div class="flex items-center h-full px-4 gap-4 bg-surface-100">
	{data.group.groupTitle}
	<div class="spacer w-24" />
	<Currency amount={groupAmount} />
</div>
