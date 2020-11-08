import React from 'react'
import styled from 'styled-components'

const THUMBNAIL_HEIGHT = 100
const CARD_HEIGHT = 150

const HorizontalCard = ({ title, subTitle, description, logo, linkUrl }) => (
  <Container>
    <ImageWrapper>
      <StyledImage src={require(`../../../assets/logos/${logo}`)} alt={title} />
    </ImageWrapper>
    <CardTitle>{title}</CardTitle>
    <CardSubTitle>{subTitle}</CardSubTitle>
    <CardDescription>{description} <a href={linkUrl} target="_blank">see more</a></CardDescription>
  </Container>
)

export default HorizontalCard

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 20px 20px auto;
  grid-column-gap: 24px;
  justify-items: flex-start;
  padding: 20px;
  height: ${() => `${CARD_HEIGHT}px`};
  box-shadow: ${({ theme }) => `${theme.boxShadow.md}`};
  background-color: ${({ theme }) => `${theme.surface.main}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.default}`};

  @media only screen and (max-width: 760px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    height: auto;
  }
`

const ImageWrapper = styled.div`
  grid-row: 1/4;
  grid-column: 1;
  @media only screen and (max-width: 760px) {
    grid-row: 1;
  }
`

const StyledImage = styled.img`
  height: ${() => `${THUMBNAIL_HEIGHT}px`};
  width: ${() => `${THUMBNAIL_HEIGHT}px`};
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: white;
  @media only screen and (max-width: 760px) {
    width: 100%;
  }
`

const CardTitle = styled.div`
  grid-row: 1;
  grid-column: 2;
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => `${theme.grayScale[600]}`};
  @media only screen and (max-width: 760px) {
    grid-row: 2;
    grid-column: 1;
  }
`

const CardSubTitle = styled.div`
  grid-row: 2;
  grid-column: 2;
  font-size: 13px;
  color: ${({ theme }) => `${theme.grayScale[500]}`};
  @media only screen and (max-width: 760px) {
    grid-row: 3;
    grid-column: 1;
  }
`

const CardDescription = styled.div`
  grid-row: 3;
  grid-column: 2;
  align-self: center;
  font-size: 13px;
  color: ${({ theme }) => `${theme.grayScale[600]}`};
  text-align: left;
  @media only screen and (max-width: 760px) {
    grid-row: 4;
    grid-column: 1;
  }
`
