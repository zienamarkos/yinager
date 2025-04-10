/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // <- Next.js 13+ app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // <- for pages dir (if used)
    "./components/**/*.{js,ts,jsx,tsx}", // <- reusable components

  ],
  
  theme: {
    extend: {},
  },
  plugins: [],
}

