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
  color: ${({ theme }) => `${theme.onSurface.main}`};
  background-color: ${({ theme }) => `${theme.surface.main}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.rounded}`};
  cursor: pointer;
  box-shadow: ${({ theme }) => `${theme.boxShadow.sm}`};

  :hover {
    background: ${({ theme }) =>  `linear-gradient(145deg, ${theme.hoverSurface.main} , ${theme.surface.main})` };
    box-shadow: ${({ theme }) => `${theme.boxShadow.smActive}`};
    color: ${({ theme }) => `${theme.secondary.main}`};
  }

  :active {
    background: ${({ theme }) =>  `linear-gradient(20deg, ${theme.hoverSurface.main} , ${theme.surface.main})` };
    box-shadow: ${({ theme }) => `${theme.boxShadow.smActive}`};
  }
`
