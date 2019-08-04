import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const SideMenuHeader = ({ logo }) => (
  <Container>
    <Img sizes={logo} alt="KBTechSpace.com" />
  </Container>
)

export default SideMenuHeader

const Container = styled.div`
  padding: 10px;
`
