/** @format */

import React from "react";

export default function PageLoader({ message = "Loading..." }) {
	return (
		<div className="min-h-[60vh] flex flex-col items-center justify-center text-global_navy">
			<div className="w-10 h-10 border-4 border-global_navy border-t-transparent rounded-full animate-spin mb-4" />

			<p className="text-sm md:text-base opacity-70 tracking-wide">{message}</p>
		</div>
	);
}
