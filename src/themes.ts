const baseTheme = {
  text: {
    variants: {
      size: {
        small: {
          fontSize: 12,
        },
        medium: {
          fontSize: 16,
        },
        large: {
          fontSize: 20,
        },
      },
    },
  },
} as const;

export const lightTheme = {
  ...baseTheme,
  colors: {
    typography: '#000000',
    background: '#ffffff',
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;

export const darkTheme = {
  ...baseTheme,
  colors: {
    typography: '#ffffff',
    background: '#000000',
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;
