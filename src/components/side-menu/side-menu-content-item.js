import React from 'react'
import Link from 'gatsby-link'

const SideMenuContentItem = props => {
  const handleSideMenuSelect = () => {
    props.handleSideMenuSelect(props.label)
  }

  const selectedStyle = () => (
    props.active ? {color: '#ffffffeb'} : { color: '#babebf85'}
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
