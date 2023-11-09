import type { InsightApi, InsightTotalEntry } from '$lib/api';
import type { DateRange } from './DateRange';

export enum InsightCategory {
	/** Insight into expenses, grouped by expense account. */
	ExpenseExpense = 1 << 0,
	/** Insight into expenses, grouped by asset account. */
	ExpenseAsset = 1 << 1,
	/** Insight into income, grouped by revenue account. */
	IncomeRevenue = 1 << 2,
	/** Insight into income, grouped by asset account. */
	IncomeAsset = 1 << 3,
	/** Insight into transfers, grouped by account. */
	TransferAsset = 1 << 4,
	/** Insight into expenses, grouped by bill. */
	ExpenseBill = 1 << 5,
	/** Insight into expenses, without bill. */
	ExpenseNoBill = 1 << 6,
	/** Insight into expenses, grouped by budget. */
	ExpenseBudget = 1 << 7,
	/** Insight into expenses, without budget. */
	ExpenseNoBudget = 1 << 8,
	/** Insight into expenses, grouped by category. */
	ExpenseCategory = 1 << 9,
	/** Insight into expenses, without category. */
	ExpenseNoCategory = 1 << 10,
	/** Insight into income, grouped by category. */
	IncomeCategory = 1 << 11,
	/** Insight into income, without category. */
	IncomeNoCategory = 1 << 12,
	/** Insight into transfers, grouped by category. */
	TransferCategory = 1 << 13,
	/** Insight into transfers, without category. */
	TransferNoCategory = 1 << 14,
	/** Insight into expenses, grouped by tag. */
	ExpenseTag = 1 << 15,
	/** Insight into expenses, without tag. */
	ExpenseNoTag = 1 << 16,
	/** Insight into total expenses. */
	ExpenseTotal = 1 << 17,
	/** Insight into total income. */
	IncomeTotal = 1 << 18,
	/** Insight into total transfers. */
	TransferTotal = 1 << 19,

	// Added sub-categories not present in API

	/** Insight into transfers, grouped by source account. */
	TransferSourceAccount = 1 << 20,
	/** Insight into transfers, grouped by destination account. */
	TransferDestinationAccount = 1 << 21
}

export function hasFlag<T extends number>(flag: T, traits: number) {
	return (traits & flag) === flag;
}

export async function* insightCategoryQuery(
	insightService: InsightApi,
	category: InsightCategory,
	range: DateRange
) {
	if (hasFlag(InsightCategory.ExpenseExpense, category)) {
		yield* await insightService.insightExpenseExpense(range);
	}

	if (hasFlag(InsightCategory.ExpenseAsset, category)) {
		yield* await insightService.insightExpenseAsset(range);
	}

	if (hasFlag(InsightCategory.IncomeRevenue, category)) {
		yield* await insightService.insightIncomeRevenue(range);
	}

	if (hasFlag(InsightCategory.IncomeAsset, category)) {
		yield* await insightService.insightIncomeAsset(range);
	}

	if (hasFlag(InsightCategory.TransferAsset, category)) {
		yield* await insightService.insightTransfers(range);
	}

	if (hasFlag(InsightCategory.ExpenseBill, category)) {
		yield* await insightService.insightExpenseBill(range);
	}

	if (hasFlag(InsightCategory.ExpenseNoBill, category)) {
		yield* await insightService.insightExpenseNoBill(range);
	}

	if (hasFlag(InsightCategory.ExpenseBudget, category)) {
		yield* await insightService.insightExpenseBudget(range);
	}

	if (hasFlag(InsightCategory.ExpenseNoBudget, category)) {
		yield* await insightService.insightExpenseNoBudget(range);
	}

	if (hasFlag(InsightCategory.ExpenseCategory, category)) {
		yield* await insightService.insightExpenseCategory(range);
	}

	if (hasFlag(InsightCategory.ExpenseNoCategory, category)) {
		yield* await insightService.insightExpenseNoCategory(range);
	}

	if (hasFlag(InsightCategory.IncomeCategory, category)) {
		yield* await insightService.insightIncomeCategory(range);
	}

	if (hasFlag(InsightCategory.IncomeNoCategory, category)) {
		yield* await insightService.insightIncomeNoCategory(range);
	}

	if (hasFlag(InsightCategory.TransferCategory, category)) {
		yield* await insightService.insightTransferCategory(range);
	}

	if (hasFlag(InsightCategory.TransferNoCategory, category)) {
		yield* await insightService.insightTransferNoCategory(range);
	}

	if (hasFlag(InsightCategory.ExpenseTag, category)) {
		yield* await insightService.insightExpenseTag(range);
	}

	if (hasFlag(InsightCategory.ExpenseNoTag, category)) {
		yield* await insightService.insightExpenseNoTag(range);
	}

	if (hasFlag(InsightCategory.ExpenseTotal, category)) {
		yield* await insightService.insightExpenseTotal(range);
	}

	if (hasFlag(InsightCategory.IncomeTotal, category)) {
		yield* await insightService.insightIncomeTotal(range);
	}

	if (hasFlag(InsightCategory.TransferTotal, category)) {
		yield* await insightService.insightTransferTotal(range);
	}

	// Custom queries
	if (hasFlag(InsightCategory.TransferDestinationAccount, category)) {
		const allTransfers = await insightService.insightTransfers(range);

		yield* allTransfers
			.filter((transfer) => transfer.inFloat && transfer.inFloat != 0)
			.map(
				(transfer) =>
					({
						name: transfer.name,
						difference: transfer._in,
						differenceFloat: transfer.inFloat,
						currencyId: transfer.currencyId,
						currencyCode: transfer.currencyCode
					} as InsightTotalEntry)
			);
	}

	if (hasFlag(InsightCategory.TransferSourceAccount, category)) {
		const allTransfers = await insightService.insightTransfers(range);

		yield* allTransfers
			.filter((transfer) => transfer.outFloat && transfer.outFloat != 0)
			.map(
				(transfer) =>
					({
						name: transfer.name,
						difference: transfer.out,
						differenceFloat: transfer.outFloat,
						currencyId: transfer.currencyId,
						currencyCode: transfer.currencyCode
					} as InsightTotalEntry)
			);
	}
}
