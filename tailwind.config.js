/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
            fontFamily: {
              netflix: ['"Bebas Neue"', 'sans-serif'], // Add the Netflix-like font
            },
            columns: {
              4: '4', // Creates a `columns-4` utility
              2: '2', // Optional: For responsiveness
              1: '1', // Optional: For mobile screens
            },
            spacing: {
              4: '16px', // Creates spacing of 16px (gap between columns)
            },
            borderRadius: {
              sm: '8px', // Rounded corners (e.g., for images)
            },
      
    },
  },
  plugins: [
   
  ],
}