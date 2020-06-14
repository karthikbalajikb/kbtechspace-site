import React from 'react'

import './service-card.scss'

const ServiceCard = ({data}) => (
  <article className="kbts-servicecard">
    <div className="kbts-servicecard-img">
      <img src={require(`../../../assets/icons/${data.icon}`)} alt={data.title} />
    </div>
    <div className="kbts-servicecard-title">{data.title}</div>
    <div className="kbts-servicecard-desc">
      {data.description}
    </div>
  </article>
)

export default ServiceCard
