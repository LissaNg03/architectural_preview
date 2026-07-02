/** @format */

let accessToken = null;

export const getAccessToken = () => accessToken;

export const setAccessToken = (newToken) => {
	accessToken = newToken;
};
