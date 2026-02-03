// export const handle = async ({ event, resolve }) => {
// 	const response = await resolve(event);

import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

import { resolve as resolvePath } from '$app/paths';

// 	// Headers para proxy inverso
// 	response.headers.set('X-Frame-Options', 'DENY');
// 	response.headers.set('X-Content-Type-Options', 'nosniff');
// 	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

// 	return response;
// };

const redirectAuth: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.includes('admin')) {
		const content = event.cookies.get('logged');

		if (!content) {
			redirect(302, resolvePath('/auth/login'));
		}
	}

	return await resolve(event);
};

export const handle = sequence(redirectAuth);
