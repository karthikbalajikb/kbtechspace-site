import React from 'react'
import { action } from '@storybook/addon-actions'
import StepperList from './stepper-list'

export default {
  title: 'Design System/Molecules/StepperList',
  component: StepperList,
}

const jobs = [
  {
    duration: 'July 2020 - CURRENT',
    role: 'Software Engineer II - Front End',
    company: 'Ally.io',
    description:
      'Helping Ally OKR system to provide best user experience to our customers',
    link: 'https://ally.io/',
    markCurrent: true,
  },
  {
    duration: 'November 2018 - July 2020',
    role: 'Software Engineer - Front End',
    company: 'Auzmor',
    description: 'Built Auzmor Learn (LMS) a SaaS Product UI from ground up',
    link: 'https://learn.auzmor.com/',
  },
  {
    duration: 'July 2018 - November 2018',
    role: 'Technology Analyst',
    company: 'Infosys',
    description:
      'Architected context setting and propagation library (CRUST) , which helps in propagating the context data between different tabs and across domains (since different projects run on different sub domain)',
  },
]

export const Stepper = () => (
  <StepperList title="WORK HISTORY" icon="fa-laptop" jobs={jobs} />
)
