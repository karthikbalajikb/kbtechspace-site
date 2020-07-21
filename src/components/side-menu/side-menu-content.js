import React from 'react'
import Link from 'gatsby-link'

import './side-menu.scss'

import SideMenuContentItem from './side-menu-content-item'

class SideMenuContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sideMenuData: [
        { label: 'HOME', path: '/', class: 'home', active: false },
        { label: 'ABOUT', path: '/about/', class: 'about', active: false },
        { label: 'BLOG', path: '/blog/', class: 'blog', active: false },
        { label: 'PROFILE', path: '/profile/', class: 'resume', active: false },
        { label: 'DASHBOARD', path: '/dashboard/', class: 'dashboard', active: false },
      ],
    }
  }

  componentDidMount() {
    const path = `/${this.props.defaultpath.split('/')[1]}/`
    const pathname = path !== '//' ? path : '/'

    let setSelected = this.state.sideMenuData.findIndex(
      d => d.path === pathname
    )

    if (setSelected.length !== 0) {
      this.setState({
        ...this.state,
        ...(this.state.sideMenuData[setSelected].active = true),
      })
    }
  }

  componentWillUnmount() {}

  handleSideMenuSelect = lbl => {
    let setSelected = this.state.sideMenuData
      .filter(d => d.label === lbl)
      .map(m => (m.active = true))
    let setOthersToDefault = this.state.sideMenuData
      .filter(d => d.label !== lbl)
      .map(m => (m.active = false))
      this.props.toggleSideMenu()
  }

  render() {
    return (
      <section className="sideMenuContent">
        {this.state.sideMenuData.map(d => (
          <SideMenuContentItem
            key={d.label}
            label={d.label}
            pathname={d.path}
            cls={d.class}
            active={d.active}
            handleSideMenuSelect={this.handleSideMenuSelect}
          />
        ))}
      </section>
    )
  }
}

export default SideMenuContent
