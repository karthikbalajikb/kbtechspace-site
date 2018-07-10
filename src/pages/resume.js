import React from 'react'
import Link from 'gatsby-link'

import PageHeader from '../components/page-header/page-header'
import StepperList from '../components/stepper-list/stepper-list'

const jobs = [
  {
    duration: 'May 2015 - CURRENT',
    role: 'Senior System Engineer',
    company: 'Infosys',
    description: 'Passion alone drive me',
  },
  {
    duration: '2016 - 2017',
    role: 'Freelancer',
    company: 'Mercury Minds',
    description: 'Worked on real time framework for chat module, notifications using nodejs+socket.IO',
  },
  {
    duration: '2013 - 2015',
    role: 'Cloud Intern',
    company: 'In2hrs.com',
    description: 'Worked on hybrid mobile application for training scheduling using ionic framework and also played around CMS tools like wordpress, prestashop and cloud infrastucture using Amazon web services',
  },
]

const Resume = () => (
  <section>
    <PageHeader title="resume" logo="fas fa-id-card-alt" />
    <StepperList title="WORK HISTORY" jobs={jobs} />
  </section>
)

export default Resume
