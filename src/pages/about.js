import React from 'react'

import Layout from '../components';
import PageHeader from '../components/page-header/page-header'
import Ribbon from '../components/Ribbon/ribbon'
import ServiceCard from '../components/ServiceCard/service-card'
import Pipeline from '../components/Pipeline/Pipeline';

import '../pageCSS/about.scss'

const About = ({ data }) => (
  <Layout pathname={'/about/'}>
  <section className="kbts-page-about">
    <PageHeader title="about me" logo="fas fa-user-secret" />
    <div className="kbts-page-about-ribbon">
      <Ribbon title="I Can Help You With" />
    </div>
    <section className="kbts-page-about-service">
      {data.allAboutJson.edges.map(d => <ServiceCard data={d.node} />)}
    </section>
    <div className="kbts-page-about-ribbon">
      <Ribbon title="Work Process" />
    </div>
    <section className="kbts-page-about-work-progress" >
      <Pipeline title="Idea" classname="" icon="fa-lightbulb" />
      <Pipeline title="Design" classname="" icon="fa-pencil-alt" />
      <Pipeline title="Develop" classname="" icon="fab fa-connectdevelop" />
      <Pipeline title="Test" classname="" icon="fa-mobile-alt" />
      <Pipeline title="Launch" classname="" icon="fa-rocket"/>
      <Pipeline title="Make it better" classname="end" icon="fa-retweet" />
      </section>
  </section>
  </Layout>
)

export default About

export const query = graphql`
  query serviceCardData {
    allAboutJson {
      edges {
        node {
          title
          description
          icon
        }
      }
    }
  }
`
