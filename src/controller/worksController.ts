import worksService from '../services/worksService';

export async function getPictures(req: Request, env: any) {
	try {
		const url = new URL(req.url);
		const searchParams = url.searchParams;

		const page = Number(searchParams.get('page'));
		const category = searchParams.get('category');
		const subMenu = Number(searchParams.get('subMenu'));
		const limit = Number(searchParams.get('limit'));

		const data = await worksService.getPictures(env, Number(page), String(category), Number(subMenu), Number(limit));

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error: any) {
		return new Response(
			JSON.stringify({
				message: error instanceof Error ? error.message : 'Internal Server Error',
			}),
			{ status: 500, headers: { 'Content-Type': 'application/json' } }
		);
	}
}
