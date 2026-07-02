/** @format */
import React from "react";
import { motion } from "framer-motion";
import localAPI from "..";
import Card from "./Testimonials/Card";

// animation configs
const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.2, ease: "easeOut", duration: 0.5 },
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
};

export default function Testimonials() {
	const { testimonials } = localAPI;

	return (
		<section className="mx-auto md:p-10 xl:px-20 p-small_padding py-16">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true, amount: 0.3 }}
				className="text-4xl font-extrabold text-center mb-10 text-gray-900"
			>
				Few Of Our Clients
			</motion.h2>

			{/* MOBILE: Vertical */}
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
				className="flex flex-col gap-6 md:hidden"
			>
				{testimonials.map((t, i) => (
					<motion.div key={i} variants={item}>
						<Card t={t} />
					</motion.div>
				))}
			</motion.div>

			{/* TABLET: Horizontal scroll with snap */}
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
				className="hidden md:flex lg:hidden gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
			>
				{testimonials.map((t, i) => (
					<motion.div
						key={i}
						variants={item}
						className="min-w-[calc(50%-0.75rem)] snap-start"
					>
						<Card t={t} />
					</motion.div>
				))}
			</motion.div>

			{/* DESKTOP: 4 grid */}
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
				className="hidden lg:grid grid-cols-4 gap-6"
			>
				{testimonials.map((t, i) => (
					<motion.div key={i} variants={item}>
						<Card t={t} />
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
