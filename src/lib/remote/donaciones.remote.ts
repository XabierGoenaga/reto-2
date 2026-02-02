import { query, form, command } from '$app/server';

import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

import { db, schema } from '$lib/server';
import { DonacionDTO } from '$lib/dto';

export const getDonaciones = query(async () => {
	return await db.query.financia.findMany({
		with: {
			donante: true
		}
	});
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
	try {
		const donante = await db
			.insert(schema.donante)
			.values({
				name: data.name,
				contacto: data.contacto,
				type: data.type === 'individual' ? 'Persona' : 'Empresa',
				direccion: ''
			})
			.returning();

		await db.insert(schema.financia).values({
			ID_DONANTE: donante[0].id,
			ID_PROYECTO: donante[0].id,
			tipo: data.frecuencia as any,
			procesada: false,
			iban: data._iban,
			cantidad: data.cantidad
		});
	} catch (_) {
		throw error(500, 'No se a podido realizar la petición');
	}

	return { success: true };

	// TODO: Mira esto, puede ser una mejora de rendimiento
	// await getDonacionById().set();
});

export const toggleStateDonation = command(DonacionDTO.ID, async (id) => {
	const donacion = await getDonacionById(id);

	try {
		await db
			.update(schema.financia)
			.set({ procesada: !donacion.procesada })
			.where(eq(schema.financia.id, id));
	} catch (_) {
		throw error(500, 'No se a podido completar la operación');
	}

	await getDonaciones().refresh();

	return { success: true };
});

export const deleteDonacion = command(DonacionDTO.ID, async (id) => {
	await getDonacionById(id);

	await db.delete(schema.financia).where(eq(schema.financia.id, id));
	await getDonaciones().refresh();
});
