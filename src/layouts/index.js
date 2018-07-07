import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import SideMenu from '../components/side-menu/side-menu'
import Header from '../components/header'
import './index.scss'
import favicon from '../../assets/logo.jpg'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Blog' },
        { name: 'keywords', content: 'Blog, Javascript, ES6, Learn, Guide, Personal,' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/jpg', href: `${favicon}` }
    ]}
    />
    <div className="kbts-site-container">
      <SideMenu logo={data.headerImage.sizes}/>
      <main className="site-main-content">{children()}</main>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
      }
    }

    headerImage: imageSharp(id: { regex: "/logo/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
