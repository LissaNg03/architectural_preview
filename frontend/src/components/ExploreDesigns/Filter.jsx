/** @format */

import React from "react";
import { FiArrowDown } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";

export default function Filter({
	designFilters,
	showFilters,
	setShowFilters,
	currentFilter,
	handleFilterClick,
	viewAll,
}) {
	return (
		<div className="relative">
			<button
				onClick={() => setShowFilters(!showFilters)}
				className={`flex ${
					viewAll && "border-white"
				} justify-start  border-b-2 border-black px-1 items-center`}
			>
				<span>{currentFilter ? currentFilter : "Filter"}</span>
				{showFilters ? <FiArrowUp /> : <FiArrowDown />}
			</button>
			<ul
				className={`flex  ${
					viewAll ? "bg-global_navy" : "bg-white"
				} overflow-hidden transition-all duration-300 ${
					showFilters ? "h-[148.5px]" : "h-0"
				} shadow-lg rounded-lg absolute ${
					viewAll ? "top-11" : "top-7"
				}  right-0 z-40  w-fit flex-col`}
			>
				{designFilters.map((filter, index) => (
					<li
						key={index}
						className={`text-center hover:bg-slate-200  whitespace-nowrap ${
							currentFilter == filter && !viewAll
								? "bg-slate-400 hover:bg-slate-300"
								: currentFilter == filter && viewAll
								? "bg-slate-600 hover:bg-slate-500"
								: viewAll
								? "hover:bg-slate-500/80"
								: ""
						} border-b-2 border-black ${
							viewAll && "border-white"
						} p-3 cursor-pointer`}
						onClick={() => handleFilterClick(filter)}
					>
						{filter}
					</li>
				))}
			</ul>
		</div>
	);
}
