import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ label, onClick }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
export default Button

const StyledButton = styled.button`
  border: none;
  outline: none;
  font-size: 13px;
  width: 120px;
  height: 37px;
  cursor: pointer;
  border-radius: ${({ theme }) => `${theme.borderRadius.rounded}`};
  background: ${({ theme }) =>  `linear-gradient(145deg, ${theme.hoverSurface.light} , ${theme.hoverSurface.main})` };
  box-shadow: ${({ theme }) => `${theme.boxShadow.smActive}`};
  color: ${({ theme }) => `${theme.onSurface.main}`};

  :hover {
    color: ${({ theme }) => `${theme.secondary.main}`};
  }

  :active {
    background: ${({ theme }) =>  `linear-gradient(20deg, ${theme.hoverSurface.light} , ${theme.hoverSurface.main})` };
    box-shadow: ${({ theme }) => `${theme.boxShadow.smActive}`};
  }
`
