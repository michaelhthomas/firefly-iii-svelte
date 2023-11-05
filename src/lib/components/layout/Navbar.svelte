<script lang="ts">
	import { DateFormat } from '$lib/models/DateFormat';
	import { userQuery } from '$lib/queries';
	import { usePreferencesStore } from '$lib/stores/preferences';
	import Icon from '@iconify/svelte';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { createQuery } from '@tanstack/svelte-query';
	import dayjs from 'dayjs';
	import DateDropdown from './DateDropdown.svelte';

	const PreferencesStore = usePreferencesStore();

	const user = createQuery(userQuery);
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<strong class="text-xl">Firefly III</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
		<button class="btn btn-sm variant-ghost-surface">
			{dayjs($PreferencesStore.range.start).format(DateFormat.Full)} - {dayjs(
				$PreferencesStore.range.end
			).format(DateFormat.Full)}
		</button>
		<DateDropdown />

		{#if $user.isSuccess}
			<a
				class="btn btn-sm variant-ghost-surface"
				href="https://twitter.com/SkeletonUI"
				target="_blank"
				rel="noreferrer"
			>
				{$user.data.data.attributes.email}
			</a>
		{/if}
		<a
			class="btn btn-sm variant-ghost-surface"
			href="https://github.com/skeletonlabs/skeleton"
			target="_blank"
			rel="noreferrer"
		>
			<Icon icon="bx:plus" />
		</a>
	</svelte:fragment>
</AppBar>
