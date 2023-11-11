import { TransactionTypeFilter } from '$lib/api';

export enum TransactionCategory {
	Expenses,
	Income,
	Transfers
}

export function getTransactionCategoryTypeFilter(
	category: TransactionCategory
): TransactionTypeFilter {
	switch (category) {
		case TransactionCategory.Expenses:
			return TransactionTypeFilter.Expense;
		case TransactionCategory.Income:
			return TransactionTypeFilter.Income;
		case TransactionCategory.Transfers:
			return TransactionTypeFilter.Transfers;
	}
}
