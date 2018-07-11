import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import NameCard from '../components/NameCard/name-card'

const IndexPage = ({ data }) => (
  <div>
    <Img sizes={data.headerImage.sizes} className="header-image" />
    <NameCard text_1="Hi, I am" text_2="Karthik Balaji" text_3="I am a Javascript enthusiast, I am a Blogger" />
  </div>
)

export default IndexPage

export const query = graphql`
  query MainWallPaperQuery {
    headerImage: imageSharp(id: { regex: "/tech-wallpapers/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
