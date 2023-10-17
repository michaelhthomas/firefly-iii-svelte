<script lang="ts">
	import { page } from '$app/stores';

	import Icon from '$lib/components/Icon.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Search from './Search.svelte';

	type NestedSidebarItem = {
		label: string;
		href: string;
	};

	type SidebarItem = Omit<NestedSidebarItem, 'href'> & {
		type: 'item';
		icon: string;
	} & (
			| {
					href: string;
			  }
			| {
					children: NestedSidebarItem[];
			  }
		);

	interface SidebarGroup {
		type: 'group';
		label: string;
	}

	type SidebarMember = SidebarItem | SidebarGroup;

	const sidebarItems: SidebarMember[] = [
		{
			type: 'item',
			label: 'Dashboard',
			href: '/',
			icon: 'bxs:dashboard'
		},
		{
			type: 'group',
			label: 'Financial Control'
		},
		{
			type: 'item',
			label: 'Budgets',
			href: '/budgets',
			icon: 'bxs:pie-chart-alt-2'
		},
		{
			type: 'item',
			label: 'Bills',
			href: '/bills',
			icon: 'bxs:calendar'
		},
		{
			type: 'item',
			label: 'Piggy Banks',
			href: '/piggy-banks',
			icon: 'bxs:bullseye'
		},
		{
			type: 'group',
			label: 'Accounting'
		},
		{
			type: 'item',
			label: 'Transactions',
			icon: 'tabler:arrows-exchange',
			children: [
				{
					label: 'Expenses',
					href: '/transactions/withdrawal'
				},
				{
					label: 'Revenue / Income',
					href: '/transactions/deposit'
				},
				{
					label: 'Transfers',
					href: '/transactions/transfers'
				}
			]
		},
		{
			type: 'item',
			label: 'Automation',
			icon: 'bx:chip',
			children: [
				{
					label: 'Rules',
					href: '/rules'
				},
				{
					label: 'Recurring Transactions',
					href: '/recurring'
				},
				{
					label: 'Webhooks',
					href: '/webhooks'
				}
			]
		},
		{
			type: 'group',
			label: 'Reporting'
		},
		{
			type: 'item',
			label: 'Accounts',
			icon: 'bxs:credit-card',
			children: [
				{
					label: 'Asset Accounts',
					href: '/accounts/asset'
				},
				{
					label: 'Expense Accounts',
					href: '/accounts/expense'
				},
				{
					label: 'Revenue Accounts',
					href: '/accounts/revenue'
				},
				{
					label: 'Liabilities',
					href: '/accounts/liabilities'
				}
			]
		},
		{
			type: 'item',
			label: 'Classification',
			icon: 'bxs:tag',
			children: [
				{
					label: 'Categories',
					href: '/categories'
				},
				{
					label: 'Tags',
					href: '/tags'
				},
				{
					label: 'Groups',
					href: '/groups'
				}
			]
		},
		{
			type: 'item',
			label: 'Reports',
			icon: 'bxs:report',
			href: '/reports'
		},
		{
			type: 'group',
			label: 'Others'
		},
		{
			type: 'item',
			label: 'Export Data',
			icon: 'bxs:file-export',
			href: '/export'
		},
		{
			type: 'item',
			label: 'Options',
			icon: 'bx:slider',
			children: [
				{
					label: 'Profile',
					href: '/profile'
				},
				{
					label: 'Preferences',
					href: '/preferences'
				},
				{
					label: 'Currencies',
					href: '/currencies'
				},
				{
					label: 'Administration',
					href: 'admin'
				}
			]
		},
		{
			type: 'item',
			label: 'Logout',
			icon: 'bxs:log-out',
			href: '/logout'
		}
	];

	$: isActive = (item: SidebarItem | NestedSidebarItem): boolean => {
		if ('children' in item) return item.children.some(isActive);

		return item.href === $page.url.pathname;
	};

	$: classesActive = (item: SidebarItem | NestedSidebarItem) =>
		isActive(item) ? '!bg-primary-500' : '';
</script>

<section class="sidebar p-4 bg-surface-100-800-token min-h-full w-full space-y-4">
	<Search />
	<nav class="list-nav">
		<ul>
			{#each sidebarItems as item}
				{#if item.type === 'item'}
					<li>
						{#if 'children' in item}
							<Accordion>
								<AccordionItem regionControl={classesActive(item)} open={isActive(item)}>
									<svelte:fragment slot="lead">
										<Icon icon={item.icon} />
									</svelte:fragment>
									<svelte:fragment slot="summary">
										{item.label}
									</svelte:fragment>
									<svelte:fragment slot="content">
										<ul>
											{#each item.children as child}
												<li>
													<a href={child.href} class={classesActive(child)}>{child.label}</a>
												</li>
											{/each}
										</ul>
									</svelte:fragment>
								</AccordionItem>
							</Accordion>
						{:else}
							<a href={item.href} class={classesActive(item)}>
								<Icon icon={item.icon} />
								<span class="flex-auto">{item.label}</span>
							</a>
						{/if}
					</li>
				{:else if item.type === 'group'}
					<li
						class="py-3 px-4 -mx-4 bg-surface-backdrop-token uppercase text-xs text-gray-800 dark:text-gray-200"
					>
						{item.label}
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
</section>
