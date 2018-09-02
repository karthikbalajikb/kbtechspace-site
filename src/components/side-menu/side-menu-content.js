import React from 'react'
import Link from 'gatsby-link'

import './side-menu.scss'

class SideMenuContent extends React.Component {
  constructor() {
    super()
    // this.
  }

  componentDidMount() {
    let clsName = document.getElementsByClassName('sideMenuContent-item')
    for(let i=0; i< clsName.length; i++){
      clsName[i].addEventListener('click', this.handleClick)
    }
  }

  componentWillUnmount() {
    let clsName = document.getElementsByClassName('sideMenuContent-item')
    for(let i=0; i< clsName.length; i++){
      clsName[i].removeEventListener('click', this.handleClick)
    }
  }

  handleClick = evt => {
    console.log('clicked', evt.target.className)
  }

  render() {
    return (
      <section className="sideMenuContent">
        <div className="sideMenuContent-item">
          <Link className="sideMenuContent-item-home" to="/">
            <div className="sideMenuContent-item-home-icon" />HOME
          </Link>
        </div>
        <div className="sideMenuContent-item">
          <Link className="sideMenuContent-item-about" to="/about/">
            <div className="sideMenuContent-item-about-icon" />
            ABOUT ME
          </Link>
        </div>
        <div className="sideMenuContent-item">
          <Link className="sideMenuContent-item-blog" to="/blog/">
            <div className="sideMenuContent-item-blog-icon" />
            BLOG
          </Link>
        </div>
        <div className="sideMenuContent-item">
          <Link className="sideMenuContent-item-resume" to="/resume/">
            <div className="sideMenuContent-item-resume-icon" />
            RESUME
          </Link>
        </div>
      </section>
    )
  }
}

export default SideMenuContent
