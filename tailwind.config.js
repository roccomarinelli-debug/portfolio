/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1CABE2',        // UNICEF iconic blue
        secondary: '#374EA2',       // UNICEF dark blue
        accent: '#FFC107',          // Warm accent
        background: '#ffffff',
        surface: '#F8FAFB',         // Very light blue-gray
        darkBlue: '#002E5D',        // Deep navy
        lightBlue: '#6EC1E4',       // Light UNICEF blue
        textPrimary: '#1a202c',     // Almost black
        textSecondary: '#4a5568',   // Medium gray
        orange: '#FF6B35',          // Warm accent
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
