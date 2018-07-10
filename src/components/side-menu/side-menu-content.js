import React from 'react'
import Link from 'gatsby-link'

import './side-menu.scss'

const SideMenuContent = () => (
  <section className="sideMenuContent">
    <div className="sideMenuContent-item">
      <Link className="sideMenuContent-item-home" to="/page-2/">
        <div className="sideMenuContent-item-home-icon" />HOME
      </Link>
    </div>
    <div className="sideMenuContent-item">
      <Link className="sideMenuContent-item-about" to="/page-2/">
      <div className="sideMenuContent-item-about-icon" />
        ABOUT ME
      </Link>
    </div>
    <div className="sideMenuContent-item">
      <Link className="sideMenuContent-item-blog" to="/page-2/">
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

export default SideMenuContent
