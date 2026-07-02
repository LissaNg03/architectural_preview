/** @format */
import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AllDesignsPage from "./pages/AllDesignsPage";
import DesignPage from "./pages/DesignPage";
import AdminLogIn from "./pages/admin/AdminLogIn";
import AdminPage from "./pages/admin/AdminPage";
import AddDesign from "./pages/admin/AddDesign";
import ViewAllDesigns from "./pages/admin/ViewAllDesigns";
import EditDesign from "./pages/admin/EditDesign";
import ProtectedRoute from "./pages/admin/context/ProtectedRoute";
import Credentials from "./pages/admin/Credentials";
export const DataContext = createContext();
const API_URL = import.meta.env.VITE_BASE_URL;
function App() {
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	const [innerHeight, setInnerHeight] = useState(window.innerHeight);
	const [scrollY, setScrollY] = useState(window.scrollY);
	const [adminData, setAdminData] = useState({});
	const [designs, SetDesigns] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`${API_URL}/api`);

				if (res.ok) {
					const data = await res.json();
					// console.log(data);
					setAdminData(() => data?.adminData[0]);
					SetDesigns(() => data?.designs);
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		// console.log(adminData);
		const favicon = document.querySelector("link[rel='shortcut icon']");

		favicon.href = adminData?.business_logo?.url;

		document.title = adminData?.business_name ?? "[Business Name]";
	}, [adminData]);

	useEffect(() => {
		function handleInnerWidth() {
			setInnerWidth(() => window.innerWidth);
		}
		function handleSrollY() {
			setScrollY(() => window.scrollY);
		}
		function handleInnerHeight() {
			setInnerHeight(() => window.innerHeight);
		}

		window.addEventListener("resize", handleInnerWidth);
		window.addEventListener("resize", handleInnerHeight);
		window.addEventListener("scroll", handleSrollY);

		return () => {
			window.removeEventListener("resize", handleInnerWidth);
			window.removeEventListener("resize", handleInnerHeight);
			window.removeEventListener("scroll", handleSrollY);
		};
	}, []);
	return (
		<DataContext.Provider
			value={{ designs, adminData, scrollY, innerHeight, innerWidth }}
		>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Homepage scrollY={scrollY} innerHeight={innerHeight} />}
					/>
					<Route
						path="/all-designs"
						element={
							<AllDesignsPage
								scrollY={scrollY}
								innerHeight={innerHeight}
								innerWidth={innerWidth}
							/>
						}
					/>
					<Route
						path="/design/:id"
						element={
							<DesignPage
								scrollY={scrollY}
								innerHeight={innerHeight}
								innerWidth={innerWidth}
							/>
						}
					/>
					<Route
						path="/admin"
						element={<Navigate to="/admin/home" replace />}
					/>
					<Route path="/admin/login" element={<AdminLogIn />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/admin/home/credentials" element={<Credentials />} />
						<Route path="/admin/home" element={<AdminPage />} />
						<Route path="/admin/home/add_design" element={<AddDesign />} />
						<Route
							path="/admin/home/edit_designs"
							element={<ViewAllDesigns />}
						/>
						<Route
							path="/admin/home/edit_designs/edit/:id"
							element={<EditDesign />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</DataContext.Provider>
	);
}

export default App;
