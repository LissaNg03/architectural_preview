/** @format */

import { FiArrowRightCircle, FiArrowDown } from "react-icons/fi";
import localAPI from "..";
import { motion } from "framer-motion";
import heroBg from "../assets/hero_bg.jpg";
import { section } from "framer-motion/client";
import StatCard from "./StatCard/StatCard";
import { useNavigate } from "react-router-dom";
export default function Hero({ social_links, data }) {
	const navigate = useNavigate();
	const hero_socialLinks =
		social_links?.filter(
			(link) =>
				link.name.includes("whatsapp") ||
				link.name.includes("tiktok") ||
				link.name.includes("facebook"),
		) ?? [];

	const stats = data
		? [
				{ name: "Clients", number: data.clients_estimate },
				{ name: "Followers", number: data.followers_estimate },
				{ name: "Designs", number: data.total_designs },
			]
		: [];

	function scrollToExploreDesigns() {
		document.getElementById("Designs").scrollIntoView({ behavior: "smooth" });
	}

	function handleLinkClick(link, name) {
		console.log(link, name);
		let url = "";

		switch (name) {
			case "whatsapp":
				url = `https://wa.me/${link}?text=Hi%20there,%20got%20this%20number%20from%20your%20website.`;
				break;

			case "tiktok":
				url = `https://www.tiktok.com/@${link}`;
				break;

			case "facebook":
				url = `https://www.facebook.com/${link}`;
				break;

			default:
				return;
		}

		window.open(url, "_blank");
	}

	// console.log("SOCIAL LINKS: ");
	console.log("data", data)
	// console.log(hero_socialLinks);
	// console.log(hero_socialLinks);

	// Animation variant: slide up + fade in
	const fadeUp = {
		hidden: { y: 40, opacity: 0 },
		show: { y: 0, opacity: 1 },
	};

	function goToContact() {
		document
			.getElementById("Contact")
			.scrollIntoView({ behavior: "smooth", block: "end" });
		setTimeout(() => {
			document.getElementById("firstName").focus();
		}, 1000);
	}

	return (
		<section
			style={{ backgroundImage: `url(${data?.hero_img?.url ?? ""})` }}
			className="absolute  h-screen bg-cover bg-center bg-no-repeat top-0 left-0 min-h-screen w-screen"
		>
			<div id="Home" className="Hero_Section">
				{/* Header */}
				<motion.h1
					initial={fadeUp.hidden}
					animate={fadeUp.show}
					transition={{ duration: 1 }}
					className="text-6xl mt-[-50px] mb-3 sm:text-7xl sm:mb-4 sm:mt-14 small:mt-5 lg:text-8xl font-semibold"
				>
					{data?.hero_bigger_text ?? "NULL"}
				</motion.h1>

				{/* Subheading */}
				<motion.p
					initial={fadeUp.hidden}
					animate={fadeUp.show}
					transition={{ duration: 1, delay: 0.5 }}
					className="lg:text-xl md:text-lg"
				>
					{data?.hero_smaller_text ?? "NULL"}
				</motion.p>

				{/* Contact Us Button */}
				<motion.div
					initial={fadeUp.hidden}
					animate={fadeUp.show}
					transition={{ duration: 1, delay: 0.8 }}
					className="flex justify-start group items-center"
				>
					<button
						onClick={goToContact}
						className="p-3 mt-5 px-4 rounded-3xl flex items-center gap-2 bg-white hover:bg-white/80 text-black"
					>
						<span className="text-sm text-[#111827]">Contact Us</span>
						<FiArrowRightCircle className=" text-[#111827] text-2xl group-hover:translate-x-1 transition-all duration-300 rounded-full" />
					</button>
				</motion.div>

				{/* Stats + Right Buttons + Explore */}
				<div className="w-full flex flex-col max-small:mt-[10%] max-small:mb-[-35%] small:mb-[-5%] justify-between small:mt-[5%] items-center">
					<div className="flex w-full lg:justify-between small:justify-start justify-between gap-4 items-center">
						{/* Stats cards */}
						<div className="flex w-full max-sm:justify-between items-center justify-start gap-4">
							{stats.map((stat, index) => (
								<StatCard
									index={index}
									fadeUp={fadeUp}
									key={index}
									stat={stat}
								/>
							))}
						</div>

						{/* Right-side social buttons */}
						<div className="max-lg:hidden flex gap-4 justify-between items-center">
							{hero_socialLinks.map((link, index) => (
								<motion.button
									key={index}
									initial={fadeUp.hidden}
									animate={fadeUp.show}
									transition={{
										duration: 1,
										delay: 1 + stats.length * 0.3 + index * 0.2,
									}}
									style={{
										background: index === 0 && "white",
										color: index === 0 && "black",
									}}
									onClick={() => handleLinkClick(link.link, link.name)}
									className="social_link_btn"
								>
									{link.name}
								</motion.button>
							))}
						</div>
					</div>

					{/* Explore Button */}
					<motion.button
						onClick={scrollToExploreDesigns}
						initial={{ y: 5, opacity: 0, scale: 1 }}
						animate={{
							y: 0,
							opacity: 1,
							scale: [1, 1.05, 1],
						}}
						transition={{
							y: {
								duration: 1,
								delay: 1.5,
								ease: "easeOut",
							},
							opacity: {
								duration: 1,
								delay: 1.5,
								ease: "easeOut",
							},
							scale: {
								duration: 0.7,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 1.5,
							},
						}}
						whileHover={{ scale: 1.08 }}
						whileTap={{ scale: 0.95 }}
						className="p-2 mt-10 px-3 text-sm rounded-3xl flex items-center justify-between gap-2 bg-white text-[#111827]"
					>
						<span className="text-[#111827]">Explore Designs</span>
						<FiArrowDown className="bg-[#111827] text-white text-xl rounded-full p-1" />
					</motion.button>
				</div>
			</div>
		</section>
	);
}
