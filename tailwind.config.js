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
		extend: {
			keyframes: {},
			animation: {},
			colors: {
				primary: "rgb(var(--primary-color) / <alpha-value>)",
				secondary: "rgb(var(--secondary-color) / <alpha-value>)",
			},
		},
	},
	plugins: [],
};
