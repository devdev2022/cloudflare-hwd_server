export async function getStaffPictures(env: any) {
	try {
		const result = await env.DB.prepare(
			`SELECT 
         id,
         name,
         status,
         link
       FROM Staff`
		).all();

		return result.results;
	} catch (err) {
		console.error('DB_ERROR:', err);
		throw new Error('DB_ERROR');
	}
}

export default { getStaffPictures };
