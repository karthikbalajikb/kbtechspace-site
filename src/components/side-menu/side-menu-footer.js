import React from 'react'
import Link from 'gatsby-link'

import './side-menu.scss'

const SideMenuFooter = () => (
    <footer className="kbts-site-footer">
        <div className="kbts-site-footer-social">
            <div className="kbts-site-footer-social-fb-icon"></div>
            <div className="kbts-site-footer-social-insta-icon"></div>
            <div className="kbts-site-footer-social-twitter-icon"></div>
            <div className="kbts-site-footer-social-linkedin-icon"></div>
        </div>
        <div> &copy; 2018 KB TechSpace </div>
    </footer>
)

export default SideMenuFooter;