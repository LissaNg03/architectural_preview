/** @format */

import React, { useContext } from "react";
import { motion } from "framer-motion";
import RealBuildImg from "../assets/real_building.png";
import FormatStat from "./StatCard/FormatStat";
const container = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
	initial: { opacity: 0, y: 20 },
	whileInView: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};
import { DataContext } from "../App";

export default function About() {
	const { adminData } = useContext(DataContext);
	const data = adminData;
	// console.log(data);
	const bullets = data.offer_section_data
		? [
				data.offer_section_data.bullet_one,
				data.offer_section_data.bullet_two,
				data.offer_section_data.bullet_three,
			]
		: [];

	const stats = data.hero_data
		? [
				{
					desc: "Total TikTok views on featured designs",
					number: data.hero_data.followers_estimate,
				},
				{
					desc: "Completed visualization projects",
					number: data.hero_data.total_designs,
				},
			]
		: [];

	return (
		<section
			id="Services"
			className="mx-auto md:p-10 xl:px-20 p-small_padding min-h-screen bg-white text-gray-900"
		>
			<motion.h1
				className="text-4xl mb-5 text-center sm:text-5xl font-extrabold leading-tight"
				variants={item}
				initial="initial"
				whileInView="whileInView"
				viewport={{ once: true, amount: 0.2 }}
			>
				What We Offer
			</motion.h1>

			<motion.div
				className="grid gap-8 sm:grid-cols-2 items-center"
				variants={container}
				initial="initial"
				whileInView="whileInView"
				viewport={{ once: true, amount: 0.2 }}
			>
				<motion.div
					className="flex h-full gap-5 flex-col justify-start items-start"
					variants={container}
				>
					<motion.p className="mt-4 text-lg text-gray-700" variants={item}>
						At{" "}
						<span className="font-semibold">
							{data?.business_name ?? "..."}
						</span>
						, we turn ideas into hyper-realistic visuals, and from that to
						actually
						<span className="font-semibold"> building</span> your dream home.
						See it. Love it. Build it.
					</motion.p>

					<motion.ul
						className="mt-6 space-y-2 text-gray-600 text-base"
						variants={container}
					>
						{bullets?.map((text, i) => (
							<motion.li className="" key={i} variants={item}>
								✓ {text}
							</motion.li>
						)) ?? null}
					</motion.ul>

					<motion.button
						onClick={() =>
							document
								.getElementById("Contact")
								.scrollIntoView({ behavior: "smooth" })
						}
						className="border-global_navy w-full text-center text-global_navy max-w-96 border  px-5 py-3 rounded-lg hover:bg-gray-100"
						variants={item}
					>
						Get a Quote
					</motion.button>
				</motion.div>

				<motion.div
					className="rounded-xl h-full overflow-hidden shadow-lg bg-gray-100"
					variants={item}
				>
					<img
						src={data.who_we_are_section_data?.img?.url ?? ""}
						alt="3D house render"
						className="w-full h-full object-cover"
					/>
				</motion.div>
			</motion.div>

			<motion.div
				id="About"
				className="mt-12 grid gap-8 md:grid-cols-3"
				variants={container}
				initial="initial"
				whileInView="whileInView"
				viewport={{ once: true, amount: 0.2 }}
			>
				<motion.div
					className="md:col-span-2 bg-white p-6 rounded-2xl shadow"
					variants={container}
				>
					<motion.h2 className="text-2xl font-semibold" variants={item}>
						Who We Are
					</motion.h2>
					<motion.p className="mt-3 text-gray-700" variants={item}>
						{data.who_we_are_section_data?.text ?? "..."}
					</motion.p>

					<motion.h3 className="mt-6 text-lg font-medium" variants={item}>
						Our Services
					</motion.h3>
					<motion.ul
						className="mt-3 grid sm:grid-cols-2 gap-2 text-gray-700"
						variants={container}
					>
						{[
							"• Exterior & interior 3D renders",
							"• Animated virtual walkthroughs",
							"• Turning those 3D visuals into reality",
							"• Building your dream home literally",
						].map((text, i) => (
							<motion.li key={i} variants={item}>
								{text}
							</motion.li>
						))}
					</motion.ul>

					<motion.h3 className="mt-6 text-lg font-medium" variants={item}>
						How We Work
					</motion.h3>
					<motion.ol
						className="mt-3 list-decimal list-inside text-gray-700"
						variants={container}
					>
						{[
							"Concept & brief",
							"Draft designs & feedback",
							"High-fidelity renders & animation",
							"Delivery & optional revisions",
						].map((text, i) => (
							<motion.li key={i} variants={item}>
								{text}
							</motion.li>
						))}
					</motion.ol>
				</motion.div>

				<motion.aside
					className="bg-gray-900 h-fit text-white p-6 rounded-2xl shadow"
					variants={container}
					initial="initial"
					whileInView="whileInView"
					viewport={{ once: true, amount: 0.2 }}
				>
					<motion.h4
						className="text-sm uppercase tracking-wider opacity-90"
						variants={item}
					>
						Proof in numbers
					</motion.h4>
					<motion.div className="mt-4 grid gap-4" variants={container}>
						{stats.map((stat, i) => (
							<motion.div key={i} variants={item}>
								<div className="text-3xl font-extrabold">
									{FormatStat(stat.number)}
								</div>
								<div className="text-sm opacity-90">{stat.desc}</div>
							</motion.div>
						))}
						<motion.div variants={item}>
							<div className="text-3xl font-extrabold">
								5<span>⭐</span>
							</div>
						</motion.div>
					</motion.div>
				</motion.aside>
			</motion.div>

			<motion.div
				className="mt-12 bg-white p-6 rounded-2xl shadow"
				variants={container}
				initial="initial"
				whileInView="whileInView"
				viewport={{ once: true, amount: 0.2 }}
			>
				<motion.h2 className="text-2xl font-semibold" variants={item}>
					Our Process
				</motion.h2>
				<motion.div
					className="mt-6 grid md:grid-cols-4 gap-6 text-gray-800"
					variants={container}
				>
					{["Brief", "Concept", "3D Visuals", "Delivery"].map((step, i) => (
						<motion.div key={i} className="text-center" variants={item}>
							<div className="w-14 h-14 mx-auto rounded-full bg-gray-200 flex items-center justify-center font-semibold">
								{String(i + 1).padStart(2, "0")}
							</div>
							<p className="mt-3 font-medium">{step}</p>
							<p className="mt-1 text-sm opacity-80">
								{step === "Brief" && "Share your ideas, references & budget."}
								{step === "Concept" &&
									"We produce initial sketches & moodboards."}
								{step === "3D Visuals" && "High-quality renders + animation."}
								{step === "Delivery" &&
									"Final files, actual building with our pro constructours."}
							</p>
						</motion.div>
					))}
				</motion.div>
			</motion.div>

			<motion.div
				className="flex sm:flex-row mt-10 flex-col gap-5"
				variants={container}
				initial="initial"
				whileInView="whileInView"
				viewport={{ once: true, amount: 0.2 }}
			>
				<motion.img
					style={{ aspectRatio: "auto" }}
					src="/FloorPlan.png"
					alt="3D house render"
					className="sm:w-1/2  rounded-lg h-full object-cover"
					variants={item}
				/>
				<motion.div
					className="bg-global_navy max-w-[400px] text-white p-8 rounded-2xl h-fit flex sm:w-1/2 flex-col justify-between"
					variants={container}
				>
					<motion.div variants={container}>
						<motion.h3 className="text-2xl font-bold" variants={item}>
							Ready to visualize your dream home?
						</motion.h3>
						<motion.p className="mt-2 opacity-90" variants={item}>
							Send us your sketch or brief — we’ll turn it into a show-stopping
							3D concept.
						</motion.p>
					</motion.div>
					<motion.div className="mt-5" variants={item}>
						<button
							onClick={() =>
								document
									.getElementById("Contact")
									.scrollIntoView({ behavior: "smooth" })
							}
							className="inline-block text-center bg-white text-global_navy px-6 py-3 w-full rounded-lg font-semibold hover:bg-gray-100"
						>
							Request a Quote
						</button>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
