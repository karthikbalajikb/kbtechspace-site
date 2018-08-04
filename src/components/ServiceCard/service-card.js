import React from 'react'

import logo from '../../../assets/icons/icon-02.png'
import mobileLogo from '../../../assets/icons/mobile_in_hand.png';

import './service-card.scss'

const ServiceCard = ({data}) => (
  <article className="kbts-servicecard">
    <div className="kbts-servicecard-img">
      <img src={require(`../../../assets/icons/${data.icon}`)} />
    </div>
    <div className="kbts-servicecard-title">{data.title}</div>
    <div className="kbts-servicecard-desc">
      {data.description}
    </div>
  </article>
)

export default ServiceCard
