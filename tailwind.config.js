/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryGreen: "#03b044",
				customRed: "#e92100",
				hoverGreen: "#07913b",
				darkGreen: "#025923",
				lightGrey: "#f7f8fb",
				darkWhite: "#f5f6fa",
			},
		},
		screens: {
			sm: { max: "899px" },
			md: "900px",
		},
	},
	plugins: [],
};
