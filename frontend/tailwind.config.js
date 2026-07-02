/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				global_navy: "#111827",
				// SciFI
				global_cyan: "#155e75",
			},

			padding: {
				global_padding: "30px",
				small_padding: "18px",
				md_padding: "30px",
				lg_padding: "50px",
				xl_padding: "70px",
			},
			screens: {
				small: "500px",
				biggest: "1600px",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				comic: ['"Comic Relief"', "cursive"],
				libertinus: ['"Libertinus Mono"', "monospace"],
				nunito: ['"Nunito Sans"', "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
