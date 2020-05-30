import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'
import moment from 'moment'
import truncate from 'lodash/truncate'

import PostLink from '../PostLink/post-link'
import './Card.scss'

const THUMBNAIL_HEIGHT = 200

const Card = ({
  id,
  origin,
  authorImage,
  authorName,
  title,
  thumbnail,
  publishedDate,
  link,
  siteLogo,
  readTime
}) => (
  <Container>
    <ImageSection>
      <ImageWrapper>
        {siteLogo ? (
          <Img
            sizes={siteLogo}
            alt="KBTechSpace.com"
            style={{ height: 'inherit' }}
          />
        ) : (
          <StyledImage src={thumbnail} alt="test" />
        )}
      </ImageWrapper>
      <PostLink key={id} origin={origin} link={link} />
    </ImageSection>
    <AuthorLogo>
      <Img
        sizes={authorImage}
        alt="karthik balaji"
        style={{ height: 'inherit', borderRadius: '60px' }}
      />
    </AuthorLogo>
    <InfoSection>
      <AuthorName>{authorName}</AuthorName>
      <PostTitle>{truncate(title, { length: 60 })}</PostTitle>
        <PostDate>{moment(publishedDate).format('ll')} • {readTime} read</PostDate>
    </InfoSection>
  </Container>
)

Card.propTypes = {
  id: PropTypes.number.isRequired,
  origin: PropTypes.oneOf(['medium', 'kb-techspace', 'pulse']).isRequired,
  authorImage: PropTypes.any.isRequired,
  authorName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  updatedDate: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  html: PropTypes.any,
  slug: PropTypes.string.isRequired,
  siteLogo: PropTypes.any,
  readTime: PropTypes.string,
}

Card.defaultProps = {
  siteLogo: null,
  html: null,
  readTime: null,
}

export default Card

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  position: relative;
  box-shadow: 1px 0px 19px 5px #eef2f7;

  &:hover {
    box-shadow: 0px 0px 16px 6px #e1e6e8
  }
`

const ImageSection = styled.div`
  display: grid;
  height: ${() => `${THUMBNAIL_HEIGHT}px`};
  max-height: ${() => `${THUMBNAIL_HEIGHT}px`};
  background-color: white;
  border-bottom: 1px solid white;
`

const ImageWrapper = styled.div`
  height: ${() => `${THUMBNAIL_HEIGHT}px`};
  grid-column: 1;
  grid-row: 1;
`

const StyledImage = styled.img`
  height: ${() => `${THUMBNAIL_HEIGHT}px`};
  object-fit: contain;
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
  display: grid;
  grid-template-rows: 3rem auto auto auto;
  background-color: ${({ theme }) => `${theme.primary.main}`};
`

const AuthorName = styled.div`
  font-size: 13px;
  color: #999;
  grid-row: 2;
`

const PostTitle = styled.div`
  padding: 20px 0px 4px 0px;
  font-weight: bold;
  grid-row: 3;
`

const PostDate = styled.div`
  font-size: 13px;
  color: #999;
  grid-row: 4;
`
