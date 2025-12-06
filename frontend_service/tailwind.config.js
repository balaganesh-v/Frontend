/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // App router files
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Support any components placed under app
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    // Support pages moved into app/pages
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // Public and other folders if needed
    './public/**/*.{html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}