<script lang="ts">
	import { page } from '$app/state';
	import type { Pathname } from '$app/types';

	interface IPageTitle {
		path: Pathname;
		title: string;
		subtitle: string;
	}

	const { children } = $props();

	const titles: IPageTitle[] = [
		{
			path: '/admin',
			title: 'Dashboard',
			subtitle: 'Dashboard'
		},
		{
			path: '/admin/almacen',
			title: 'Almacen',
			subtitle: 'Almacen'
		},
		{
			path: '/admin/proyectos',
			title: 'Proyectos',
			subtitle: 'Proyectos'
		}
	];

	const title = $derived(titles.find((elem) => elem.path === page.url.pathname));
</script>

<h1 class="mt-4">{title!.title}</h1>
<ol class="breadcrumb mb-4">
	<li class="breadcrumb-item active">{title!.subtitle}</li>
</ol>

{@render children()}
