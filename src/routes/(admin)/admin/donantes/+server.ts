import type { RequestHandler } from './$types';
import data from './data.xml?raw';

export const GET: RequestHandler = () => {
	return new Response(data, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};
