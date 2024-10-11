import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        customGradientStart: '#763CAC', // Coral
        customGradientEnd: '#320F85', // DeepPink
        primary: 'var(--primary-color)',
      },
      fontFamily: {
        preahvihear: ['var(--preahvihear-font)', 'sans-serif'],
        poppins: ['var(--poppins-font)', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': 'black',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
          '-webkit-text-stroke-color': 'black',
        },
        '.text-stroke-primary': {
          '-webkit-text-stroke-color': 'var(--primary-color)',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
