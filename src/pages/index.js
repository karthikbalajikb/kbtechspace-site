import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

import wallpaperSVG from '../../assets/development-animate.svg'
import Layout from '../components/Layout/Layout'
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
      <WallpaperWrapper className="animated opening">
        <StyledWallpaper src={wallpaperSVG} alt="kb-wallpaper" />
      </WallpaperWrapper>
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

  @media (max-width: 760px) {
    grid-template-columns: auto;
    padding: 0px 10px;
  }
`

const WallpaperWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  padding: 24px 24px 0px 24px;
  border-radius: 42% 70% 67% 9% / 6% 54% 96% 35%;
  width: 100%;
  margin: auto;

  @media (max-width: 760px) {
    width: 80%;
  }
`

const StyledWallpaper = styled.img`
  border-radius: 42% 70% 67% 9% / 6% 54% 96% 35%;
  background-color: ${({ theme }) => `${theme.primary.dark}`};
  object-fit: cover;
  min-height: 270px;
  height: 31rem;
  max-height: 500px;
  @media (max-width: 760px) {
    height: initial;
  }
`
