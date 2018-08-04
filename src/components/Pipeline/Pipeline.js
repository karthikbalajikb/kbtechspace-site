import React from 'react'

import './Pipeline.scss'

const Pipeline = (props) => (
  <div className="kbts-pipeline">
    <p className="kbts-pipeline-img"> <i className={`fas ${props.icon}`}></i> </p>
    <p className={`kbts-pipeline-text${props.classname}`}>{props.title}</p>
  </div>
) 

export default Pipeline
