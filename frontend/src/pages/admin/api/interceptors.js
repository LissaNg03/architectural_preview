/** @format */

import axios from "./axios";
import { getAccessToken, setAccessToken } from "../context/tokenStore";
import fetchRefresh from "../context/fetchRefresh";

axios.interceptors.request.use((config) => {
	const token = getAccessToken();

	if (token) {
		//ATTATCH THE ACCESS TOKEN
		config.headers.authorization = `Bearer ${token}`;
	}

	return config;
});

let isRefreshing = false;
let failedQueue = [];

axios.interceptors.response.use(
	(response) => response,
	async (error) => {
		//GRAB THE ORIGINAL REQUEST
		console.log("ACCESS_TOKEN OCCURED, SO REPONSE INTERCEPTOR RUNNING...");
		const originalRequest = error.config;
		if (
			(error.response?.status == 403 || error.response?.status == 401) &&
			!originalRequest._retry &&
			!originalRequest.url.includes("/refresh")
		) {
			originalRequest._retry = true;

			if (isRefreshing) {
				return new Promise((resolve) => {
					failedQueue.push(() => {
						resolve(axios(originalRequest));
					});
				});
			}

			isRefreshing = true;

			try {
				//REQUEST FOR  A NEW ACCESSTOKEN USING THE REFRESHTOKEN
				const newToken = await fetchRefresh();

				if (!newToken) {
					if (!window.location.href.includes("/login")) {
						window.location.href = "/admin/login";
					}
					return Promise.reject(error);
				}

				setAccessToken(newToken);

				originalRequest.headers.authorization = `Bearer ${newToken}`;

				failedQueue.forEach((cb) => cb());
				//AFTER THAT EMPTY THE QUEUE
				failedQueue = [];
				//ALSO SET IS REFRESHING TO FALSE
				isRefreshing = false;
				//AFTER THAT THE FIRST ALSO GET BACK RETRY WITH THE CURRENT ACCESSTOKEN
				return axios(originalRequest);
			} catch (err) {
				console.log(err);
				console.log("ERROR TO GET NEW ACCESS TOKEN");
				isRefreshing = false;
				window.location.href = "/admin/login";
				return Promise.reject(err);
			}
		}

		return Promise.reject(error);
	},
);
