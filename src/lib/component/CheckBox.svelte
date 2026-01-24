<script lang="ts">
	import type { RemoteFormIssue } from '@sveltejs/kit';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = {
		label: string;
		name: string;
		issues: RemoteFormIssue[] | undefined;
	} & SvelteHTMLElements['input'];

	const id = $props.id();
	let { label, checked = $bindable(false), issues, ...restProps }: Props = $props();
</script>

<div class="mb-4">
	<div class="form-check">
		<input {id} class="form-check-input" type="checkbox" bind:checked {...restProps} />
		<label class="form-check-label" for={id}>
			{label}
		</label>
	</div>

	{#if issues}
		{#each issues as { message }}
			<div id="{id}-error" class="invalid-feedback d-block" aria-live="polite">
				{message}
			</div>
		{/each}
	{/if}
</div>
