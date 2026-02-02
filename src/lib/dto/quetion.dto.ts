import { integer, number, pipe, string, transform, union } from 'valibot';

export const ID = pipe(
	union([string(), number()]),
	transform((value) => Number(value)),
	number(),
	integer()
);

export const QuestionDTO = {
	ID
};
