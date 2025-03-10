import tailwindAnimate from 'tailwindcss-animate';
import tailwindForms from '@tailwindcss/forms';
import tailwindTypography from '@tailwindcss/typography';
import tailwindScrollbar from 'tailwind-scrollbar';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import { Config } from 'tailwindcss';
import { baseTheme } from './src/constants/themes/base';
import { themeColors } from './src/constants/themes/colors';
import { createTypographyTheme } from './src/constants/themes/typography';

const config = {
  mode: 'jit',
  content: [
    './src/app/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
    './src/lib/**/*.ts',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      ...baseTheme,
      fontFamily: {
        sans: ['Mukta', ...defaultTheme.fontFamily.sans],
      },
      gradientColorStops: {
        'gradient-1-start': '#F20089',
        'gradient-1-end': '#D100D1',
        'gradient-2-start': '#D100D1',
        'gradient-2-end': '#A100F2',
        'gradient-3-start': '#A100F2',
        'gradient-3-end': '#2D00F7',
      },
      colors: {
        ...themeColors,
        'spotify-green': '#1DB954',
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      },
      typography: createTypographyTheme,
    },
  },
  plugins: [
    tailwindAnimate,
    tailwindForms,
    tailwindTypography(),
    tailwindScrollbar({ nocompatible: true }),
  ],
} satisfies Config;

export default config;
