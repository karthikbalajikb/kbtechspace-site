import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../Button'

import { Image, Flexbox, Anchor } from '../../styles/styled'
import handShakeSVG from '../../../assets/icons/handShake.svg'

const SayHelloCard = ({ icon, label, twitter, linkedIn }) => (
  <Container alignItems="center">
    <Image src={icon} alt="handshake" />
    <Flexbox flexDirection="column" alignItems="center" width={1}>
      <Header>Thanks for subscribing </Header>
      <SubText>
        Say hello on
        <Anchor href="https://twitter.com/karthikbalaji99" target="_blank">
          Twitter
        </Anchor> or{' '}
        <Anchor href="https://www.linkedin.com/in/karthikbalaji9294/" target="_blank">
          LinkedIn
        </Anchor>
      </SubText>
    </Flexbox>
  </Container>
)

SayHelloCard.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
}

SayHelloCard.defaultProps = {
  icon: handShakeSVG,
}

export default SayHelloCard

const Container = styled(Flexbox)`
  background-color: ${({ theme }) => `${theme.surface.main}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.default}`};
  padding: 30px;
  box-shadow: ${({ theme }) => `${theme.boxShadow.md}`};
  @media(max-width: 760px) {
    flex-direction: column;
  }
`

const Header = styled.div`
  font-size: 24px;
  letter-spacing: 0.46px;
  color: ${({ theme }) => `${theme.onPrimary.dark}`};
`

const SubText = styled.div`
  font-size: 20px;
  letter-spacing: 0.46px;
  color: ${({ theme }) => `${theme.secondary.main}`};
`
