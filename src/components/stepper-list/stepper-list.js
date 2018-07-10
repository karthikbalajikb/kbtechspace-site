import React from 'react'
import './stepper-list.scss';

const StepperList = props => (
  <article className="kbts-stepper-list">
    <h3>{props.title}</h3>
    <p><i className="kbts-stepper-list-icon fas fa-laptop"></i></p>
    {props.jobs.map(d => (
      <div>
        <p>{d.duration}</p>
        <p>{d.role}</p>
        <p>{d.company}</p>
        <p>{d.description}</p>
      </div>
    ))}
  </article>
)

export default StepperList
