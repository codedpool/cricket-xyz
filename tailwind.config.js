/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#6a8764',
        'custom-gray': '#f1f4f0',
      },
    },
  },
  plugins: [],
}
