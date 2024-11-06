/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E0F2FF',   // Backgrounds or lighter areas
          DEFAULT: '#007ACC', // Main primary blue
          dark: '#005A9E'     // Darker blue for focus states
        },
        secondary: {
          light: '#D1E3FF',   // Lighter backgrounds or accents
          DEFAULT: '#5B9BD5', // Secondary blue for highlights
          dark: '#2C5F8A'     // Darker accents or borders
        },
        accent: {
          light: '#B3E5FC',   // Accent highlights
          DEFAULT: '#03A9F4', // Standard accent
          dark: '#0277BD'     // Dark accent shade
        },
        neutral: {
          light: '#F3F4F6',         // Light gray background areas
          DEFAULT: '#F0F4F8',       // Softer bright background (light blue/gray)
          dark: '#1F2937',          // Main text color (dark gray)
          text: '#111827',          // Darker text for titles or headers
        },
      },
    },
  },
  plugins: [],
}