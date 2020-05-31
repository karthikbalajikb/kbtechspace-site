import React from 'react'
import styled from 'styled-components'

import './name-card.scss'
import TextTyping from '../TextTyping/text-typing'

const NameCard = props => (
  <div className="kbts-name-card">
    <p className="kbts-name-card-text-1">{props.text_1}</p>
    <p className="kbts-name-card-text-2 animated rubberBand">
      <Angle size="2rem">&lt;</Angle> {props.text_2} <Angle size="2rem">/&gt;</Angle>
    </p>
    <p className="kbts-name-card-text-4 animated rubberBand">
      <Angle size="1rem">&lt;</Angle>
      {props.text_4}
      <Angle size="1rem">/&gt;</Angle>
    </p>
    <TextTyping text_3={props.text_3} />
  </div>
)

export default NameCard

const Angle = styled.p`
  color: ${({ theme }) => `${theme.primary.main}`};
  font-size: ${({ size }) => `${size}`};
  font-weight: 900;
  margin: 0 10px;
`
