/** @format */

import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white">
			<h1 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-9xl font-extrabold text-transparent">
				404
			</h1>

			<h2 className="mt-4 text-3xl font-bold md:text-4xl">Page Not Found</h2>

			<p className="mt-4 max-w-md text-center text-slate-400">
				Oops! The page you're looking for doesn't exist, was moved, or the URL
				might be incorrect.
			</p>

			<Link
				to="/"
				className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
			>
				← Back to Home
			</Link>
		</div>
	);
}
