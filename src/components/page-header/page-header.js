import React from 'react'

import './page-header.scss'
import '../../styles/animation.scss'

const PageHeader = props => (
  <h1 className="kbts-page-header animated expand">
    {' '}
    <i className={props.logo} /> {props.title}
  </h1>
)

export default PageHeader
