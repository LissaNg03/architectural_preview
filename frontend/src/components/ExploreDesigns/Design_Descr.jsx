/** @format */

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Design_Descr({ design, delay = 0 }) {
	const navigate = useNavigate();
	const quoteDescr = [
		design.quotation.no_of_rooms + " room(s)",
		design.quotation.no_of_bathrooms + " bath room(s)",
		design.quotation.garage && "garage",
		design.quotation.porch && "porch",
		design.quotation.balcony && "balcony",
	].filter(Boolean);

	const containerVariants = {
		hidden: {},
		show: {
			transition: { staggerChildren: 0.15, delayChildren: delay },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
	};

	const formattedPrice = new Intl.NumberFormat("en-ZA", {
		style: "currency",
		currency: "ZAR",
	}).format(design?.price ?? 0);

	return (
		<motion.div
			className="w-[55%] max-w-[650px] overflow-hidden py-4 min-h-[315px] pr-2 gap-4 flex flex-col items-start justify-between"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.1 }}
		>
			<div>
				<motion.h3
					className="text-2xl md:text-3xl mb-2 text-global_navy font-semibold"
					variants={itemVariants}
				>
					{design.name}
				</motion.h3>
				<motion.p
					className="max-md:text-sm text-wrap text-lg"
					variants={itemVariants}
				>
					{design.quotation.description}
				</motion.p>
			</div>

			<motion.div className="flex flex-col justify-between items-start max-md:gap-2 md:gap-5">
				<motion.h2 variants={itemVariants} className="text-2xl font-bold">
					{formattedPrice}
				</motion.h2>
				<motion.button
					onClick={() => navigate(`/design/${design._id}`)}
					className="bg-global_navy text-white p-2 rounded-full hover:bg-global_navy/90 group/btn flex whitespace-nowrap justify-between items-center gap-2 px-4"
					variants={itemVariants}
				>
					<span>Learn more</span>
					<FiArrowRight className="mt-[2px] transition-all duration-300 group-hover/btn:translate-x-1" />
				</motion.button>
				<motion.div className="flex justify-start flex-wrap items-center gap-2">
					{quoteDescr.map((text, idx) => (
						<motion.span
							key={idx}
							className="design_descr_quote"
							variants={itemVariants}
						>
							{text}
						</motion.span>
					))}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
