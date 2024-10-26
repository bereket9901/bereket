/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },
    },
  },
  plugins: [],
}

