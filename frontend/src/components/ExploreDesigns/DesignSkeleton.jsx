/** @format */

import React from "react";

export default function DesignSkeleton({ index = 0, innerWidth }) {
	if (innerWidth <= 650) {
		return (
			<div className="animate-pulse flex flex-col gap-4 pb-5">
				<div className="h-8 w-2/3 rounded bg-gray-200" />

				<div className="aspect-video rounded-lg bg-gray-200" />

				<div className="space-y-2">
					<div className="h-4 rounded bg-gray-200" />
					<div className="h-4 w-11/12 rounded bg-gray-200" />
					<div className="h-4 w-4/5 rounded bg-gray-200" />
				</div>

				<div className="h-8 w-40 rounded bg-gray-200" />

				<div className="flex flex-wrap gap-2">
					<div className="h-7 w-24 rounded-full bg-gray-200" />
					<div className="h-7 w-24 rounded-full bg-gray-200" />
					<div className="h-7 w-24 rounded-full bg-gray-200" />
					<div className="h-7 w-24 rounded-full bg-gray-200" />
				</div>
			</div>
		);
	}

	return (
		<div
			className={`animate-pulse flex gap-5 items-center pb-4 ${
				index % 2 === 0 ? "" : "flex-row-reverse"
			}`}
		>
			{/* IMAGE */}
			<div className="w-[55%] max-w-[450px] aspect-[2/1] rounded-lg bg-gray-200" />

			{/* DESCRIPTION */}
			<div className="w-[55%] min-h-[315px] flex flex-col justify-between py-3">
				<div>
					<div className="h-9 w-3/5 rounded bg-gray-200 mb-4" />

					<div className="space-y-3">
						<div className="h-4 rounded bg-gray-200" />
						<div className="h-4 rounded bg-gray-200" />
						<div className="h-4 w-5/6 rounded bg-gray-200" />
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<div className="h-9 w-40 rounded bg-gray-200" />

					<div className="h-12 w-40 rounded-full bg-gray-200" />

					<div className="flex flex-wrap gap-2">
						<div className="h-8 w-24 rounded-full bg-gray-200" />
						<div className="h-8 w-24 rounded-full bg-gray-200" />
						<div className="h-8 w-24 rounded-full bg-gray-200" />
						<div className="h-8 w-24 rounded-full bg-gray-200" />
						<div className="h-8 w-24 rounded-full bg-gray-200" />
					</div>
				</div>
			</div>
		</div>
	);
}
