import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import PostLink from '../PostLink/post-link'
import './Card.scss'

const getDay = d => {
  const dateArr = d.split(' ')
  const date = dateArr[1].substr(0, 2)
  return date
}

const getMonth = d => {
  const dateArr = d.split(' ')
  const month = dateArr[0].substr(0, 3)
  return month
}

// const Card = props => (
//   <article className="kbts-card">
//     <div className="kbts-card-image">
//       {props.post.frontmatter.banner === '' ||
//       props.post.frontmatter.banner === null ? (
//         <Img sizes={props.logo} alt="KBTechSpace.com" />
//       ) : (
//         <img src={props.post.frontmatter.banner} alt="test" />
//       )}

//       {/* <Img sizes={props.logo} alt="KBTechSpace.com" /> */}
//       <div className="kbts-card-image-link">
//         <PostLink key={props.key} post={props.post} />
//       </div>
//     </div>
//     <div className="kbts-card-title">
//       <span className="kbts-card-title-date">
//         <span>{getDay(props.post.frontmatter.date)}</span>{getMonth(props.post.frontmatter.date)}
//       </span>
//       <p>{props.post.frontmatter.title}</p>
//     </div>
//   </article>
// )

const Card = props => (
  <Container>
    <ImageSection>
      {props.post.frontmatter.banner === '' ||
      props.post.frontmatter.banner === null ? (
        <Img
          sizes={props.logo}
          alt="KBTechSpace.com"
          style={{ height: 'inherit' }}
        />
      ) : (
        <img src={props.post.frontmatter.banner} alt="test" />
      )}
      <PostLink key={props.key} post={props.post} />
    </ImageSection>
    <AuthorLogo>
      <Img
        sizes={props.authorImage}
        alt="test"
        style={{ height: 'inherit', borderRadius: '60px' }}
      />
    </AuthorLogo>
    <InfoSection>
      <AuthorName>by Karthik Balaji</AuthorName>
      <PostTitle>{props.post.frontmatter.title}</PostTitle>
      <PostDate>{props.post.frontmatter.date}</PostDate>
    </InfoSection>
  </Container>
)

export default Card

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 4px 2px #e1e6e8;
  height: 365px;
  max-height: 400px;
  width: 345px;
  border-radius: 7px;

  &:hover {
    box-shadow: 0px 0px 4px 6px #e1e6e8;
  }
`

const ImageSection = styled.div`
  height: 200px;
  max-height: 200px;
  background-color: white;
  border-bottom: 1px solid white;
`

const AuthorLogo = styled.div`
  width: 70px;
  height: 70px;
  margin-left: 79px;
  border: 2px solid white;
  border-radius: 39px;
  position: absolute;
  top: 160px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

const InfoSection = styled.div`
  margin-top: 43px;
`

const AuthorName = styled.div`
  font-size: 13px;
  color: #999;
`

const PostTitle = styled.div`
  padding: 20px 0px 4px 0px;
  font-weight: bold;
`

const PostDate = styled.div`
  font-size: 13px;
  color: #999;
`
