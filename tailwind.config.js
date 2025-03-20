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
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        accent: "#FFFFFF",
        muted: "rgba(255, 255, 255, 0.7)",
      },
      backgroundImage: {
        'texture': "url('/texture.png')",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
