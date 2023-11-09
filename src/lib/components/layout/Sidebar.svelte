<script lang="ts">
	import { page } from '$app/stores';

	import Icon from '$lib/components/Icon.svelte';
	import {
		Sidebar,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
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
</script>

<Sidebar asideClass="w-auto" activeUrl={$page.url.pathname}>
	<SidebarWrapper divClass="overflow-y-auto overflow-x-hidden py-4 px-3 h-full">
		<SidebarGroup>
			<Search />
		</SidebarGroup>

		<SidebarGroup border borderClass="pt-4">
			{#each sidebarItems as item}
				{#if item.type === 'item'}
					{#if 'children' in item}
						<SidebarDropdownWrapper label={item.label}>
							<svelte:fragment slot="icon">
								<Icon icon={item.icon} />
							</svelte:fragment>

							{#each item.children as child}
								<SidebarDropdownItem
									label={child.label}
									href={child.href}
									active={isActive(child)}
								/>
							{/each}
						</SidebarDropdownWrapper>
					{:else}
						<SidebarItem label={item.label} href={item.href}>
							<svelte:fragment slot="icon">
								<Icon icon={item.icon} />
							</svelte:fragment>
						</SidebarItem>
					{/if}
				{:else if item.type === 'group'}
					<li
						class="py-3 px-4 -mx-4 bg-gray-100 dark:bg-gray-900 uppercase text-xs text-gray-800 dark:text-gray-200"
					>
						{item.label}
					</li>
				{/if}
			{/each}
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
