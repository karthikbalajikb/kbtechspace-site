import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import SideMenu from './side-menu/side-menu'
import Header from './header'
import './index.scss'
import favicon from '../../assets/logo.png'
import 'prismjs/themes/prism-tomorrow.css'

import { theme } from '../utils/theme';

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

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sideMenu: 'closed',
      theme: 'light', // dark
    }
  }

  toggleSideMenu = () => {
    if (this.state.sideMenu === 'open') {
      document.getElementsByClassName('kbts-site-container')[0].style[
        'grid-template-columns'
      ] =
        'auto'
      this.setState({ sideMenu: 'closed' })
    } else if (this.state.sideMenu === 'closed') {
      document.getElementsByClassName('kbts-site-container')[0].style[
        'grid-template-columns'
      ] =
        '160px auto'
      this.setState({ sideMenu: 'open' })
    }
  }

  componentDidMount() {
    document
      .getElementById('kbts-sidemenu-btn')
      .addEventListener('click', this.toggleSideMenu)
  }

  componentWillUnmount() {
    document
      .getElementById('kbts-sidemenu-btn')
      .removeEventListener('click', this.toggleSideMenu)
  }

  render() {
    const GlobalStyle = createGlobalStyle`
      html {
        --surface-main: ${({ theme }) => theme.surface.main};
        --on-surface-light: ${({ theme }) => theme.onSurface.light};
        --on-surface-main: ${({ theme }) => theme.onSurface.main};
        --primary-main: ${({ theme }) => theme.primary.main};
        --primary-dark: ${({ theme }) => theme.primary.dark};
        --secondary-main: ${({ theme }) => theme.secondary.main};
        --box-shadow-sm: ${({ theme }) => theme.boxShadow.sm };
        --box-shadow-md: ${({ theme }) => theme.boxShadow.md };
        --box-shadow-mdActive: ${({ theme }) => theme.boxShadow.mdActive };
        --border-radius-none: ${({ theme }) => theme.borderRadius.none };
        --border-radius-sm: ${({ theme }) => theme.borderRadius.sm };
        --border-radius-default: ${({ theme }) => theme.borderRadius.default };
        --border-radius-md: ${({ theme }) => theme.borderRadius.md };
        --border-radius-lg: ${({ theme }) => theme.borderRadius.lg };
        --border-radius-rounded: ${({ theme }) => theme.borderRadius.rounded };

      }
    `;

    const { pathname } = this.props
    return (
      <StaticQuery
        query={query}
        render={data => (
          <ThemeProvider theme={theme[this.state.theme]}>
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
                  }
                ]}
                link={[
                  { rel: 'shortcut icon', type: 'image/jpg', href: `${favicon}` },
                ]}
              />
              <div className="kbts-site-container">
                <SideMenu
                  logo={data.headerImage.sizes}
                  pathname={pathname}
                  toggleSideMenu={this.toggleSideMenu}
                />
                <section className="kbts-site-main">
                  <header className="kbts-site-header">
                    <a id="kbts-sidemenu-btn" className="kbts-site-header-menu" />
                  </header>
                  <main className="site-main-content">{this.props.children}</main>
                </section>
              </div>
            </div>
          </ThemeProvider>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
