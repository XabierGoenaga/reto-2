<script lang="ts">
	import type { RemoteFormIssue } from '@sveltejs/kit';
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { inputValidationStatus } from '$lib/hooks';
	import { InputStates } from '$lib/type';

	type Props = {
		label: string;
		name: string;
		pending: boolean;
		issues: RemoteFormIssue[] | undefined;
		tag?: 'input' | 'textarea';
	} & SvelteHTMLElements['input'];

	const id = $props.id();
	const {
		label,
		name,
		value = $bindable(),
		pending,
		issues,
		tag = 'input',
		...restProps
	}: Props = $props();

	const validationStatus = inputValidationStatus({ issues: () => issues });
</script>

<div class="mb-3">
	<label for={id} class="form-label">{label}</label>
	<svelte:element
		this={tag}
		{id}
		{name}
		class="form-control"
		class:is-valid={!pending && validationStatus.status === InputStates['SUCCESS']}
		class:is-invalid={!pending && validationStatus.status === InputStates['ERROR']}
		aria-describedby="{id}-error"
		{...restProps}
	/>

	{#if issues}
		{#each issues as { message }}
			<div id="{id}-error" class="invalid-feedback d-block" aria-live="polite">
				{message}
			</div>
		{/each}
	{/if}
</div>
