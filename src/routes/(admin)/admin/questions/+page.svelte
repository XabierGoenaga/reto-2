<script lang="ts">
	import { getQuestions, toogleStateQuestion, deleteQuestion } from '$lib/remote/quetions.remote';

	let selectedQuestion: any = $state(null);

	function viewQuestion(question: any) {
		selectedQuestion = question;
	}
</script>

<div class="container-fluid py-4">
	<div class="row">
		<div class="col-12">
			<div class="card shadow-sm">
				<div class="card-header bg-white py-3">
					<div class="row align-items-center">
						<div class="col">
							<h5 class="mb-0">Preguntas de Contacto</h5>
						</div>
						<div class="col-auto"></div>
					</div>
				</div>
				<div class="card-body p-0">
					<div class="table-responsive">
						<table class="table table-hover align-middle mb-0">
							<thead class="table-light">
								<tr>
									<th scope="col" class="ps-4">#</th>
									<th scope="col">Nombre</th>
									<th scope="col">Email</th>
									<th scope="col">Teléfono</th>
									<th scope="col">Pregunta</th>
									<th scope="col">Estado</th>
									<th scope="col" class="text-end pe-4">Acciones</th>
								</tr>
							</thead>
							<tbody>
								{#each await getQuestions() as data (data.id)}
									<tr class:table-success={data.answered}>
										<th scope="row" class="ps-4">{data.id}</th>
										<td>{data.full_name}</td>
										<td>
											<small class="text-muted">{data.email}</small>
										</td>
										<td>
											<small class="text-muted">{data.phone}</small>
										</td>
										<td>
											<div class="question-preview">
												{data.message}
												{#if data.message.length > 100}
													<button
														type="button"
														class="btn btn-link btn-sm p-0 ms-1 text-decoration-none"
														data-bs-toggle="modal"
														data-bs-target="#questionModal"
														onclick={() => viewQuestion(data)}
													>
														ver más
													</button>
												{/if}
											</div>
										</td>
										<td>
											{#if data.answered}
												<span class="badge bg-success">
													<i class="bi bi-check-circle me-1"></i>Contestada
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
													title="Ver"
													data-bs-toggle="modal"
													data-bs-target="#questionModal"
													onclick={() => viewQuestion(data)}
												>
													<i class="bi bi-eye"></i>
												</button>
												<button
													type="button"
													class="btn {data.answered
														? 'btn-outline-secondary'
														: 'btn-outline-success'}"
													title={data.answered ? 'Marcar como pendiente' : 'Marcar como contestada'}
													onclick={async () => await toogleStateQuestion(data.id)}
												>
													<i
														class="bi bi-{data.answered
															? 'arrow-counterclockwise'
															: 'check-circle'}"
													></i>
												</button>
												<button
													type="button"
													onclick={() => deleteQuestion(data.id)}
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
			</div>
		</div>
	</div>
</div>

<!-- Modal para ver pregunta completa -->
<div
	class="modal fade"
	id="questionModal"
	tabindex="-1"
	aria-labelledby="questionModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="questionModalLabel">Detalle de la Pregunta</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				{#if selectedQuestion}
					<div class="row mb-3">
						<div class="col-md-6">
							<label class="form-label fw-bold text-muted small">ID</label>
							<p class="mb-0">{selectedQuestion.id}</p>
						</div>
						<div class="col-md-6">
							<label class="form-label fw-bold text-muted small">Nombre Completo</label>
							<p class="mb-0">{selectedQuestion.full_name}</p>
						</div>
					</div>
					<div class="row mb-3">
						<div class="col-md-6">
							<label class="form-label fw-bold text-muted small">Email</label>
							<p class="mb-0">
								<a href="mailto:{selectedQuestion.email}">{selectedQuestion.email}</a>
							</p>
						</div>
						<div class="col-md-6">
							<label class="form-label fw-bold text-muted small">Teléfono</label>
							<p class="mb-0">
								<a href="tel:{selectedQuestion.phone}">{selectedQuestion.phone}</a>
							</p>
						</div>
					</div>
					<div class="row mb-3">
						<div class="col-12">
							<label class="form-label fw-bold text-muted small">Estado</label>
							<p class="mb-0">
								{#if selectedQuestion.answered}
									<span class="badge bg-success">
										<i class="bi bi-check-circle me-1"></i>Contestada
									</span>
								{:else}
									<span class="badge bg-warning text-dark">
										<i class="bi bi-clock me-1"></i>Pendiente
									</span>
								{/if}
							</p>
						</div>
					</div>
					<div class="row">
						<div class="col-12">
							<label class="form-label fw-bold text-muted small">Pregunta/Mensaje</label>
							<div class="card bg-light">
								<div class="card-body">
									<p class="mb-0 text-break">{selectedQuestion.message}</p>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
			<div class="modal-footer">
				<button type="button" id="close-modal" class="btn btn-secondary" data-bs-dismiss="modal"
					>Cerrar</button
				>
				{#if selectedQuestion}
					<button
						type="button"
						onclick={() =>
							toogleStateQuestion(selectedQuestion.id).finally(() => {
								document.getElementById('close-modal')?.click();
							})}
						class="btn {selectedQuestion.answered ? 'btn-secondary' : 'btn-success'}"
					>
						<i
							class="bi bi-{selectedQuestion.answered
								? 'arrow-counterclockwise'
								: 'check-circle'} me-1"
						></i>
						{selectedQuestion.answered ? 'Marcar como pendiente' : 'Marcar como contestada'}
					</button>
				{/if}
				<button
					type="button"
					onclick={() =>
						deleteQuestion(selectedQuestion.id).finally(() => {
							document.getElementById('close-modal')?.click();
						})}
					class="btn btn-danger"
				>
					<i class="bi bi-trash me-1"></i>Eliminar
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	:global(body) {
		background-color: #f8f9fa;
	}

	.question-preview {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 350px;
		line-height: 1.4;
	}

	.text-break {
		word-wrap: break-word;
		overflow-wrap: break-word;
	}

	.table-success {
		--bs-table-bg: #d1e7dd;
		--bs-table-hover-bg: #c7dbd2;
	}
</style>
