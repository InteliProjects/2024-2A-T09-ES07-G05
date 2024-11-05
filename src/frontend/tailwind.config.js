/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'vermelho-1': '#E31836', 
        'vermelho-2': '#F21B54', 
        'azul-1': '#00195C', 
        'azul-2': '#032169', 
        'claro-1': '#F2F2F2', 
        'claro-2': '#FFFFFF', 
        'escuro-1': '#141828',
        'escuro-2': '#1C2336', 
      },
      boxShadow: {
        'sombra': '0px 2px 10px 2px rgba(0, 0, 0, 0.15)',
        'sombra2': '0px 2px 4px 2px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
