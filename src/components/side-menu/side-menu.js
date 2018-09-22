import React from 'react'
import SideMenuHeader from './side-menu-header'
import SideMenuContent from './side-menu-content'
import SideMenuFooter from './side-menu-footer'
import './side-menu.scss'
const SideMenu = (props) => (
  <nav  className="side-menu">
    <SideMenuHeader  logo={props.logo}/>
    <SideMenuContent defaultpath={props.pathname} toggleSideMenu={props.toggleSideMenu}/>
    <SideMenuFooter />
  </nav>
)

export default SideMenu;
