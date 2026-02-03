<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<main id="main-content">
	<!-- Hero Section -->
	<section class="hero-section">
		<div class="hero-content">
			<div class="hero-text">
				<h1 class="hero-title">Cada niño merece una oportunidad</h1>
				<p class="hero-subtitle">
					Trabajamos en más de 190 países para proteger los derechos de la infancia y crear un mundo
					donde cada niño pueda alcanzar su máximo potencial.
				</p>
				<div class="hero-buttons">
					<a href={resolve('/colab')} class="btn btn-primary">
						<i class="fas fa-heart"></i>
						Dona Ahora
					</a>
					<a href="#impact" class="btn btn-secondary">
						<i class="fas fa-play"></i>
						Ver nuestro impacto
					</a>
				</div>
			</div>
			<div class="hero-image">
				<enhanced:img
					src="$lib/assets/ft1.jpeg?w=1280;640;400"
					sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
					alt="Niños en Congo beneficiarios de programas de UNICEF"
					loading="lazy"
				/>
				<div class="hero-stats">
					<div class="stat">
						<span class="stat-number">190+</span>
						<span class="stat-label">Países</span>
					</div>
					<div class="stat">
						<span class="stat-number">2.5M</span>
						<span class="stat-label">Niños ayudados</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Mission Cards Section -->
	<section class="mission-section wrapper">
		<h2 class="section-title">Nuestra Misión</h2>
		<div class="mission-grid">
			<div class="mission-card">
				<div class="mission-icon">
					<i class="fas fa-graduation-cap"></i>
				</div>
				<h3>Educación</h3>
				<p>
					Garantizamos que todos los niños tengan acceso a una educación de calidad que les permita
					desarrollar su potencial.
				</p>
			</div>
			<div class="mission-card">
				<div class="mission-icon">
					<i class="fas fa-heartbeat"></i>
				</div>
				<h3>Salud</h3>
				<p>
					Proporcionamos atención médica, vacunas y nutrición para asegurar que todos los niños
					crezcan sanos y fuertes.
				</p>
			</div>
			<div class="mission-card">
				<div class="mission-icon">
					<i class="fas fa-shield-alt"></i>
				</div>
				<h3>Protección</h3>
				<p>
					Protegemos a los niños de la violencia, la explotación y el abuso, garantizando un entorno
					seguro para crecer.
				</p>
			</div>
			<div class="mission-card">
				<div class="mission-icon">
					<i class="fas fa-tint"></i>
				</div>
				<h3>Agua y Saneamiento</h3>
				<p>
					Aseguramos el acceso a agua potable y saneamiento adecuado para prevenir enfermedades y
					mejorar la calidad de vida.
				</p>
			</div>
		</div>
	</section>

	<!-- Impact Section -->
	<section id="impact" class="impact-section">
		<div class="wrapper">
			<div class="impact-content">
				<div class="impact-text">
					<h2>Tu donación cambia vidas</h2>
					<p>
						Cada euro que donas se convierte en oportunidades reales para los niños más vulnerables
						del mundo. Descubre cómo tu contribución marca la diferencia.
					</p>

					<div class="impact-examples">
						<div class="impact-item">
							<span class="impact-amount">10€</span>
							<span class="impact-description">Vacunas para 5 niños</span>
						</div>
						<div class="impact-item">
							<span class="impact-amount">25€</span>
							<span class="impact-description">Material escolar para 3 niños</span>
						</div>
						<div class="impact-item">
							<span class="impact-amount">50€</span>
							<span class="impact-description">Agua potable para una familia durante un mes</span>
						</div>
					</div>

					<a href={resolve('/colab')} class="btn btn-primary">
						<i class="fas fa-donate"></i>
						Hacer una donación
					</a>
				</div>
				<div class="impact-image">
					<enhanced:img
						src="$lib/assets/ft2-congo.jpeg?w=1280;640;400"
						sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
						alt="Niños en Congo beneficiarios de programas de UNICEF"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- How to Help Section -->
	<section class="help-section wrapper wrapper-custom">
		<h2 class="section-title">Cómo puedes ayudar</h2>
		<div class="help-steps">
			<div class="help-step">
				<div class="step-number">1</div>
				<div class="step-content">
					<enhanced:img
						src="$lib/assets/ftpeq1.jpg?w=1280;640;400"
						sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
						alt="Niños en Congo beneficiarios de programas de UNICEF"
						loading="lazy"
					/>
					<h3>Elige tu forma de ayudar</h3>
					<p>
						Donación única, apadrinamiento o hazte socio. Cada opción cuenta y hace la diferencia.
					</p>
				</div>
			</div>
			<div class="help-step">
				<div class="step-number">2</div>
				<div class="step-content">
					<enhanced:img
						src="$lib/assets/ftpeq2.jpg?w=1280;640;400"
						sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
						alt="Niños en Congo beneficiarios de programas de UNICEF"
						loading="lazy"
					/>
					<h3>Llegamos donde más se necesita</h3>
					<p>
						Tu ayuda se distribuye eficientemente a los programas que más impacto generan en la vida
						de los niños.
					</p>
				</div>
			</div>
			<div class="help-step">
				<div class="step-number">3</div>
				<div class="step-content">
					<enhanced:img
						src="$lib/assets/ftpeq3.webp?w=1280;640;400"
						sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
						alt="Niños en Congo beneficiarios de programas de UNICEF"
						loading="lazy"
					/>
					<h3>Transformamos vidas juntos</h3>
					<p>
						Cada donación se convierte en educación, salud, protección y esperanza para millones de
						niños.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Call to Action Section -->
	<section class="cta-section">
		<div class="wrapper">
			<div class="cta-content">
				<h2>Únete a nosotros hoy</h2>
				<p>
					Sé parte del cambio que los niños del mundo necesitan. Tu apoyo puede transformar vidas y
					construir un futuro mejor para todos.
				</p>
				<div class="cta-buttons">
					<a href={resolve('/colab')} class="btn btn-primary">
						<i class="fas fa-heart"></i>
						Colaborar ahora
					</a>
					<a href={resolve('/contact')} class="btn btn-outline">
						<i class="fas fa-envelope"></i>
						Más información
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.wrapper-custom {
		max-width: unset;
	}

	.mission-section {
		padding-top: 3.5rem;
		padding-bottom: 3.5rem;
	}

	.help-section {
		padding-top: 3.5rem;
		padding-bottom: 3.5rem;
	}

	.help-section > h2 {
		color: white;
	}
</style>
