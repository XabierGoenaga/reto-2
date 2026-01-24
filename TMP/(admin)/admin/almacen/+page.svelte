<div class="card mb-4">
	<div class="card-header">
		<strong>Tabla de datos</strong>
	</div>

	<div class="card-body">
		<!-- Controles -->
		<div class="row mb-3">
			<div class="col-md-6">
				<label class="form-label">Buscar</label>
				<input type="search" class="form-control" placeholder="Buscar en la tabla" disabled />
			</div>

			<div class="col-md-3">
				<label class="form-label">Mostrar</label>
				<select class="form-select">
					<option>5</option>
					<option selected>10</option>
					<option>25</option>
					<option>50</option>
				</select>
			</div>

			<div class="col-md-3 d-flex align-items-end">
				<span class="text-muted">entradas</span>
			</div>
		</div>

		<!-- Tabla -->
		<div class="table-responsive">
			<table class="table table-bordered table-hover">
				<thead class="table-light">
					<tr>
						<th>Nombre</th>
						<th>Puesto</th>
						<th>Oficina</th>
						<th>Edad</th>
						<th>Fecha inicio</th>
						<th>Salario</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Shad Decker</td>
						<td>Regional Director</td>
						<td>Edinburgh</td>
						<td>51</td>
						<td>2008/11/13</td>
						<td>$183,000</td>
					</tr>
					<tr>
						<td>Michael Bruce</td>
						<td>Javascript Developer</td>
						<td>Singapore</td>
						<td>29</td>
						<td>2011/06/27</td>
						<td>$183,000</td>
					</tr>
					<tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Footer -->
		<div class="d-flex justify-content-between mt-3">
			<small class="text-muted"> Mostrando 1 a 3 de 3 entradas </small>

			<nav>
				<ul class="pagination pagination-sm mb-0">
					<li class="page-item disabled">
						<span class="page-link">Anterior</span>
					</li>
					<li class="page-item active">
						<span class="page-link">1</span>
					</li>
					<li class="page-item disabled">
						<span class="page-link">Siguiente</span>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</div>
