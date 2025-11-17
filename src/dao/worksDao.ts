const getWorksImg = async (env: any, page: number, category: string, subMenu: number, limit: number) => {
	try {
		const offset = (page - 1) * limit;
		const subMenuCondition = subMenu === 1 ? '' : 'AND sub_menu = ?';

		const countQuery = `SELECT COUNT(*) AS totalCount
                            FROM Works
                            WHERE category = ?
                            ${subMenuCondition}            
                           `;

		const countParams = subMenu === 1 ? [category] : [category, subMenu];

		const countResult = await env.DB.prepare(countQuery)
			.bind(...countParams)
			.first();

		if (!countResult || Number(countResult.totalCount) === 0) {
			throw new Error('NO_DATA_EXIST');
		}

		const dataQuery = `SELECT
                            id,
                            category,
                            name,
                            link,
                            type,
                            created_at
                        FROM Works
                        WHERE category = ?
                        ${subMenuCondition}
                        ORDER BY created_at DESC
                        LIMIT ? OFFSET ?
                        `;

		const dataParams = subMenu === 1 ? [category, limit, offset] : [category, subMenu, limit, offset];

		const dataResult = await env.DB.prepare(dataQuery)
			.bind(...dataParams)
			.all();

		return {
			data: dataResult.results,
			totalCount: Number(countResult?.totalCount ?? 0),
		};
	} catch (err: any) {
		if (err.message === 'NO_DATA_EXIST') {
			throw err;
		}

		throw new Error('DB_ERROR');
	}
};

export default { getWorksImg };
