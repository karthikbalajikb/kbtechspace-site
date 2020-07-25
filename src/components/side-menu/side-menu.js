import React from 'react'

import Button from '../Button';

import SideMenuHeader from './side-menu-header'
import SideMenuContent from './side-menu-content'
import SideMenuFooter from './side-menu-footer'

import { Flexbox } from '../../styles/styled'

import './side-menu.scss'

const SideMenu = ({ onSwitchTheme, ...props }) => (
  <nav  className="side-menu">
    <SideMenuHeader  logo={props.logo}/>
    <SideMenuContent defaultpath={props.pathname} toggleSideMenu={props.toggleSideMenu} theme={props.theme} />
    <Flexbox justifyContent="center" mt={50}>
      <Button label={props.theme} onClick={onSwitchTheme} />
    </Flexbox>
    <SideMenuFooter />
  </nav>
)

export default SideMenu;
