import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Layout from '../components'
import PageHeader from '../components/page-header/page-header'
import StepperList from '../components/stepper-list/stepper-list'
import SliderList from '../components/SliderList/slider-list'
import Ribbon from '../components/Ribbon/ribbon'

import favicon from '../../assets/logo.jpg'
import '../pageCSS/resume.scss'

const jobs = [
  {
    duration: 'November 2018 - CURRENT',
    role: 'Software Engineer - Front End',
    company: 'Auzmor',
    description: 'Passion alone drive me',
    markCurrent: true,
  },
  {
    duration: 'July 2018 - November 2018',
    role: 'Technology Analyst',
    company: 'Infosys',
    description: 'Passion alone drive me',
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

class Resume extends React.Component {
  getJSONLD = () => ({
    '@context': 'http://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kbtechspace.com/resume/`,
    },
    headline: `Karthik Balaji | Resume`,
    image: {
      '@type': 'ImageObject',
      url: `https://user-images.githubusercontent.com/8594076/45932661-210beb00-bf9d-11e8-892c-192e9bba6750.jpg`,
      height: 630,
      width: 1200,
    },
    author: {
      '@type': 'Person',
      name: 'Karthik Balaji',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KB TechSpace',
      logo: {
        '@type': 'ImageObject',
        url:
          'https://user-images.githubusercontent.com/8594076/45932661-210beb00-bf9d-11e8-892c-192e9bba6750.jpg',
        width: 257,
        height: 60,
      },
    },
    description: 'Know about my skills',
  })

  render() {
    return (
      <Layout pathname={'/resume/'}>
        <section className="kbts-page-resume">
          <Helmet defaultTitle={`Karthik Balaji | Resume`}>
            {/* title="Karthik Balaji | Resume" */}
            <meta
              name="description"
              content="Know about my technical skills"
              data-react-helmet="true"
            />
            <html lang="en" />
          </Helmet>
          <PageHeader title="resume" logo="fas fa-id-card-alt" />
          <div className="kbts-page-resume-content">
            <StepperList title="WORK HISTORY" icon="fa-laptop" jobs={jobs} />
            <article className="kbts-page-resume-skills">
              <Ribbon title="Web Technology" />
              <SliderList text="HTML5" value="100" />
              <SliderList text="CSS3" value="90" />
              <SliderList text="React" value="90" />
              <SliderList text="Angular" value="90" />
              <SliderList text="NodeJS" value="70" />

              <Ribbon title="Immersive Technology" />
              <SliderList text="Morzilla A-Frame" value="40" />
              <SliderList text="Vuforia" value="20" />
              <SliderList text="Google ARCore" value="10" />
              <SliderList text="Apple ARKit" value="10" />

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
            <StepperList
              title="EDUCATION"
              icon="fa-graduation-cap"
              jobs={eduction}
            />
          </div>
        </section>
      </Layout>
    )
  }
}

export default Resume
