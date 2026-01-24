<script lang="ts">
	import type { PageProps } from './$types';

	import { Form, Input, Select, Toust } from '$lib/component';
	import { createDonacion } from '$lib/remote';
	import {
		donationFrequency,
		donationFrequencyDisplayName,
		donationTypes,
		donationTypesDisplayName
	} from '$lib/constant';

	const { form }: PageProps = $props();

	let cantidad: number = $state(0);
</script>

<main id="main-content">
	<!-- Hero Section for Collaboration -->
	<section class="collaboration-hero">
		<div class="wrapper">
			<div class="collaboration-hero-content">
				<div class="hero-text-content">
					<h1>Tu ayuda puede cambiar vidas</h1>
					<p>
						Cada donación cuenta. Con tu apoyo, podemos llegar a más niños que necesitan educación,
						salud y protección en todo el mundo.
					</p>

					<div class="donation-options">
						<div class="donation-card">
							<div class="donation-amount">€10</div>
							<div class="donation-impact">Vacunas para 5 niños</div>
						</div>
						<div class="donation-card">
							<div class="donation-amount">€25</div>
							<div class="donation-impact">Material escolar completo</div>
						</div>
						<div class="donation-card">
							<div class="donation-amount">€50</div>
							<div class="donation-impact">Agua potable por un mes</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Donation Form Section -->
	<section class="donation-form-section wrapper">
		<div class="form-container-v2">
			<div class="form-header">
				<h2>Realiza tu donación</h2>
				<p>Completa el formulario para hacer tu contribución y ser parte del cambio.</p>
			</div>

			<Form success={createDonacion.result?.success ?? false} {...createDonacion}>
				<Input
					label="Nombre"
					{...createDonacion.fields.name.as('text')}
					issues={createDonacion.fields.name.issues()}
				/>

				<Input
					label="Email"
					{...createDonacion.fields.email.as('email')}
					issues={createDonacion.fields.email.issues()}
				/>

				<Input
					label="Numero de Telefono"
					{...createDonacion.fields.contacto.as('tel')}
					issues={createDonacion.fields.contacto.issues()}
				/>

				<Select.Container
					label="Tipo"
					{...createDonacion.fields.type.as('select')}
					issues={createDonacion.fields.type.issues()}
				>
					{#each donationTypes as value, index}
						<Select.Option {value}>{donationTypesDisplayName[index]}</Select.Option>
					{/each}
				</Select.Container>

				<Select.Container
					label="Frecuencia"
					{...createDonacion.fields.frecuencia.as('select')}
					issues={createDonacion.fields.frecuencia.issues()}
				>
					{#each donationFrequency as value, index}
						<Select.Option {value}>{donationFrequencyDisplayName[index]}</Select.Option>
					{/each}
				</Select.Container>

				<Input
					label="Candidad"
					{...createDonacion.fields.cantidad.as('number')}
					issues={createDonacion.fields.cantidad.issues()}
				/>

				<Input
					label="IBAN"
					{...createDonacion.fields._iban.as('text')}
					issues={createDonacion.fields._iban.issues()}
				/>

				<button
					type="submit"
					class="btn btn-primary btn-lg w-100"
					disabled={!!createDonacion.pending}
				>
					<i class="fas fa-paper-plane me-2"></i>
					Enviar mensaje
				</button>
			</Form>
		</div>

		<!-- Impact Information -->
		<div class="impact-info">
			<h3>Tu impacto</h3>
			<div class="impact-stats">
				<div class="impact-stat">
					<div class="impact-number">2.5M</div>
					<div class="impact-description">Niños ayudados este año</div>
				</div>
				<div class="impact-stat">
					<div class="impact-number">190+</div>
					<div class="impact-description">Países donde trabajamos</div>
				</div>
				<div class="impact-stat">
					<div class="impact-number">98%</div>
					<div class="impact-description">De fondos llegan directamente</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Why Donate Section -->
	<section class="why-donate-section">
		<div class="wrapper">
			<h2 class="section-title">¿Por qué donar a UNICEF?</h2>
			<div class="reasons-grid">
				<div class="reason-card">
					<div class="reason-icon">
						<i class="fas fa-globe"></i>
					</div>
					<h3>Alcance Global</h3>
					<p>
						Trabajamos en más de 190 países, llegando a los lugares más remotos y necesitados del
						mundo.
					</p>
				</div>
				<div class="reason-card">
					<div class="reason-icon">
						<i class="fas fa-shield-alt"></i>
					</div>
					<h3>Transparencia</h3>
					<p>
						El 98% de tus fondos van directamente a programas que ayudan a los niños más
						vulnerables.
					</p>
				</div>
				<div class="reason-card">
					<div class="reason-icon">
						<i class="fas fa-medal"></i>
					</div>
					<h3>Experiencia</h3>
					<p>
						Más de 75 años de experiencia trabajando por los derechos y el bienestar de la infancia.
					</p>
				</div>
				<div class="reason-card">
					<div class="reason-icon">
						<i class="fas fa-chart-line"></i>
					</div>
					<h3>Resultados Medibles</h3>
					<p>Cada año reportamos el impacto real de nuestros programas con datos verificables.</p>
				</div>
			</div>
		</div>
	</section>
</main>

<Toust success={createDonacion.result?.success} />
