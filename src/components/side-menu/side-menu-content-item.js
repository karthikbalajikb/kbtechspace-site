import React from 'react'
import Link from 'gatsby-link'

import * as defaultTheme from '../../utils/theme';

const SideMenuContentItem = props => {
  const handleSideMenuSelect = () => {
    props.handleSideMenuSelect(props.label)
  }

  const selectedStyle = () =>
    props.active ? { boxShadow: `${defaultTheme.theme.light.boxShadow.inner}`, color: `${defaultTheme.theme.light.secondary.main}` } : {}

  return (
    <Link className={`sideMenuContent-item-${props.cls}`} to={props.pathname}>
      <div
        className="sideMenuContent-item"
        onClick={handleSideMenuSelect}
        style={selectedStyle()}
      >
        <div className={`sideMenuContent-item-${props.cls}-icon`} />
        {props.label}
      </div>
    </Link>
  )
}

export default SideMenuContentItem
