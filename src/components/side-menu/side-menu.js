import React from 'react'
import SideMenuHeader from './side-menu-header'
import SideMenuContent from './side-menu-content'
import SideMenuFooter from './side-menu-footer'
import './side-menu.scss'
const SideMenu = ({logo}) => (
  <nav  className="side-menu">
    <SideMenuHeader  logo={logo}/>
    <SideMenuContent />
    <SideMenuFooter />
  </nav>
)

export default SideMenu;
