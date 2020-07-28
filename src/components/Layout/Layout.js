import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

// components
import SideMenu from '../side-menu/side-menu'
import AppHeader from '../AppHeader'

// hooks
import useLocalStorage from '../../hooks/useLocalStorage'
import useMediaQuery from '../../hooks/useMediaQuery'

// styles
import './Layout.scss'
import 'prismjs/themes/prism-tomorrow.css'

// assets
import favicon from '../../../assets/logo.png'

// theme configuration
import { theme as themeConfig } from '../../utils/theme'

export const query = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
      }
    }
    headerImage: imageSharp(fluid: { originalName: { regex: "/logo/" } }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

const Layout = props => {
  const { theme, setCurrentTheme } = useLocalStorage()
  const { isMobile } = useMediaQuery()

  const { pathname } = props

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

  return (
    <StaticQuery
      query={query}
      render={data => (
        <ThemeProvider theme={themeConfig[theme]}>
          <div>
            <GlobalStyle />
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Blog' },
                {
                  name: 'keywords',
                  content: 'Blog, Javascript, ES6, Learn, Guide, Personal,',
                },
                {
                  name: 'theme-color',
                  content: '#540a2f',
                },
                {
                  name: 'google-site-verification',
                  content: 'hWW4kdk43dHsMIBS9TbQF0dD0AHI7IBzcMM1K4sEOmI',
                },
              ]}
              link={[
                { rel: 'shortcut icon', type: 'image/jpg', href: `${favicon}` },
              ]}
            />
            {/* main layout */}
            <LayoutContainer>
              {!isMobile && (
                <SideMenu
                  logo={data.headerImage.sizes}
                  pathname={pathname}
                  theme={theme}
                />
              )}
              <MainContainer>
                {/* App header */}
                <AppHeader
                  logo={data.headerImage.sizes}
                  pathname={pathname}
                  theme={theme}
                  onSwitchTheme={() => {
                    setCurrentTheme(theme === 'light' ? 'dark' : 'light')
                  }}
                />
                {/*  pages content  */}
                <main className="site-main-content">{props.children}</main>
              </MainContainer>
            </LayoutContainer>
          </div>
        </ThemeProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => `${theme.surface.main}`};

  @media (max-width: 760px) {
    grid-template-columns: auto;
  }
`

const MainContainer = styled.section`
  display: grid;
  grid-template-rows: 70px auto;
  background-color: ${({ theme }) => `${theme.surface.main}`};

  *::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(28, 38, 43, 0.2);
  }

  *::-webkit-scrollbar {
    width: 10px;
  }
`
