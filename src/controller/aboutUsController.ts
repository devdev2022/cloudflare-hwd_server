import aboutService from '../services/aboutusService';

export async function getStaffPictures(_req: Request, env: any) {
	try {
		const data = await aboutService.getStaffPictures(env);
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
