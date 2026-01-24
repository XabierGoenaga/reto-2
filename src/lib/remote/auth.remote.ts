import { getRequestEvent, query } from '$app/server';

export const getDonanteID = query(() => {
	const { cookies } = getRequestEvent();

	const id = cookies.get('ID_DONANTE');

	return id;
});
