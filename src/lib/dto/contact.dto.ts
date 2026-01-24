import {
	boolean,
	email,
	length,
	literal,
	minLength,
	object,
	optional,
	picklist,
	pipe,
	regex,
	string
} from 'valibot';

import { contactCategories } from '$lib/constant';

const CREATE = object({
	full_name: pipe(
		string('El nombre es requerido'),
		minLength(3, 'El nombre debe tener al menos 3 caracteres')
	),
	email: pipe(
		string('El correo electrónico es requerido'),
		email('Introduce un correo electrónico válido')
	),
	phone: pipe(
		string('El teléfono es requerido'),
		regex(/^\d+$/, 'El teléfono solo puede contener números'),
		length(9, 'El teléfono debe tener exactamente 9 dígitos')
	),
	affair: picklist(contactCategories, 'Selecciona un asunto válido'),
	message: pipe(
		string('El mensaje es requerido'),
		minLength(15, 'El mensaje debe tener al menos 15 caracteres')
	),
	conditions: optional(
		pipe(boolean(), literal(true, 'Debes aceptar los términos y condiciones')),
		false
	)
});

export const ContactDTO = {
	CREATE
};
