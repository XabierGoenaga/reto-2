import { command, form, query } from '$app/server';
import { AlmacenDTO } from '$lib/dto';
import { schema } from '$lib/server';
import { db } from '$lib/server/db';
import { error, invalid } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const getAlmacen = query(async () => {
	return await db.query.almacen.findMany();
});

export const getAlmacenByID = query(AlmacenDTO.CODIGO, async (codigo) => {
	const almacen = await db.query.almacen.findFirst({
		where: {
			codigo
		}
	});

	if (!almacen) {
		throw error(404);
	}

	return almacen;
});

export const createAlmacen = form(AlmacenDTO.CREATE, async (data, issue) => {
	const exits = await getAlmacenByID(data.codigo);

	if (exits) {
		invalid(issue.codigo('Este codigo ya existe'));
	}

	await db.insert(schema.almacen).values(data);
	await getAlmacen().refresh();
});

export const deleteAlmacen = command(AlmacenDTO.CODIGO, async (codigo) => {
	const almacen = await getAlmacenByID(codigo);

	await db.delete(schema.almacen).where(eq(schema.almacen.codigo, almacen.codigo));
	await getAlmacen().refresh();
});
