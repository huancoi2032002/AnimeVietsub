/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        philosopher: ['Philosopher', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeightNav: {
        bold700: '700',
      },
      fontSize: {
        '20px': '20px',
      },
      lineHeight: {
        '22.4px': '22.4px',
        normal: 'normal',
      },
      colors: {
        'bgnav': '#002F5C',
        'custom-light-blue': '#9FF',
        'blue-primary-600': '#003F7D',
        'customColor': '#99FFFF',
        cyan: '#99FFFF',
        white: '#FFF',
        black: '#000',

        //background
        'blue-background': '#002F5CCC',
        'secondary-background': '#4E95DBB2',
        'footer-background': '#002549CC',

        //blue
        'blue-50': '#E6EEF7',
        'blue-300': '#6698CA',
        'blue-400': '#3376B8',
        'blue-500': '#0054A6',
        'blue-600': '#003F7D',

        //gray
        'gray-50': '#F0F0F0',
        'gray-200': '#C2C2C2',
        'gray-400': '#858585',
        'gray-500': '#666666',
        'gray-600': '#4D4D4D',
        'gray-700': '#333333',
      },
      height: {
        'h-nav': '120px',
        'h-slider': '516px',
        'h-img-slider': '531px',
      },
      width: {
        'w-slider': '1530px',
        'w-slides': '1134px;',
        'w-img-slider': '377px',
      },
      backgroundColor: {
        'bgDocument': '#6587A9'
      },
      padding: {
        'custom': '20px 519px 20px 531px',
      },
      gap: {
        'gap-nav': '80px;'
      },
      lineClamp: {
        3: '3',
      },
      screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  screens: {
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
}