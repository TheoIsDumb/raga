/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  plugins: [require('flowbite/plugin')],
  safelist: [
    {
      pattern: /(bg|text|border)-(rose|blue|orange)-500/,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}