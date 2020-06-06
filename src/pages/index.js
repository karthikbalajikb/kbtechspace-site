import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

import wallpaperSVG from '../../assets/wallpaper-illustration.svg'
import Layout from '../components'
import NameCard from '../components/NameCard/name-card'
import TextTyping from '../components/TextTyping/text-typing'

const IndexPage = () => (
  <Layout pathname={'//'}>
    <Container>
      <NameCard
        text_1="Hey, I'm"
        text_3="Frontend Engineer"
        text_4="UI/UX Enthusiast"
        text_5="Tech Blogger"
      />
      <StyledWallpaper src={wallpaperSVG} />
      <TextTyping text_3="Hitting the keyboard hard, Until the magic happens" />
    </Container>
  </Layout>
)

export default IndexPage

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 0px 70px;
  grid-column-gap: 15%;

  @media(max-width: 760px) {
    grid-template-columns: auto;
    padding: 0px 10px;
  }
`

const StyledWallpaper = styled.img`
  width: 74vw;
  height: calc(100vh - 100px);
  margin: auto;

  @media(max-width: 760px) {
    height: initial;
  }
`
