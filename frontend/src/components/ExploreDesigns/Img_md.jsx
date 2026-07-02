/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Img_md({ design, delay = 0, admin }) {
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut", delay },
		},
	};
	const goToEditPage = useNavigate();

	async function handleDelete() {
		const del = confirm("Are you sure to delete this design?");

		if (!del) return;

		try {
			const response = await fetch("/api/admin/home/edit_designs", {
				headers: { "Content-Type": "application/json" },
				method: "DELETE",
				body: JSON.stringify({ design_id: design?._id }),
			});

			const deleted = await response.json();

			alert(deleted.message);

			window.location.reload();
		} catch (error) {
			console.error("ERROR:", error);
		}
	}

	return (
		<motion.div
			className="relative cursor-pointer min-h-[300px] max-w-[450px] aspect-[2/1] w-[55%] rounded-lg overflow-hidden"
			variants={itemVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.1 }}
		>
			{admin && (
				<div className="absolute w-full flex justify-between items-center top-5 left-0 text-white px-5 z-30">
					<button
						onClick={() =>
							goToEditPage("/admin/home/edit_designs/edit/" + design?._id)
						}
						className="bg-global_navy p-2 px-5 duration-300 hover:scale-110 rounded-md transition-all"
					>
						Edit
					</button>
					<button
						onClick={handleDelete}
						className="bg-red-500 p-2 px-5 duration-300 hover:scale-110 rounded-md transition-all"
					>
						Delete
					</button>
				</div>
			)}
			<img
				className="w-full h-full transition-all duration-300 object-cover group-hover:scale-105 cursor-pointer object-center"
				src={design.thumbnail.url ?? null}
				alt=""
			/>
			<div className="absolute bg-gradient-to-t from-black/40 to-white/5 top-0 left-0 w-full h-full"></div>
		</motion.div>
	);
}
