<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { setFormContext } from '$lib/context';

	type Props = {
		success: boolean | undefined;
		children: Snippet;
	} & SvelteHTMLElements['form'];

	const formState = $state({ isSubmitted: false });

	setFormContext(formState);

	const { success, children, ...restProps }: Props = $props();

	let form: HTMLFormElement;

	onMount(() => {
		const changeSubmittedState = () => {
			formState.isSubmitted = true;
		};

		form.addEventListener('submit', changeSubmittedState);

		return () => form.removeEventListener('submit', changeSubmittedState);
	});

	$effect(() => {
		if (success) {
			setTimeout(() => {
				console.log('Buenas');
				formState.isSubmitted = false;
			}, 5000);
		}
	});
</script>

<form bind:this={form} {...restProps}>
	{@render children()}
</form>
