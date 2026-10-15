/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: '#780707',
        crimson: '#B91F20',
        ivory: '#F7F2EB',
        ink: '#171313',
        rose: '#D9AAA4',
      },
      fontFamily: {
        display: ['Anton', 'Bebas Neue', 'Impact', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
