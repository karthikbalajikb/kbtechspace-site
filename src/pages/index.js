import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components';

import Layout from '../components'
import NameCard from '../components/NameCard/name-card'

const IndexPage = ({ data }) => (
  <Layout pathname={'//'}>
    <div>
      <Img sizes={data.headerImage.sizes} className="header-image" />
      <NameCard
        text_1="Hey, I'm"
        text_2="Karthik Balaji"
        text_3="Hitting the keyboard hard, Until the magic happens"
        text_4="FRONT-END ENGINEER | UI/UX ENTHUSIAST | TECH BLOGGER"
      />
      <Gradient />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MainWallPaperQuery {
    headerImage: imageSharp(
      fluid: { originalName: { regex: "/kb-wallpaper/" } }
    ) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
const Gradient = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 100px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.34));
`;