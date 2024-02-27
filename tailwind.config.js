/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '10px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1366px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
