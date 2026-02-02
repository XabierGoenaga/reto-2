import { error } from '@sveltejs/kit';

import { form } from '$app/server';

import { ContactDTO } from '$lib/dto';
import { db, schema } from '$lib/server';

export const newContactMessage = form(ContactDTO.CREATE, async (data, issue) => {
	try {
		await db.insert(schema.questions).values({
			full_name: data.full_name,
			email: data.email,
			phone: data.phone,
			affair: data.affair,
			message: data.message,
			acceptedNotifications: data.conditions
		});
	} catch (_) {
		throw error(500, 'No se a podido completar el formulario');
	}

	return { success: true };
});
