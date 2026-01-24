<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { RemoteFormIssue } from '@sveltejs/kit';
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { Select } from '$lib/component';
	import { inputValidationStatus } from '$lib/hooks';
	import { InputStates } from '$lib/type';

	type Props = {
		label: string;
		name: string;
		children: Snippet;
		issues: RemoteFormIssue[] | undefined;
	} & SvelteHTMLElements['select'];

	const id = $props.id();
	const { label, name, value = $bindable(), children, issues, ...restProps }: Props = $props();

	const validationStatus = inputValidationStatus({ issues: () => issues });
</script>

<div class="mb-3">
	<label for={id} class="form-label">{label}</label>
	<select
		{id}
		{name}
		class="form-control"
		class:is-valid={validationStatus.status === InputStates['SUCCESS']}
		class:is-invalid={validationStatus.status === InputStates['ERROR']}
		aria-describedby="{id}-error"
		{...restProps}
	>
		<Select.Option value={undefined} selected>Selecciona una opción.</Select.Option>
		{@render children()}
	</select>

	{#if issues}
		{#each issues as { message }}
			<div id="{id}-error" class="invalid-feedback d-block" aria-live="polite">
				{message}
			</div>
		{/each}
	{/if}
</div>
