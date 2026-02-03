import type { RequestHandler } from './$types';
import xsdong from './xsdong.xsd?raw';

export const GET: RequestHandler = () => {
	return new Response(xsdong, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};
