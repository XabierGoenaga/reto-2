<script lang="ts">
	import type { PageProps } from './$types';

	const { data, form } = $props() as PageProps;
</script>

<div class="container mt-4">
	<h1 class="mb-4">Gestión de Proyectos</h1>

	<!-- FORM CREAR -->
	<div class="card mb-4">
		<div class="card-header">Crear Proyecto</div>
		<div class="card-body">
			<form action="?/create" method="post" class="row g-2">
				<div class="col-md-4">
					<input class="form-control" name="Titulo" placeholder="Título" required />
				</div>

				<div class="col-md-4">
					<input class="form-control" name="Objetivo" placeholder="Objetivo" required />
				</div>

				<div class="col-md-4">
					<input class="form-control" name="Presupuesto" type="number" placeholder="Presupuesto" />
				</div>

				<div class="col-md-3">
					<input class="form-control" name="InicioProyecto" type="date" required />
				</div>

				<div class="col-md-3">
					<input class="form-control" name="FinProyecto" type="date" required />
				</div>

				<div class="col-md-3">
					<input
						class="form-control"
						name="IDEmpSupervisor"
						type="number"
						placeholder="Supervisor ID"
						required
					/>

					{#if form?.IDEmpSupervisor}
						<div>{form.IDEmpSupervisor}</div>
					{/if}
				</div>

				<div class="col-md-3">
					<input class="form-control" name="Pais" placeholder="País" />
				</div>

				<div class="col-12">
					<button class="btn btn-primary">Crear</button>
				</div>
			</form>
		</div>
	</div>

	<!-- LISTA -->
	<div class="card">
		<div class="card-header">Proyectos</div>

		<div class="card-body">
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>Título</th>
						<th>País</th>
						<th>Presupuesto</th>
						<th>Acciones</th>
					</tr>
				</thead>

				<tbody>
					{#each data?.data ?? [] as p}
						<tr>
							<td>{p.ID}</td>
							<td>{p.Titulo}</td>
							<td>{p.Pais ?? 'Sin país'}</td>
							<td>{p.Presupuesto ?? 0}</td>

							<td>
								<form action="?/delete" method="post" class="d-inline">
									<input type="hidden" name="id" value={p.ID} />
									<button class="btn btn-danger btn-sm"> Eliminar </button>
								</form>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
