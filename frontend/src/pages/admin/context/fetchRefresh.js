/** @format */

import axios from "axios";
import { setAccessToken } from "./tokenStore";
const API_URL = import.meta.env.VITE_BASE_URL;
const fetchRefresh = async () => {
	try {
		// console.log("REQUESTING NEW ACCESS TOKEN: ");
		const response = await axios.get(`${API_URL}/api/refresh`, {
			withCredentials: true,
		});

		const newAccessToken = response.data?.newAccessToken;
		// console.log("NEW ACCESS TOKEN: ", newAccessToken);
		setAccessToken(newAccessToken);
		// console.log("GOT NEW ACCESS TOKEN");
		return newAccessToken;
	} catch (error) {
		console.log("FAILED TO GET NEW ACCESS TOKEN");
		console.log(error);
		console.log(error?.response?.data);
		return null;
	}
};

export default fetchRefresh;
