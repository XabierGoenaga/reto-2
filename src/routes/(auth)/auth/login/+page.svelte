<script>
	import { Form, Input } from '$lib/component';
	import { login } from '$lib/remote';

	$effect.pre(() => {
		login.fields.email.set('admin@admin.admin');
		login.fields._password.set('admin');
	});
</script>

<div class="container">
	<div class="row justify-content-center align-items-center min-vh-100">
		<div class="col-md-6 col-lg-5">
			<!-- Panel principal -->
			<div class="card shadow">
				<div class="card-header bg-primary text-white text-center py-4">
					<h1 class="h3 mb-0">
						<i class="bi bi-shield-lock me-2"></i>
						Panel de Control
					</h1>
					<p class="mb-0 mt-2">Acceso restringido al sistema</p>
				</div>

				<div class="card-body p-5">
					<!-- Formulario de login -->
					<Form success={undefined} {...login}>
						<!-- Campo de usuario -->
						<Input
							label="Nombre de Usuario"
							{...login.fields.email.as('email')}
							pending={!!login.pending}
							issues={login.fields.email.issues()}
						/>

						<!-- Campo de contraseña -->
						<Input
							label="Contraseña"
							{...login.fields._password.as('password')}
							pending={!!login.pending}
							issues={login.fields._password.issues()}
						/>

						<!-- Opciones adicionales -->
						<div class="mb-4 form-check">
							<input type="checkbox" class="form-check-input" id="recordar" />
							<label class="form-check-label" for="recordar"> Recordar mi sesión </label>
						</div>

						<!-- Botón de login -->
						<div class="d-grid gap-2">
							<button type="submit" disabled={!!login.pending} class="btn btn-primary btn-lg">
								<i class="bi bi-box-arrow-in-right me-2"></i>
								Iniciar Sesión
							</button>
						</div>
					</Form>
				</div>

				<div class="card-footer text-center py-3">
					<p class="small text-muted mb-0">
						<i class="bi bi-c-circle"></i> Sistema de Control Interno v2.1
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
