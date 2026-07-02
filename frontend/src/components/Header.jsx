/** @format */

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import localAPI from "..";

export default function Header({ business_name, scrollY, innerHeight }) {
	const [showMenu, setShowMenu] = useState(false);
	const { navLinks } = localAPI;

	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === "Escape") setShowMenu(false);
		};
		const handleWinClick = () => {
			setShowMenu(false);
		};
		window.addEventListener("scroll", handleWinClick);
		window.addEventListener("keydown", handleKey);
		return () => {
			window.removeEventListener("keydown", handleKey);
			window.removeEventListener("scroll", handleWinClick);
		};
	}, []);

	function scrollToSection(link) {
		setShowMenu(false);

		setTimeout(() => {
			document.getElementById(link)?.scrollIntoView({ behavior: "smooth" }) -
				100;
		}, 100); // small delay lets DOM update
	}

	return (
		<header
			style={{ background: scrollY > innerHeight - 250 && "#111827" }}
			className="home_header header_common"
		>
			<h1 className="font-semibold text-lg">
				<a href="/">{business_name ? business_name : "[BUSINESS NAME]"}</a>
			</h1>

			<button
				onClick={() => setShowMenu(!showMenu)}
				className="flex items-center gap-2 text-white font-medium z-50"
			>
				<span>MENU</span>
				{showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
			</button>

			<AnimatePresence mode="wait">
				{showMenu && (
					<motion.nav
						style={{ background: scrollY > innerHeight - 250 && "#111827" }}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className=" fixed top-16 right-1 rounded-lg  bg-white/10 backdrop-blur-[2px] overflow-hidden z-40"
					>
						<ul className="flex transition-all duration-300 flex-col">
							{navLinks.map((link, index) => (
								<li
									onClick={() => scrollToSection(link)}
									key={index}
									className="text-center px-6 p-3 bg-white/5 backdrop-blur-lg hover:bg-white/20 transition-colors cursor-pointer"
								>
									{link}
								</li>
							))}
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
}
