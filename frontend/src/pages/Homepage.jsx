/** @format */

import React, { useContext, useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ExploreDesigns from "../components/ExploreDesigns/ExploreDesigns";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { DataContext } from "../App";
export default function Homepage({ scrollY, innerHeight }) {
	const location = useLocation();
	const navigate = useNavigate();
	const { design } = location.state || {};
	const hasScrolledRef = useRef(false);

	const { designs, adminData, loading } = useContext(DataContext);

	useEffect(() => {
		if (design && !hasScrolledRef.current) {
			document
				.getElementById("Contact")
				?.scrollIntoView({ behavior: "smooth" });
			hasScrolledRef.current = true;

			navigate(location.pathname, { replace: true, state: {} });
		} else if (!design && !hasScrolledRef.current) {
			window.scrollTo({ top: 0, behavior: "smooth" });
			hasScrolledRef.current = true;
		}
	}, [design, navigate, location.pathname]);

	if (loading) return <Loading />;

	return (
		<main className="max-w-[1600px] pt-[100vh] mx-auto">
			<Header
				business_name={adminData.business_name}
				scrollY={scrollY}
				innerHeight={innerHeight}
			/>
			<Hero social_links={adminData.social_links} data={adminData.hero_data} />
			<ExploreDesigns data={designs} innerWidth={innerWidth} />
			<About />
			<Testimonials data={adminData.testimonials} />
			<Contact data={adminData.social_links} design={design} />
			<Footer />
		</main>
	);
}
