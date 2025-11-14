import mainService from '../services/mainService';

export async function getIntroduction(_req: Request, env: any) {
	try {
		const data = await mainService.getPictures(env);
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

export async function getSnsImg(_req: Request, env: any) {
	try {
		const data = await mainService.getSnsImg(env);
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
