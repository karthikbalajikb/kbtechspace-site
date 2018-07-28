import React from 'react'
import Img from "gatsby-image";

import PostLink from '../PostLink/post-link'
import './Card.scss'

const Card = (props) => (
  <article className="kbts-card">
    <div className="kbts-card-image">
      {/* <img src="" alt="test" /> */}
      <Img sizes={props.logo} alt="KBTechSpace.com" />
      <div className="kbts-card-image-link">
      <PostLink key={props.key} post={props.post} />
      </div>
    </div>
    <div className="kbts-card-title">
      <span className="kbts-card-title-date"><span>24</span>July</span>
      <p>A place to create and share slambook online</p>
    </div>
  </article>
)

export default Card
