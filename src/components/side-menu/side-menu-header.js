import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const SideMenuHeader = ({ logo }) => (
  <Container>
    <Img style={{ borderRadius: '.55rem' }} sizes={logo} alt="KBTechSpace.com" />
  </Container>
)

export default SideMenuHeader

const Container = styled.div`
  padding: 10px;
  box-shadow: ${({ theme }) => `${theme.boxShadow.md}`};
  border-radius: 0.55rem;
  border: 1px solid #cfcfcf;
`
