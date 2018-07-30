import React from 'react'

import PageHeader from '../components/page-header/page-header'
import Ribbon from '../components/Ribbon/ribbon'
import ServiceCard from '../components/ServiceCard/service-card'
import '../pageCSS/about.scss'

const About = ({ data }) => (
  <section className="kbts-page-about">
    <PageHeader title="about me" logo="fas fa-user-secret" />
    <div className="kbts-page-about-ribbon">
      <Ribbon title="Services" />
    </div>
    <section className="kbts-page-about-service">
      {data.allAboutJson.edges.map(d => <ServiceCard data={d.node} />)}
    </section>
  </section>
)

export default About

export const query = graphql`
  query serviceCardData {
    allAboutJson {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`
