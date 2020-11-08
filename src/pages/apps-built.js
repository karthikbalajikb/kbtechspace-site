import React from 'react'

import Layout from '../components/Layout/Layout'
import PageHeader from '../components/page-header/page-header'
import Ribbon from '../components/Ribbon/ribbon'
import HorizontalCard from '../components/HorizontalCard'

import '../pageCSS/apps-built.scss'

const AppsBuilt = ({ data }) => (
  <Layout pathname={'/apps-built/'}>
    <section className="kbts-page-apps-built">
      <PageHeader title="Apps Built" logo="fas fa-rocket" />
      <div className="kbts-page-apps-built-ribbon">
        <Ribbon title="Apps I've worked on" />
      </div>

      <section className="kbts-page-apps-built__list">
        {data.allAppsBuiltJson.edges.map(data => (
         <HorizontalCard {...data.node} />
        ))}
      </section>
    </section>
  </Layout>
)

export default AppsBuilt

export const query = graphql`
  query appsBuiltData {
    allAppsBuiltJson {
      edges {
        node {
          id
          title
          subTitle
          description
          logo
          linkUrl
        }
      }
    }
  }
`
