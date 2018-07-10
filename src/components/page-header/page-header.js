import React from 'react'
import './page-header.scss'

const PageHeader = props => (
  <h1 className="kbts-page-header">
    {' '}
    <i className={props.logo} /> {props.title}
  </h1>
)

export default PageHeader
