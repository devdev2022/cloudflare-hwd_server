import aboutUsDao from '../dao/aboutUsDao';

export async function getStaffPictures(env: any) {
	try {
		const result = await aboutUsDao.getStaffPictures(env);
		return result;
	} catch (error) {
		throw new Error('GET_BUSINESS_INFO_FAILED');
	}
}

export default { getStaffPictures };
