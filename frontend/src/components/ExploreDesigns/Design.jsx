/** @format */

import React from "react";
import { motion } from "framer-motion";
import Img_md from "./Img_md";
import Design_Descr from "./Design_Descr";
import Mobile_Design from "./Mobile_Design";

export default function Design({ index, innerWidth, design, admin }) {
	if (innerWidth <= 650) {
		return (
			<Mobile_Design
				name={design.name}
				category={design.category}
				thumbnail={design.thumbnail}
				design={design}
				admin={admin}
			/>
		);
	}

	const containerVariants = {
		hidden: {},
		show: {
			transition: { staggerChildren: 0.2 },
		},
	};

	return (
		<motion.div
			className="flex hover:border-b-2 border-black w-full gap-5 group items-center pb-3 justify-between"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.1 }}
		>
			{index % 2 === 0 ? (
				<>
					<Img_md design={design} delay={0} admin={admin} />
					<Design_Descr design={design} delay={0.3} />
				</>
			) : (
				<>
					<Design_Descr design={design} delay={0} />
					<Img_md design={design} delay={0.3} admin={admin} />
				</>
			)}
		</motion.div>
	);
}
