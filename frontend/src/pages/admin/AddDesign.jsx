/** @format */

import React, { useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import { useState } from "react";
import { DataContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";
const API_URL = import.meta.env.VITE_BASE_URL;
export default function AddDesign({ business_name, existing, id }) {
	const { designs, adminData } = useContext(DataContext);
	const navigate = useNavigate();
	const existingDesign = designs.find((d) => d._id === id);

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

	async function uploadImg(e) {
		e.preventDefault();
		setFormStatus("Uploading...");
		// console.clear();
		// console.log(inputs);
		// console.log(files);

		const allFilesWithType = files.flatMap((item) => {
			if (item.file.length > 1) {
				return [
					{
						name: item.name,
						file: item.file[0],
					},
					{
						name: item.name,
						file: item.file[1],
					},
				];
			}

			if (item.file.length === 1) {
				return [
					{
						name: item.name,
						file: item.file[0],
					},
				];
			}

			return []; // no files
		});

		// console.log(allFilesWithType);

		const formData = new FormData();

		formData.append("name", inputs.name);
		formData.append("price", inputs.price);
		formData.append("category", inputs.category);
		formData.append("length", inputs.length);
		formData.append("width", inputs.width);
		formData.append("no_of_rooms", inputs.no_of_rooms);
		formData.append("no_of_bathrooms", inputs.no_of_bathrooms);
		formData.append("porch", inputs.porch);
		formData.append("balcony", inputs.balcony);
		formData.append("garage", inputs.garage);
		formData.append("description", inputs.description);

		console.log(inputs);

		allFilesWithType.map((file) => {
			formData.append(file.name, file.file);
		});

		const upload = await fetch(
			existingDesign
				? API_URL + "/api/admin/home/edit_designs/edit/" + existingDesign._id
				: API_URL + "/api/admin/home/add_design",
			{
				method: existingDesign ? "PUT" : "POST",
				body: formData,
				credentials: "include",
			},
		);

		const results = await upload.json();

		console.log(results);
		setFormStatus(results.message);

		setTimeout(() => {
			setFormStatus("Upload Design");
		}, 2000);

		// console.log(results);
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
