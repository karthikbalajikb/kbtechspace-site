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
  color: ${({ theme }) => `${theme.secondary.main}`};;
  background-color: ${({ theme }) => `${theme.surface.main}`};
  border-radius: 50px;
  cursor: pointer;
  box-shadow: ${({ theme }) => `${theme.boxShadow.md}`};

  :hover {
    background: linear-gradient(145deg, #cfd0d4, #f6f7fd);
    box-shadow: ${({ theme }) => `${theme.boxShadow.mdActive}`};
  }

  :active {
    background: linear-gradient(20deg, #cfd0d4, #f6f7fd);
    box-shadow: ${({ theme }) => `${theme.boxShadow.mdActive}`};
  }
`
