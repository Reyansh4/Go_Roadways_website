/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: '#2E8B57',
        secondary: '#F8F8F8',
        accent: '#FF6B35',
        error: '#FF6B6B',
        success: '#2E8B57',
        warning: '#FF6B35',
        
        // Light Theme Colors
        light: {
          background: '#FFFFFF',
          surface: '#F8F8F8',
          card: '#FFFFFF',
          textPrimary: '#333333',
          textSecondary: '#666666',
          textTertiary: '#999999',
          border: '#EEEEEE',
          borderLight: '#F5F5F5',
          shadow: '#000000',
        },
        
        // Dark Theme Colors
        dark: {
          background: '#1A1A1A',
          surface: '#2A2A2A',
          card: '#2A2A2A',
          textPrimary: '#FFFFFF',
          textSecondary: '#CCCCCC',
          textTertiary: '#999999',
          border: '#333333',
          borderLight: '#444444',
          shadow: '#000000',
        },
      },
    },
  },
  plugins: [],
};
