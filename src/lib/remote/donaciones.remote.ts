import { query, form, command } from '$app/server';

import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

import { db, schema } from '$lib/server';
import { DonacionDTO } from '$lib/dto';
import { getDonanteID } from '$lib/remote';

export const getDonaciones = query(async () => {
	return await db.query.financia.findMany();
});

export const getDonacionById = query(DonacionDTO.ID, async (id) => {
	const donacion = await db.query.financia.findFirst({
		where: {
			id
		}
	});

	if (!donacion) {
		throw error(404, 'No se a encontrado la donación');
	}

	return donacion;
});

export const createDonacion = form(DonacionDTO.CREATE, async (data) => {
	return { success: true };

	// TODO: Mira esto, puede ser una mejora de rendimiento
	// await getDonacionById().set();
});

export const deleteDonacion = command(DonacionDTO.ID, async (id) => {
	await getDonacionById(id);

	await db.delete(schema.financia).where(eq(schema.financia.id, id));
	await getDonaciones().refresh();
});
