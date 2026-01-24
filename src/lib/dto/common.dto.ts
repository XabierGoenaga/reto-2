import {
	integer,
	maxLength,
	maxValue,
	minValue,
	number,
	pipe,
	string,
	transform,
	union
} from 'valibot';

const ID = pipe(
	union([string(), number()]),
	transform((v) => Number(v)),
	number(),
	integer()
);

const Pagination = {
	page: pipe(number(), integer(), minValue(1), maxValue(100)),
	offset: pipe(number(), integer(), minValue(1), maxValue(100)),
	limit: pipe(number(), integer(), minValue(1), maxValue(100))
};

const Search = pipe(string(), maxLength(30));

export const CommonDTO = {
	ID,
	Pagination,
	Search
};
