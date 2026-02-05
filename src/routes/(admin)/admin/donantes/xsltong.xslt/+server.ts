import type { RequestHandler } from './$types';
import xsltong from './xsltong.xslt?raw';

export const GET: RequestHandler = () => {
	return new Response(xsltong, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};
