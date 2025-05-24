/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          50:  '#F4F6FF',
          100: '#E0E4FF',
          200: '#C2C6FF',
          300: '#A3A7FF',
          400: '#8589FF',
          500: '#6C63FF',
          600: '#554FCC',
          700: '#3E3999',
          800: '#282466',
          900: '#131033',
        },
        primaryLight: {
          DEFAULT: '#8B7AFF',
          100: '#F6F4FF',
          200: '#E3DEFF',
          300: '#CFC7FF',
          400: '#BBB0FF',
          500: '#8B7AFF',
          600: '#6B5FCC',
          700: '#4B4499',
          800: '#2B2966',
          900: '#0B0E33',
        },
        orange: '#FD6D22',
        heading: '#1F2937',
        muted: '#9CA3AF',
        grayDark: '#6B7280',
        grayDarker: '#374151',
      },
      fontSize: {
        'heading-1': '42px',
        'heading-2': '24px',
        'body': '16px',
        'caption': '14px',
      },
    }
  },
  plugins: []
}
