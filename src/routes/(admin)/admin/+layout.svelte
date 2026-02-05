<script lang="ts">
	import { resolve } from '$app/paths';
	import 'bootstrap/dist/js/bootstrap.min.js';

	const { children } = $props();
</script>

<svelte:head>
	<title>Panel de Administración</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
	/>
</svelte:head>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
	<div class="container-fluid">
		<a class="navbar-brand" href={resolve('/admin/almacen')}>
			<i class="bi bi-shield-check me-2"></i>Panel de Administración
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav ms-auto">
				<li class="nav-item">
					<a class="nav-link" href={resolve('/admin/almacen')}>Almacén</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={resolve('/admin/questions')}>Preguntas</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={resolve('/admin/donantes')}>Donantes</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={resolve('/admin/donaciones')}>Donaciones</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

{@render children()}
