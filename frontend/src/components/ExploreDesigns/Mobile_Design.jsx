/** @format */

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Design from "./Design";

export default function Mobile_Design({ name, thumbnail, design, admin }) {
	const navigate = useNavigate();
	const quoteDescr = [
		design.quotation.rooms + " room(s)",
		design.quotation.bathRooms + " bath room(s)",
		design.quotation.garage && "garage",
		design.quotation.porch && "porch",
		design.quotation.balcony && "balcony",
	].filter(Boolean);

	function handleLearnMore() {
		navigate(`/design/${design._id}`);
	}

	// Variants for the container (stagger children)
	const containerVariants = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.2, // stagger each child by 0.2s
			},
		},
	};

	// Variants for each child
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
	};

	return (
		<motion.div
			className="flex group hover:border-b-2 pb-4 border-global_navy gap-4 flex-col"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.1 }}
		>
			<motion.h3
				className="text-2xl text-global_navy font-semibold"
				variants={itemVariants}
			>
				{name}
			</motion.h3>

			<motion.div
				className="flex aspect-video flex-col"
				variants={itemVariants}
			>
				<div className="relative  min-w-full rounded-lg overflow-hidden w-full">
					{admin && (
						<button className="absolute top-5 left-5 text-white bg-global_navy p-2 px-5 transition-all duration-300 hover:scale-110 rounded-md z-30">
							Edit
						</button>
					)}
					<img
						className="w-full aspect-video transition-all duration-300 object-cover cursor-pointer group-hover:scale-105 object-center"
						src={thumbnail.url}
						alt=""
					/>
					<div className="absolute bg-gradient-to-t from-black/75 to-white/5 top-0 left-0 w-full h-full"></div>
					<button
						onClick={handleLearnMore}
						className="mobile_learn_more_btn hover:bg-white/90 group/btn"
					>
						<span>Learn more</span>
						<FiArrowRight className="mt-[2px] group-hover/btn:translate-x-1 transition-all duration-300" />
					</button>
				</div>
			</motion.div>

			<motion.p className="select-none" variants={itemVariants}>
				{design.quotation.description}
			</motion.p>
			<motion.h3 variants={itemVariants} className="text-2xl font-bold">
				R{design.price ? design.price.toFixed(2) : "000,00"}
			</motion.h3>

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
	);
}
