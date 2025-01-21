/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},

		colors: {
		primary: 'hsl(var(--primary))',
		secondary: 'hsl(var(--secondary))',
		// Add more custom colors as needed
		background: 'hsl(var(--background))',
		foreground: 'hsl(var(--foreground))',
		card: 'hsl(var(--card))',
		cardForeground: 'hsl(var(--card-foreground))',
		// ... other colors
		},
  	},
  	colors: {
            ...colors,
  		// primary: 'colors.purple',
  		// secondary: 'colors.pink'
  	},
  	fontFamily: {
  		cursiveLogo: [
  			'Mrs Saint Delafield',
  			'serif'
  		],
  		Varela: [
  			'Varela Round',
  			'serif'
  		]
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
