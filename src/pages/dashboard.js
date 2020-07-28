import React, { useState, useEffect } from 'react'
import moment from 'moment'

import Layout from '../components/Layout/Layout'
import PageHeader from '../components/page-header/page-header'
import Ribbon from '../components/Ribbon/ribbon'
import StatsCard from '../components/StatsCard'

import '../pageCSS/dashboard.scss'

const Dashboard = ({ data }) => {
  // Client-side Runtime Data Fetching
  const [allTimeStats, setAllTimeStats] = useState(0);
  const [todayStats, setTodaytats] = useState(0);
  const today = moment().format('YYYY-MM-DD')

  useEffect(() => {
    // get data from GitHub api
    fetchGAAlltimeData()
    fetchGATodayData()
  }, [])

  const fetchGAAlltimeData = async () => {
    const rawData = await fetch(
      `https://us-central1-kbtechspace-8907.cloudfunctions.net/gaPageView?startDate=2018-04-24&endDate=${today}&metrics=ga:pageviews`
    )
    const { data: { data } = {} } = await rawData.json()
    setAllTimeStats(data.totalsForAllResults['ga:pageviews']);
  }

  const fetchGATodayData = async () => {
    const rawData = await fetch(
      `https://us-central1-kbtechspace-8907.cloudfunctions.net/gaPageView?startDate=${today}&endDate=${today}&metrics=ga:pageviews`
    )
    const { data: { data } = {} } = await rawData.json()
    console.log('today:', data.totalsForAllResults['ga:pageviews']);
    setTodaytats(data.totalsForAllResults['ga:pageviews']);
  }

  return (
    <Layout pathname={'/dashboard/'}>
      <section className="kbts-page-dashboard">
        <PageHeader title="Dashboard" logo="fas fa-tachometer-alt" />
        <div className="kbts-page-dashboard-ribbon">
          <Ribbon title="Monitoring Myself" />
        </div>
        <section className="kbts-page-dashboard-service">
          <StatsCard name="All Time Views" count={allTimeStats} />
          <StatsCard name="Today Views" count={todayStats} />
        </section>
      </section>
    </Layout>
  )
}

export default Dashboard

export const query = graphql`
  query serviceDashboard {
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
