/** @format */

import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeftCircle, FiX, FiCheck } from "react-icons/fi";
import Footer from "../../components/Footer";
import { DataContext } from "../../App";
import axios from "./api/axios";
import { setAccessToken } from "./context/tokenStore";

const PASSWORD_REGEX =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,20}$/;

export default function Credentials() {
	const navigate = useNavigate();
	const { adminData } = useContext(DataContext);

	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		oldPassword: "",
		newPassword: "",
	});

	const [formStatus, setFormStatus] = useState("Update Credentials");
	const [errMsg, setErrMsg] = useState("");
	const [passValid, setPassValid] = useState(false);
	const errMsgRef = useRef(null);
	const handleInputsChange = (e, field) => {
		setInputs((prev) => ({
			...prev,
			[field]: e.target.value,
		}));
	};

	useEffect(() => {
		if (PASSWORD_REGEX.test(inputs.newPassword)) {
			setPassValid(true);
		} else {
			setPassValid(false);
		}
	}, [inputs.newPassword]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!PASSWORD_REGEX.test(inputs.newPassword)) {
			window.scrollTo({ top: 0, behavior: "smooth" });
			return setErrMsg("New Password Must Match Requirements!");
		}

		try {
			setFormStatus("Updating...");

			const response = await axios.post("/api/admin/home/credentials", inputs);

			setFormStatus("Updated Successfully");
			setAccessToken(null);

			setTimeout(() => {
				setFormStatus("Logging out...");
				navigate("/admin/login", { replace: true });
			}, 1000);
		} catch (error) {
			console.error(error);
			console.error(error.data);
			window.scrollTo({ top: 0, behavior: "smooth" });
			if (!error.response) {
				setErrMsg("No response from server.");
			} else if (error.response.status === 400) {
				setErrMsg("Missing username, email or password.");
			} else if (error.response.status === 401) {
				setErrMsg("Incorrect Old Password!");
			} else if (error.response.status === 403) {
				setErrMsg("Access denied.");
			} else if (error.response.status >= 500) {
				setErrMsg("Server error. Please try again later.");
			} else {
				setErrMsg("Login failed.");
			}
			setFormStatus("Update Credentials");
		}
	};

	return (
		<div>
			<header className="bg-global_navy header_common">
				<FiArrowLeftCircle
					onClick={() => navigate(-1)}
					className="text-2xl cursor-pointer hover:scale-110 hover:opacity-70 duration-300 transition-all"
				/>

				<h1 className="font-bold">
					<a href="/">{adminData?.business_name ?? "[BUSINESS NAME]"}</a>
				</h1>
			</header>

			<main className="pt-32 p-8 md:p-20 min-h-[calc(100vh-200px)]">
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 max-w-3xl mx-auto"
				>
					<h1 className="font-extrabold text-3xl uppercase">
						Account Credentials
					</h1>
					<div className="flex justify-between items-center">
						<label>Username: </label>
						<span ref={errMsgRef} className="text-red-500 font-semibold">
							{errMsg}
						</span>
					</div>

					<input
						type="text"
						value={inputs.username}
						onChange={(e) => handleInputsChange(e, "username")}
						placeholder="Enter new username"
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						required
					/>

					<label>Email:</label>
					<input
						type="email"
						value={inputs.email}
						onChange={(e) => handleInputsChange(e, "email")}
						placeholder="Enter new email"
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						required
					/>

					<label>Current Password:</label>
					<input
						type="password"
						value={inputs.oldPassword}
						onChange={(e) => handleInputsChange(e, "oldPassword")}
						placeholder="Enter current password"
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						required
					/>

					<div className="flex justify-between items-center">
						<label>New Password:</label>
						<span>
							{passValid ? (
								<FiCheck className="text-green-500" />
							) : (
								<FiX className="text-red-500" />
							)}
						</span>
					</div>

					<input
						type="password"
						value={inputs.newPassword}
						onChange={(e) => handleInputsChange(e, "newPassword")}
						minLength={8}
						maxLength={20}
						pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,20}$"
						title="Password must be 8-20 characters and include uppercase, lowercase, number and special character."
						placeholder="Enter new password"
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						required
					/>
					<p className="text-sm text-gray-500">
						Password must contain at least:
						<br />
						• 8-20 characters
						<br />
						• 1 uppercase letter
						<br />
						• 1 lowercase letter
						<br />
						• 1 number
						<br />• 1 special character
					</p>

					<button
						type="submit"
						className={`transition-all duration-300 mt-4 text-white min-w-48 mx-auto w-fit px-8 py-3 rounded-lg font-semibold hover:opacity-90 ${
							formStatus.toLowerCase() === "updated successfully"
								? "bg-green-500"
								: "bg-global_navy"
						}`}
					>
						{formStatus}
					</button>
				</form>
			</main>

			<Footer />
		</div>
	);
}
