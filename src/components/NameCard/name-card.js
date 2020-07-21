import React from 'react'
import styled from 'styled-components'

import './name-card.scss'
import '../../styles/animation.scss'

const NameCard = props => (
  <div className="kbts-name-card">
    <p className="kbts-name-card-text-1 animated pulse">{props.text_1}</p>
    <p className="kbts-name-card-text-2 animated expand">
      <Angle size="2.5rem">&lt;</Angle>
      <Letter size="2.5rem">K</Letter> arthik&nbsp;
      <Letter size="2.5rem">B</Letter> alaji
      <Angle size="2.5rem">/&gt;</Angle>
    </p>
    <p className="kbts-name-card-text-4 animated expand">
      <Angle size="1rem">&lt;</Angle>
      {props.text_3}
      <Angle size="1rem">/&gt;</Angle>
    </p>
    <p className="kbts-name-card-text-4 animated expand">
      <Angle size="1rem">&lt;</Angle>
      {props.text_4}
      <Angle size="1rem">/&gt;</Angle>
    </p>
    <p className="kbts-name-card-text-4 animated expand">
      <Angle size="1rem">&lt;</Angle>
      {props.text_5}
      <Angle size="1rem">/&gt;</Angle>
    </p>
  </div>
)

export default NameCard

const Angle = styled.p`
  color: ${({ theme }) => `${theme.primary.dark}`};
  font-size: ${({ size }) => `${size}`};
  font-weight: 900;
  margin: 0 10px;
`

const Letter = styled.p`
  color: ${({ theme }) => `${theme.primary.dark}`};
  font-size: ${({ size }) => `${size}`};
  font-weight: 900;
  margin-bottom: 0;
`