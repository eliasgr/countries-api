/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			'blue-1': '#2B3945', // Dark Mode Elements
			'blue-2': '#202C37', // Dark Mode Background
			'blue-3': '#111517', //Light Mode Text
			'gray-1': '#FAFAFA', // Light Mode Background
			'gray-2': '#858585', // Light Mode Input
			white: '#FFFFFF', //Dark Mode Text & Light Mode Elements
		},
		fontFamily: {
			'nunito-sans': ['Nunito Sans', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
};
