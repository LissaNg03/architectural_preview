/** @format */
import React, { useContext, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { DataContext } from "../App";
export default function ContactSection({ design }) {
	const { adminData } = useContext(DataContext);

	const data = adminData;

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
		design: "",
	});

	const [_design, setDesign] = useState(design || null);
	const [loading, setLoading] = useState(false);
	const [msgSent, setMsgSent] = useState(false);
	const [btnText, setBtnText] = useState("Send Message");
	const [btnBg, setBtnBg] = useState("#111827");
	const emailSecret = data?.email_secret || "mrbkpgep";

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	useEffect(() => {
		if (_design) {
			setFormData((prev) => {
				return {
					...prev,
					design: "http://192.168.231.1:5173/design/" + design.id,
				};
			});
		}
	}, [_design]);

	useEffect(() => {
		let timeout;
		if (loading && !msgSent) {
			setBtnText("Sending...");
		} else if (!loading && msgSent) {
			setDesign(null);
			setBtnText("Message Sent ✓");
			setBtnBg("green");
			timeout = setTimeout(() => {
				setBtnBg("#111827");
				setBtnText("Send Message");
				setMsgSent(false);
			}, 1500);
		} else {
			setBtnText("Send Message");
			setBtnBg("#111827");
		}

		return () => clearTimeout(timeout);
	}, [loading, msgSent]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const form = new FormData();
		form.append("firstName", formData.firstName);
		form.append("lastName", formData.lastName);
		form.append("email", formData.email);
		form.append("design", formData.design);
		form.append("message", formData.message);

		try {
			const res = await fetch(`https://formspree.io/f/${emailSecret}`, {
				method: "POST",
				body: form,
				headers: { Accept: "application/json" },
			});

			// console.log(res);
			// console.log(emailSecret);

			if (res.ok) {
				setMsgSent(true);
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					message: "",
					design: "",
				});
				setDesign(null);
			}
		} catch (err) {
			console.error("Error sending form:", err);
		} finally {
			setLoading(false);
		}
	};

	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 },
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section
			id="Contact"
			className="mx-auto md:p-10 xl:px-20 p-small_padding py-10 bg-white text-gray-900"
		>
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="text-4xl font-extrabold text-global_navy text-center mb-10"
			>
				Get in Touch
			</motion.h2>

			<div className="max-w-3xl mx-auto">
				<motion.form
					onSubmit={handleSubmit}
					className="grid gap-6 sm:grid-cols-2"
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
				>
					{/* First Name */}
					<motion.div variants={item} className="flex flex-col">
						<label htmlFor="firstName" className="mb-2 font-medium">
							First Name
						</label>
						<input
							placeholder="John"
							type="text"
							name="firstName"
							id="firstName"
							value={formData.firstName}
							onChange={handleChange}
							required
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						/>
					</motion.div>

					{/* Last Name */}
					<motion.div variants={item} className="flex flex-col">
						<label htmlFor="lastName" className="mb-2 font-medium">
							Last Name
						</label>
						<input
							placeholder="Smith"
							type="text"
							name="lastName"
							id="lastName"
							value={formData.lastName}
							onChange={handleChange}
							required
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						/>
					</motion.div>

					{/* Email */}
					<motion.div variants={item} className="flex flex-col sm:col-span-2">
						<label htmlFor="email" className="mb-2 font-medium">
							Email
						</label>
						<input
							placeholder="email@gmail.com"
							type="email"
							name="email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
						/>
					</motion.div>

					{/* Message + Ref */}
					<motion.div
						variants={item}
						className="flex gap-3 sm:col-span-2 max-sm:flex-col w-full"
					>
						{_design && (
							<div className="sm:w-1/2 w-full">
								<h2 className="mb-2 font-medium">Ref:</h2>
								<div className="border relative border-gray-300 rounded-lg px-4 py-3 uppercase select-none opacity-80 font-semibold">
									<p className="mb-2">{_design.name}</p>
									<img
										className="rounded-lg aspect-video object-cover"
										src={_design.thumbnail.url}
										alt=""
									/>
									<FiX
										onClick={() => setDesign(null)}
										className="absolute top-3 right-3 cursor-pointer text-2xl text-global_navy"
										title="Remove reference"
									/>
								</div>
							</div>
						)}

						<div
							className={`flex ${
								_design ? "sm:w-1/2" : "w-full"
							} sm:col-span-2 flex-col`}
						>
							<label htmlFor="message" className="mb-2 font-medium">
								Message
							</label>
							<textarea
								placeholder="Hi, I would like to enquire about this..."
								name="message"
								id="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows="6"
								className="email_textarea"
							></textarea>
						</div>
					</motion.div>

					{/* Submit Button */}
					<motion.div
						variants={item}
						className="sm:col-span-2 text-center flex justify-center"
					>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							style={{ background: btnBg }}
							type="submit"
							disabled={loading}
							className="transition-all duration-300 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90"
						>
							{btnText}
						</motion.button>
					</motion.div>
				</motion.form>
			</div>
		</section>
	);
}
