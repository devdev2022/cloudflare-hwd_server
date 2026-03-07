import { getBusinessInfo, getWeddingBusinessInfo } from './controller/commonController';
import { getStaffPictures, getWeddingStaffPictures } from './controller/aboutUsController';
import { getIntroduction, getWeddingIntroduction, getSnsImg, getWeddingSnsImg } from './controller/mainController';
import { getPictures, getWeddingPictures } from './controller/worksController';

const allowedOrigins = ['https://hwayeondang.com', 'https://c78c7283.hwd-44u.pages.dev', 'https://hwd-44u.pages.dev'];

function corsHeaders(origin: string) {
	return {
		'Access-Control-Allow-Origin': origin,
		'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		'Access-Control-Allow-Credentials': 'true',
	};
}

export default {
	async fetch(request: Request, env: any) {
		const origin = request.headers.get('Origin') || '';
		const isAllowed = allowedOrigins.includes(origin);

		if (request.method === 'OPTIONS') {
			return new Response(null, {
				status: 204,
				headers: isAllowed ? corsHeaders(origin) : {},
			});
		}

		// API 라우팅
		const url = new URL(request.url);

		const withCors = async (handler: any) => {
			const res = await handler(request, env);
			const headers = isAllowed ? corsHeaders(origin) : {};
			return new Response(res.body, {
				status: res.status,
				headers: { ...Object.fromEntries(res.headers), ...headers },
			});
		};

		if (url.pathname === '/forrest/works' && request.method === 'GET') {
			return withCors(getPictures);
		}

		if (url.pathname === '/wedding/works' && request.method === 'GET') {
			return withCors(getWeddingPictures);
		}

		const { pathname } = url;

		//common
		if (pathname === '/forrest/common/businessInfo' && request.method === 'GET') {
			return await withCors(getBusinessInfo);
		}

		if (pathname === '/wedding/common/businessInfo' && request.method === 'GET') {
			return await withCors(getWeddingBusinessInfo);
		}

		//main
		if (pathname === '/forrest/main/snsimg' && request.method === 'GET') {
			return await withCors(getSnsImg);
		}

		if (pathname === '/wedding/main/snsimg' && request.method === 'GET') {
			return await withCors(getWeddingSnsImg);
		}

		if (pathname === '/forrest/main/introduction' && request.method === 'GET') {
			return await withCors(getIntroduction);
		}

		if (pathname === '/wedding/main/introduction' && request.method === 'GET') {
			return await withCors(getWeddingIntroduction);
		}

		//aboutUs
		if (pathname === '/forrest/aboutus/pictures' && request.method === 'GET') {
			return await withCors(getStaffPictures);
		}

		if (pathname === '/wedding/aboutus/pictures' && request.method === 'GET') {
			return await withCors(getWeddingStaffPictures);
		}

		return new Response(JSON.stringify({ message: 'Not Found' }), {
			status: 404,
			headers: {
				'Content-Type': 'application/json',
				...corsHeaders,
			},
		});
	},
} satisfies ExportedHandler<Env>;
