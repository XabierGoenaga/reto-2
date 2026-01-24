import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param: string | number): boolean => {
	const converted = Number(param);

	if (!Number.isInteger(converted)) {
		return false;
	}

	return true;
};
