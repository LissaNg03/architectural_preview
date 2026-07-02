/** @format */

import React, { useState, useEffect, useContext } from "react";
import Footer from "../components/Footer";
import localAPI from "..";
import Design from "../components/ExploreDesigns/Design";
import Filter from "../components/ExploreDesigns/Filter";
import { FiArrowLeftCircle, FiArrowUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../App";
export default function AllDesignsPage({ admin }) {
	const { designFilters } = localAPI;
	const [showFilters, setShowFilters] = useState(false);
	const [currentFilter, setCurrentFilter] = useState("");
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const { designs, adminData, scrollY, innerHeight, innerWidth } =
		useContext(DataContext);

	function handleFilterClick(filter) {
		if (currentFilter == filter) {
			setCurrentFilter("");
		} else {
			setCurrentFilter(filter);
		}
	}

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<>
			<section
				className={`bg-white pt-20 relative w-full max-w-[1600px] mx-auto text-global_navy md:p-10 xl:px-20 md:pt-28 lg:pt-32 p-small_padding`}
			>
				<header className="all_designs_header header_common">
					<FiArrowLeftCircle
						onClick={() => navigate(-1)}
						className="text-2xl cursor-pointer hover:scale-110 hover:opacity-70 duration-300 transition-all"
					/>
					<h1 className="font-bold">
						<a href="/">{adminData?.business_name ?? "[BUSINESS NAME]"}</a>
					</h1>
					<Filter
						designFilters={designFilters}
						showFilters={showFilters}
						setShowFilters={setShowFilters}
						currentFilter={currentFilter}
						handleFilterClick={handleFilterClick}
						viewAll={true}
					/>
				</header>

				<div className="flex w-full flex-col gap-10">
					{designs.length > 0
						? designs.map((des, index) => {
								if (currentFilter == des.category) {
									return (
										<Design
											index={index}
											innerWidth={innerWidth}
											key={index}
											design={des}
											admin={admin}
										/>
									);
								} else if (currentFilter == "") {
									return (
										<Design
											index={index}
											innerWidth={innerWidth}
											key={index}
											design={des}
											admin={admin}
										/>
									);
								}
							})
						: "NO DESIGNS"}
				</div>
				{scrollY >= innerHeight && (
					<FiArrowUp
						onClick={scrollToTop}
						className="scroll_up_btn"
						style={{ right: innerWidth > 1600 && `${(innerWidth - 1600) / 2}` }}
					/>
				)}
			</section>
			<Footer />
		</>
	);
}
