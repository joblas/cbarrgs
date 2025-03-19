/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        dark: "#1a1a1a",
        light: "#ffffff",
        accent: "#ff3c00",
        'brand-orange': '#FFA500',
      },
      backgroundImage: {
        'texture': "url('/texture.png')",
      },
    },
  },
  plugins: [],
}
