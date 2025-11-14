const getIntroduction = async (env: any) => {
	try {
		const result = await env.DB.prepare(
			`SELECT 
        id,
        content,
        thumbnail,
        cover_img,
        created_at
      FROM Introduction`
		).all();

		return result.results;
	} catch (err) {
		console.error('DB_ERROR:', err);
		throw new Error('DB_ERROR');
	}
};

const getSnsImg = async (env: any) => {
	try {
		const result = await env.DB.prepare(
			`SELECT 
        id,
        link,
        created_at
      FROM SnsImg`
		).all();

		return result.results;
	} catch (err) {
		console.error('DB_ERROR:', err);
		throw new Error('DB_ERROR');
	}
};

export default { getIntroduction, getSnsImg };
