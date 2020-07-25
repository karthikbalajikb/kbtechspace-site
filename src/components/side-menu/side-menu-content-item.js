import React from 'react'
import Link from 'gatsby-link'

import * as defaultTheme from '../../utils/theme'

const SideMenuContentItem = props => {
  const handleSideMenuSelect = () => {
    props.handleSideMenuSelect(props.label)
  }

  const selectedStyle = () =>
    props.active
      ? {
          boxShadow: `${defaultTheme.theme[props.theme].boxShadow.inner}`,
          color:
            props.theme === 'dark'
              ? `${defaultTheme.theme[props.theme].primary.dark}`
              : `${defaultTheme.theme[props.theme].secondary.main}`,
        }
      : {}

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
