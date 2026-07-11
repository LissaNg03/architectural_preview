/** @format */
import React, { useEffect, useState } from "react";
import { FiArrowLeftCircle, FiArrowUp } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import DesignImg from "../components/DesignImg";
import DesignFloorplan from "../components/DesignFloorplan";
import DesignVideo from "../components/DesignVideo";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import fetchDesign from "../components/fetchDesign";
const API_URL = import.meta.env.VITE_BASE_URL;
export default function DesignPage({ scrollY, innerHeight, innerWidth }) {
	const navigate = useNavigate();
	const [design, setDesign] = useState(null);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const getDesign = async () => {
			try {
				setLoading(true);

				const _design = await fetchDesign(id);
				setDesign(_design);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		getDesign();
	}, [id]);

	console.log(design);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [loading, design]);

	return (
		<>
			{loading ? (
				<PageLoader message="Loading design..." />
			) : design ? (
				<section className="bg-white max-w-[1600px] mx-auto pb-20 relative w-full text-global_navy md:p-10 md:pt-24 xl:px-20 pt-24 lg:pt-32 p-small_padding">
					<header className="design_header header_common">
						<FiArrowLeftCircle
							onClick={() => navigate(-1, { replace: true })}
							className="text-2xl cursor-pointer hover:scale-110 hover:opacity-70 duration-300 transition-all"
						/>
						<h1 className="font-semibold text-lg">{design.name}</h1>
					</header>

					<div className="flex flex-col gap-5">
						{design.quotation.fullSquareMeter && (
							<DesignVideo
								video={design.video.url}
								fullSquareMeter={design.quotation.fullSquareMeter}
							/>
						)}

						<div className="flex flex-col sm:flex-row justify-start gap-3 items-center">
							{design.floor_plans.map((_floor, index) => (
								<DesignFloorplan
									key={index}
									floor_no={index + 1}
									_floor={_floor}
									fullSquareMeter={design.quotation.fullSquareMeter}
								/>
							))}
						</div>

						{design.images.map((img, index) => (
							<DesignImg
								key={index}
								index={index}
								innerWidth={innerWidth}
								img={img}
								design={design}
							/>
						))}

						<button
							onClick={() => navigate("/", { state: { design } })}
							className="design_page_enquire_btn"
						>
							Enquire
						</button>
					</div>

					{scrollY >= innerHeight && (
						<FiArrowUp
							onClick={scrollToTop}
							className="scroll_up_btn"
							style={{
								right: innerWidth > 1600 && `${(innerWidth - 1600) / 2}px`,
							}}
						/>
					)}
				</section>
			) : (
				<div className="min-h-[60vh] flex items-center justify-center text-global_navy opacity-70">
					Design not found
				</div>
			)}

			<Footer />
		</>
	);
}
