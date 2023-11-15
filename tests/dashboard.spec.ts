import { expect, test } from '@playwright/test';

test('Summary Cards Visible', async ({ page }) => {
	await page.goto('/');

	const main = await page.getByRole('main');
	await expect(main).toBeVisible();

	const summaryCards = await page.locator('.summary-card');

	await expect(summaryCards).toHaveCount(2);
	await expect(summaryCards.nth(0)).toBeVisible();
});
