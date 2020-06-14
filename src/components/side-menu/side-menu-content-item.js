import React from 'react'
import Link from 'gatsby-link'

const SideMenuContentItem = props => {
  const handleSideMenuSelect = () => {
    props.handleSideMenuSelect(props.label)
  }

  const selectedStyle = () => (
    props.active ? {color: 'rgb(255, 222, 89)'} : { color: '#f2f6f9'}
  );

  return (
    <Link className={`sideMenuContent-item-${props.cls}`} to={props.pathname}>
      <div className="sideMenuContent-item" onClick={handleSideMenuSelect} style={selectedStyle()}>
        <div className={`sideMenuContent-item-${props.cls}-icon`} />
        {props.label}
      </div>
    </Link>
  )
}

export default SideMenuContentItem
