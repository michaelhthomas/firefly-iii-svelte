import type { Transaction, TransactionSplit } from 'firefly-iii-typescript-sdk-fetch';

export type TransactionMeta =
	| (TransactionSplit & { isGroup: false; group?: Transaction })
	| { isGroup: true; group: Transaction };
