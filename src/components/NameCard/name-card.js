import React from 'react'
import './name-card.scss';
import TextTyping from '../TextTyping/text-typing'

const NameCard = (props) => (
  <div className="kbts-name-card">
    <p className="kbts-name-card-text-1">{props.text_1}</p>
    <p className="kbts-name-card-text-2 animated rubberBand">{props.text_2}</p>
    <p className="kbts-name-card-text-4 animated rubberBand">{props.text_4}</p>
    <TextTyping text_3={props.text_3} />
  </div>
)

export default NameCard
