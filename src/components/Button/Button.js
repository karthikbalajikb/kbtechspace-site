import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ label, width, height, onClick }) => (
  <StyledButton width={width} height={height} onClick={onClick}>
    {label}
  </StyledButton>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  label: PropTypes.string.isRequired,
  width: '120px',
  height: '37px',
  onClick: PropTypes.func.isRequired,
}

export default Button

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-size: 13px;
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
  cursor: pointer;
  border-radius: ${({ theme }) => `${theme.borderRadius.rounded}`};
  background: ${({ theme }) =>
    `linear-gradient(145deg, ${theme.hoverSurface.light} , ${theme.hoverSurface.main})`};
  box-shadow: ${({ theme }) => `${theme.boxShadow.smActive}`};
  color: ${({ theme }) => `${theme.onSurface.main}`};

  :hover {
    color: ${({ theme }) => `${theme.secondary.main}`};
  }

  :active {
    background: ${({ theme }) =>
      `linear-gradient(20deg, ${theme.hoverSurface.light} , ${theme.hoverSurface.main})`};
    box-shadow: ${({ theme }) => `${theme.boxShadow.smActive}`};
  }
`
