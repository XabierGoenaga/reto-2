import { object, pipe, string, length, maxLength } from 'valibot';

import { CommonDTO } from '$lib/dto';

const CODIGO = pipe(string(), length(5));

const PAGINATION = object({
	almacen_page: CommonDTO.Pagination.page,
	almacen_offset: CommonDTO.Pagination.offset,
	almacen_limit: CommonDTO.Pagination.limit
});

const SEARCH = object({ q: pipe(string()) });

const CREATE = object({
	codigo: CODIGO,
	tamano: pipe(string(), length(8)),
	ubicacion: pipe(string(), maxLength(8))
});

const UPDATE = object({
	codigo: CODIGO,
	tamano: pipe(string(), length(8)),
	ubicacion: pipe(string(), maxLength(8))
});

const DELETE = CODIGO;

export const AlmacenDTO = {
	CODIGO,
	PAGINATION,
	SEARCH,
	CREATE,
	UPDATE,
	DELETE
};
