import {
	email,
	length,
	maxLength,
	minLength,
	object,
	optional,
	picklist,
	pipe,
	regex,
	string
} from 'valibot';

import { CommonDTO } from '$lib/dto';
import { donationTypes } from '$lib/constant';

const ID = CommonDTO.ID;
const PAGINATION = object({});
const SEARCH = object({});
const CREATE_SKELETON = {
	name: pipe(
		string(),
		minLength(3, 'Se tienen que introduccir mas de 3 caracteres.'),
		maxLength(30, 'No se pueden introduccir mas de 30 caracteres.')
	),
	email: pipe(string(), email('El email no es valido.')),
	type: picklist(donationTypes, 'Selecciona un valor valido'),
	contacto: pipe(
		string(),
		regex(/^\d+$/, 'El teléfono solo puede contener números'),
		length(9, 'El numero de teléfono tiene que tener 9 digitos')
	)
};
const CREATE = object(CREATE_SKELETON);
const DELETE = CommonDTO.ID;

export const DonanteDTO = {
	ID,
	PAGINATION,
	SEARCH,
	CREATE,
	CREATE_SKELETON,
	DELETE
};
