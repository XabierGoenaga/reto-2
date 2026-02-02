<script lang="ts">
	import { getDonaciones, deleteDonacion, toggleStateDonation } from '$lib/remote';

	let selectedDonation: any = $state(null);

	function viewDonation(donation: any) {
		selectedDonation = donation;
	}

	// Función para formatear el tipo de donación
	function formatTipo(tipo: string) {
		const tipos = {
			monthly: 'Mensual',
			single: 'Única',
			sponsorship: 'Patrocinio'
		};
		return tipos[tipo as keyof typeof tipos] || tipo;
	}

	// Función para formatear el IBAN (mostrar solo los últimos 4 dígitos)
	function formatIBAN(iban: string) {
		return `****${iban.slice(-4)}`;
	}
</script>

<div class="container-fluid py-4">
	<div class="row">
		<div class="col-12">
			<div class="card shadow-sm">
				<div class="card-header bg-white py-3">
					<div class="row align-items-center">
						<div class="col">
							<h5 class="mb-0">Donaciones</h5>
						</div>
						<div class="col-auto">
							<!-- Aquí podrías añadir un botón para nueva donación si lo necesitas -->
						</div>
					</div>
				</div>
				<div class="card-body p-0">
					<div class="table-responsive">
						<table class="table table-hover align-middle mb-0">
							<thead class="table-light">
								<tr>
									<th scope="col" class="ps-4">#</th>
									<th scope="col">Donante</th>
									<th scope="col">Tipo Donante</th>
									<th scope="col">Tipo Donación</th>
									<th scope="col">Cantidad</th>
									<th scope="col">Estado</th>
									<th scope="col" class="text-end pe-4">Acciones</th>
								</tr>
							</thead>
							<tbody>
								{#each await getDonaciones() as data (data.id)}
									<tr>
										<th scope="row" class="ps-4">{data.id}</th>
										<td>
											<div class="fw-semibold">{data.donante?.name || 'N/A'}</div>
											<small class="text-muted">{formatIBAN(data.iban)}</small>
										</td>
										<td>
											<span
												class="badge bg-{data.donante?.type === 'Empresa' ? 'primary' : 'info'}"
											>
												{data.donante?.type || 'N/A'}
											</span>
										</td>
										<td>
											<span class="badge bg-secondary">
												{#if data.tipo === 'monthly'}
													Mensual
												{:else if data.tipo === 'single'}
													Unica
												{:else if data.tipo === 'sponsorship'}
													Patrocinio
												{/if}
											</span>
										</td>
										<td>
											<strong class="text-success">{data.cantidad}€</strong>
										</td>
										<td>
											{#if data.procesada}
												<span class="badge bg-success">
													<i class="bi bi-check-circle me-1"></i>Procesada
												</span>
											{:else}
												<span class="badge bg-warning text-dark">
													<i class="bi bi-clock me-1"></i>Pendiente
												</span>
											{/if}
										</td>
										<td class="text-end pe-4">
											<div class="btn-group btn-group-sm" role="group">
												<button
													type="button"
													class="btn btn-outline-primary"
													title="Ver detalles"
													data-bs-toggle="modal"
													data-bs-target="#donationModal"
													onclick={() => viewDonation(data)}
												>
													<i class="bi bi-eye"></i>
												</button>
												<!-- <button
													type="button"
													class="btn {data.procesada
														? 'btn-outline-secondary'
														: 'btn-outline-success'}"
													title={data.procesada ? 'Marcar como pendiente' : 'Marcar como procesada'}
													onclick={async () => await toggleStateDonation(data.id)}
												>
													<i
														class="bi bi-{data.procesada
															? 'arrow-counterclockwise'
															: 'check-circle'}"
													></i>
												</button> -->
												<button
													type="button"
													onclick={() => deleteDonacion(data.id)}
													class="btn btn-outline-danger"
													title="Eliminar"
												>
													<i class="bi bi-trash"></i>
												</button>
											</div>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
				<div class="card-footer bg-white">
					<nav aria-label="Paginación de tabla">
						<ul class="pagination pagination-sm mb-0 justify-content-end">
							<li class="page-item disabled">
								<a class="page-link" href="#" tabindex="-1">Anterior</a>
							</li>
							<li class="page-item active"><a class="page-link" href="#">1</a></li>
							<li class="page-item"><a class="page-link" href="#">2</a></li>
							<li class="page-item"><a class="page-link" href="#">3</a></li>
							<li class="page-item">
								<a class="page-link" href="#">Siguiente</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Modal para ver donación completa -->
<div
	class="modal fade"
	id="donationModal"
	tabindex="-1"
	aria-labelledby="donationModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="donationModalLabel">Detalle de la Donación</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				{#if selectedDonation}
					<div class="row mb-3">
						<div class="col-md-6">
							<label class="form-label fw-bold text-muted small">ID Donación</label>
							<p class="mb-0">{selectedDonation.id}</p>
						</div>
						<div class="col-md-6">
							<label class="form-label fw-bold text-muted small">Estado</label>
							<p class="mb-0">
								{#if selectedDonation.procesada}
									<span class="badge bg-success">
										<i class="bi bi-check-circle me-1"></i>Procesada
									</span>
								{:else}
									<span class="badge bg-warning text-dark">
										<i class="bi bi-clock me-1"></i>Pendiente
									</span>
								{/if}
							</p>
						</div>
					</div>

					<hr />

					<h6 class="mb-3"><i class="bi bi-person-circle me-2"></i>Información del Donante</h6>
					<div class="row mb-3">
						<div class="col-md-6">
							<label class="form-label fw-bold text-muted small">Nombre</label>
							<p class="mb-0">{selectedDonation.donante?.name || 'N/A'}</p>
						</div>
						<div class="col-md-6">
							<label class="form-label fw-bold text-muted small">Tipo</label>
							<p class="mb-0">
								<span
									class="badge bg-{selectedDonation.donante?.type === 'Empresa'
										? 'primary'
										: 'info'}"
								>
									{selectedDonation.donante?.type || 'N/A'}
								</span>
							</p>
						</div>
					</div>
					<div class="row mb-3">
						<div class="col-md-6">
							<label class="form-label fw-bold text-muted small">Contacto</label>
							<p class="mb-0">
								<a href="tel:{selectedDonation.donante?.contacto}"
									>{selectedDonation.donante?.contacto || 'N/A'}</a
								>
							</p>
						</div>
						<div class="col-md-6">
							<label class="form-label fw-bold text-muted small">Dirección</label>
							<p class="mb-0">{selectedDonation.donante?.direccion || 'N/A'}</p>
						</div>
					</div>

					<hr />

					<h6 class="mb-3"><i class="bi bi-cash-coin me-2"></i>Información de la Donación</h6>
					<div class="row mb-3">
						<div class="col-md-6">
							<label class="form-label fw-bold text-muted small">Tipo de Donación</label>
							<p class="mb-0">
								<span class="badge bg-secondary">
									{formatTipo(selectedDonation.tipo)}
								</span>
							</p>
						</div>
						<div class="col-md-6">
							<label class="form-label fw-bold text-muted small">Cantidad</label>
							<p class="mb-0">
								<strong class="text-success fs-5">{selectedDonation.cantidad}€</strong>
							</p>
						</div>
					</div>
					<div class="row mb-3">
						<div class="col-12">
							<label class="form-label fw-bold text-muted small">IBAN</label>
							<div class="card bg-light">
								<div class="card-body">
									<code>{selectedDonation.iban}</code>
								</div>
							</div>
						</div>
					</div>
					{#if selectedDonation.ID_PROYECTO}
						<div class="row">
							<div class="col-12">
								<label class="form-label fw-bold text-muted small">ID Proyecto</label>
								<p class="mb-0">{selectedDonation.ID_PROYECTO}</p>
							</div>
						</div>
					{/if}
				{/if}
			</div>
			<div class="modal-footer">
				<button type="button" id="close-modal" class="btn btn-secondary" data-bs-dismiss="modal"
					>Cerrar</button
				>
				{#if selectedDonation}
					<button
						type="button"
						onclick={() =>
							toggleStateDonation(selectedDonation.id).finally(() => {
								document.getElementById('close-modal')?.click();
							})}
						class="btn {selectedDonation.procesada ? 'btn-secondary' : 'btn-success'}"
					>
						<i
							class="bi bi-{selectedDonation.procesada
								? 'arrow-counterclockwise'
								: 'check-circle'} me-1"
						></i>
						{selectedDonation.procesada ? 'Marcar como pendiente' : 'Marcar como procesada'}
					</button>
					<button
						type="button"
						onclick={() =>
							deleteDonacion(selectedDonation.id).finally(() => {
								document.getElementById('close-modal')?.click();
							})}
						class="btn btn-danger"
					>
						<i class="bi bi-trash me-1"></i>Eliminar
					</button>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	:global(body) {
		background-color: #f8f9fa;
	}

	.text-break {
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
</style>
