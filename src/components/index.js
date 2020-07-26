import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

// components
import SideMenu from './side-menu/side-menu'

// hooks
import useLocalStorage from '../hooks/useLocalStorage'

// styles
import './index.scss'
import 'prismjs/themes/prism-tomorrow.css'

// assets
import favicon from '../../assets/logo.png'

// theme configuration
import { theme as themeConfig } from '../utils/theme'

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
  const [sideMenu, setSideMenu] = useState('closed')
  const { pathname } = props

  const toggleSideMenu = () => {
    if (sideMenu === 'open') {
      setSideMenu('closed')
      document.getElementsByClassName('kbts-site-container')[0].style[
        'grid-template-columns'
      ] = 'auto'
    } else if (sideMenu === 'closed') {
      setSideMenu('open')
      document.getElementsByClassName('kbts-site-container')[0].style[
        'grid-template-columns'
      ] = '160px auto'
    }
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
            <div className="kbts-site-container">
              <SideMenu
                logo={data.headerImage.sizes}
                pathname={pathname}
                toggleSideMenu={toggleSideMenu}
                theme={theme}
                onSwitchTheme={() => {
                  setCurrentTheme(theme === 'light' ? 'dark' : 'light')
                }}
              />
              <section className="kbts-site-main">
                <header className="kbts-site-header">
                  <a id="kbts-sidemenu-btn" className="kbts-site-header-menu" onClick={toggleSideMenu} />
                </header>
                <main className="site-main-content">{props.children}</main>
              </section>
            </div>
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
