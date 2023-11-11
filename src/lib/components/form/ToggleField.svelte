<script lang="ts" context="module">
	import type { AnyZodObject } from 'zod';

	type T = AnyZodObject;
</script>

<script lang="ts" generics="T extends AnyZodObject">
	import { Helper, Label, Toggle } from 'flowbite-svelte';
	import type { Writable } from 'svelte/store';
	import type { FormPathLeaves, ZodValidation } from 'sveltekit-superforms';
	import { type SuperForm, formFieldProxy } from 'sveltekit-superforms/client';
	import type { z } from 'zod';

	export let form: SuperForm<ZodValidation<T>, unknown>;
	export let field: FormPathLeaves<z.infer<T>>;

	export let label: string;
	export let helpText: string | undefined = undefined;

	const { value, errors, constraints } = formFieldProxy(form, field);
	$: boolValue = value as Writable<boolean>;

	$: required = $constraints?.required === true;

	$: hasErrors = $errors && $errors.length > 0;

	$: color = hasErrors ? ('red' as const) : undefined;
</script>

<div>
	<Label for={field} {color} class="block mb-2">
		{label}
		{#if required}
			<span class="text-red-500">*</span>
		{/if}
	</Label>
	<Toggle
		id={field}
		name={field}
		aria-invalid={$errors ? 'true' : undefined}
		bind:checked={$boolValue}
		{...$constraints}
		{...$$restProps}
	/>
	{#if helpText && !hasErrors}
		<Helper class="text-sm text-gray-500 dark:text-gray-400 mt-2">
			{helpText}
		</Helper>
	{/if}
	{#if hasErrors}
		<Helper {color} class="text-sm mt-1">
			{$errors}
		</Helper>
	{/if}
</div>
