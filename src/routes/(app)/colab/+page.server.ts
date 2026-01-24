import { fail, type Actions } from '@sveltejs/kit';
import { flatten, safeParse } from 'valibot';

import { DonacionDTO } from '$lib/dto';
import { db } from '$lib/server';

export const actions: Actions = {
	crearDonacion: async ({ request }) => {
		console.clear();
		const data = await request.formData();

		const json_data = {
			name: data.get('name'),
			email: data.get('email'),
			type: data.get('type'),
			contacto: data.get('contacto'),
			frecuencia: data.get('frecuencia'),
			cantidad: data.get('cantidad'),
			iban: data.get('iban')
		};

		const result = safeParse(DonacionDTO.CREATE, json_data);

		if (!result.success) {
			// console.log(flatten(result.issues).nested as unknown as string[]);

			return fail(400, {
				valid: false,
				issues: flatten(result.issues).nested as unknown as { [key: string]: string[] }
			});
		}

		// db.query.financia

		return { success: true, issues: [] };
	}
};
