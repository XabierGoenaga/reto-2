<script lang="ts">
	import { Checkbox, Form, Input, Select, Toust } from '$lib/component';
	import { newContactMessage } from '$lib/remote';
	import { contactCategories, contactCategoriesDisplayName } from '$lib/constant';
</script>

<main id="main-content">
	<!-- Contact Hero Section -->
	<section class="contact-hero bg-primary text-white py-5">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-10 col-xl-8 text-center">
					<h1 class="display-4 fw-bold mb-4">Estamos aquí para ayudarte</h1>
					<p class="lead mb-0">
						¿Tienes alguna pregunta sobre nuestros programas? ¿Necesitas información sobre cómo
						colaborar? Nos encantaría escucharte y resolver todas tus dudas.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Form and Info Section -->
	<section class="py-5">
		<div class="container">
			<div class="row g-5">
				<!-- Contact Form -->
				<div class="col-lg-7">
					<div class="card border-0 shadow-sm">
						<div class="card-body p-4 p-md-5">
							<div class="mb-4">
								<h2 class="card-title h3 mb-2">Envíanos un mensaje</h2>
								<p class="text-muted mb-0">
									Completa el formulario y nos pondremos en contacto contigo lo antes posible.
								</p>
							</div>

							<Form {...newContactMessage}>
								<Input
									label="Nombre completo"
									{...newContactMessage.fields.full_name.as('text')}
									issues={newContactMessage.fields.full_name.issues()}
								/>

								<Input
									label="Email"
									{...newContactMessage.fields.email.as('email')}
									issues={newContactMessage.fields.email.issues()}
								/>

								<Input
									label="Telefono"
									{...newContactMessage.fields.phone.as('tel')}
									issues={newContactMessage.fields.phone.issues()}
								/>

								<Select.Container
									label="Asunto"
									{...newContactMessage.fields.affair.as('select')}
									issues={newContactMessage.fields.affair.issues()}
								>
									{#each contactCategories as value, index}
										<Select.Option {value}>{contactCategoriesDisplayName[index]}</Select.Option>
									{/each}
								</Select.Container>

								<Input
									label="Mensaje"
									tag="textarea"
									{...newContactMessage.fields.message.as('text')}
									issues={newContactMessage.fields.message.issues()}
								/>

								<Checkbox
									label="Quiero recibir noticias y actualizaciones de UNICEF España"
									{...newContactMessage.fields.conditions.as('checkbox')}
									issues={newContactMessage.fields.conditions.issues()}
								/>

								<button
									type="submit"
									class="btn btn-primary btn-lg w-100"
									disabled={!!newContactMessage.pending}
								>
									<i class="fas fa-paper-plane me-2"></i>
									Enviar mensaje
								</button>
							</Form>
						</div>
					</div>
				</div>

				<!-- Contact Information -->
				<div class="col-lg-5">
					<div class="card border-0 shadow-sm h-100">
						<div class="card-body p-4 p-md-5">
							<h3 class="h4 mb-4">Información de contacto</h3>

							<div class="mb-5">
								<div class="row g-4">
									<div class="col-12">
										<div class="d-flex">
											<div class="flex-shrink-0">
												<i class="fas fa-map-marker-alt text-primary fs-5"></i>
											</div>
											<div class="flex-grow-1 ms-3">
												<h5 class="h6 mb-1">Oficina Principal</h5>
												<p class="mb-0 text-muted small">
													Calle Mauricio Legendre, 36<br />28046 Madrid, España
												</p>
											</div>
										</div>
									</div>

									<div class="col-12">
										<div class="d-flex">
											<div class="flex-shrink-0">
												<i class="fas fa-phone text-primary fs-5"></i>
											</div>
											<div class="flex-grow-1 ms-3">
												<h5 class="h6 mb-1">Teléfono</h5>
												<p class="mb-0 text-muted small">
													+34 913 789 555<br />Lunes a Viernes: 9:00 - 18:00
												</p>
											</div>
										</div>
									</div>

									<div class="col-12">
										<div class="d-flex">
											<div class="flex-shrink-0">
												<i class="fas fa-envelope text-primary fs-5"></i>
											</div>
											<div class="flex-grow-1 ms-3">
												<h5 class="h6 mb-1">Email</h5>
												<p class="mb-0 text-muted small">
													info@unicef.es<br />prensa@unicef.es
												</p>
											</div>
										</div>
									</div>

									<div class="col-12">
										<div class="d-flex">
											<div class="flex-shrink-0">
												<i class="fas fa-clock text-primary fs-5"></i>
											</div>
											<div class="flex-grow-1 ms-3">
												<h5 class="h6 mb-1">Horario de Atención</h5>
												<p class="mb-0 text-muted small">
													Lunes a Viernes: 9:00 - 18:00<br />Sábados: 10:00 - 14:00
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<!-- Social Media Links -->
							<div>
								<h4 class="h5 mb-3">Síguenos en redes sociales</h4>
								<div class="d-flex gap-3">
									<a
										href="#"
										aria-label="Facebook de UNICEF España"
										class="btn btn-outline-primary btn-sm"
									>
										<i class="fab fa-facebook-f"></i>
									</a>
									<a
										href="#"
										aria-label="Twitter de UNICEF España"
										class="btn btn-outline-primary btn-sm"
									>
										<i class="fab fa-twitter"></i>
									</a>
									<a
										href="#"
										aria-label="Instagram de UNICEF España"
										class="btn btn-outline-primary btn-sm"
									>
										<i class="fab fa-instagram"></i>
									</a>
									<a
										href="#"
										aria-label="LinkedIn de UNICEF España"
										class="btn btn-outline-primary btn-sm"
									>
										<i class="fab fa-linkedin-in"></i>
									</a>
									<a
										href="#"
										aria-label="YouTube de UNICEF España"
										class="btn btn-outline-primary btn-sm"
									>
										<i class="fab fa-youtube"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="py-5 bg-light">
		<div class="container">
			<h2 class="text-center mb-5">Preguntas frecuentes</h2>
			<div class="row g-4">
				<div class="col-md-6 col-lg-3">
					<div class="card h-100 border-0 shadow-sm">
						<div class="card-body">
							<h5 class="card-title h6 mb-3">¿Cómo puedo hacer una donación?</h5>
							<p class="card-text small text-muted mb-0">
								Puedes hacer una donación a través de nuestra página de colaboración, por teléfono o
								enviando una transferencia bancaria. Todas las opciones están disponibles las 24
								horas.
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-3">
					<div class="card h-100 border-0 shadow-sm">
						<div class="card-body">
							<h5 class="card-title h6 mb-3">¿Mis donaciones son deducibles?</h5>
							<p class="card-text small text-muted mb-0">
								Sí, las donaciones a UNICEF España son deducibles en la declaración de la renta
								según la normativa fiscal vigente. Te enviaremos el certificado correspondiente.
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-3">
					<div class="card h-100 border-0 shadow-sm">
						<div class="card-body">
							<h5 class="card-title h6 mb-3">¿Cómo se utilizan las donaciones?</h5>
							<p class="card-text small text-muted mb-0">
								El 98% de las donaciones se destina directamente a programas para la infancia.
								Publicamos informes anuales detallados sobre el uso de los fondos.
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-3">
					<div class="card h-100 border-0 shadow-sm">
						<div class="card-body">
							<h5 class="card-title h6 mb-3">¿Puedo visitar vuestras oficinas?</h5>
							<p class="card-text small text-muted mb-0">
								Sí, puedes visitarnos en horario de oficina. Te recomendamos concertar una cita
								previa para asegurarnos de poder atenderte adecuadamente.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<Toust success={newContactMessage.result?.success ?? false} />
