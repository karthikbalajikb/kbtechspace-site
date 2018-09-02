import React from 'react'
import Link from 'gatsby-link'

import PageHeader from '../components/page-header/page-header'
import StepperList from '../components/stepper-list/stepper-list'
import SliderList from '../components/SliderList/slider-list'
import Ribbon from '../components/Ribbon/ribbon'

import '../pageCSS/resume.scss'

const jobs = [
  {
    duration: 'July 2018 - CURRENT',
    role: 'Technology Analyst',
    company: 'Infosys',
    description: 'Passion alone drive me',
    markCurrent: true,
  },
  {
    duration: 'May 2017 - July 2018',
    role: 'Senior System Engineer',
    company: 'Infosys',
    description: 'Passion alone drive me',
  },
  {
    duration: 'May 2015 - May 2017',
    role: 'System Engineer',
    company: 'Infosys',
    description: 'Passion alone drive me',
  },
  {
    duration: '2016 - 2017',
    role: 'Freelancer',
    company: 'Mercury Minds',
    description:
      'Worked on real time framework for chat module, notifications using nodejs+socket.IO',
  },
  {
    duration: '2013 - 2015',
    role: 'Cloud Intern',
    company: 'In2hrs.com',
    description:
      'Worked on hybrid mobile application for training scheduling using ionic framework and also played around CMS tools like wordpress, prestashop and cloud infrastucture using Amazon web services',
  },
]

const eduction = [
  {
    duration: '2011 - 2015',
    role: 'B.E in Computer science',
    company: 'panimalar engineering college',
    description: 'Graduated in first class with 8.2 CGPA',
  },
]

const Resume = () => (
  <section className="kbts-page-resume">
    <PageHeader title="resume" logo="fas fa-id-card-alt" />
    <div className="kbts-page-resume-content">
      <StepperList title="WORK HISTORY" icon="fa-laptop" jobs={jobs} />
      <article className="kbts-page-resume-skills">
        <Ribbon title="coding skills" />
        <SliderList text="HTML5" value="100" />
        <SliderList text="CSS3" value="90" />
        <SliderList text="React" value="90" />
        <SliderList text="Angular" value="90" />
        <SliderList text="NodeJS" value="70" />

        <Ribbon title="Standards & Patterns" />
        <SliderList text="ES6" value="100" />
        <SliderList text="REDUX" value="80" />

        <Ribbon title="Cloud" />
        <SliderList text="Amazon web services" value="70" />

        <Ribbon title="Build tools" />
        <SliderList text="Webpack" value="100" />
        <SliderList text="Rollup" value="80" />

        <Ribbon title="CMS" />
        <SliderList text="Wordpress" value="80" />
        <SliderList text="WooCommerce" value="90" />

        <Ribbon title="External Services" />
        <SliderList text="IBM Watson" value="80" />
        <SliderList text="Google API" value="70" />
        <SliderList text="Facebook API" value="80" />
        <SliderList text="Twilio API" value="70" />
      </article>
      <StepperList title="EDUCATION" icon="fa-graduation-cap" jobs={eduction} />
    </div>
  </section>
)

export default Resume
