import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

const IndexPage = ({data}) => (
  <div>
   <Img sizes={data.headerImage.sizes} className="header-image"/>
  </div>
)

export default IndexPage

export const query = graphql`
  query MainWallPaperQuery {
    headerImage: imageSharp(id: { regex: "/tech-wallpapers/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
