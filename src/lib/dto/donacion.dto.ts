import {
	integer,
	length,
	minValue,
	number,
	object,
	picklist,
	pipe,
	string,
	transform
} from 'valibot';

import { CommonDTO, DonanteDTO } from '$lib/dto';
import { donationFrequency } from '$lib/constant';

const ID = CommonDTO.ID;
const PAGINATION = object({
	donacion_page: CommonDTO.Pagination.page,
	donacion_offset: CommonDTO.Pagination.offset,
	donacion_limit: CommonDTO.Pagination.limit
});
const SEARCH = object({
	donation_q: CommonDTO.Search
});
const CREATE = object({
	...DonanteDTO.CREATE_SKELETON,
	frecuencia: picklist(donationFrequency, 'Selecciona un valor valido.'),
	cantidad: pipe(
		number('El numero introduccido no es valido.'),
		integer('Tiene que ser un numero entero.'),
		minValue(1, 'El valor minimo es 1.')
	),
	_iban: pipe(
		string('El IBAN introduccido no es valido.'),
		length(24, 'El IBAN introduccido no es valido.')
	)
});
const DELETE = CommonDTO.ID;

export const DonacionDTO = {
	ID,
	PAGINATION,
	SEARCH,
	CREATE,
	DELETE
};
