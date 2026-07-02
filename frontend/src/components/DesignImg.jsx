/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FaLessThanEqual } from "react-icons/fa6";

export default function DesignImg({ index, innerWidth, img, design }) {
	const containerVariants = {
		hidden: {},
		show: { transition: { staggerChildren: 0.2 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
	};

	if (innerWidth < 640) {
		return (
			<motion.div
				className="rounded-xl min-w-full  self-center overflow-hidden"
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0 }}
			>
				<motion.img
					className="aspect-video object-cover"
					src={img.url}
					alt={img.title}
					variants={itemVariants}
				/>
				<motion.div className="bg-global_navy rounded-b-xl text-white p-3">
					<h2 className="text-xl uppercase font-semibold">{img.title}</h2>
					<p className="bg-global_navy text-sm text-slate-400">
						{img.title == "front_view" || img.title == "back_view"
							? design.quotation.length
							: design.quotation.width}
						m
					</p>
				</motion.div>
			</motion.div>
		);
	}

	return (
		<motion.div
			className="w-full flex flex-col even:self-start odd:self-end overflow-hidden"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0 }}
		>
			{index % 2 === 0 ? (
				<motion.div className="w-full flex">
					<motion.img
						className="max-w-[60%] rounded-lg"
						src={img.url}
						alt={img.title}
						variants={itemVariants}
					/>
					<motion.div
						className="rounded-b-xl text-global_navy p-3"
						variants={itemVariants}
					>
						<h2 className="text-xl uppercase font-semibold">{img.title}</h2>
						<p className="text-sm text-global_navy">
							{design.quotation?.length}m
						</p>
					</motion.div>
				</motion.div>
			) : (
				<motion.div className="w-full flex justify-end">
					<motion.div
						className="rounded-b-xl text-global_navy p-3"
						variants={itemVariants}
					>
						<h2 className="text-xl uppercase font-semibold">{img.title}</h2>
						<p className="text-sm text-global_navy">
							{design.quotation?.width}m
						</p>
					</motion.div>
					<motion.img
						className="max-w-[60%] rounded-xl"
						src={img.url}
						alt={img.title}
						variants={itemVariants}
					/>
				</motion.div>
			)}
		</motion.div>
	);
}
