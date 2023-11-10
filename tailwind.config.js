/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {

    extend: {
      fontFamily: {
        sans: ['Ubuntu Mono', 'monospace'],
      },
      boxShadow: {
        'md-green': '0 3px 3px -5px #378B29, 0 2px 5px #74D680',
        'bar-shadow': 'inset 0 1px 2px rgba(0,0,0,0.2), 0 1px rgba(255,255,255,.4)'
      },
      keyframes: {
        animatedgradient: {
          '0%': {
            backgroundPosition: '0% 50%',
            boxShadow: '0 3px 3px -5px #378B29, 0 2px 5px #74D680',
          },
          '50%': {
            backgroundPosition: '100% 50%',
            boxShadow: '0 3px 12px -5px #74D680, 0 2px 3px #378B29',
          },
          '100%': {
            backgroundPosition: '0% 50%',
            boxShadow: '0 3px 3px -5px #378B29, 0 2px 5px #74D680',
          },
        },

      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}

