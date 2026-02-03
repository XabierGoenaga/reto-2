import { object, pipe, string, email, minLength } from 'valibot';

const LOGIN = object({
	email: pipe(string(), email('Tiene que ser un email valido')),
	_password: pipe(string(), minLength(3, 'Como minimo tiene que tener 3 caracteres.'))
});

export const AuthDTO = {
	LOGIN
};
