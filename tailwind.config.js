/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		fontFamily: {
			roboto: ['"Roboto Flex"', 'sans-serif'],
		},
		screens: {
			'3xl': '1920px',
		  },
	  },
	},
	plugins: [],
  }
  