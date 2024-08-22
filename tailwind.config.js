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
				header: "rgb(var(--navbar-background-color-sticky) / <alpha-value>)",

				current: "currentColor",
				transparent: "transparent",
			},

			boxShadow: {
				one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
				two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
				three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
				"navbar-sticky": "inset 0 -1px 0 0 var(--navbar-shadow-color-sticky)",
			},
			dropShadow: {
				three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
			},
		},
	},
	plugins: [],
};
