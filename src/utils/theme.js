const productColors = {
  dark: {
    primary: {
      light: '#FF4F7B',
      main: '#FF3366',
      dark: '#EE2F5F',
    },
    onPrimary: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#FFFFFF',
    },
    secondary: {
      light: '#8c93a7',
      main: '#62687B',
      dark: '#494d5b',
    },
    onSecondary: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#FFFFFF',
    },
    background: {
      light: '#FFFFFF',
      main: '#F4F4F4',
      dark: '#E5E5E5',
    },
    onBackground: {
      light: '#5C5C5C',
      main: '#5C5C5C',
      dark: '#5C5C5C',
    },
    surface: {
      light: '#FFFFFF',
      main: '#F9F9F9',
      dark: '#000000',
    },
    onSurface: {
      light: '#000000',
      main: '#000000',
      dark: '#ffffff',
    },
    error: {
      light: '#FB3F41',
      main: '#E83739',
      dark: '#D93536',
    },
    onError: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#FFFFFF',
    },
  },
}

const grayScale = {
  100: '#f7fafc',
  200: '#edf2f7',
  300: '#e2e8f0',
  400: '#cbd5e0',
  500: '#a0aec0',
  600: '#718096',
  700: '#4a5568',
  800: '#2d3748',
  900: '#1a202c',
}

const shadowColor = {
  100: '#e4ebf5',
  200: '#c8d0e7',
  300: '#bec8e4',
  400: '#9baacf',
}

export const theme = {
  light: {
    transparent: 'transparent',
    primary: {
      light: '',
      main: '#fcde59',
      dark: '#f4d242',
    },
    onPrimary: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#1c262b',
    },
    secondary: {
      light: '',
      main: '#1c262b',
      dark: '',
    },
    onSecondary: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#FFFFFF',
    },
    background: {
      light: '#FFFFFF',
      main: '#F4F4F4',
      dark: '#E5E5E5',
    },
    onBackground: {
      light: '#5C5C5C',
      main: '#5C5C5C',
      dark: '#5C5C5C',
    },
    surface: {
      light: '#ffffff',
      main: '#e4ebf5',
      dark: '#000000',
    },
    onSurface: {
      light: '#919cb5',
      main: '#7482A2',
      dark: '#ffffff',
    },
    hoverSurface: {
      main: shadowColor[200],
    },
    error: {
      light: '#FB3F41',
      main: '#E83739',
      dark: '#D93536',
    },
    onError: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#FFFFFF',
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
    },
    boxShadow: {
      sm: `0.3rem 0.3rem 0.6rem ${shadowColor[200]}, -0.2rem -0.2rem 0.5rem #ffffff`,
      smActive: `0.3rem 0.3rem 0.6rem ${shadowColor[300]}, -0.2rem -0.2rem 0.5rem #ffffff`,
      // md: '6px 6px 12px rgba(0,0,0,0.11), -6px -6px 12px #ffffff94',
      md: `0.8rem 0.8rem 1.4rem ${shadowColor[200]}, -0.2rem -0.2rem 1.8rem #ffffff`,
      // mdActive: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff94',
      mdActive: `0.8rem 0.8rem 1.4rem ${shadowColor[300]}, -0.2rem -0.2rem 1.8rem #ffffff`,
      lg: '8px 8px 16px 0px rgba(0, 0, 0, 0.06), -8px -8px 16px 0px #fff',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      inner: `inset 2px 2px 5px ${shadowColor[200]}, inset -3px -3px 7px #ffffff`,
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    borderRadius: {
      none: '0',
      sm: '0.5rem',
      default: '1rem', // 16px
      md: '2rem',
      lg: '3rem',
      rounded: '50px',
      full: '9999px',
    },
  },
  ...productColors,
}
