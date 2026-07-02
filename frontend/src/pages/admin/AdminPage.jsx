/** @format */

import React, { useEffect, useState, useContext } from "react";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import { DataContext } from "../../App";
import { getAccessToken, setAccessToken } from "./context/tokenStore";
import axios from "./api/axios";
import { useNavigate } from "react-router-dom";
export default function AdminPage() {
	const { adminData, designs } = useContext(DataContext);
	const navigate = useNavigate();
	const [defaultData, setDefaultData] = useState({});
	const [formStatus, setFormStatus] = useState("Upload Changes");
	const [files, setFiles] = useState([
		{ name: "business_logo_img", file: [] },
		{ name: "hero_img", file: [] },
		{ name: "who_we_are_img", file: [] },
	]);
	const [inputs, setInputs] = useState({
		business_name: "",

		//HERO DATA
		hero_bigger_text: "",
		hero_smaller_text: "",
		clients_estimate: 0,
		followers_estimate: 0,
		total_designs: 0,

		//WHO WE ARE DATA
		who_we_are_text: "",

		what_we_offer_text: "",
		bullet_one: "",
		bullet_two: "",
		bullet_three: "",

		//SOCIAL LINKS
		tel_no: "",
		email: "",
		facebook_link: "",
		whatsApp_number: "",
		tiktok_link: "",

		email_secret: "",
	});

	useEffect(() => {
		async function fetchDefaultData() {
			try {
				const res = await axios.get("api/admin/home");

				const _data = res.data;

				setInputs((prev) =>
					_data.adminData.length != 0
						? {
								business_name: _data?.adminData?.[0]?.business_name ?? "",

								//HERO DATA
								hero_bigger_text:
									_data?.adminData?.[0]?.hero_data?.hero_bigger_text ?? "",
								hero_smaller_text:
									_data?.adminData?.[0]?.hero_data?.hero_smaller_text ?? "",
								clients_estimate:
									_data?.adminData?.[0]?.hero_data?.clients_estimate ?? 0,
								followers_estimate:
									_data?.adminData?.[0]?.hero_data?.followers_estimate ?? 0,
								total_designs:
									_data?.adminData?.[0]?.hero_data?.total_designs ?? 0,

								//WHO WE ARE DATA
								who_we_are_text:
									_data?.adminData?.[0]?.who_we_are_section_data?.text ?? "",

								//WHO WE ARE DATA
								what_we_offer_text:
									_data?.adminData?.[0]?.offer_section_data
										?.what_we_offer_text ?? "",
								bullet_one:
									_data?.adminData?.[0]?.offer_section_data?.bullet_one ?? "",
								bullet_two:
									_data?.adminData?.[0]?.offer_section_data?.bullet_two ?? "",
								bullet_three:
									_data?.adminData?.[0]?.offer_section_data?.bullet_three ?? "",

								//SOCIAL LINKS
								tel_no: _data?.adminData?.[0]?.social_links?.[0]?.link ?? "",
								email: _data?.adminData?.[0]?.social_links?.[1]?.link ?? "",
								tiktok_link:
									_data?.adminData?.[0]?.social_links?.[2]?.link ?? "",
								facebook_link:
									_data?.adminData?.[0]?.social_links?.[3]?.link ?? "",
								whatsApp_number:
									_data?.adminData?.[0]?.social_links?.[4]?.link ?? "",

								email_secret: _data?.adminData?.[0]?.email_secret ?? "",
							}
						: { ...prev },
				);
			} catch (error) {
				console.log(error);
				console.log(error?.response?.data);
			}
		}

		fetchDefaultData();
	}, []);

	function handleChange(e, name) {
		{
			const newFiles = Array.from(e.target.files);

			setFiles((prev) => {
				const exists = prev.find((item) => item.name === name);

				if (exists) {
					// ✅ update existing
					return prev.map((item) =>
						item.name === name ? { ...item, file: [...newFiles] } : item,
					);
				} else {
					// ✅ create new
					return [...prev, { name: name, file: newFiles }];
				}
			});
		}
	}

	async function handleLogOut() {
		try {
			const response = await axios.post("/api/admin/logout");
			setAccessToken(null);
			navigate("/admin/login", { replace: true });
		} catch (error) {
			console.log(error);
		}
	}

	function handleInputsChange(e, input) {
		setInputs((prev) => {
			return { ...prev, [input]: e.target.value };
		});
	}

	async function submitData(e) {
		e.preventDefault();
		setFormStatus("Uploading...");

		const formData = new FormData();

		files.map((file) => {
			if (file.file[0]) {
				formData.append(file.name, file.file[0]);
			}
		});

		//BUSINESS NAME
		formData.append("business_name", inputs.business_name);
		//HERO DATA
		formData.append("hero_bigger_text", inputs.hero_bigger_text);
		formData.append("hero_smaller_text", inputs.hero_smaller_text);
		formData.append("clients_estimate", inputs.clients_estimate);
		formData.append("followers_estimate", inputs.followers_estimate);
		formData.append("total_designs", inputs.total_designs);

		//WHO WE ARE DATA
		formData.append("who_we_are_text", inputs.who_we_are_text);

		//WHAT WE OFFER DATA
		formData.append("what_we_offer_text", inputs.what_we_offer_text);
		formData.append("bullet_one", inputs.bullet_one);
		formData.append("bullet_two", inputs.bullet_two);
		formData.append("bullet_three", inputs.bullet_three);

		//SOCIALS
		formData.append("tel_no", inputs.tel_no);
		formData.append("email", inputs.email);
		formData.append("tiktok", inputs.tiktok_link);
		formData.append("facebook", inputs.facebook_link);
		formData.append("whatsapp", inputs.whatsApp_number);
		formData.append("email_secret", inputs.email_secret);

		const upload = await fetch("/api/admin/home", {
			method: "POST",
			body: formData,
		});

		const results = await upload.json();

		// console.log(results);
		setFormStatus(results.message);

		setTimeout(() => {
			setFormStatus("Upload Changes");
		}, 2000);
	}

	return (
		<div>
			<header className="bg-global_navy header_common">
				<h1 className="font-bold">
					<a href="/">{adminData?.business_name ?? "[BUSINESS NAME]"}</a>
				</h1>
				<nav>
					<ul className="flex justify-between items-center gap-2">
						<li>
							<a href="/admin/home/credentials">Credentials</a>
						</li>
						<li>
							<a href="/admin/home/add_design">Add Design</a>
						</li>
						<li>
							<a href="/admin/home/edit_designs">Edit Design</a>
						</li>
						<li>
							<button
								onClick={handleLogOut}
								className="bg-white p-1 rounded-md font-bold text-global_navy hover:opacity-95 px-2"
							>
								Log Out
							</button>
						</li>
					</ul>
				</nav>
			</header>
			<main className=" pt-32 p-8 md:p-20 text-xl ">
				<form
					action="/api/admin/home/"
					method="POST"
					encType="multipart/form-data"
					className="flex flex-col gap-2"
					onSubmit={submitData}
				>
					<h1 className="font-extrabold text-center text-3xl uppercase">
						WEBSITE DATA:
					</h1>
					<label for="business_name">Business Name:</label>
					<input
						id="business_name"
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						type="text"
						value={inputs.business_name}
						placeholder="Architecture Designs"
						onChange={(e) => handleInputsChange(e, "business_name")}
					/>
					<label for="business_logo">Business Logo:</label>
					<input
						id="business_logo"
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						accept="image/*"
						type="file"
						onChange={(e) => handleChange(e, "business_logo_img")}
					/>
					<h2 className="font-extrabold text-2xl uppercase">Hero Data:</h2>
					<label for="hero_img">Hero Image:</label>
					<input
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						accept="image/*"
						type="file"
						data-url-
						id="hero_img"
						onChange={(e) => handleChange(e, "hero_img")}
					/>
					<label for="hero_big_text">Hero Big Text:</label>
					<input
						id="hero_big_text"
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						type="text"
						placeholder="Welcome to the site..."
						onChange={(e) => handleInputsChange(e, "hero_bigger_text")}
						value={inputs.hero_bigger_text}
					/>
					<label for="hero_small_text">Hero Smaller Text:</label>
					<input
						id="hero_small_text"
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						type="text"
						placeholder="Welcome to the site..."
						onChange={(e) => handleInputsChange(e, "hero_smaller_text")}
						value={inputs.hero_smaller_text}
					/>
					<div className="flex flex-col">
						<label for="client_rating">Total No of Designs:</label>
						<input
							id="client_rating"
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
							type="number"
							placeholder="100+"
							onChange={(e) => handleInputsChange(e, "total_designs")}
							value={inputs.total_designs}
						/>
						<label for="clients_estimate"> Clients:</label>
						<input
							id="clients_estimate"
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
							type="number"
							placeholder="10K+"
							onChange={(e) => handleInputsChange(e, "clients_estimate")}
							value={inputs.clients_estimate}
						/>
						<label for="followers_estimate">Followers Estimate:</label>
						<input
							id="followers_estimate"
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
							type="number"
							placeholder="10K+"
							onChange={(e) => handleInputsChange(e, "followers_estimate")}
							value={inputs.followers_estimate}
						/>
					</div>
					<h2 className="font-extrabold text-2xl uppercase">
						Who We Are Section Data:
					</h2>
					<label for="who_we_are_img">Overview Image:</label>
					<input
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						accept="image/*"
						type="file"
						id="who_we_are_img"
						onChange={(e) => handleChange(e, "who_we_are_img")}
					/>
					<label for="who_we_are">Who We Are:</label>
					<textarea
						id="who_we_are"
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none resize-none focus:ring-2 focus:ring-gray-700"
						type="text"
						placeholder="We are..."
						onChange={(e) => handleInputsChange(e, "who_we_are_text")}
						value={inputs.who_we_are_text}
					></textarea>
					<label for="what_we_offer_text">What We Offer:</label>
					<textarea
						id="what_we_offer_text"
						className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none resize-none focus:ring-2 focus:ring-gray-700"
						type="text"
						placeholder="We offer..."
						onChange={(e) => handleInputsChange(e, "what_we_offer_text")}
						value={inputs.what_we_offer_text}
					></textarea>

					<div className="flex flex-col  gap-2">
						<h2>What we offer bullets: </h2>
						<div className="w-full">
							<label for="bullet_one">Bullet One: </label>
							<input
								className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none resize-none w-full focus:ring-2 focus:ring-gray-700"
								type="text"
								id="bullet_one"
								placeholder="Modern & functional design"
								onChange={(e) => handleInputsChange(e, "bullet_one")}
								value={inputs.bullet_one}
							/>
						</div>
						<div>
							<label for="bullet_two">Bullet Two: </label>
							<input
								className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none resize-none focus:ring-2 focus:ring-gray-700"
								type="text"
								id="bullet_two"
								placeholder="Tailored for TikTok & social audiences"
								onChange={(e) => handleInputsChange(e, "bullet_two")}
								value={inputs.bullet_two}
							/>
						</div>
						<div>
							<label for="bullet_three">Bullet Three: </label>
							<input
								className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none resize-none w-full focus:ring-2 focus:ring-gray-700"
								type="text"
								id="bullet_three"
								placeholder="Seamless concept-to-construction process"
								onChange={(e) => handleInputsChange(e, "bullet_three")}
								value={inputs.bullet_three}
							/>
						</div>
					</div>

					<h2 className="font-extrabold text-2xl uppercase">Contact Links:</h2>
					<div>
						<div className="flex flex-col">
							<label for="tiktok">Business Email:</label>
							<input
								className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none resize-none focus:ring-2 focus:ring-gray-700"
								type="email"
								id="tiktok"
								placeholder="business@gmail.com"
								onChange={(e) => handleInputsChange(e, "email")}
								value={inputs.email}
							/>
							<label for="business_tel">Business Tel:</label>
							<input
								className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none resize-none focus:ring-2 focus:ring-gray-700"
								type="tel"
								id="business_tel"
								placeholder="0123456789"
								onChange={(e) => handleInputsChange(e, "tel_no")}
								value={inputs.tel_no}
							/>
							<label for="tiktok">Tiktok Link:</label>
							<input
								className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none resize-none focus:ring-2 focus:ring-gray-700"
								type="text"
								id="tiktok"
								placeholder="@tiktok_handle"
								onChange={(e) => handleInputsChange(e, "tiktok_link")}
								value={inputs.tiktok_link}
							/>
							<label for="facebook">Facebook Link:</label>
							<input
								className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none resize-none focus:ring-2 focus:ring-gray-700"
								type="text"
								id="facebook"
								placeholder="@facebook_handle"
								onChange={(e) => handleInputsChange(e, "facebook_link")}
								value={inputs.facebook_link}
							/>
							<label for="whatsapp">WhatsApp Number:</label>
							<input
								className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none resize-none focus:ring-2 focus:ring-gray-700"
								type="tel"
								id="whatsapp"
								placeholder="0123456789"
								onChange={(e) => handleInputsChange(e, "whatsApp_number")}
								value={inputs.whatsApp_number}
							/>

							<label for="email_secret">Email Secret (formSpree):</label>
							<input
								className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none resize-none focus:ring-2 focus:ring-gray-700"
								type="text"
								id="email_secret"
								placeholder="#######"
								onChange={(e) => handleInputsChange(e, "email_secret")}
								value={inputs.email_secret}
							/>
						</div>
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
