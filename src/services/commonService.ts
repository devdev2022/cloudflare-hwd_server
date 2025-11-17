import commonDao from '../dao/commonDao';

export async function getBusinessInfo(env: any) {
	try {
		const result = await commonDao.getBusinessInfo(env);
		return result;
	} catch (error) {
		throw new Error('GET_BUSINESS_INFO_FAILED');
	}
}

export default { getBusinessInfo };
