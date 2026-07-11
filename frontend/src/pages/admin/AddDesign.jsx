/** @format */

import React, { useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import { useState } from "react";
import { DataContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";
import { getAccessToken } from "./context/tokenStore";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
import axios from "./api/axios";
import fetchDesign from "../../components/fetchDesign";
const API_URL = import.meta.env.VITE_BASE_URL;
export default function AddDesign({ business_name, existing, id }) {
	const { designs, adminData } = useContext(DataContext);

	const navigate = useNavigate();
	const [existingDesign, setExistingDesign] = useState(null);

	useEffect(() => {
		if (existing) {
			getDesign();
			async function getDesign() {
				const _design = await fetchDesign(id);
				setExistingDesign(_design);
			}
		}
	}, [id]);

	const [formStatus, setFormStatus] = useState(
		!existingDesign ? "Upload Design" : "Upload Changes",
	);
	const [files, setFiles] = useState([
		{ name: "floor_plans", file: [] },
		{ name: "video", file: [] },
		{ name: "thumbnail", file: [] },
		{ name: "front_view", file: [] },
		{ name: "left_view", file: [] },
		{ name: "right_view", file: [] },
		{ name: "back_view", file: [] },
	]);
	const [inputs, setInputs] = useState({});

	useEffect(() => {
		setInputs({
			name: existingDesign?.name ?? "",
			price: existingDesign?.price ?? "",
			category: existingDesign?.category ?? "1-4 rooms",
			length: existingDesign?.quotation?.length ?? 0,
			width: existingDesign?.quotation?.width ?? 0,
			no_of_rooms: existingDesign?.quotation?.no_of_rooms ?? 0,
			no_of_bathrooms: existingDesign?.quotation?.no_of_bathrooms ?? 0,
			porch: existingDesign?.quotation?.porch ?? false,
			balcony: existingDesign?.quotation?.balcony ?? false,
			garage: existingDesign?.quotation?.garage ?? false,
			description: existingDesign?.quotation?.description ?? "",
		});
	}, [existingDesign]);

	function handleChange(e, name) {
		const newFiles = Array.from(e.target.files);

		if (name === "floor_plans" && newFiles.length > 2) {
			alert("CANNOT UPLOAD MORE THAN 2 FLOOR PLANS");
			e.target.value = "";
			return;
		}

		setFiles((prev) =>
			prev.map((item) =>
				item.name === name ? { ...item, file: newFiles } : item,
			),
		);
	}

	function handleInputsChange(e, input) {
		if (e.target.type == "checkbox") {
			setInputs((prev) => {
				return { ...prev, [input]: e.target.checked };
			});
			return;
		}

		setInputs((prev) => {
			return { ...prev, [input]: e.target.value };
		});
	}

	const uploadWithProgress = async (
		file,
		resourceType,
		label,
		current,
		total,
	) => {
		setFormStatus(`Uploading ${label} (${current}/${total})...`);

		return uploadToCloudinary(false, file, resourceType);
	};

	async function uploadImg(e) {
		e.preventDefault();

		try {
			setFormStatus("Verifying...");

			const verifyToken = await axios.get(API_URL + "/api/admin/verify");

			if (!verifyToken?.data?.valid) {
				setFormStatus("Unauthorized");
				return;
			}

			const getFile = (name) => files.find((f) => f.name === name)?.file ?? [];

			const totalUploads = 8;

			const thumbnail = getFile("thumbnail")[0]
				? await uploadWithProgress(
						getFile("thumbnail")[0],
						"image",
						"Thumbnail",
						1,
						totalUploads,
					)
				: null;

			const video = getFile("video")[0]
				? await uploadWithProgress(
						getFile("video")[0],
						"video",
						"Video",
						2,
						totalUploads,
					)
				: null;

			const floorPlans = await Promise.all(
				getFile("floor_plans").map((file, index) =>
					uploadWithProgress(
						file,
						"image",
						`Floor Plan ${index + 1}`,
						3 + index,
						totalUploads,
					),
				),
			);

			const frontView = getFile("front_view")[0]
				? await uploadWithProgress(
						getFile("front_view")[0],
						"image",
						"Front View",
						5,
						totalUploads,
					)
				: null;

			const leftView = getFile("left_view")[0]
				? await uploadWithProgress(
						getFile("left_view")[0],
						"image",
						"Left View",
						6,
						totalUploads,
					)
				: null;

			const rightView = getFile("right_view")[0]
				? await uploadWithProgress(
						getFile("right_view")[0],
						"image",
						"Right View",
						7,
						totalUploads,
					)
				: null;

			const backView = getFile("back_view")[0]
				? await uploadWithProgress(
						getFile("back_view")[0],
						"image",
						"Back View",
						8,
						totalUploads,
					)
				: null;

			setFormStatus("Saving Design...");

			const payload = {
				...inputs,

				video,
				thumbnail,

				floor_plans: floorPlans,

				images: [
					frontView && {
						title: "front_view",
						...frontView,
					},

					leftView && {
						title: "left_view",
						...leftView,
					},

					rightView && {
						title: "right_view",
						...rightView,
					},

					backView && {
						title: "back_view",
						...backView,
					},
				].filter(Boolean),
			};

			const response = await fetch(
				existingDesign
					? `${API_URL}/api/admin/home/edit_designs/edit/${existingDesign._id}`
					: `${API_URL}/api/admin/home/add_design`,
				{
					method: existingDesign ? "PUT" : "POST",

					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${getAccessToken()}`,
					},

					body: JSON.stringify(payload),

					credentials: "include",
				},
			);

			const result = await response.json();

			setFormStatus(result.message);

			setTimeout(() => {
				setFormStatus(existingDesign ? "Upload Changes" : "Upload Design");
			}, 2000);
		} catch (err) {
			console.error(err);
			console.error(err?.response?.data);
			console.error(err?.response);

			setFormStatus("Upload Failed");

			setTimeout(() => {
				setFormStatus(existingDesign ? "Upload Changes" : "Upload Design");
			}, 2000);
		}
	}
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
			<main className=" pt-32 p-8 md:p-20  min-h-[calc(100vh-200px)]">
				<div>
					<h2>DESIGN PREVIEW:</h2>
					<div></div>
				</div>
				<form
					action="/api/admin/home/add_design"
					encType="multipart/form-data"
					className="flex flex-col gap-2"
					onSubmit={uploadImg}
				>
					<h1 className="font-extrabold text-3xl uppercase">DESIGN DATA:</h1>
					<label htmlFor="">Design Name:</label>
					<input
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						type="text"
						value={inputs?.name ?? ""}
						placeholder="4 rooms modern luxury house"
						onChange={(e) => handleInputsChange(e, "name")}
						required
					/>
					<label htmlFor="">Estimated Price:</label>
					<input
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						type="number"
						value={inputs?.price ?? ""}
						placeholder="99,000,00"
						onChange={(e) => handleInputsChange(e, "price")}
						required
					/>
					<label htmlFor="category">Design Category:</label>
					<select
						onChange={(e) => handleInputsChange(e, "category")}
						name="category"
						id="category"
						value={inputs?.category ?? ""}
						className="w-fit border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						required
					>
						<option selected value="1-4 rooms">
							1-4 rooms
						</option>
						<option value="4+ rooms">4+ rooms</option>
						<option value="mansions">mansions</option>
					</select>

					<div className="flex flex-col gap-2">
						<h2>Quotation:</h2>
						<label htmlFor="">Square Meters:</label>
						<label htmlFor="">Length (meters):</label>
						<input
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
							type="number"
							value={inputs?.length ?? ""}
							placeholder="120.89m2"
							onChange={(e) => handleInputsChange(e, "length")}
							required
						/>
						<br />
						<label htmlFor="">Width (meters):</label>
						<input
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
							type="number"
							value={inputs?.width ?? ""}
							placeholder="50.89m2"
							onChange={(e) => handleInputsChange(e, "width")}
							required
						/>
						<label htmlFor="">Number of Rooms: </label>
						<input
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 w-fit"
							type="number"
							min={1}
							name=""
							id=""
							value={inputs?.no_of_rooms ?? ""}
							placeholder="1"
							onChange={(e) => handleInputsChange(e, "no_of_rooms")}
							required
						/>
						<label htmlFor="">Number of Bathrooms: </label>
						<input
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 w-fit"
							type="number"
							min={1}
							name=""
							id=""
							value={inputs?.no_of_bathrooms ?? ""}
							placeholder="1"
							onChange={(e) => handleInputsChange(e, "no_of_bathrooms")}
							required
						/>
						<div className="flex flex-col items-start gap-2">
							<div>
								<label htmlFor="garage">Garage: </label>
								<input
									onChange={(e) => handleInputsChange(e, "garage")}
									type="checkbox"
									name="garage"
									id="garage"
									checked={inputs?.garage}
								/>
							</div>
							<div>
								<label htmlFor="porch">Porch: </label>
								<input
									onChange={(e) => handleInputsChange(e, "porch")}
									type="checkbox"
									name="porch"
									id="porch"
									checked={inputs?.porch}
								/>
							</div>
							<div>
								<label htmlFor="balcony">Balcony: </label>
								<input
									onChange={(e) => handleInputsChange(e, "balcony")}
									type="checkbox"
									name="balcony"
									id="balcony"
									checked={inputs?.balcony}
								/>
							</div>
						</div>
					</div>
					<label htmlFor="">Description: </label>
					<textarea
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 resize-none"
						name=""
						id=""
						value={inputs?.description}
						placeholder="Some text..."
						maxLength={200}
						onChange={(e) => handleInputsChange(e, "description")}
						required
					></textarea>

					<label htmlFor="">Design Floor Plans:</label>

					<input
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						type="file"
						name="image"
						onChange={(e) => handleChange(e, "floor_plans")}
						multiple
						accept="image/*"
						required={!existingDesign}
					/>

					<label htmlFor="">Design Video: </label>
					<input
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						type="file"
						name="image"
						accept="video/*"
						onChange={(e) => handleChange(e, "video")}
						required={!existingDesign}
					/>
					<label htmlFor="">Design Thumbnail: </label>
					<input
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						type="file"
						name="image"
						onChange={(e) => handleChange(e, "thumbnail")}
						required={!existingDesign}
						accept="image/*"
					/>
					<div className="flex flex-col">
						<h2 className="text-xl font-bold">DESIGN VIEW IMAGES:</h2>
						<label htmlFor="">FRONT VIEW: </label>
						<input
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
							type="file"
							name="image"
							onChange={(e) => handleChange(e, "front_view")}
							required={!existingDesign}
							accept="image/*"
						/>
						<label htmlFor="">LEFT-SIDE VIEW: </label>
						<input
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
							type="file"
							name="image"
							onChange={(e) => handleChange(e, "left_view")}
							required={!existingDesign}
							accept="image/*"
						/>
						<label htmlFor="">RIGHT VIEW: </label>
						<input
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
							type="file"
							name="image"
							onChange={(e) => handleChange(e, "right_view")}
							required={!existingDesign}
							accept="image/*"
						/>
						<label htmlFor="">BACK VIEW: </label>
						<input
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
							type="file"
							name="image"
							onChange={(e) => handleChange(e, "back_view")}
							required={!existingDesign}
							accept="image/*"
						/>
					</div>

					<button
						className={`transition-all bg-global_navy duration-300 mt-4 text-white min-w-48 mx-auto w-fit px-8 py-3 rounded-lg font-semibold hover:opacity-90 ${formStatus.toLowerCase() == "uploaded successfully" ? "bg-green-500" : "bg-global_navy"} `}
						type="submit"
					>
						{formStatus}
					</button>
				</form>
			</main>
			<Footer />
		</div>
	);
}
