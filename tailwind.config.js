/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  // plugins: [require('flowbite/plugin')],
  safelist: [
    {
      pattern: /(bg|text|border)-blue-500/,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
