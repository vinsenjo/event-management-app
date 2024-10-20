/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {colors:{
      pink: '#f843c5',
      purple: '#4f0e70',
      blue:'#211555',
      lightBlue :'#503efe',
      backgorund: '#0b0319'

    }},
  },
  plugins: [],
}

