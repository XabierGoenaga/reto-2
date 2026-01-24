<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	type Props = {
		success: boolean | undefined;
	};

	let { success = $bindable() }: Props = $props();

	$effect(() => {
		if (!success) return;

		setInterval(() => {
			success = undefined;
		}, 5000);
	});
</script>

{#if success}
	<div class="toast-container position-fixed bottom-0 end-0 p-3">
		<div
			class="toast show"
			in:fly={{
				y: 100,
				delay: 300,
				easing: backOut
			}}
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
		>
			<div class="toast-header">
				<strong class="me-auto">Alerta</strong>
			</div>
			<div class="toast-body">El formulario se a enviado correctamente</div>
		</div>
	</div>
{/if}
