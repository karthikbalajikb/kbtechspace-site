import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import SideMenu from '../components/side-menu/side-menu'
import Header from '../components/header'
import './index.scss'
import favicon from '../../assets/logo.jpg'
import "prismjs/themes/prism-tomorrow.css"

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sideMenu: 'closed'
    }
  }

  toggleSideMenu = () => {
    if(this.state.sideMenu === 'open'){
      document.getElementsByClassName('kbts-site-container')[0].style['grid-template-columns'] = "auto";
      this.setState({sideMenu: 'closed'});
    }
    else if(this.state.sideMenu === 'closed'){
      document.getElementsByClassName('kbts-site-container')[0].style['grid-template-columns'] = "120px auto";
      this.setState({sideMenu: 'open'});
    }
  }

  componentDidMount(){
    document.getElementById('kbts-sidemenu-btn').addEventListener('click',this.toggleSideMenu);
  }

  componentWillUnmount(){
    document.getElementById('kbts-sidemenu-btn').removeEventListener('click',this.toggleSideMenu);
  }

  render(){
    return (
      <div>
      <Helmet
        title={this.props.data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Blog' },
          {
            name: 'keywords',
            content: 'Blog, Javascript, ES6, Learn, Guide, Personal,',
          },
          {
            name: 'theme-color',
            content: '#540a2f'
          }
        ]}
        link={[{ rel: 'shortcut icon', type: 'image/jpg', href: `${favicon}` }]}
      />
      <div className="kbts-site-container">
        <SideMenu logo={this.props.data.headerImage.sizes} />
        <section className="kbts-site-main">
          <header className="kbts-site-header">
            <a id="kbts-sidemenu-btn" className="kbts-site-header-menu" />
            <a className="kbts-site-header-text">KB TECHSPACE</a>
          </header>
          <main className="site-main-content">{this.props.children()}</main>
        </section>
      </div>
    </div>
    )
  }
}

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
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
