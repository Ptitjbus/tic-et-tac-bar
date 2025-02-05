/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
      },
      colors: {
        'custom-orange':'#FF8000',
      }
    },
  },
  plugins: [],
}

