/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00d4ff",
        secondary: "#1a1a2e",
        'neon-glow': '#00d4ff',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': {
            'text-shadow': '0 0 20px #00d4ff, 0 0 30px #00d4ff, 0 0 40px #00d4ff',
          },
          'to': {
            'text-shadow': '0 0 30px #00d4ff, 0 0 40px #00d4ff, 0 0 50px #00d4ff',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 