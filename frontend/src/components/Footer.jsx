/** @format */
import React, { useContext } from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { DataContext } from "../App";
export default function Footer() {
	const { adminData } = useContext(DataContext);

	return (
		<footer className="bg-global_navy absolute bottom-0-0 left-0 h-auto w-screen">
			<div className="max-w-[1600px] mx-auto text-white py-12 px-small_padding md:px-10 xl:px-20">
				{/* Social Media */}
				<div className="flex justify-center md:justify-end gap-6 mb-6">
					<a
						href="https://www.tiktok.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gray-400 transition"
					>
						<SiTiktok className="w-6 h-6" />
					</a>
					<a
						href="https://www.facebook.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gray-400 transition"
					>
						<FaFacebookF className="w-6 h-6" />
					</a>
					<a
						href={`https://wa.me/27763232757?text=Hi%20there,%20got%20this%20number%20from%20your%20website.`}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gray-400 transition"
					>
						<FaWhatsapp className="w-6 h-6" />
					</a>
				</div>

				{/* Footer Content */}
				<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
					<div className="md:max-w-sm">
						<h3 className="text-xl font-bold mb-2">
							{adminData?.business_name}
						</h3>
						<p className="text-gray-300 text-sm">
							Crafting stunning 3D architectural visuals and bringing dream
							homes to life. Follow us on social media for our latest designs.
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-8 text-gray-300 text-sm">
						<div>
							<h4 className="font-semibold mb-2">Quick Links</h4>

							<ul className="space-y-1">
								{["Home", "About", "Designs"].map((link, index) => {
									return (
										<li key={index}>
											<a
												href={`#${link}`}
												className="hover:text-white transition"
											>
												{link}
											</a>
										</li>
									);
								})}
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-2">Services</h4>
							<ul className="space-y-1">
								<li>3D Renders</li>
								<li>Virtual Walkthroughs</li>
								<li>Construction Assistance</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-2">More Contacts</h4>
							<ul className="space-y-1">
								<li>Whatsapp • {adminData?.social_links?.[0]?.link ?? ""}</li>
								<li>Call Us • +{adminData?.social_links?.[0]?.link ?? ""}</li>
								<li>Email • {adminData?.social_links?.[1]?.link ?? ""}</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
					© {new Date().getFullYear()} {adminData?.business_name}. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
}
