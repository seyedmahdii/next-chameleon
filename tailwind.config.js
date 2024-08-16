/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		screens: {
			xs: "450px",
			sm: "575px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			"2xl": "1400px",
		},

		extend: {
			keyframes: {},
			animation: {},
			colors: {
				primary: "rgb(var(--primary-color) / <alpha-value>)",
				secondary: "rgb(var(--secondary-color) / <alpha-value>)",

				current: "currentColor",
				transparent: "transparent",
				white: "#FFFFFF",
				black: "#121723",
				dark: "#1D2430",
				// primary: "#4A6CF7",
				yellow: "#FBB040",
				"body-color": "#788293",
				"body-color-dark": "#959CB1",
				"gray-dark": "#1E232E",
				"gray-light": "#F0F2F9",
				stroke: "#E3E8EF",
				"stroke-dark": "#353943",
				"bg-color-dark": "#171C28",
			},

			boxShadow: {
				signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
				one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
				two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
				three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
				"navbar-sticky": "inset 0 -1px 0 0 var(--navbar-shadow-color-sticky)",
				"feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
				submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
				"submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
				btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
				"btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
				"btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
			},
			dropShadow: {
				three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
			},
		},
	},
	plugins: [],
};
