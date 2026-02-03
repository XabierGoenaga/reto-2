import { invalid, redirect } from '@sveltejs/kit';
import { resolve } from '$app/paths';
import { form, getRequestEvent, query } from '$app/server';
import { AuthDTO } from '$lib/dto/auth.dto';

export const getDonanteID = query(() => {
	const { cookies } = getRequestEvent();

	const id = cookies.get('ID_DONANTE');

	return id;
});

export const login = form(AuthDTO.LOGIN, (data, issue) => {
	if (data.email !== 'admin@admin.admin' || data._password !== 'admin') {
		invalid(issue.email('No es valida.'), issue._password('No es valida.'));
	}

	const request = getRequestEvent();

	request.cookies.set('logged', 'true', { path: request.url.pathname });

	redirect(302, resolve('/admin/almacen'));
});
