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
  readTime,
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
      <PostDate>
        {moment(publishedDate).format('ll')} • {readTime} read
      </PostDate>
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
  box-shadow: ${({ theme }) => `${theme.boxShadow.md}`};
  padding: 19px;
  border-radius: 0.55rem;
  border: 1px solid #cfcfcf5e;

  &:hover{
    background: linear-gradient(145deg, #cfd0d4, #f6f7fd);
    box-shadow: ${({ theme }) => `${theme.boxShadow.mdActive}`};
  }
`

const ImageSection = styled.div`
  display: grid;
  height: ${() => `${THUMBNAIL_HEIGHT}px`};
  max-height: ${() => `${THUMBNAIL_HEIGHT}px`};
  background-color: white;
  border-bottom: 1px solid white;
  border-radius: 0.55rem;
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
  border: 3px solid white;
  border-radius: 39px;
  position: absolute;
  top: 181px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${({ theme }) => `${theme.boxShadow.inner}`};
  background-color: ${({ theme }) => `${theme.surface.main}`};;
`

const InfoSection = styled.div`
  display: grid;
  grid-template-rows: 3rem auto auto auto;
  background-color: ${({ theme }) => `${theme.surface.main}`};;
`

const AuthorName = styled.div`
  font-size: 13px;
  color: #999;
  grid-row: 2;
`

const PostTitle = styled.div`
  font-weight: bold;
  grid-row: 3;
  color: ${({ theme }) => `${theme.secondary.main}`};
  font-size: 15px;
  padding: 0 15px;
`

const PostDate = styled.div`
  font-size: 13px;
  color: #999;
  grid-row: 4;
`
