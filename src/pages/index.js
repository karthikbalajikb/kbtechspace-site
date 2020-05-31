import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

import wallpaperSVG from '../../assets/wallpaper-illustration.svg'
import Layout from '../components'
import NameCard from '../components/NameCard/name-card'

const IndexPage = () => (
  <Layout pathname={'//'}>
    <Container>
      <StyledWallpaper src={wallpaperSVG} />
      <NameCard
        text_1="Hey, I'm"
        text_2="Karthik Balaji"
        text_3="Hitting the keyboard hard, Until the magic happens"
        text_4="FRONT-END ENGINEER | UI/UX ENTHUSIAST | TECH BLOGGER"
      />
      <Gradient />
    </Container>
  </Layout>
)

export default IndexPage

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 200px;
`

const Gradient = styled.div`
  grid-row: 2;
  grid-column: 1;
  background: linear-gradient(rgba(0,0,0,0),rgba(28, 38, 43, 0.12))
`

const StyledWallpaper = styled.img`
  width: 74vw;
  height: calc(100vh - 200px);
  padding-top: 100px;
  margin: auto;
  margin-bottom: 0px;
`
