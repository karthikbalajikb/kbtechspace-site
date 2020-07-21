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

export const theme = {
  light: {
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
      main: '#e6e7ed',
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
    boxShadow: {
      sm: '',
      md: '6px 6px 12px rgba(0,0,0,0.11), -6px -6px 12px #ffffff94',
      mdActive: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff94',
      lg: '8px 8px 16px 0px rgba(0, 0, 0, 0.06), -8px -8px 16px 0px #fff',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      inner: 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #ffffff',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
  },
  ...productColors,
}
