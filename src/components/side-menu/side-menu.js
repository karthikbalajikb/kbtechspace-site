import React from 'react'

import Button from '../Button';

import SideMenuHeader from './side-menu-header'
import SideMenuContent from './side-menu-content'
import SideMenuFooter from './side-menu-footer'

import { Flexbox } from '../../styles/styled'

import './side-menu.scss'

const SideMenu = ({ ...props }) => (
  <nav  className="side-menu">
    <SideMenuHeader  logo={props.logo}/>
    <SideMenuContent defaultpath={props.pathname} theme={props.theme} />
    <SideMenuFooter />
  </nav>
)

export default SideMenu;
