<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	} & SvelteHTMLElements['option'];

	const { children, value, ...restProps }: Props = $props();
</script>

<option {value} {...restProps}>{@render children()}</option>
