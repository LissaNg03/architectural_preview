/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import localAPI from "../..";
import Design from "./Design";
import Filter from "./Filter";
export default function ExploreDesigns({ data, innerWidth }) {
	const { designs, designFilters } = localAPI;
	const [showFilters, setShowFilters] = useState(false);
	const [currentFilter, setCurrentFilter] = useState("");
	const navigate = useNavigate();

	function handleFilterClick(filter) {
		if (currentFilter == filter) {
			setCurrentFilter("");
		} else {
			setCurrentFilter(filter);
		}
	}

	return (
		<section
			id="Designs"
			className="bg-white w-full text-global_navy md:p-10 xl:px-20  p-small_padding"
		>
			<div className="flex justify-between">
				<h2 className="text-xl font-semibold mb-5">Explore Designs</h2>
				<Filter
					designFilters={designFilters}
					showFilters={showFilters}
					setShowFilters={setShowFilters}
					currentFilter={currentFilter}
					handleFilterClick={handleFilterClick}
				/>
			</div>
			<div className="flex w-full flex-col gap-10">
				{data.length > 0
					? data.map((des, index) => {
							if (currentFilter == des.category) {
								return (
									<Design
										index={index}
										innerWidth={innerWidth}
										key={index}
										design={des}
									/>
								);
							} else if (currentFilter == "") {
								return (
									<Design
										index={index}
										innerWidth={innerWidth}
										key={index}
										design={des}
									/>
								);
							}
						})
					: "NO DESIGNS"}
				<button
					onClick={() => navigate("all-designs")}
					className="view_all_designs_btn"
				>
					View All Designs
				</button>
			</div>
		</section>
	);
}
