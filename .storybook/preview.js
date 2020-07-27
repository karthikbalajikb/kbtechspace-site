import React from 'react'
import { action } from '@storybook/addon-actions'
import { addDecorator, addParameters } from '@storybook/react'
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { createGlobalStyle, ThemeProvider } from 'styled-components'

// components
import { Flexbox } from '../src/styles/styled'

// theme configuration
import { theme } from '../src/utils/theme'

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}

const GlobalStyle = createGlobalStyle`
      html {
        --surface-main: ${({ theme }) => theme.surface.main};
        --on-surface-light: ${({ theme }) => theme.onSurface.light};
        --on-surface-main: ${({ theme }) => theme.onSurface.main};
        --hover-surface-light: ${({ theme }) => theme.hoverSurface.light};
        --hover-surface-main: ${({ theme }) => theme.hoverSurface.main};
        --primary-main: ${({ theme }) => theme.primary.main};
        --primary-dark: ${({ theme }) => theme.primary.dark};
        --secondary-main: ${({ theme }) => theme.secondary.main};
        --gray-scale-600: ${({ theme }) => theme.grayScale[600]};
        --box-shadow-sm: ${({ theme }) => theme.boxShadow.sm};
        --box-shadow-md: ${({ theme }) => theme.boxShadow.md};
        --box-shadow-mdActive: ${({ theme }) => theme.boxShadow.mdActive};
        --border-radius-none: ${({ theme }) => theme.borderRadius.none};
        --border-radius-sm: ${({ theme }) => theme.borderRadius.sm};
        --border-radius-default: ${({ theme }) => theme.borderRadius.default};
        --border-radius-md: ${({ theme }) => theme.borderRadius.md};
        --border-radius-lg: ${({ theme }) => theme.borderRadius.lg};
        --border-radius-rounded: ${({ theme }) => theme.borderRadius.rounded};
        -webkit-tap-highlight-color: transparent;
      }
    `

const themes = [theme.dark, theme.light];
addDecorator(withThemesProvider(themes));

addDecorator(storyFn => (
  <ThemeProvider theme={theme.dark}>
    <GlobalStyle />
    <Flexbox mt={50} ml={50}>{storyFn()}</Flexbox>
  </ThemeProvider>
))

addParameters({
  backgrounds: [
    { name: 'dark', value: '#171D1E', default: true },
    { name: 'light', value: '#e4ebf5' },
  ],
})
