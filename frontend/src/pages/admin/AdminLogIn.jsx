/** @format */

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setAccessToken } from "./context/tokenStore";
import { DataContext } from "../../App";
export default function AdminLogIn() {
	const { adminData } = useContext(DataContext);
	const navigate = useNavigate();
	const [errMsg, setErrMsg] = useState("");
	const [showPass, setShowPass] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		console.log(formData.get("username"));

		try {
			const response = await axios.post("/api/admin/login", {
				username: formData.get("username"),
				email: formData.get("email"),
				password: formData.get("password"),
			});

			const accessToken = response.data.accessToken;

			setAccessToken(accessToken);

			navigate("/admin/home", { replace: true });

			console.log("accessToken", accessToken);
			console.log(response);
		} catch (error) {
			console.error(error);
			console.error(error.data);

			if (!error.response) {
				setErrMsg("No response from server!");
			} else if (error.response.status === 400) {
				setErrMsg("Missing username, email or password!");
			} else if (error.response.status === 401) {
				setErrMsg("Invalid credentials!");
			} else if (error.response.status === 403) {
				setErrMsg("Access denied!");
			} else if (error.response.status >= 500) {
				setErrMsg("Server error. Please try again later!");
			} else {
				setErrMsg("Login failed!");
			}
		}
	};

	return (
		<div className="text-white pt-24">
			<header className="bg-global_navy header_common">
				<h1>Admin Log In</h1>
				<div>{adminData?.business_name ?? "[BUSINESS NAME]"}</div>
			</header>

			<main className=" flex justify-center items-center h-[calc(100vh-200px)]">
				<form
					className="flex text-global_navy flex-col mx-auto w-fit gap-2 min-w-96"
					onSubmit={handleSubmit}
				>
					<h1 className="text-global_navy font-extrabold text-3xl uppercase text-center">
						Log In
					</h1>
					<label for="username">
						Username:{" "}
						<span className={`float-end text-red-600 ${!errMsg && "hidden"} `}>
							{errMsg}
						</span>
					</label>
					<input
						name="username"
						className="border text-global_navy border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						type="text"
						placeholder="admin"
						required
					/>
					<label for="email">Email: </label>
					<input
						className="border text-global_navy border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						type="email"
						name="email"
						id=""
						placeholder="admin@gmail.com"
						required
					/>

					<div className="flex relative flex-col">
						<label for="password">Password: </label>
						<input
							name="password"
							className="border  text-global_navy border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
							type={showPass ? "text" : "password"}
							placeholder="password"
							required
						/>

						<div
							onClick={() => setShowPass(!showPass)}
							className="absolute select-none cursor-pointer right-3 top-1/2"
						>
							{showPass ? "🙈" : "👁️"}
						</div>
					</div>

					<button
						className="transition-all bg-global_navy duration-300 mt-4 text-white min-w-48 mx-auto w-fit px-8 py-3 rounded-lg font-semibold hover:opacity-90"
						type="submit"
					>
						Log In
					</button>
				</form>
			</main>
		</div>
	);
}
