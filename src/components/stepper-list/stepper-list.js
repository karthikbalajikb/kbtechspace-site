import React from 'react'
import './stepper-list.scss';

const StepperList = props => (
  <article className="kbts-stepper-list">
    <h3 className="kbts-stepper-list-header-title">{props.title}</h3>
    <p><i className="kbts-stepper-list-icon fas fa-laptop"></i></p>
    {props.jobs.map(d => (
      <div className="kbts-stepper-list-item">
        <p className="kbts-stepper-list-item-label">{d.duration}</p>
        <p className="kbts-stepper-list-item-title">{d.role}</p>
        <p className="kbts-stepper-list-item-subtext">{d.company}</p>
        <p className="kbts-stepper-list-item-description">{d.description}</p>
      </div>
    ))}
  </article>
)

export default StepperList
