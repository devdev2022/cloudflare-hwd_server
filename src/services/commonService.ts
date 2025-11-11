import { getBusinessInfoDao } from '../dao/commonDao';

export async function getBusinessInfoService(env: any) {
	try {
		const result = await getBusinessInfoDao(env);
		return result;
	} catch (error) {
		throw new Error('GET_BUSINESS_INFO_FAILED');
	}
}
