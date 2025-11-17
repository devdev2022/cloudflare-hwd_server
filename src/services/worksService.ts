import worksDao from '../dao/worksDao';

const getPictures = async (env: any, page: number, category: string, subMenu: number, limit: number) => {
	try {
		const result = await worksDao.getWorksImg(env, page, category, subMenu, limit);
		return result;
	} catch (error: any) {
		throw new Error('GET_PICTURES_FAILED');
	}
};

export default { getPictures };
