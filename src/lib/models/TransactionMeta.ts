import type { Transaction, TransactionSplit } from '$lib/api';

export type TransactionMeta =
	| (TransactionSplit & { isGroup: false; group?: Transaction })
	| { isGroup: true; group: Transaction };
