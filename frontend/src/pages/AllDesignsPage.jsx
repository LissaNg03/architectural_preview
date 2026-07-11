/** @format */

import React, { useState, useEffect, useContext } from "react";
import Footer from "../components/Footer";
import localAPI from "..";
import Design from "../components/ExploreDesigns/Design";
import Filter from "../components/ExploreDesigns/Filter";
import DesignSkeleton from "../components/ExploreDesigns/DesignSkeleton";
import { FiArrowLeftCircle, FiArrowUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../App";
import axios from "./admin/api/axios";
const API_URL = import.meta.env.VITE_BASE_URL;
export default function AllDesignsPage({ admin }) {
	const { designFilters } = localAPI;
	const [showFilters, setShowFilters] = useState(false);
	const [currentFilter, setCurrentFilter] = useState("");
	const navigate = useNavigate();
	const [designs, setDesigns] = useState([]);
	const { adminData, scrollY, innerHeight, innerWidth } =
		useContext(DataContext);
	const [loadingDesigns, setLoadingDesigns] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoadingDesigns(true);

				const res = await axios.get(`${API_URL}/api/all-designs`);

				setDesigns(res.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoadingDesigns(false);
			}
		};

		fetchData();
	}, []);

	function handleFilterClick(filter) {
		if (currentFilter == filter) {
			setCurrentFilter("");
		} else {
			setCurrentFilter(filter);
		}
	}

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

				<div className="flex w-full min-h-96 flex-col gap-10">
					{loadingDesigns ? (
						Array.from({ length: 3 }).map((_, index) => (
							<DesignSkeleton
								key={index}
								index={index}
								innerWidth={innerWidth}
							/>
						))
					) : designs.length > 0 ? (
						designs.map((des, index) => {
							if (currentFilter === des.category || currentFilter === "") {
								return (
									<Design
										index={index}
										innerWidth={innerWidth}
										key={des._id}
										design={des}
										admin={admin}
									/>
								);
							}

							return null;
						})
					) : (
						<p className="text-center py-20 mt-24 text-xl">No designs found.</p>
					)}
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
