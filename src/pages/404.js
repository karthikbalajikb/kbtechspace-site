import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const NotFoundPage = ({ data }) => (
  <Container>
    <Img sizes={data.notFoundImage.sizes} />
    <p style={{ marginTop: 20 }}>
      If you liked to go in a right way ... Click the link {' '}
      <a href="https://kbtechspace.com">kbtechspace</a>
    </p>
  </Container>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundQuery {
    notFoundImage: imageSharp(fluid: { originalName: { regex: "/404fuck/" } }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

const Container = styled.div`
  width: 50%;
  height: 50%;
  margin: auto;
`
