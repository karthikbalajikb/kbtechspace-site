import React from 'react'
import Img from 'gatsby-image'

import PostLink from '../PostLink/post-link'
import './Card.scss'

const getDay = (d) => {
    const dateArr = d.split(' ');
    const date = dateArr[1].substr(0,2);
    return date;
}

const getMonth = (d) => {
  const dateArr = d.split(' ');
  const month = dateArr[0].substr(0,3);
  return month;
}

const Card = props => (
  <article className="kbts-card">
    <div className="kbts-card-image">
      {props.post.frontmatter.banner === '' ||
      props.post.frontmatter.banner === null ? (
        <Img sizes={props.logo} alt="KBTechSpace.com" />
      ) : (
        <img src={props.post.frontmatter.banner} alt="test" />
      )}

      {/* <Img sizes={props.logo} alt="KBTechSpace.com" /> */}
      <div className="kbts-card-image-link">
        <PostLink key={props.key} post={props.post} />
      </div>
    </div>
    <div className="kbts-card-title">
      <span className="kbts-card-title-date">
        <span>{getDay(props.post.frontmatter.date)}</span>{getMonth(props.post.frontmatter.date)}
      </span>
      <p>{props.post.frontmatter.title}</p>
    </div>
  </article>
)

export default Card
