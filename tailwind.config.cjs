/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: 'hsl(4,100%,67%)',
					neutral: 'hsl(231, 7%, 60%)',
					'base-100': 'hsl(234, 29%, 20%)',
					'base-200': 'hsl(235, 18%, 26%)',
					white: 'hsl(0, 0%, 100%)',
				},
			},
			'sunset',
			'garden',
		],
	},
};
