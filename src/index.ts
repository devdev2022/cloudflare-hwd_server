import { getBusinessInfoHandler } from './controller/commonController';
import { getStaffPictures } from './controller/aboutUsController';

export default {
	async fetch(request: Request, env: any): Promise<Response> {
		const url = new URL(request.url);
		const { pathname } = url;

		if (pathname === '/forrest/common/businessInfo' && request.method === 'GET') {
			return await getBusinessInfoHandler(request, env);
		}

		if (pathname === '/forrest/aboutus/pictures' && request.method === 'GET') {
			return await getStaffPictures(request, env);
		}

		return new Response(JSON.stringify({ message: 'Not Found' }), {
			status: 404,
			headers: { 'Content-Type': 'application/json' },
		});
	},
} satisfies ExportedHandler<Env>;
