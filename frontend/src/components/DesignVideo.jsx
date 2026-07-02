/** @format */

import { useRef, useState } from "react";
import { FiPlay } from "react-icons/fi";
import { motion } from "framer-motion";
import Loading from "./Loading";

export default function DesignVideo({ video, fullSquareMeter }) {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [ready, setReady] = useState(false); // ✅ new state

	const togglePlay = () => {
		if (!videoRef.current || loading || !ready) return; // ✅ block clicks before ready

		if (isPlaying) {
			videoRef.current.pause();
			setIsPlaying(false);
		} else {
			videoRef.current.play();
			setIsPlaying(true);
		}
	};

	const containerVariants = {
		hidden: {},
		show: { transition: { staggerChildren: 0.15 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
	};

	return (
		<motion.div
			className="rounded-xl overflow-hidden"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0 }}
		>
			<motion.div
				className="relative w-full overflow-hidden h-full"
				variants={itemVariants}
			>
				{/* Loading spinner */}
				{loading && !error && (
					<div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
						<Loading />
					</div>
				)}

				{/* Video or error */}
				{!error ? (
					<video
						onClick={togglePlay}
						ref={videoRef}
						className="relative aspect-video max-h-[85vh] object-cover h-full w-full"
						muted
						loop
						preload="auto"
						src={video}
						onLoadedMetadata={() => {
							setReady(true);
							setLoading(false);
						}}
						onLoadedData={() => {
							setReady(true);
							setLoading(false);
						}}
						onError={() => {
							setError(true);
							setLoading(false);
						}}
					/>
				) : (
					<div className="flex items-center justify-center aspect-video bg-black text-red-500">
						⚠ Error Occurred!
					</div>
				)}

				{/* Play button */}
				{!loading && !error && ready && (
					<button
						disabled={!ready}
						className={`absolute  ${
							isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
						} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              transition-opacity duration-300 rounded-xl bg-global_navy text-white`}
					>
						<FiPlay className={`text-5xl p-2 text-white`} />
					</button>
				)}
			</motion.div>

			{/* Footer */}
			<motion.div className="bg-global_navy rounded-b-xl text-white p-3">
				<h2 className="text-xl font-semibold">°360 VIDEO</h2>
				<p className="bg-global_navy text-sm text-slate-400">
					{fullSquareMeter} <span>m2</span>
				</p>
			</motion.div>
		</motion.div>
	);
}
