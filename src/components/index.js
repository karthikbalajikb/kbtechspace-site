import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import SideMenu from './side-menu/side-menu'
import Header from './header'
import './index.scss'
import favicon from '../../assets/logo.png'
import 'prismjs/themes/prism-tomorrow.css'

// const toggleSideMenu = () => {}

// export const Layout = ({ children, pathname }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//         headerImage: imageSharp(fluid: {originalName: {regex: "/logo/"}}) {
//           sizes(maxWidth: 1240) {
//             ...GatsbyImageSharpSizes
//           }
//         }
//       }
//     `}
//     render={data => (
//       <div className="kbts-site-container">
//         <SideMenu
//           logo={data.headerImage.sizes}
//           pathname={pathname}
//           toggleSideMenu={toggleSideMenu}
//         />
//         <section className="kbts-site-main">
//           <header className="kbts-site-header">
//             <a id="kbts-sidemenu-btn" className="kbts-site-header-menu" />
//             <a className="kbts-site-header-text">KB TECHSPACE</a>
//           </header>
//           <main className="site-main-content">{children}</main>
//         </section>
//       </div>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.func,
// }

// export default Layout

// export const query = graphql`
//   query SiteQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }

//     headerImage: imageSharp(id: { regex: "/logo/" }) {
//       sizes(maxWidth: 1240) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `

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
        '120px auto'
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
    const { pathname } = this.props
    return (
      <StaticQuery
        query={query}
        render={data => (
          <div>
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
                  <a className="kbts-site-header-text">KB TECHSPACE</a>
                </header>
                <main className="site-main-content">{this.props.children}</main>
              </section>
            </div>
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
