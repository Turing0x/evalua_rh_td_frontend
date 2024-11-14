/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["SpaceGrotesk", "sans-serif"],
      },
      colors: {
        primary: '#2563eb',
        secondary: '#475569',
        red: '#ef4444',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
