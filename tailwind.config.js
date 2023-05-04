/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-blue": "hsl(240, 100%, 5%)",
				"gold-yellow": "hsl(35, 77%, 62%)",
				"dark-grey": "hsl(236, 13%, 42%)",
				tomato: "hsl(5, 85%, 63%)",
			},
			height: {
				0.5: "0.2px",
			},
			width: {
				"11.5/12": "100%",
			},
			maxWidth: {
				"2xs": "270px",
			},

			container: {
				screens: {
					xl: "1280px",
				},
			},
		},
	},
	plugins: [],
};
