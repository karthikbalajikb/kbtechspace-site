import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import './post-link.scss'

const OPEN_EXTERNAL = ['medium']

const PostLink = ({ origin, link }) => (
  <Container>
    {OPEN_EXTERNAL.includes(origin) ? (
      <a className="kbts-post-link" href={link} target="_blank" />
    ) : (
      <Link to={link} className="kbts-post-link"></Link>
    )}
  </Container>
)

PostLink.propTypes = {
  origin: PropTypes.oneOf(['medium', 'kb-techspace', 'pulse']).isRequired,
  link: PropTypes.string.isRequired,
}

export default PostLink

const Container = styled.div`
  grid-column: 1;
  grid-row: 1;
`
