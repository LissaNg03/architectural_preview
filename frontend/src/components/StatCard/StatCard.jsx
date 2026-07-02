/** @format */

import React from "react";
import { motion } from "framer-motion";
import FormatStat from "./FormatStat";
export default function StatCard({ index, fadeUp, stat }) {
	return (
		<motion.div
			initial={fadeUp.hidden}
			animate={fadeUp.show}
			transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
			className="bg-white/15 small:flex items-center rounded-lg backdrop-blur-[2px] p-4 shadow-lg"
		>
			<h3 className="text-2xl md:text-3xl font-[500] mr-2">
				{FormatStat(stat.number)}
			</h3>
			<p> {stat.name}</p>
		</motion.div>
	);
}
