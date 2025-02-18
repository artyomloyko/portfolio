type ThemeFunction = (path: string) => string;

export const createTypographyTheme = (theme: ThemeFunction) => ({
  DEFAULT: {
    css: {
      color: theme('colors.gray.700'),
      a: {
        color: theme('colors.gray.700'),
        '&:hover': {
          color: theme('colors.gray.700'),
        },
        code: { color: theme('colors.primary.400') },
      },
      h1: {
        fontWeight: '700',
        letterSpacing: theme('letterSpacing.tight'),
        color: theme('colors.gray.900'),
      },
      h2: {
        fontWeight: '700',
        letterSpacing: theme('letterSpacing.tight'),
        color: theme('colors.gray.900'),
      },
      h3: {
        fontWeight: '600',
        color: theme('colors.gray.900'),
      },
      'h4,h5,h6': {
        color: theme('colors.gray.900'),
      },
      code: {
        color: theme('colors.green.500'),
        backgroundColor: theme('colors.gray.100'),
        paddingLeft: '4px',
        paddingRight: '4px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '0.25rem',
      },
      'code:before': {
        content: 'none',
      },
      'code:after': {
        content: 'none',
      },
      strong: { color: theme('colors.gray.600') },
    },
  },
  dark: {
    css: {
      color: theme('colors.gray.300'),
      a: {
        color: theme('colors.gray.300'),
        '&:hover': {
          color: theme('colors.gray.300'),
        },
        code: { color: theme('colors.primary.400') },
      },
      h1: {
        color: theme('colors.gray.100'),
      },
      h2: {
        color: theme('colors.gray.100'),
      },
      h3: {
        color: theme('colors.gray.100'),
      },
      'h4,h5,h6': {
        color: theme('colors.gray.100'),
      },
      code: {
        backgroundColor: theme('colors.gray.800'),
      },
      strong: { color: theme('colors.gray.100') },
    },
  },
});