import mainDao from '../dao/mainDao';

const getPictures = async (env: any) => {
	try {
		const result = await mainDao.getIntroduction(env);
		return result;
	} catch (error) {
		throw new Error('GET_PICTURES_FAILED');
	}
};

const getWeddingPictures = async (env: any) => {
	try {
		const result = await mainDao.getWeddingIntroduction(env);
		return result;
	} catch (error) {
		throw new Error('GET_PICTURES_FAILED');
	}
};

const getSnsImg = async (env: any) => {
	try {
		const result = await mainDao.getSnsImg(env);
		return result;
	} catch (error) {
		throw new Error('GET_SNS_FAILED');
	}
};

const getWeddingSnsImg = async (env: any) => {
	try {
		const result = await mainDao.getWeddingSnsImg(env);
		return result;
	} catch (error) {
		throw new Error('GET_SNS_FAILED');
	}
};

export default { getPictures, getWeddingPictures, getSnsImg, getWeddingSnsImg };
