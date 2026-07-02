/** @format */
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
	initial: { opacity: 0, y: 20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.2, staggerChildren: 0.2 },
	},
};

const itemVariants = {
	initial: { opacity: 0, y: 5 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Card({ t }) {
	return (
		<motion.div
			variants={cardVariants}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, amount: 0.2 }}
			className="bg-white md:min-h-[240px] border border-gray-200 shadow rounded-2xl p-6 flex flex-col"
		>
			<motion.p variants={itemVariants} className="text-gray-700 italic flex-1">
				“{t.text}”
			</motion.p>

			<motion.div
				variants={itemVariants}
				className="mt-6 flex items-center gap-4"
			>
				<motion.img
					variants={itemVariants}
					src={t.image}
					alt={t.name}
					className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-sm"
				/>
				<div>
					<motion.div
						variants={itemVariants}
						className="font-semibold text-gray-900"
					>
						{t.name}
					</motion.div>
					<motion.div variants={itemVariants} className="text-sm text-gray-500">
						{t.role}
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
}
