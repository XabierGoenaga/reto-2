import type { RequestHandler } from './$types';
import datosong from './datosong.xml?raw';

export const GET: RequestHandler = () => {
	return new Response(datosong, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};
