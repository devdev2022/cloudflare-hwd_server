export async function getBusinessInfoDao(env: any) {
	try {
		const result = await env.DB.prepare(
			`SELECT 
         id,
         ceo_name,
         business_name,
         business_number,
         business_address,
         fax_number,
         email_address,
         instagram_link,
         blog_link,
         contact_number,
         phone_number,
         register_date
       FROM BusinessInfo`
		).all();

		return result.results;
	} catch (err) {
		console.error('DB_ERROR:', err);
		throw new Error('DB_ERROR');
	}
}

export default { getBusinessInfoDao };
