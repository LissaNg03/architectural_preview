/** @format */

import React from "react";
import { motion } from "framer-motion";

export default function DesignFloorplan({
	floor_no,
	_floor,
	fullSquareMeter,
	itemVariants,
}) {
	return (
		<motion.div className="rounded-xl overflow-hidden" variants={itemVariants}>
			<motion.img src={_floor.url} alt="" variants={itemVariants} />
			<motion.div
				className="bg-global_navy rounded-b-xl text-white p-3"
				variants={itemVariants}
			>
				<h2 className="text-xl uppercase font-semibold">
					FLOOR PLAN ({floor_no})
				</h2>
				<p className="bg-global_navy text-sm text-slate-400">
					{fullSquareMeter} <span>m2</span>
				</p>
			</motion.div>
		</motion.div>
	);
}
