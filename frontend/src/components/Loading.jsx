/** @format */

import React from "react";
import { motion } from "framer-motion";
export default function Loading() {
	return (
		<div className=" bg-slate-400 w-full h-full aspect-video flex justify-center items-center">
			<motion.div
				initial={{ rotateZ: 0 }}
				animate={{ rotateZ: "360deg" }}
				transition={{ duration: 1, repeat: Infinity }}
				className="w-10 h-10  rounded-full border-4 border-global_navy border-r-transparent"
			></motion.div>
		</div>
	);
}
