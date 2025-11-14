import { getBusinessInfoHandler } from './controller/commonController';
import { getStaffPictures } from './controller/aboutUsController';
import { getIntroduction, getSnsImg } from './controller/mainController';

export default {
	async fetch(request: Request, env: any): Promise<Response> {
		const url = new URL(request.url);
		const { pathname } = url;

		//common
		if (pathname === '/forrest/common/businessInfo' && request.method === 'GET') {
			return await getBusinessInfoHandler(request, env);
		}

		if (pathname === '/forrest/aboutus/pictures' && request.method === 'GET') {
			return await getStaffPictures(request, env);
		}

		//main
		if (pathname === '/forrest/aboutus/main/introduction' && request.method === 'GET') {
			return await getIntroduction(request, env);
		}

		if (pathname === '/forrest/aboutus/main/snsimg' && request.method === 'GET') {
			return await getSnsImg(request, env);
		}

		return new Response(JSON.stringify({ message: 'Not Found' }), {
			status: 404,
			headers: { 'Content-Type': 'application/json' },
		});
	},
} satisfies ExportedHandler<Env>;
