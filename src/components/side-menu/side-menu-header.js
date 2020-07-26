import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const SideMenuHeader = ({ logo }) => (
  <Container>
    <ImgWrapper>
      <Img style={{ borderRadius: '1rem' }} sizes={logo} alt="KBTechSpace.com" />
    </ImgWrapper>
  </Container>
)

export default SideMenuHeader

const Container = styled.div`
  padding: 6px;
  margin-top: 10px;
  box-shadow: ${({ theme }) => `${theme.boxShadow.sm}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.md}`};
`

const ImgWrapper = styled.div`
  padding: 13px;
  box-shadow: ${({ theme }) => `${theme.boxShadow.inner}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.md}`};
`;