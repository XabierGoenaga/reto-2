import { query, form, command } from '$app/server';
import { DonanteDTO } from '$lib/dto';
import { db, schema } from '$lib/server';
import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const getDonantes = query(async () => {
	return await db.query.donante.findMany();
});

export const getDonanteById = query(DonanteDTO.ID, async (id) => {
	const donante = await db.query.donante.findFirst({
		where: {
			id
		}
	});

	if (!donante) {
		throw error(404, 'No se a encontrado la donación');
	}

	return donante;
});

export const createDonante = form(DonanteDTO.CREATE, async (data, issue) => {
	await db.insert(schema.donante).values(data);

	await getDonantes().refresh();
});

export const deleteDonante = command(DonanteDTO.ID, async (id) => {
	await getDonanteById(id);

	await db.delete(schema.donante).where(eq(schema.donante.id, id));

	await getDonantes().refresh();
});
