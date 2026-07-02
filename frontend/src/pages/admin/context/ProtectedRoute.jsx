/** @format */

import { Navigate, Outlet } from "react-router-dom";
import { getAccessToken, setAccessToken } from "./tokenStore";
import React, { useState, useEffect } from "react";
import Loading from "../../../components/Loading";
import fetchRefresh from "./fetchRefresh";
const ProtectedRoute = () => {
	const [loading, setLoading] = useState(true);
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		const checkAuth = async () => {
			let token = getAccessToken();

			if (!token) {
				token = await fetchRefresh();
				setAccessToken(token);
			}

			setIsAuth(token);
			setLoading(false);
		};

		checkAuth();
	}, []);

	console.log("PAGE REDIRECTING...");
	const token = getAccessToken();
	console.log("token, ", token);

	if (loading) return null;
	return token ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
