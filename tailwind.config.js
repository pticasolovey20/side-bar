/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			colors: {
				"body-color": "#E4E9F7",
				"sidebar-color": "#FFF",
				"primary-color": "#695CFE",
				"primary-color-light": "#F6F5FF",
				"toggle-color": "#DDD",
				"text-color": "#707070",
			},
		},
	},

	plugins: [],
};
