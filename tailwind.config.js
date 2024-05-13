module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // Adobe: Cup of coffee with heart shape smoke and coffee beans on burlap sack on old wooden background
        'coffee-100': '#F2E2CE',
        'coffee-200': '#D9A577',
        'coffee-300': '#A6754B',
        'coffee-400': '#734022',
        'coffee-500': '#261206',
        // Adobe: Espresso poruing from coffee machine at cafe
        'espresso-100': '#D9BCA3',
        'espresso-200': '#A6754B',
        'espresso-300': '#D9805F',
        'espresso-400': '#8C4A3B',
        'espresso-500': '#262225',
      },
      height: {
        svh: ['100vh /* fallback for Opera, IE and etc. */', '100svh'],
      }
    }
  },
  plugins: [],
}
