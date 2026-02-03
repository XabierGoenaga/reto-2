<script lang="ts">
	import '$lib/styles/app/global.css';
	import '$lib/styles/app/header.css';
	import '$lib/styles/app/footer.css';
	import '$lib/styles/app/home.css';
	import '$lib/styles/app/components.css';
	import '$lib/styles/app/variables.css';
	import '$lib/styles/app/contact.css';
	import '$lib/styles/app/collaboration.css';

	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { ResolvedPathname } from '$app/types';

	const { children } = $props();

	let open = $state(false);

	const activePage = (href: ResolvedPathname) => {
		return page.url.pathname === href ? 'page' : 'false';
	};
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>UNICEF España - Construyendo un futuro mejor para todos los niños</title>
	<meta
		name="description"
		content="UNICEF España trabaja incansablemente para proteger los derechos de la infancia, proporcionando educación, salud y protección a millones de niños en todo el mundo."
	/>
	<meta
		name="keywords"
		content="UNICEF, España, niños, infancia, derechos, educación, salud, protección, donación, colaboración"
	/>
	<meta name="author" content="UNICEF España" />

	<!-- Font Awesome para iconos -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
	/>
</svelte:head>

<header class="header_container">
	<a href={resolve('/')} class="header_title">UNICEF</a>

	<input
		type="checkbox"
		id="menu-toggle"
		class="menu-toggle"
		aria-label="Abrir menú de navegación"
		bind:checked={open}
	/>

	<label for="menu-toggle" class="menu-button" aria-label="Botón de menú">
		<span class="menu-icon"></span>
		<span class="menu-icon"></span>
		<span class="menu-icon"></span>
	</label>

	<nav class="header_nav" aria-label="Navegación principal">
		<a href={resolve('/')} onclick={() => (open = false)} aria-current={activePage('/')}>
			Inicio
		</a>
		<a href={resolve('/colab')} onclick={() => (open = false)} aria-current={activePage('/colab')}>
			Colabora
		</a>
		<a
			href={resolve('/contact')}
			onclick={() => (open = false)}
			aria-current={activePage('/contact')}
		>
			Contacto
		</a>
		<a
			href={resolve('/admin/almacen')}
			onclick={() => (open = false)}
			aria-current={activePage('/admin')}
		>
			Panel de Administración
		</a>
	</nav>
</header>

{@render children()}

<footer class="footer_container">
	<div class="wrapper">
		<div class="footer_content">
			<div class="footer_brand">
				<h3>UNICEF España</h3>
				<p>
					Trabajamos cada día para que cada niño y niña, sin excepción, pueda disfrutar de sus
					derechos y alcanzar su pleno potencial.
				</p>
				<div class="footer_social">
					<a href="#" class="social_link" aria-label="Facebook de UNICEF España">
						<i class="fab fa-facebook-f"></i>
					</a>
					<a href="#" class="social_link" aria-label="Twitter de UNICEF España">
						<i class="fab fa-twitter"></i>
					</a>
					<a href="#" class="social_link" aria-label="Instagram de UNICEF España">
						<i class="fab fa-instagram"></i>
					</a>
					<a href="#" class="social_link" aria-label="LinkedIn de UNICEF España">
						<i class="fab fa-linkedin-in"></i>
					</a>
					<a href="#" class="social_link" aria-label="YouTube de UNICEF España">
						<i class="fab fa-youtube"></i>
					</a>
				</div>
			</div>

			<div class="footer_section">
				<h4>Navegación</h4>
				<ul class="footer_links">
					<li><a href={resolve('/')}>Inicio</a></li>
					<li><a href={resolve('/colab')}>Colabora</a></li>
					<li><a href={resolve('/contact')}>Contacto</a></li>
					<li><a href="#">Transparencia</a></li>
					<li><a href="#">Memoria Anual</a></li>
				</ul>
			</div>

			<div class="footer_section">
				<h4>Programas</h4>
				<ul class="footer_links">
					<li><a href="#">Educación</a></li>
					<li><a href="#">Protección infantil</a></li>
					<li><a href="#">Emergencias</a></li>
					<li><a href="#">Agua y saneamiento</a></li>
					<li><a href="#">Nutrición</a></li>
				</ul>
			</div>

			<div class="footer_section">
				<h4>Contacto</h4>
				<div class="footer_contact_info">
					<div class="contact_item">
						<div class="contact_icon">
							<i class="fas fa-map-marker-alt"></i>
						</div>
						<div class="contact_text">Irun, España</div>
					</div>
					<div class="contact_item">
						<div class="contact_icon">
							<i class="fas fa-phone"></i>
						</div>
						<div class="contact_text">+34 902 31 41 31</div>
					</div>
					<div class="contact_item">
						<div class="contact_icon">
							<i class="fas fa-envelope"></i>
						</div>
						<div class="contact_text">info@unicef.es</div>
					</div>
				</div>

				<div class="newsletter_section">
					<h4>Newsletter</h4>
					<form class="newsletter_form" action="#" method="post">
						<input type="email" class="newsletter_input" placeholder="Tu email" required />
						<button type="submit" class="newsletter_btn">Suscribirse</button>
					</form>
				</div>
			</div>
		</div>

		<div class="footer_bottom">
			<div class="footer_legal">
				<span
					>CIF G-8445108-7 - Registro de Fundaciones de competencia estatal con nº de registro 759</span
				>
				<span>Política de privacidad | Términos de uso | Cookies</span>
			</div>
			<div class="footer_copyright">&copy; 2025 UNICEF España</div>
		</div>
	</div>
</footer>
